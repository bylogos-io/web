"use client";

/**
 * Minimal framer-motion shim backed by anime.js v4. Covers the patterns this
 * codebase actually uses:
 *   - motion.<tag> + initial + animate (mount)
 *   - motion.<tag> + initial + whileInView + viewport.once + transition
 *   - motion.path + pathLength (SVG draw)
 *   - AnimatePresence as a transparent passthrough (mount-only animations stay)
 *
 * NOT supported: layoutId, drag/gesture, exit animations, useScroll. None are
 * load-bearing here. Replace direct callers if any new feature needs them.
 */
import {
    createElement,
    forwardRef,
    useEffect,
    useRef,
    type CSSProperties,
    type ReactNode,
    type RefObject,
} from "react";
import { animate, type AnimationParams } from "animejs";

const REDUCED = (): boolean =>
    typeof window !== "undefined" &&
    !!window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const MS = (v: number | undefined, fb: number) =>
    typeof v === "number" ? v * 1000 : fb;

const EASE = "cubicBezier(0.16, 1, 0.3, 1)";

type AnimVals = {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
    pathLength?: number;
    [k: string]: any;
};
type Transition = {
    duration?: number;
    delay?: number;
    ease?: string;
    repeat?: number | true;
};
type Viewport = { once?: boolean; amount?: number };

interface MotionProps {
    initial?: AnimVals | false;
    animate?: AnimVals;
    whileInView?: AnimVals;
    viewport?: Viewport;
    transition?: Transition;
    style?: CSSProperties;
    children?: ReactNode;
    [k: string]: any;
}

function applyInitialStyle(initial: AnimVals): CSSProperties {
    const { opacity, x = 0, y = 0, scale = 1, rotate = 0, pathLength } = initial;
    const transformParts: string[] = [];
    if (x !== 0 || y !== 0) transformParts.push(`translate3d(${x}px, ${y}px, 0)`);
    if (scale !== 1) transformParts.push(`scale(${scale})`);
    if (rotate !== 0) transformParts.push(`rotate(${rotate}deg)`);
    const out: CSSProperties = {};
    if (opacity != null) out.opacity = opacity;
    if (transformParts.length) out.transform = transformParts.join(" ");
    if (pathLength != null) {
        // Stroke-draw setup — pair with whileInView/animate pathLength=1.
        out.strokeDasharray = "1";
        out.strokeDashoffset = pathLength === 0 ? 1 : 0;
        // pathLength prop in framer is normalized 0..1; our mapping is below.
    }
    return out;
}

function buildAnimeTarget(target: AnimVals, transition?: Transition): AnimationParams {
    const params: AnimationParams = {
        duration: MS(transition?.duration, 600),
        delay: MS(transition?.delay, 0),
        ease: transition?.ease === "linear" ? "linear" : EASE,
    };
    if (typeof transition?.repeat === "number" || transition?.repeat === true) {
        (params as any).loop = transition.repeat === true ? true : transition.repeat;
    }
    if (target.opacity != null) (params as any).opacity = target.opacity;
    if (target.x != null) (params as any).translateX = target.x;
    if (target.y != null) (params as any).translateY = target.y;
    if (target.scale != null) (params as any).scale = target.scale;
    if (target.rotate != null) (params as any).rotate = target.rotate;
    return params;
}

function pathLengthAnimate(el: SVGPathElement, target: number, transition?: Transition) {
    const len = el.getTotalLength();
    el.style.strokeDasharray = `${len}`;
    el.style.strokeDashoffset = `${len * (1 - (target ?? 1))}`;
    animate(el as any, {
        strokeDashoffset: len * (1 - (target ?? 1)),
        duration: MS(transition?.duration, 1500),
        delay: MS(transition?.delay, 0),
        ease: EASE,
    } as any);
}

const HAS_TRANSFORM = (v: AnimVals) =>
    v && (v.x != null || v.y != null || v.scale != null || v.rotate != null);

function makeMotion(tag: string) {
    const Component = forwardRef<any, MotionProps>(function MotionComponent(props, fwd) {
        const {
            initial,
            animate: animateTo,
            whileInView,
            viewport,
            transition,
            style,
            children,
            ...rest
        } = props;
        const localRef = useRef<HTMLElement | null>(null);
        const setRef = (el: any) => {
            localRef.current = el;
            if (typeof fwd === "function") fwd(el);
            else if (fwd) (fwd as RefObject<any>).current = el;
        };

        const initialStyle =
            initial && initial !== false ? applyInitialStyle(initial) : undefined;

        useEffect(() => {
            const el = localRef.current;
            if (!el) return;
            const reduced = REDUCED();

            const playPathDraw = (target: AnimVals) => {
                if (target.pathLength != null && el.tagName === "path") {
                    pathLengthAnimate(el as unknown as SVGPathElement, target.pathLength, transition);
                    return true;
                }
                return false;
            };

            const playTo = (target: AnimVals) => {
                if (reduced) {
                    if (target.opacity != null) (el.style as any).opacity = String(target.opacity);
                    if (HAS_TRANSFORM(target)) (el.style as any).transform = "none";
                    return;
                }
                if (playPathDraw(target)) return;
                animate(el as any, buildAnimeTarget(target, transition));
            };

            // animate-on-mount
            if (animateTo && !whileInView) {
                playTo(animateTo);
                return;
            }

            // whileInView gated
            if (whileInView) {
                const once = viewport?.once !== false;
                const io = new IntersectionObserver(
                    ([entry]) => {
                        if (!entry.isIntersecting) return;
                        playTo(whileInView);
                        if (once) io.unobserve(el);
                    },
                    {
                        threshold: viewport?.amount ?? 0.1,
                        rootMargin: "0px 0px -10% 0px",
                    },
                );
                io.observe(el);
                return () => io.disconnect();
            }
        }, [animateTo, whileInView, viewport?.once, viewport?.amount, transition?.duration, transition?.delay, transition?.repeat, transition?.ease]);

        const finalStyle: CSSProperties = {
            ...(initialStyle ?? {}),
            ...(style ?? {}),
        };
        if (initialStyle) (finalStyle as any).willChange = "opacity, transform";

        return createElement(tag, { ref: setRef, style: finalStyle, ...rest }, children);
    });
    Component.displayName = `motion.${tag}`;
    return Component;
}

const tags = [
    "div",
    "span",
    "section",
    "article",
    "header",
    "footer",
    "main",
    "nav",
    "ul",
    "li",
    "a",
    "button",
    "form",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "img",
    "svg",
    "path",
    "g",
    "circle",
    "rect",
    "line",
] as const;

type MotionTag = (typeof tags)[number];

export const motion: Record<MotionTag, ReturnType<typeof makeMotion>> = tags.reduce(
    (acc, t) => {
        (acc as any)[t] = makeMotion(t);
        return acc;
    },
    {} as Record<MotionTag, ReturnType<typeof makeMotion>>,
);

/**
 * AnimatePresence: exit animations are not implemented. Children render as-is
 * so mount/whileInView animations still play. Acceptable for this site since
 * existing usage is mode="wait" + key swap (e.g. carousel slide) — visually we
 * lose the exit fade but the swap still works.
 */
export function AnimatePresence({
    children,
}: {
    mode?: "wait" | "sync" | "popLayout";
    initial?: boolean;
    custom?: any;
    children: ReactNode;
}) {
    return <>{children}</>;
}

/**
 * Stubs for useScroll / useMotionValueEvent — call sites that rely on these
 * (PlatformProcess) need real DOM scroll listeners and are migrated separately.
 */

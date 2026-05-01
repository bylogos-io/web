"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Renders children only after the main thread is idle (or after a fallback
 * timeout). Pairs with `next/dynamic({ ssr: false })` to defer above-fold heavy
 * widgets (3D, charts) past LCP without waiting for them to scroll into view.
 */
export function IdleMount({
    children,
    placeholder,
    fallbackMs = 1500,
}: {
    children: ReactNode;
    placeholder?: ReactNode;
    fallbackMs?: number;
}) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        let cancelled = false;
        const fire = () => {
            if (!cancelled) setShow(true);
        };
        const ric = (window as any).requestIdleCallback;
        const cic = (window as any).cancelIdleCallback;
        if (typeof ric === "function") {
            const handle = ric(fire, { timeout: fallbackMs });
            return () => {
                cancelled = true;
                if (typeof cic === "function") cic(handle);
            };
        }
        const t = window.setTimeout(fire, fallbackMs);
        return () => {
            cancelled = true;
            window.clearTimeout(t);
        };
    }, [fallbackMs]);

    return <>{show ? children : placeholder}</>;
}

"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders children only after the placeholder enters the viewport. Pairs with
 * `next/dynamic({ ssr: false })` so heavy bundles defer until scroll-near.
 */
export function LazyOnView({
    children,
    rootMargin = "200px",
    placeholder,
}: {
    children: ReactNode;
    rootMargin?: string;
    placeholder?: ReactNode;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!ref.current || show) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                    io.disconnect();
                }
            },
            { rootMargin },
        );
        io.observe(ref.current);
        return () => io.disconnect();
    }, [rootMargin, show]);

    return <div ref={ref}>{show ? children : placeholder}</div>;
}

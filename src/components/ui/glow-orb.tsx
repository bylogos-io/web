'use client';

import { useEffect, useState } from 'react';

interface GlowOrbProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export function GlowOrb({ containerRef }: GlowOrbProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPos({ x, y });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef]);

  return (
    <div
      className="pointer-events-none select-none absolute z-10 w-96 h-96 rounded-full bg-primary/15 blur-3xl transition-transform duration-1000"
      style={{
        left: pos.x - 192,
        top: pos.y - 192,
      }}
    />
  );
}

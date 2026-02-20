'use client'
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const click = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150); // vuelve al tamaño normal en 150ms
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', click);
    
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', click);
    };
  }, []);

  return (
    <div
      className={`
        fixed z-[1000] pointer-events-none w-4 h-4 bg-foreground/30 border border-foreground/60 rounded-full
        transition-transform duration-150 ease-out
        ${clicked ? 'scale-75' : 'scale-100'}
      `}
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%)`,
      }}
    />
  );
}

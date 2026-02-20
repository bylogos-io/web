"use client";

import * as React from "react";
import { cn } from "./utils";

export interface ScrollAreaProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal" | "both";
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, children, orientation = "vertical", ...props }, ref) => {
    const overflow =
      orientation === "vertical"
        ? "overflow-y-auto overflow-x-hidden"
        : orientation === "horizontal"
        ? "overflow-x-auto overflow-y-hidden"
        : "overflow-auto";

    return (
      <div
        ref={ref}
        data-slot="scroll-area"
        className={cn(
          "relative rounded-inherit",
          "scrollarea",           // clase para estilos de scrollbar (ver CSS abajo)
          overflow,
          className
        )}
        role="region"
        {...props}
      >
        <div
          data-slot="scroll-area-viewport"
          className={cn(
            "size-full rounded-[inherit] outline-none",
            "transition-[color,box-shadow]",
            "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);
ScrollArea.displayName = "ScrollArea";

/**
 * Mantengo el símbolo público para no romper imports existentes.
 * No hace falta con scrollbar nativo; si quieres, puedes usarlo para
 * pasar clases extra al contenedor en el futuro.
 */
export interface ScrollBarProps {
  className?: string;
  orientation?: "vertical" | "horizontal";
}
const ScrollBar: React.FC<ScrollBarProps> = () => null;

export { ScrollArea, ScrollBar };

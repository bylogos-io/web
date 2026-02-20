import { motion } from "framer-motion";
import { AnimatedBeam } from "./ui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { Cloud, Monitor, RadioReceiver, RadioTower, Server, Smartphone, User, Radio } from "lucide-react";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cn("z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]", className)}>
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dev1Ref = useRef<HTMLDivElement>(null);
  const dev2Ref = useRef<HTMLDivElement>(null);
  const dev3Ref = useRef<HTMLDivElement>(null);
  const serverRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const pcRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative flex h-[400px] w-full w-1/2 items-center justify-center overflow-hidden p-10 -mt-10" ref={containerRef}>
      <div className="flex size-full max-h-[400px] max-w-full flex-col items-stretch justify-between gap-10 0 bg-background p-5 rounded-md border-1 px-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={dev1Ref} className="bg-sidebar stroke-primary">
            <Radio className="stroke-primary" />
          </Circle>
          <Circle ref={mobileRef} className="bg-sidebar stroke-primary">
            <Smartphone className="stroke-primary" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={dev2Ref} className="bg-sidebar stroke-primary">
            <RadioTower className="stroke-primary" />
          </Circle>
          <Circle ref={serverRef} className="bg-sidebar stroke-primary size-16">
            <Server className="stroke-primary" />
          </Circle>
          <Circle ref={cloudRef} className="bg-sidebar stroke-primary size-16">
            <Cloud className="stroke-primary" />
          </Circle>
          <Circle ref={userRef} className="bg-sidebar stroke-primary">
            <User className="stroke-primary" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={dev3Ref} className="bg-sidebar stroke-primary">
            <RadioReceiver className="stroke-primary" />
          </Circle>
          <Circle ref={pcRef} className="bg-sidebar stroke-primary">
            <Monitor className="stroke-primary" />
          </Circle>
        </div>
      </div>
      <AnimatedBeam containerRef={containerRef} fromRef={dev1Ref} toRef={serverRef} curvature={-75} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={dev2Ref} toRef={serverRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={dev3Ref} toRef={serverRef} curvature={75} endYOffset={10} />

      <AnimatedBeam containerRef={containerRef} fromRef={serverRef} toRef={cloudRef} duration={5} delay={1} />

      <AnimatedBeam containerRef={containerRef} fromRef={cloudRef} toRef={mobileRef} curvature={90} duration={5} delay={1} />
      <AnimatedBeam containerRef={containerRef} fromRef={cloudRef} toRef={pcRef} curvature={-90} duration={5} delay={1} />
      <AnimatedBeam containerRef={containerRef} fromRef={cloudRef} toRef={userRef} duration={5} delay={1} />
    </div>
  );
}
export function Arch() {
  return (
    <section className="py-24 bg-secondary/30 overflow-hidden" id="features">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent text-disabled">Flujo de</span> <span className="text-primary text-disabled">Procesamiento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-disabled">Nuestra arquitectura de procesamiento en el borde permite manejar los datos de manera inteligente.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center flex items-center justify-center relative p-5">
          <AnimatedBeamDemo />
        </motion.div>
      </div>
    </section>
  );
}

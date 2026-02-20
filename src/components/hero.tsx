"use client";

import { motion } from "framer-motion";

//import { LightRays } from "@/components/ui/light-rays";
import { BorderBeam } from "@/components/ui/border-beam";
import { Safari } from "./ui/safari";
import demoImage from "@public/demo.png";
import { BlurFade } from "./ui/blur-fade";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {
        //<LightRays color="#e16e0940" count={9} blur={40} speed={3} style={{ transform: "rotate(180deg)" }} />
      }
      <div className="container mx-auto px-6 relative z-20 mt-30">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main title */}
          <BlurFade inView>
            <div className="flex justify-center items-center gap-2 text-sm text-primary font-medium mb-4 text-disabled">Procesos inteligentes, industria eficiente.</div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-5xl md:text-7xl mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent text-disabled">Logos es la nueva manera de eficiencia </span>
              <span className="text-primary text-disabled">industrial</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-disabled">
              La mejor integración <strong className="text-primary">AIIoT</strong> para optimización de procesos industriales.
            </p>
          </BlurFade>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="w-full lg:w-250 flex flex-col items-center justify-center rounded-md gap-5">
        <div className="w-full flex relative rounded-xl p-1">
          <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="min-w-400 h-300 rounded-full bg-gradient-to-b from-[#e16e0960] via-[#e16e0910] to-transparent  blur-3xl animate-pulse" />
          </div>
          <Safari url="app.bylogos.io" mode="simple" imageSrc={demoImage} />
          <BorderBeam duration={6} size={400} borderWidth={4} className="from-transparent via-[#e16e09] to-transparent z-100000" />
          <BorderBeam duration={6} delay={3} size={400} borderWidth={4} className="from-transparent via-chart-2 to-transparent z-100000" />
        </div>
        {/* Trust indicator */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-sm text-muted-foreground mb-8 text-disabled">
          Probado en industrias críticas • Acoplado a normativas RIC para SEC{/*• ISO 27001 • IEC 61850*/}
        </motion.p>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Activity, Zap, Database, AlertTriangle, Bot, Cloud, ScanFace, NotepadText, Box } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Monitoreo",
    description: "Supervisión en tiempo real de todos los parámetros eléctricos con latencia menor a 1 segundo.",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Diagramas Unilineales",
    description: "Esquemas interactivos con representación dinámica del estado de la instalación.",
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Registro de datos",
    description: "Acceso histórico completo a registros pasados con análisis de tendencias y patrones.",
    color: "text-primary",
  },
  {
    icon: AlertTriangle,
    title: "Alarmas inteligentes",
    description: "Alarmas en base a eventos y predicciones para prevención de fallas.",
    color: "text-primary",
  },
  {
    icon: ScanFace,
    title: "Autenticación",
    description: "Sistema de seguridad avanzado con reconocimiento facial y autenticación biométrica multicapa.",
    color: "text-primary",
  },
  {
    icon: NotepadText,
    title: "Reportes Automáticos",
    description: "Generación de reportes de consumo automáticos con información detallada del estado.",
    color: "text-primary",
  },
  {
    icon: Bot,
    title: "Inteligencia Artificial",
    description: "Asistente inteligente para un mejor análisis de cargas.",
    color: "text-primary",
  },
  {
    icon: Box,
    title: "Gemelo Digital",
    description: "Representa tu proceso en el mundo digital con una copia exacta de tu instalación.",
    color: "text-primary",
  },
  {
    icon: Cloud,
    title: "Respaldo en la nube",
    description: "Sincronización a la nube para acceder a tu información desde cualquier dispositivo.",
    color: "text-primary",
  },
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden " id="features">
      <div className="container mx-auto px-6 w-full xl:max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent text-disabled">Funcionamiento</span> <span className="text-primary text-disabled">Modular</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-disabled">¡Arma tu propia solución escogiendo los módulos que necesitas!</p>
        </motion.div>

        <div className="flex items-center justify-center gap-6">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full grid grid-cols-1 xl:grid-cols-3 gap-2 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:bg-card/80 h-full hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-secondary/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-3 text-foreground group-hover:text-primary transition-colors text-disabled">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed text-disabled">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          {/*
            <div className="w-full xl:w-[30%] hidden xl:block rounded-md pointer-events-none user-select-none">
              <Image src={featuresImage} alt="Features" />
            </div>*/}
        </div>
      </div>
    </section>
  );
}

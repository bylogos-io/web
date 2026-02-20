"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Plus } from "lucide-react";
import { siRaspberrypi /*siMqtt, siNodered*/ } from "simple-icons";

export function Stack() {
  const techStack = [
    {
      name: "Raspberry Pi",
      status: "Optimizado",
      description: "Soporte completo para Pi 4/5",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
          <path d={siRaspberrypi.path} />
        </svg>
      ),
    },
    {
      name: "Próximamente",
      status: "En evaluación",
      description: "Nuevas plataformas en desarrollo",
      logo: (
        <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center">
          <Plus className="w-6 h-6 text-muted-foreground" />
        </div>
      ),
    },
  ];

  const architectures = [
    { name: "ARM64", supported: true },
    { name: "x86_64", supported: false, coming: true },
  ];

  return (
    <section className="py-24 bg-secondary/30" id="stack">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent text-disabled">Compatibilidad</span> <span className="text-primary text-disabled">Técnica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-disabled">Hardware verificado y optimizado para LogOS. Plataformas industriales probadas que garantizan máximo rendimiento y estabilidad.</p>
        </motion.div>

        {/* Tech stack grid */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-7xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group text-center h-full">
                {/* Status badge */}
                <div className="flex justify-center mb-4">
                  <Badge variant={tech.status === "Optimizado" ? "default" : tech.status === "Verificado" ? "secondary" : "outline"} className={tech.status === "Optimizado" ? "bg-primary text-primary-foreground" : ""}>
                    {tech.status}
                  </Badge>
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-4 text-primary group-hover:text-primary/80 transition-colors">{tech.logo}</div>

                {/* Name and description */}
                <h3 className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform compatibility */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="max-w-7xl mx-auto">
          <Card className="p-8 bg-card border-border flex justify-center items-center">
            <h3 className="text-xl text-foreground mb-6 text-center">Compatibilidad de Arquitecturas</h3>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {architectures.map((arch, index) => (
                <div key={index} className={`w-full xl:w-100 p-4 rounded-lg border text-center transition-all duration-300 ${arch.supported ? "border-primary/50 bg-primary/5" : arch.coming ? "border-muted border-dashed bg-muted/20" : "border-border bg-secondary/30"}`}>
                  <div className="text-sm text-foreground mb-2">{arch.name}</div>
                  <div className="text-xs">{arch.supported ? <span className="text-primary">✓ Soportado</span> : arch.coming ? <span className="text-muted-foreground">Próximamente</span> : <span className="text-muted-foreground">No disponible</span>}</div>
                </div>
              ))}
            </div>

            {/* Technical requirements */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Requisitos mínimos para LogOS</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Badge variant="outline" className="text-xs px-3 py-1">
                  2GB RAM mínimo
                </Badge>
                <Badge variant="outline" className="text-xs px-3 py-1">
                  ARM64
                </Badge>
                <Badge variant="outline" className="text-xs px-3 py-1">
                  Linux Kernel 5.4+
                </Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
      {/* Technical specs */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="mt-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="border-primary/30 pl-4">
            <div className="text-2xl text-primary text-disabled">IEC 61850</div>
            <div className="text-sm text-muted-foreground text-disabled">Protocolo estándar</div>
          </div>
          <div className="border-l-2 border-primary/30 pl-4">
            <div className="text-2xl text-primary text-disabled">Modbus</div>
            <div className="text-sm text-muted-foreground text-disabled">Comunicación industrial</div>
          </div>
          <div className="border-l-2 border-primary/30 pl-4">
            <div className="text-2xl text-primary text-disabled">OPC-UA</div>
            <div className="text-sm text-muted-foreground text-disabled">Interoperabilidad</div>
          </div>
          <div className="border-l-2 border-primary/30 pl-4">
            <div className="text-2xl text-primary text-disabled">MQTT</div>
            <div className="text-sm text-muted-foreground text-disabled">Integración IoT</div>
          </div>
        </div>
      </motion.div>
      {/* Technical support info */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }} className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          ¿Problemas de ejecución? <span className="text-primary">contact@bylogos.io</span>
        </p>
      </motion.div>
    </section>
  );
}

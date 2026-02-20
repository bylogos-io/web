"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Monitor, Server, Wifi, Camera, HardDrive, Zap, Cpu } from "lucide-react";
import reterminalImage from "@public/hardware-alternatives/reterminal.png";
import recomputerImage from "@public/hardware-alternatives/recomputer.png";
import seeed from "@public/seeed.png";
import Image from "next/image";

const hardwareOptions = [
  {
    name: "ReTerminalDM",
    subtitle: "Panel de Control Interactivo",
    image: reterminalImage.src,
    description: "Terminal industrial con pantalla táctil integrada para control directo y visualización en tiempo real.",
    features: [
      { icon: Monitor, text: 'Pantalla táctil 10.1"' },
      { icon: Camera, text: "Cámara integrada" },
      { icon: Wifi, text: "WiFi 6 + Bluetooth 5.0" },
      { icon: Zap, text: "PoE+ alimentación" },
    ],
    specs: ["Resolución 1280x800", "IP65 clasificación", "Serial RS485", "IEC 61850 compatible"],
    useCase: "Ideal para salas de control, cabinas de operador y puntos de supervisión local.",
    price: "Desde UF 18,5",
    highlight: "Interactividad Local",
  },
  {
    name: "ReComputer",
    subtitle: "Servidor Edge Industrial",
    image: recomputerImage.src,
    description: "Computadora industrial compacta optimizada para ejecutar LogOS como servidor web local y gateway de comunicaciones.",
    features: [
      { icon: Server, text: "Server-grade performance" },
      { icon: HardDrive, text: "SSD NVMe 256GB" },
      { icon: Wifi, text: "Ethernet Gigabit x2" },
      { icon: Cpu, text: "ARM Cortex-A72 Quad-core" },
    ],
    specs: ["8GB RAM DDR4", "Ventilación silenciosa", "Riel DIN para montaje", "Temperaturas críticas"],
    useCase: "Perfecto para despliegues centralizados, edge computing y servidores locales.",
    price: "Desde UF 8,3",
    highlight: "Edge Computing",
  },
];

export function HardwareAlternatives() {
  return (
    <section className="py-24" id="hardware">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent text-disabled">Hardware</span> <span className="text-primary text-disabled">Industrial</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-disabled">Soluciones de hardware especializadas de Seeed Studio, optimizadas para ejecutar LogOS en entornos industriales exigentes.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {hardwareOptions.map((hardware, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: true }}>
              <Card className="pt-0 overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                {/* Header with badge */}
                <div className="relative">
                  <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">{hardware.highlight}</Badge>

                  {/* Hardware image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center p-8 relative">
                    <Image src={hardware.image} alt={hardware.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300 text-disabled" />
                  </div>
                </div>

                <div className="p-6">
                  {/* Title and price */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl text-foreground mb-1">{hardware.name}</h3>
                      <p className="text-primary text-sm">{hardware.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl text-primary">{hardware.price}</div>
                      <div className="text-xs text-muted-foreground">Ex. IVA</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{hardware.description}</p>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {hardware.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <feature.icon className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical specs */}
                  <div className="mb-6">
                    <h4 className="text-sm text-primary mb-3">Especificaciones técnicas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {hardware.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="text-xs text-muted-foreground">
                          • {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use case */}
                  <div className="bg-secondary/30 rounded-lg p-4 mb-6">
                    <p className="text-sm text-foreground leading-relaxed">
                      <span className="text-primary">Caso de uso ideal:</span> {hardware.useCase}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="#contact" className="w-full">
                        Solicitar
                      </Link>
                    </Button>
                    {/*<Button
                      variant="outline"
                      className="border-border hover:bg-secondary"
                    >
                      Especificaciones
                    </Button>*/}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partnership info */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="mt-6 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-7xl mx-auto">
            <h3 className="text-xl text-foreground mb-4 text-disabled">
              <Image src={seeed} alt="Seeed Studio" className="w-50 h-full inline-block mr-2" />
            </h3>
            <p className="text-muted-foreground text-disabled">Logos está probado y optimizado para hardware Seeed Studio, garantizando máximo rendimiento y compatibilidad en entornos industriales críticos.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

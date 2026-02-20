"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Quote, Building2, Factory, Zap } from "lucide-react";

const testimonials = [
  {
    company: "Red Salud",
    industry: "Médicina",
    quote: "Logos nos ha permitido reducir el tiempo de respuesta ante incidencias en un 70%. La integración con nuestros sistemas legacy fue perfecta.",
    metrics: "70% reducción MTTR",
    icon: Building2,
    installations: "45+ subestaciones",
  },
  {
    company: "Arcelor Mittal",
    industry: "Siderurgia",
    quote: "El módulo de IA predictiva identificó 3 fallos críticos antes de que ocurrieran. ROI del 340% en el primer año.",
    metrics: "340% ROI primer año",
    icon: Factory,
    installations: "12 plantas industriales",
  },
  {
    company: "Iberdrola Renovables",
    industry: "Energía Renovable",
    quote: "Monitoreo en tiempo real de 150+ parques eólicos desde una sola plataforma. Eficiencia operativa sin precedentes.",
    metrics: "150+ parques monitorizados",
    icon: Zap,
    installations: "2.3 GW bajo gestión",
  },
];

const stats = [
  { value: "300+", label: "Instalaciones activas" },
  { value: "99.9%", label: "Disponibilidad SLA" },
  { value: "15M+", label: "Puntos de datos/día" },
  { value: "24/7", label: "Soporte técnico" },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            Casos de <span className="text-primary">Éxito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Empresas líderes confían en LogOS para gestionar sus infraestructuras eléctricas más críticas.</p>
        </motion.div>

        {/* Statistics */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 h-full relative">
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <testimonial.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground">{testimonial.company}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.industry}</div>
                  </div>
                </div>

                <blockquote className="text-foreground mb-4 leading-relaxed">{'"' + testimonial.quote + '"'}</blockquote>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Resultado clave:</span>
                    <span className="text-primary">{testimonial.metrics}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Instalaciones:</span>
                    <span className="text-foreground">{testimonial.installations}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical certifications */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }} className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Certificaciones y estándares cumplidos:</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>ISO 27001 - Seguridad de la información</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>IEC 61850 - Automatización subestaciones</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>NERC CIP - Seguridad cibernética</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>IEC 62351 - Seguridad comunicaciones</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

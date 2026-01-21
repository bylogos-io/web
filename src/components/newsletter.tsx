"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, FileText, Zap, TrendingUp, Shield, CheckCircle, AlertCircle } from "lucide-react";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const benefits = [
    {
      icon: FileText,
      title: "Actualizaciones técnicas",
      description: "Nuevas funcionalidades, protocolos soportados y mejoras de rendimiento.",
    },
    {
      icon: Zap,
      title: "Casos de uso industriales",
      description: "Implementaciones reales, configuraciones optimizadas y best practices.",
    },
    {
      icon: TrendingUp,
      title: "Tendencias del sector",
      description: "Análisis de mercado, nuevos estándares IEC y evolución tecnológica.",
    },
    {
      icon: Shield,
      title: "Alertas de seguridad",
      description: "Vulnerabilidades, parches críticos y recomendaciones de ciberseguridad.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, introduce un email válido");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      const response = await fetch("https://cloud.bylogos.com/webhook/email-catcher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error("Error al suscribirse");
      }
    } catch (err) {
      setError("Hubo un problema al procesar tu suscripción. Inténtalo de nuevo.");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail("");
      setName("");
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center">
            <Card className="p-8 bg-card border-primary/50">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl text-foreground mb-4">¡Suscripción confirmada!</h3>
              <p className="text-muted-foreground mb-6">Recibirás actualizaciones técnicas, casos de uso industriales y las últimas novedades de Logos.</p>
              <Button variant="outline" onClick={() => setIsSubmitted(false)} className="border-border hover:bg-secondary">
                Suscribir otro email
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-background border-b-2 border-border" id="newsletter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Newsletter Técnico</Badge>
            <h2 className="text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent text-disabled">Mantente</span> <span className="text-primary text-disabled">Actualizado</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-disabled">Recibe información técnica exclusiva, actualizaciones del producto, casos de uso industriales y las últimas tendencias en nuestra plataforma.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl text-foreground mb-4 text-disabled">¿Qué recibirás?</h3>
              </div>

              {benefits.map((benefit, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * index }} viewport={{ once: true }} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Frequency info */}
              <div className="mt-8 p-4 bg-secondary/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary">Contenido de calidad</span>
                </div>
                <p className="text-xs text-muted-foreground">Solo contenido relevante, sin spam. {/*Puedes cancelar la suscripción en cualquier momento.*/}</p>
              </div>
            </motion.div>

            {/* Subscription form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
              <Card className="p-8 bg-card border-border">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl text-foreground mb-2">Suscríbete ahora</h3>
                  <p className="text-sm text-muted-foreground">¡Únete a la revolución tecnológica!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="gap-2 flex flex-col">
                    <Input type="name" placeholder="Nombre y Apellido" value={name} onChange={(e) => setName(e.target.value)} className="h-12 bg-input-background border-border focus:border-primary focus:ring-primary text-foreground" required />
                    <Input type="email" placeholder="tu.email@empresa.com" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 bg-input-background border-border focus:border-primary focus:ring-primary text-foreground" required />
                    {error && (
                      <div className="flex items-center space-x-2 mt-2 text-destructive text-sm">
                        <AlertCircle className="h-4 w-4" />
                        <span>{error}</span>
                      </div>
                    )}
                  </div>

                  <Button type="submit" disabled={isLoading} className="cursor-pointer w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50">
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        <span>Suscribiendo...</span>
                      </div>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Suscribirse gratis
                      </>
                    )}
                  </Button>
                </form>

                {/* Privacy notice */}
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Al suscribirte, aceptas recibir emails de Logos.
                  {/*y confirms que has leído nuestra{' '}
                  <a href="#privacy" className="text-primary hover:underline">
                    política de privacidad
                  </a>
                  .*/}
                </p>

                {/* Social proof 
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                    <div className="text-center">
                      <div className="text-primary">2,500+</div>
                      <div className="text-xs">Suscriptores</div>
                    </div>
                    <div className="text-center">
                      <div className="text-primary">95%</div>
                      <div className="text-xs">Satisfacción</div>
                    </div>
                    <div className="text-center">
                      <div className="text-primary">0%</div>
                      <div className="text-xs">Spam</div>
                    </div>
                  </div>
                </div>*/}
              </Card>
            </motion.div>
          </div>

          {/* Recent topics preview 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl text-foreground mb-2">
                Últimos temas tratados
              </h3>
              <p className="text-muted-foreground">
                Una muestra del contenido técnico que recibirás
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Implementación IEC 61850 en subestaciones críticas',
                  date: 'Enero 2025',
                  category: 'Protocolos'
                },
                {
                  title: 'Optimización de GOOSE messages en redes industriales',
                  date: 'Enero 2025',
                  category: 'Performance'
                },
                {
                  title: 'Ciberseguridad en SCADA: nuevas amenazas y defensas',
                  date: 'Diciembre 2024',
                  category: 'Seguridad'
                }
              ].map((topic, index) => (
                <Card key={index} className="p-4 bg-secondary/20 border-border hover:border-primary/30 transition-colors">
                  <Badge variant="outline" className="text-xs mb-2">
                    {topic.category}
                  </Badge>
                  <h4 className="text-sm text-foreground mb-2 leading-tight">
                    {topic.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {topic.date}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>*/}
        </div>
      </div>
      {/* Technical support info */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }} className="text-center">
        <p className="mt-16 text-sm text-muted-foreground">
          O escribe un correo a <a href="mailto:contact@bylogos.io" className="text-primary">contact@bylogos.io</a>
        </p>
      </motion.div>
    </section>
  );
}

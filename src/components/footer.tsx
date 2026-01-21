"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { /*ExternalLink, FileText,*/ Mail, /*Phone, Github,*/ Linkedin, Instagram, GithubIcon } from "lucide-react";
import Link from "next/link";
import logoImage from "../../public/logos.svg";

export function Footer() {
    const currentYear = new Date().getFullYear();

    /*const quickLinks = [
    { name: 'Documentación técnica', icon: FileText, href: '#docs' },
    { name: 'API Reference', icon: ExternalLink, href: '#api' },
    { name: 'Guías de integración', icon: FileText, href: '#guides' },
    //{ name: 'Soporte 24/7', icon: Phone, href: '#support' }
  ];*/

    const contactInfo = [
        { label: "Email técnico", value: "contact@bylogos.io", icon: Mail },
        //{ label: 'Soporte urgente', value: '+34 900 123 456', icon: Phone }
    ];

    return (
        <footer className="bg-card border-t border-border" id="contact">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <Image src={logoImage} alt="LogOS" className="w-16" />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            Plataforma industrial para monitoreo y gestión de sistemas eléctricos en tiempo real.
                            Solución híbrida edge-cloud con IA integrada.
                        </p>
                        <div className="flex space-x-2">
                            {/*<Button variant="ghost" size="sm" className="p-2">
                <Github className="h-4 w-4" />
              </Button>*/}
                            <Button variant="ghost" size="sm" className="p-2 z-100">
                                <a
                                    href={"https://www.linkedin.com/company/bylogos/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="sm" className="p-2">
                                <a
                                    href={"https://www.instagram.com/bylogos.io/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram className="h-4 w-4" />
                                </a>
                            </Button>

                            <Button variant="ghost" size="sm" className="p-2">
                                <a
                                    href={"https://github.com/bylogos-io"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GithubIcon  />
                                </a>
                            </Button>

                            
                        </div>
                    </motion.div>

                    {/* Quick Links
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-foreground mb-4">Recursos técnicos</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <link.icon className="h-4 w-4 text-primary" />
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </motion.div> */}

                    {/* Protocols & Standards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-foreground mb-4">Protocolos soportados</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            {/*<div>• IEC 61850 (MMS, GOOSE, SV)</div>*/}
                            <div>• Modbus RTU/TCP</div>
                            <div>• OPC UA (DA, AC, HDA)</div>
                            {/*<div>• DNP3 (Serial, TCP, TLS)</div>*/}
                            <div>• MQTT / MQTT-SN</div>
                            {/*<div>• BACnet IP/MSTP</div>*/}
                            {/*<div>• SNMP v1/v2c/v3</div>*/}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-foreground mb-4">Contacto directo</h4>
                        <div className="space-y-3">
                            {contactInfo.map((contact, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                    <contact.icon className="h-4 w-4 text-primary mt-0.5" />
                                    <div>
                                        <div className="text-xs text-muted-foreground">{contact.label}</div>
                                        <a href={`mailto:${contact.value}`} target="_blank" rel="noopener noreferrer">
                                            <div className="text-sm text-foreground">{contact.value}</div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to action */}
                        <div className="mt-6">
                            <a href={"mailto:contact@bylogos.io"}>
                                <Button
                                    className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                                    size="sm"
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Solicitar demo técnica
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>

                <Separator className="my-8" />

                {/* Bottom section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
                >
                    <div className="text-sm text-muted-foreground">
                        © {currentYear} LogOS SCADA. Todos los derechos reservados.
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Política de privacidad
                        </Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Términos de servicio
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}

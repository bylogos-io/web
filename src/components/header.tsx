"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import Logos from "@public/icon.svg";
import { Menu, X, Linkedin, Github, GithubIcon } from "lucide-react";
import { ShimmerButton } from "./ui/shimmer-button";
import Link from "next/link";
import { Instagram } from "lucide-react";


export function Header({}) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigationItems = [
        { label: "Inicio", href: "#hero" },
        { label: "Características", href: "#features" },
        { label: "Hardware", href: "#hardware" },
        { label: "Compatibilidad", href: "#stack" },
        { label: "Newsletter", href: "#newsletter" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? "bg-background/60 backdrop-blur-sm border-b border-border" : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#e16e0920] border-1 p-1">
                                <Image src={Logos} alt="Logos Logo" />
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigationItems.map((item, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ y: -2 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {/*<Link href="https://demo.bylogos.io">
                <ShimmerButton className="h-10" shimmerColor="#e16e09">
                  Probar demo
                </ShimmerButton>
              </Link>*/}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className=" text-muted-foreground hover:text-foreground"
                                >
                            <a href="https://www.linkedin.com/company/bylogos/">
                                    <Linkedin />
                            </a>
                                </Button>

                                <Button variant="ghost" size="sm" className=" text-muted-foreground hover:text-foreground">
                                <a
                                    href={"https://www.instagram.com/bylogos.io/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram  />
                                </a>
                            </Button>

                            <Button variant="ghost" size="sm" className=" text-muted-foreground hover:text-foreground">
                                <a
                                    href={"https://github.com/bylogos-io"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GithubIcon  />
                                </a>
                            </Button>
                        </div>
                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="lg:hidden p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? "auto" : "none",
                }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 lg:hidden"
            >
                <div className="flex flex-col justify-center items-center h-full space-y-8">
                    {/* Mobile Navigation */}
                    <nav className="flex flex-col items-center space-y-6">
                        {navigationItems.map((item, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                    y: isMobileMenuOpen ? 0 : 20,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                onClick={() => scrollToSection(item.href)}
                                className="text-2xl text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Mobile Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: isMobileMenuOpen ? 1 : 0,
                            y: isMobileMenuOpen ? 0 : 20,
                        }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="flex flex-col items-center space-y-4"
                    >
                        <Link href="https://www.linkedin.com/company/bylogos/">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-48 bg-background/50 backdrop-blur-sm"
                            >
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Mobile Footer 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="text-center space-y-2"
          >
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>LogOS SCADA v2.1.4</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs">
              Plataforma SCADA industrial para monitoreo y control de procesos
            </p>
          </motion.div>*/}
                </div>
            </motion.div>
        </>
    );
}

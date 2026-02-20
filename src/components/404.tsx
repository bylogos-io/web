'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Home,
    ArrowLeft,
    AlertTriangle,
    Zap,
    Activity,
    Search,
    Mail,
} from 'lucide-react';
import Image from 'next/image';
import logoImage from '../../public/logos.svg';

export default function ERR404() {
    const diagnostics = [
        { label: 'HTTP Status', value: '404', status: 'error' },
        { label: 'Connection', value: 'Active', status: 'success' },
        { label: 'Protocol', value: 'HTTPS', status: 'success' },
        { label: 'Response Time', value: '45ms', status: 'success' }
    ];

    const suggestions = [
        {
            icon: Home,
            title: 'Volver al inicio',
            description: 'Regresa a la página principal de LogOS.',
            action: 'Ir a inicio'
        },
        {
            icon: Search,
            title: 'Revisar la URL',
            description: 'Revisa la dirección que estás buscando.',
            action: 'Revisar'
        },
        {
            icon: Mail,
            title: 'Newsletter',
            description: 'Suscríbete a nuestra bandeja de entrada y entérate de todo.',
            action: 'Suscribir'
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Animated background elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header with logo */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <Image
                            src={logoImage}
                            alt="LogOS Logo"
                            className="h-12 mx-auto mb-4 opacity-50"
                        />
                        <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/30 opacity-50">
                            Página no encontrada
                        </Badge>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Error display */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center lg:text-left"
                        >
                            {/* Large 404 display */}
                            <div className="mb-8">
                                <div className="text-8xl md:text-9xl text-primary/30 select-none mb-4">
                                    404
                                </div>
                                <div className="relative">
                                    <h1 className="text-4xl md:text-5xl mb-4">
                                        Página <span className="text-destructive">no encontrada</span>
                                    </h1>
                                    <p className="text-xl text-muted-foreground mb-6">
                                        La ruta solicitada no existe.
                                        Verifica la URL o utiliza los enlaces de navegación.
                                    </p>
                                </div>
                            </div>

                            {/* System diagnostics */}
                            <Card className="p-6 bg-card/50 border-border">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Activity className="h-5 w-5 text-primary" />
                                    <h3 className="text-lg text-foreground">Diagnóstico del sistema</h3>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {diagnostics.map((diag, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <span className="text-sm text-muted-foreground">{diag.label}:</span>
                                            <div className="flex items-center space-x-2">
                                                <span className={`text-sm ${diag.status === 'error' ? 'text-destructive' : 'text-primary'}`}>
                                                    {diag.value}
                                                </span>
                                                <div className={`w-2 h-2 rounded-full ${diag.status === 'error' ? 'bg-destructive' : 'bg-primary'}`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        {/* Solutions panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="text-center lg:text-left mb-6">
                                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                                    <AlertTriangle className="h-5 w-5 text-primary" />
                                    <h2 className="text-2xl text-foreground">Opciones de recuperación</h2>
                                </div>
                                <p className="text-muted-foreground">
                                    Selecciona una de las siguientes opciones para continuar navegando.
                                </p>
                            </div>

                            {/* Action cards */}
                            <div className="space-y-4">
                                {suggestions.map((suggestion, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 * index }}
                                    >
                                        <Card className="p-4 bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                                            <div className="flex items-center space-x-4">
                                                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                    <suggestion.icon className="h-5 w-5 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-foreground mb-1 group-hover:text-primary transition-colors">
                                                        {suggestion.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {suggestion.description}
                                                    </p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-border hover:bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    {suggestion.action}
                                                </Button>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Primary actions */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 pt-4"
                            >
                                <Button
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 h-12"
                                    onClick={() => window.location.href = '/'}
                                >
                                    <Home className="mr-2 h-4 w-4" />
                                    Volver al inicio
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-border hover:bg-secondary flex-1 h-12"
                                    onClick={() => window.history.back()}
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Página anterior
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Technical footer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-16 text-center"
                    >
                        <Card className="p-6 bg-secondary/20 border-border">
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                                <div className="flex items-center space-x-4">
                                    <Zap className="h-5 w-5 text-primary" />
                                    <div className="text-left">
                                        <div className="text-sm text-foreground">LogOS v1.1.0</div>
                                        <div className="text-xs text-muted-foreground">Plataforma • Tiempo de actividad: 99.9%</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                        <span>Servicios activos</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span>Conectado a edge</span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <p className="text-xs text-muted-foreground mt-4">
                            Error ID: ERR-404 •
                            Soporte técnico: <span className="text-primary">soporte@bylogos.cl</span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
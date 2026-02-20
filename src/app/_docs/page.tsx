"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Search,
    Book,
    Code,
    Zap,
    Settings,
    Shield,
    Database,
    ChevronRight,
    ExternalLink,
    Copy,
    Check,
    Home,
    X,
    Download,
    AlertTriangle,
} from "lucide-react";

export default function Documentation({}) {
    const [activeSection, setActiveSection] = useState("getting-started");
    const [searchQuery, setSearchQuery] = useState("");
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const navigationItems = [
        {
            category: "Primeros pasos",
            items: [
                { id: "getting-started", title: "Introducción", icon: Home },
                { id: "installation", title: "Instalación", icon: Download },
                { id: "configuration", title: "Configuración", icon: Settings },
            ],
        },
        {
            category: "API Reference",
            items: [
                { id: "scada-api", title: "SCADA API", icon: Code },
                { id: "data-api", title: "Data API", icon: Database },
                { id: "auth-api", title: "Authentication", icon: Shield },
            ],
        },
        {
            category: "Módulos",
            items: [
                { id: "monitoring", title: "Monitoreo", icon: Zap },
                { id: "diagrams", title: "Diagramas", icon: Book },
                { id: "alarms", title: "Alarmas", icon: AlertTriangle },
            ],
        },
    ];

    type doctype = {
        [key: string]: {
            title: string;
            description: string;
            content: Array<{
                section: string;
                text?: string;
                list?: string[];
                code?: string;
            }>;
        };
    };
    const documentationContent: doctype = {
        "getting-started": {
            title: "Introducción a LogOS SCADA",
            description:
                "Sistema SCADA moderno para supervisión y control de procesos industriales",
            content: [
                {
                    section: "Descripción General",
                    text: "LogOS es una plataforma SCADA de última generación diseñada para entornos industriales modernos. Combina la potencia del edge computing con la escalabilidad de la nube para ofrecer una solución completa de supervisión y control.",
                },
                {
                    section: "Características principales",
                    list: [
                        "Monitoreo en tiempo real de sistemas eléctricos",
                        "Diagramas interactivos y visualización 3D",
                        "Sistema de alarmas inteligentes con IA",
                        "Arquitectura híbrida edge + cloud",
                        "Autenticación biométrica Face ID",
                        "API REST completa para integraciones",
                    ],
                },
                {
                    section: "Casos de uso",
                    text: "Ideal para plantas de manufactura, instalaciones eléctricas, sistemas de distribución de energía, y cualquier aplicación que requiera supervisión y control de procesos industriales.",
                },
            ],
        },
        installation: {
            title: "Instalación de LogOS",
            description:
                "Guía paso a paso para instalar LogOS en diferentes plataformas",
            content: [
                {
                    section: "Requisitos del sistema",
                    text: "Antes de comenzar, asegúrate de que tu sistema cumple con los requisitos mínimos.",
                    code: `# Requisitos mínimos
CPU: ARM64 o x86_64
RAM: 2GB mínimo, 4GB recomendado
Storage: 8GB disponibles
OS: Linux Kernel 5.4+
Network: Ethernet o WiFi`,
                },
                {
                    section: "Instalación en Raspberry Pi",
                    text: "Proceso de instalación para dispositivos Raspberry Pi 4/5.",
                    code: `# Descargar imagen de LogOS
wget https://releases.logos-scada.com/rpi/logos-os-latest.img.xz

# Escribir a SD card
sudo dd if=logos-os-latest.img of=/dev/sdX bs=4M status=progress

# Primera configuración
sudo logos-config --initial-setup`,
                },
                {
                    section: "Instalación Docker",
                    text: "Despliegue rápido usando contenedores Docker.",
                    code: `# Crear directorio de configuración
mkdir -p /opt/logos/{config,data,logs}

# Ejecutar contenedor
docker run -d \\
  --name logos-scada \\
  --restart unless-stopped \\
  -p 8080:8080 \\
  -p 502:502 \\
  -v /opt/logos/config:/etc/logos \\
  -v /opt/logos/data:/var/lib/logos \\
  -v /opt/logos/logs:/var/log/logos \\
  logos/scada:latest`,
                },
            ],
        },
        "scada-api": {
            title: "SCADA API Reference",
            description:
                "API completa para interactuar con el sistema SCADA de LogOS",
            content: [
                {
                    section: "Autenticación",
                    text: "Todas las llamadas a la API requieren autenticación mediante JWT tokens.",
                    code: `POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "your_password"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "user": {
    "id": 1,
    "username": "admin",
    "role": "administrator"
  }
}`,
                },
                {
                    section: "Obtener estado del sistema",
                    text: "Endpoint para consultar el estado general del sistema SCADA.",
                    code: `GET /api/system/status
Authorization: Bearer {token}

Response:
{
  "status": "online",
  "uptime": 86400,
  "version": "2.1.4",
  "modules": {
    "monitoring": "active",
    "alarms": "active",
    "data_collector": "active"
  },
  "performance": {
    "cpu_usage": 15.2,
    "memory_usage": 45.8,
    "disk_usage": 23.1
  }
}`,
                },
                {
                    section: "Leer variables de proceso",
                    text: "Obtener valores actuales de las variables monitoreadas.",
                    code: `GET /api/variables?tags=PLC1.Temp,PLC1.Pressure
Authorization: Bearer {token}

Response:
{
  "timestamp": "2024-08-08T10:30:00Z",
  "variables": [
    {
      "tag": "PLC1.Temp",
      "value": 75.3,
      "unit": "°C",
      "quality": "good",
      "timestamp": "2024-08-08T10:30:00Z"
    },
    {
      "tag": "PLC1.Pressure",
      "value": 2.1,
      "unit": "bar",
      "quality": "good",
      "timestamp": "2024-08-08T10:30:00Z"
    }
  ]
}`,
                },
            ],
        },
        "data-api": {
            title: "Data API Reference",
            description: "API para consulta y análisis de datos históricos",
            content: [
                {
                    section: "Consulta de datos históricos",
                    text: "Obtener series temporales de variables del proceso.",
                    code: `GET /api/data/history?tag=PLC1.Temp&start=2024-08-07T00:00:00Z&end=2024-08-08T00:00:00Z&interval=1h
Authorization: Bearer {token}

Response:
{
  "tag": "PLC1.Temp",
  "unit": "°C",
  "data_points": [
    {
      "timestamp": "2024-08-07T00:00:00Z",
      "value": 72.1,
      "quality": "good"
    },
    {
      "timestamp": "2024-08-07T01:00:00Z",
      "value": 73.4,
      "quality": "good"
    }
  ],
  "aggregation": "average",
  "interval": "1h"
}`,
                },
                {
                    section: "Estadísticas agregadas",
                    text: "Calcular estadísticas sobre conjuntos de datos.",
                    code: `POST /api/data/statistics
Authorization: Bearer {token}
Content-Type: application/json

{
  "tags": ["PLC1.Temp", "PLC1.Pressure"],
  "start": "2024-08-07T00:00:00Z",
  "end": "2024-08-08T00:00:00Z",
  "statistics": ["min", "max", "avg", "stddev"]
}

Response:
{
  "PLC1.Temp": {
    "min": 68.2,
    "max": 78.9,
    "avg": 73.6,
    "stddev": 2.4
  },
  "PLC1.Pressure": {
    "min": 1.8,
    "max": 2.3,
    "avg": 2.1,
    "stddev": 0.1
  }
}`,
                },
            ],
        },
        monitoring: {
            title: "Módulo de Monitoreo",
            description:
                "Sistema de monitoreo en tiempo real para variables de proceso",
            content: [
                {
                    section: "Configuración de variables",
                    text: "Configurar variables de proceso para monitoreo continuo.",
                    code: `POST /api/monitoring/variables
Authorization: Bearer {token}
Content-Type: application/json

{
  "tag": "PLC1.Temperature",
  "description": "Temperatura del reactor principal",
  "unit": "°C",
  "data_type": "float",
  "scan_rate": 1000,
  "deadband": 0.1,
  "scaling": {
    "raw_min": 0,
    "raw_max": 4095,
    "eng_min": 0,
    "eng_max": 150
  },
  "alarms": {
    "high": 120,
    "low": 10,
    "enabled": true
  }
}`,
                },
                {
                    section: "WebSocket para datos en tiempo real",
                    text: "Conectar a stream de datos en tiempo real usando WebSockets.",
                    code: `// Conectar al WebSocket
const ws = new WebSocket('wss://localhost:8080/api/realtime');

// Suscribirse a variables específicas
ws.send(JSON.stringify({
  "action": "subscribe",
  "tags": ["PLC1.Temp", "PLC1.Pressure"],
  "token": "your_jwt_token"
}));

// Recibir datos en tiempo real
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Datos en tiempo real:', data);
};`,
                },
            ],
        },
    };

    const currentContent =
        documentationContent[
            activeSection as keyof typeof documentationContent
        ];

    const copyToClipboard = async (text: string, id: string) => {
        await navigator.clipboard.writeText(text);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
        <div className="fixed inset-0 bg-background z-50 flex">
            {/* Sidebar */}
            <div className="w-80 border-r border-border bg-card flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl text-foreground">LogOS Docs</h1>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Buscar documentación..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 h-9"
                        />
                    </div>
                </div>

                {/* Navigation */}
                <ScrollArea className="flex-1 p-6">
                    <nav className="space-y-6">
                        {navigationItems.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                                <h3 className="text-sm text-muted-foreground mb-3 px-2">
                                    {category.category}
                                </h3>
                                <div className="space-y-1">
                                    {category.items.map((item) => (
                                        <Button
                                            key={item.id}
                                            variant={
                                                activeSection === item.id
                                                    ? "secondary"
                                                    : "ghost"
                                            }
                                            className={`w-full justify-start h-9 px-2 ${
                                                activeSection === item.id
                                                    ? "bg-primary/10 text-primary border-primary/20"
                                                    : "text-muted-foreground hover:text-foreground"
                                            }`}
                                            onClick={() =>
                                                setActiveSection(item.id)
                                            }
                                        >
                                            <item.icon className="mr-3 h-4 w-4" />
                                            {item.title}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>
                </ScrollArea>

                {/* Footer */}
                <div className="p-6 border-t border-border">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>LogOS v2.1.4</span>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Breadcrumb */}
                <div className="border-b border-border bg-card/50 px-8 py-4 flex gap-5">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => (window.location.href = "/")}
                        className="h-8 w-8 p-0"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Book className="h-4 w-4" />
                        <span>Documentación</span>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-foreground">
                            {currentContent?.title}
                        </span>
                    </div>
                </div>

                {/* Content area */}
                <ScrollArea className="flex-1">
                    <div className="max-w-4xl mx-auto p-8">
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Page header */}
                            <div className="mb-8">
                                <h1 className="text-4xl mb-4">
                                    {currentContent?.title}
                                </h1>
                                <p className="text-xl text-muted-foreground">
                                    {currentContent?.description}
                                </p>
                            </div>

                            {/* Content sections */}
                            <div className="space-y-8">
                                {currentContent?.content.map(
                                    (section, index) => (
                                        <div key={index}>
                                            <h2 className="text-2xl mb-4">
                                                {section.section}
                                            </h2>

                                            {section.text && (
                                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                                    {section.text}
                                                </p>
                                            )}

                                            {section.list && (
                                                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                                                    {section.list.map(
                                                        (item, itemIndex) => (
                                                            <li key={itemIndex}>
                                                                {item}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}

                                            {section.code && (
                                                <Card className="p-0 bg-secondary/20 border-border overflow-hidden">
                                                    <div className="flex items-center justify-between px-4 py-2 bg-secondary/40 border-b border-border">
                                                        <div className="flex items-center space-x-2">
                                                            <Code className="h-4 w-4 text-primary" />
                                                            <span className="text-sm text-foreground">
                                                                Código
                                                            </span>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-6 px-2 text-xs"
                                                            onClick={() =>
                                                                copyToClipboard(
                                                                    section.code!,
                                                                    `${index}-code`
                                                                )
                                                            }
                                                        >
                                                            {copiedCode ===
                                                            `${index}-code` ? (
                                                                <Check className="h-3 w-3" />
                                                            ) : (
                                                                <Copy className="h-3 w-3" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                    <pre className="p-4 text-sm text-foreground overflow-x-auto">
                                                        <code>
                                                            {section.code}
                                                        </code>
                                                    </pre>
                                                </Card>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>

                            {/* Navigation footer */}
                            <div className="mt-12 pt-8 border-t border-border">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-muted-foreground">
                                        ¿Encontraste un error?
                                        <Button
                                            variant="link"
                                            className="px-2 h-auto text-primary"
                                        >
                                            Editar en GitHub
                                            <ExternalLink className="ml-1 h-3 w-3" />
                                        </Button>
                                    </div>

                                    <div className="flex space-x-2">
                                        <Badge
                                            variant="outline"
                                            className="text-xs"
                                        >
                                            Última actualización: Ago 8, 2024
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}

"use client";

import { Box, Container, Typography, Grid2 as Grid, Card, alpha, Stack } from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { motion } from "framer-motion";

const modules = [
    {
        title: "Mensajería Avanzada",
        description:
            "Integración de alertas críticas con WhatsApp, Telegram o canales corporativos para reducir tiempos de respuesta.",
        icon: DynamicFeedIcon,
    },
    {
        title: "Reportes Automatizados",
        description:
            "Generación y envío periódico de informes de rendimiento, consumo energético y KPIs operativos directamente a los tomadores de decisiones.",
        icon: AutoGraphIcon,
    },
    {
        title: "Gemelo Digital 3D",
        description:
            "Visualización inmersiva de tu infraestructura, permitiendo localizar en tiempo real el estado de válvulas, sensores y motores.",
        icon: ViewInArIcon,
    },
    {
        title: "Mayor Retención de Datos",
        description:
            "Expande la memoria histórica de 6 meses a años, construyendo un gran volumen de datos esencial para análisis predictivos a largo plazo e IA.",
        icon: DashboardCustomizeIcon,
    },
    {
        title: "Usuarios Adicionales",
        description:
            "Escala el acceso a la plataforma según crezca tu equipo de operación y mantenimiento, definiendo roles y privilegios por área.",
        icon: GroupAddIcon,
    },
    {
        title: "Nuevos Dispositivos",
        description:
            "Capacidad de integrar más sensores, PLCs de nuevas marcas, tableros adicionales u otros equipos OT sin fricción.",
        icon: PrecisionManufacturingIcon,
    },
];

export function PricingModules() {
    return (
        <Box sx={{ bgcolor: "background.default", pb: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 6, textAlign: "center" }}>
                    <Typography variant="h3" fontWeight={800} gutterBottom>
                        Módulos Adicionales
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 1000, mx: "auto" }}>
                        Sobre la suscripción base, puedes ampliar las funcionalidades de LogOS según las necesidades
                        operativas de tu infraestructura. El sistema modular permite que cada instalación escale
                        progresivamente en capacidad y precio.
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {modules.map((mod, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                sx={{ height: "100%" }}
                            >
                                <Card
                                    sx={(theme) => ({
                                        p: 3,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        backgroundColor: alpha(theme.palette.background.paper, 0.4),
                                        backdropFilter: "blur(12px)",
                                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                        transition: "border-color 0.3s",
                                        "&:hover": {
                                            borderColor: alpha(theme.palette.primary.main, 0.5),
                                        },
                                    })}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1.5 }}>
                                        <Box
                                            sx={(theme) => ({
                                                p: 1,
                                                borderRadius: 1,
                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                color: "primary.main",
                                                display: "flex",
                                            })}
                                        >
                                            <mod.icon />
                                        </Box>
                                        <Typography variant="h6" fontWeight={700}>
                                            {mod.title}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ flexGrow: 1, lineHeight: 1.6 }}
                                    >
                                        {mod.description}
                                    </Typography>
                                </Card>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

"use client";

import { Box, Container, Typography, Grid2 as Grid, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { monoFont } from "@/theme";

const cards = [
    {
        title: "Unidad económica",
        body: "En promedio, cada edificio requiere una instalación inicial cercana a $6,000–$30,000 USD en CAPEX, y posteriormente genera ~$300–$500 USD mensuales en suscripción, equivalente a ~$4,600 USD anuales por edificio.",
    },
    {
        title: "Escala por organización",
        body: "Grandes organizaciones operan múltiples instalaciones. Una red hospitalaria puede tener 15–70 edificios, lo que significa que un solo cliente puede representar $4,500–$21,000 USD en ingresos recurrentes mensuales.",
    },
    {
        title: "Proyección regional",
        body: "Si LogOS digitaliza ~12,500 edificios en la región: 12,500 × $300 USD/mes = $3.75M USD mensuales ≈ $45M USD ARR.",
    },
];

export function PricingGrowth() {
    return (
        <Box component="section" sx={{ py: { xs: 10, md: 16 }, backgroundColor: "background.default" }}>
            <Container maxWidth="lg">
                <SectionHeader
                    eyebrow="EXPANSION"
                    title="Modelo de crecimiento"
                    description="Expansión progresiva dentro de organizaciones con múltiples instalaciones físicas."
                />
                <Grid container spacing={{ xs: 2, md: 2.5 }}>
                    {cards.map((card, idx) => (
                        <Grid key={idx} size={{ xs: 12, md: 4 }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                viewport={{ once: true }}
                                sx={(theme) => ({
                                    height: "100%",
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 1,
                                    border: `1px solid ${theme.palette.divider}`,
                                    backgroundColor: "transparent",
                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                    "&:hover": {
                                        borderColor: alpha(theme.palette.primary.main, 0.4),
                                        transform: "translateY(-2px)",
                                    },
                                })}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: monoFont,
                                        fontSize: "0.7rem",
                                        letterSpacing: "0.2em",
                                        color: "primary.main",
                                        mb: 2,
                                    }}
                                >
                                    {String(idx + 1).padStart(2, "0")}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: 600, letterSpacing: "-0.015em", mb: 1.5 }}
                                >
                                    {card.title}
                                </Typography>
                                <Typography sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                    {card.body}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    sx={(theme) => ({
                        mt: { xs: 6, md: 8 },
                        p: { xs: 4, md: 5 },
                        borderRadius: 1,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                        backgroundColor: alpha(theme.palette.primary.main, 0.04),
                    })}
                >
                    <Typography
                        sx={{
                            color: "text.primary",
                            lineHeight: 1.7,
                            fontSize: { xs: "0.95rem", md: "1.05rem" },
                        }}
                    >
                        Crecimiento mediante expansión dentro de clientes existentes y replicación del modelo en
                        Venezuela, México, Colombia, Perú, Argentina y Brasil — donde grandes organizaciones operan
                        cientos de instalaciones físicas que requieren monitoreo operativo y energético. Cada nuevo
                        edificio conectado aumenta permanentemente la base de ingresos recurrentes de la plataforma.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

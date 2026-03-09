"use client";

import { Box, Container, Typography, Grid2 as Grid, Card, alpha } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DomainIcon from "@mui/icons-material/Domain";
import PublicIcon from "@mui/icons-material/Public";
import { motion } from "framer-motion";

export function PricingGrowth() {
    return (
        <Box sx={{ bgcolor: "background.default", minHeight: "30vh", pb: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 6, textAlign: "center" }}>
                    <Typography variant="h3" fontWeight={800} gutterBottom>
                        Modelo de Crecimiento y Expansión
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto" }}>
                        Nuestro modelo de crecimiento se basa en la expansión progresiva dentro de organizaciones con
                        múltiples instalaciones físicas.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            sx={{ height: "100%" }}
                        >
                            <Card
                                sx={(theme) => ({
                                    p: 4,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                                    backdropFilter: "blur(12px)",
                                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                })}
                            >
                                <DomainIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                    1. Unidad Económica
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                    En promedio, cada edificio requiere una instalación inicial de infraestructura
                                    cercana a <strong>$6,000–$30,000 USD</strong> en CAPEX, y posteriormente genera
                                    aproximadamente <strong>$300-$500 USD</strong> mensuales en suscripción, equivalente
                                    a ~$4,600 USD anuales por edificio.
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            sx={{ height: "100%" }}
                        >
                            <Card
                                sx={(theme) => ({
                                    p: 4,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                                    backdropFilter: "blur(12px)",
                                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                })}
                            >
                                <TrendingUpIcon sx={{ fontSize: 40, color: "secondary.main", mb: 2 }} />
                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                    2. Escala por Organización
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                    Grandes organizaciones operan múltiples instalaciones. Por ejemplo, una red
                                    hospitalaria puede tener entre <strong>15 y 70 edificios</strong>, lo que significa
                                    que un solo cliente puede representar <strong>$4,500 a $21,000 USD</strong> en
                                    ingresos recurrentes mensuales por cuenta del cliente.
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            sx={{ height: "100%" }}
                        >
                            <Card
                                sx={(theme) => ({
                                    p: 4,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                                    backdropFilter: "blur(12px)",
                                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                })}
                            >
                                <PublicIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                    3. Proyección de Escala
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                    Si LogOS digitaliza aproximadamente <strong>12,500 edificios</strong> en la región,
                                    el cálculo es directo: 12,500 edificios × $300 USD mensuales ={" "}
                                    <strong>$3.75M USD en ingresos mensuales</strong>, lo que equivale a aproximadamente{" "}
                                    <strong>$45M USD en ARR</strong>.
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    sx={{ mt: 8 }}
                >
                    <Card
                        sx={(theme) => ({
                            p: { xs: 4, md: 6 },
                            backgroundColor: alpha(theme.palette.primary.main, 0.05),
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                            borderRadius: 4,
                        })}
                    >
                        <Typography variant="h6" sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1.1rem" }}>
                            Este crecimiento puede lograrse mediante expansión progresiva dentro de clientes existentes
                            (y nuevos) en el mercado Chileno y replicando el modelo en mercados como{" "}
                            <strong>Venezuela, México, Colombia, Perú, Argentina y Brasil</strong>, donde grandes
                            organizaciones operan cientos de instalaciones físicas que requieren monitoreo operativo y
                            energético. Bajo este modelo de expansión por infraestructura,{" "}
                            <strong>
                                cada nuevo edificio conectado aumenta permanentemente la base de ingresos recurrentes
                            </strong>{" "}
                            de la plataforma, permitiendo que LogOS escale de manera sostenida.
                        </Typography>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
}

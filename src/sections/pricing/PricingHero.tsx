"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, Grid2 as Grid, Card, alpha, Stack, Divider, Button } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import Link from "next/link";

export function PricingHero() {
    return (
        <Box sx={{ bgcolor: "background.default" }}>
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {/* Instalación Inicial */}
                    <Grid size={{ xs: 12, md: 6 }}>
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
                                    p: 5,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "hidden",
                                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                                    backdropFilter: "blur(12px)",
                                    border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        borderColor: theme.palette.primary.main,
                                    },
                                })}
                            >
                                <Stack spacing={3} sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Box
                                            sx={(theme) => ({
                                                p: 1.5,
                                                borderRadius: 1.5,
                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                color: "primary.main",
                                                display: "flex",
                                            })}
                                        >
                                            <MemoryIcon fontSize="large" />
                                        </Box>
                                        <Typography variant="h5" fontWeight={800} letterSpacing={1}>
                                            Instalación Inicial
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h3" fontWeight={900}>
                                            A la medida
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            sx={{ mt: 1, fontWeight: 600 }}
                                        >
                                            Estructurado según tus necesidades operativas
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" color="text.secondary">
                                        Despliegue físico de la infraestructura. Conectamos y digitalizamos los equipos
                                        existentes en tu instalación con nuestros tableros de datos.
                                    </Typography>

                                    <Divider />

                                    <Stack spacing={2}>
                                        {[
                                            "Hardware y dispositivos de medición incluidos.",
                                            "Integración completa con sistemas OT existentes.",
                                            "Licencia inicial del software LogOS.",
                                            "Cantidad de tableros ajustada al tamaño de la infraestructura.",
                                        ].map((feature, fIdx) => (
                                            <Typography
                                                key={fIdx}
                                                variant="body2"
                                                sx={{
                                                    color: "text.secondary",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 2,
                                                }}
                                            >
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        bgcolor: "primary.main",
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                {feature}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Stack>
                                <Box sx={{ mt: 4 }}>
                                    <Link href="/#newsletter" style={{ textDecoration: "none" }}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                fontWeight: 700,
                                                py: 1.5,
                                            }}
                                        >
                                            Cotizar Instalación
                                        </Button>
                                    </Link>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>

                    {/* Suscripción Mensual */}
                    <Grid size={{ xs: 12, md: 6 }}>
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
                                    p: 5,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "hidden",
                                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                                    backdropFilter: "blur(12px)",
                                    border: `2px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        borderColor: theme.palette.secondary.main,
                                    },
                                })}
                            >
                                <Stack spacing={3} sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Box
                                            sx={(theme) => ({
                                                p: 1.5,
                                                borderRadius: 1.5,
                                                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                                                color: "secondary.main",
                                                display: "flex",
                                            })}
                                        >
                                            <CloudSyncIcon fontSize="large" />
                                        </Box>
                                        <Typography variant="h5" fontWeight={800} letterSpacing={1}>
                                            Suscripción Operativa
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h3" fontWeight={900}>
                                            Desde $200{" "}
                                            <Typography component="span" variant="h5" color="text.secondary">
                                                / mes
                                            </Typography>
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            sx={{ mt: 1, fontWeight: 600 }}
                                        >
                                            Suscripción operativa según tu infraestructura
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" color="text.secondary">
                                        Acceso continuo a la plataforma LogOS para monitorear, analizar y gestionar tus
                                        operaciones de forma centralizada y segura.
                                    </Typography>

                                    <Divider />

                                    <Stack spacing={2}>
                                        {[
                                            "Monitoreo cloud en tiempo real.",
                                            "Sistema de alertas críticas.",
                                            "2 usuarios activos incluidos.",
                                            "6 meses de retención histórica de datos.",
                                        ].map((feature, fIdx) => (
                                            <Typography
                                                key={fIdx}
                                                variant="body2"
                                                sx={{
                                                    color: "text.secondary",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 2,
                                                }}
                                            >
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        bgcolor: "secondary.main",
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                {feature}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Stack>
                                <Box sx={{ mt: 4 }}>
                                    <Link href="/#newsletter" style={{ textDecoration: "none" }}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                fontWeight: 700,
                                                py: 1.5,
                                            }}
                                        >
                                            Contactar a Ventas
                                        </Button>
                                    </Link>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

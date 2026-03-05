"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import seeed from "@public/seeed.png";
import { HARDWARE_OPTIONS } from "@/data/landing";
import { Box, Container, Grid2 as Grid, Typography, Stack, alpha, Chip, Card, Button } from "@mui/material";

const hardwareOptions = HARDWARE_OPTIONS;

export function HardwareAlternatives() {
    return (
        <Box component="section" id="hardware" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    sx={{ textAlign: "center", mb: 6 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                            mb: 2,
                            fontWeight: 800,
                            lineHeight: 1.2,
                        }}
                    >
                        <Box
                            component="span"
                            sx={(theme) => ({
                                background: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            })}
                        >
                            Hardware
                        </Box>{" "}
                        <Box component="span" sx={{ color: "primary.main" }}>
                            Industrial
                        </Box>
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{
                            maxWidth: 800,
                            mx: "auto",
                            fontWeight: 400,
                            fontSize: "1.125rem",
                            lineHeight: 1.6,
                        }}
                    >
                        Soluciones de hardware especializadas de Seeed Studio, optimizadas para ejecutar LogOS en
                        entornos industriales exigentes con la mayor estabilidad.
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ maxWidth: 1200, mx: "auto", alignItems: "stretch" }}>
                    {hardwareOptions.map((hardware, index) => (
                        <Grid key={index} size={{ xs: 12, lg: 6 }} sx={{ display: "flex" }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                sx={{ height: "100%" }}
                            >
                                <Card
                                    sx={(theme) => ({
                                        p: 0,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        overflow: "hidden",
                                        border: "1px solid",
                                        borderColor: "divider",
                                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                        "&:hover": {
                                            borderColor: alpha(theme.palette.primary.main, 0.3),
                                            boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.08)}`,
                                        },
                                        "& .hardware-image-wrapper": {
                                            transition: "transform 0.5s ease",
                                        },
                                        "&:hover .hardware-image-wrapper": {
                                            transform: "scale(1.08)",
                                        },
                                    })}
                                >
                                    {/* Image Section */}
                                    <Box sx={{ position: "relative" }}>
                                        <Chip
                                            label={hardware.highlight}
                                            color="primary"
                                            sx={{
                                                position: "absolute",
                                                top: 20,
                                                right: 20,
                                                zIndex: 10,
                                                fontWeight: 700,
                                                boxShadow: 2,
                                            }}
                                        />
                                        <Box
                                            sx={(theme) => ({
                                                aspectRatio: "16/10",
                                                background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.02)})`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                p: 4,
                                                position: "relative",
                                                overflow: "hidden",
                                            })}
                                        >
                                            <Box
                                                className="hardware-image-wrapper"
                                                sx={{
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            >
                                                <Image
                                                    src={hardware.image}
                                                    alt={hardware.name}
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                    style={{
                                                        objectFit: "contain",
                                                        filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* Content Section */}
                                    <Box
                                        sx={{
                                            p: 3,
                                            flex: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                mb: 3,
                                            }}
                                        >
                                            <Box>
                                                <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
                                                    {hardware.name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: "primary.main",
                                                        fontWeight: 600,
                                                        letterSpacing: 0.5,
                                                    }}
                                                >
                                                    {hardware.subtitle.toUpperCase()}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ textAlign: "right" }}>
                                                <Typography variant="h5" color="primary.main" sx={{ fontWeight: 800 }}>
                                                    {hardware.price}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                    sx={{ fontWeight: 500 }}
                                                >
                                                    IVA NO INCLUIDO
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 4, lineHeight: 1.8, fontSize: "0.95rem" }}
                                        >
                                            {hardware.description}
                                        </Typography>

                                        <Grid container spacing={2.5} sx={{ mb: 4 }}>
                                            {hardware.features.map((feature, fIdx) => (
                                                <Grid
                                                    key={fIdx}
                                                    size={{ xs: 6 }}
                                                    sx={{ display: "flex", minHeight: 60 }}
                                                >
                                                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                                        <Box
                                                            sx={(theme) => ({
                                                                display: "flex",
                                                                color: "primary.main",
                                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                                p: 0.75,
                                                                borderRadius: 1.5,
                                                            })}
                                                        >
                                                            <feature.icon sx={{ fontSize: 18 }} />
                                                        </Box>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.primary"
                                                            fontWeight={500}
                                                        >
                                                            {feature.text}
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            ))}
                                        </Grid>

                                        <Box sx={{ mb: 4 }}>
                                            <Typography
                                                variant="caption"
                                                color="primary.main"
                                                sx={{
                                                    display: "block",
                                                    mb: 1.5,
                                                    fontWeight: 700,
                                                    letterSpacing: 1,
                                                    textAlign: "center",
                                                }}
                                            >
                                                ESPECIFICACIONES TÉCNICAS
                                            </Typography>
                                            <Grid container spacing={1.5}>
                                                {hardware.specs.map((spec, sIdx) => (
                                                    <Grid key={sIdx} size={{ xs: 6 }}>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                            sx={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 1,
                                                            }}
                                                        >
                                                            <Box
                                                                component="span"
                                                                sx={{
                                                                    width: 4,
                                                                    height: 4,
                                                                    bgcolor: "divider",
                                                                    borderRadius: "50%",
                                                                }}
                                                            />
                                                            {spec}
                                                        </Typography>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>

                                        <Box
                                            sx={(theme) => ({
                                                p: 2.5,
                                                backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                                                mb: 4,
                                                flex: 1,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                border: "1px solid",
                                                borderRadius: 2,
                                                borderColor: alpha(theme.palette.secondary.main, 0.1),
                                            })}
                                        >
                                            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                                <Box
                                                    component="span"
                                                    sx={{ color: "primary.main", mr: 1, fontWeight: 700 }}
                                                >
                                                    Caso de uso:
                                                </Box>{" "}
                                                {hardware.useCase}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ mt: "auto" }}>
                                            <Link href="#contact" style={{ textDecoration: "none" }}>
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    sx={(theme) => ({
                                                        py: 1.5,
                                                        fontWeight: 700,
                                                        boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
                                                    })}
                                                >
                                                    SOLICITAR COTIZACIÓN
                                                </Button>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Partnership info */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    viewport={{ once: true }}
                    sx={{ mt: 6 }}
                >
                    <Box
                        sx={(theme) => ({
                            backgroundColor: alpha(theme.palette.background.paper, 0.5),
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 2,
                            p: 4,
                            textAlign: "center",
                            mx: "auto",
                            boxShadow: theme.shadows[1],
                        })}
                    >
                        <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
                            <Image
                                src={seeed}
                                alt="Seeed Studio"
                                width={220}
                                height={50}
                                style={{ objectFit: "contain" }}
                                unoptimized
                            />
                        </Box>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ maxWidth: 900, mx: "auto", lineHeight: 1.8 }}
                        >
                            <strong style={{ color: "#e16e09" }}>LogOS</strong> está probado y optimizado para hardware
                            SEEED Studio, garantizando máximo rendimiento, seguridad y compatibilidad total en entornos
                            industriales críticos de alta exigencia.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

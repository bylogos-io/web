"use client";
import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";

export function AboutHero() {
    const theme = useTheme();

    return (
        <Box sx={{ width: "100%", mb: 0 }}>
            {/* ── Hero image ── */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "55vh", md: "70vh" },
                    overflow: "hidden",
                    backgroundColor: "background.default",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundImage: `url(/logos.svg)`,
                        opacity: 0.15,
                        filter: "brightness(0.8)",
                    }}
                />

                {/* Gradient overlay: dark top for header → transparent → dark bottom */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(to bottom,
              ${alpha(theme.palette.background.default, 0.5)} 0%,
              transparent 30%,
              transparent 40%,
              ${theme.palette.background.default} 100%)`,
                        zIndex: 2,
                    }}
                />

                {/* ── Centered text: label + gradient title ── */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "55%",
                        left: 0,
                        right: 0,
                        transform: "translateY(-50%)",
                        zIndex: 3,
                        textAlign: "center",
                        px: { xs: 5, md: 10 },
                    }}
                >
                    <Typography
                        variant="h1"
                        fontWeight={900}
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        sx={{
                            fontSize: { xs: "3rem", md: "6rem" },
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                background: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            ¿Por qué LogOS?
                        </Box>
                    </Typography>
                </Box>
            </Box>

            {/* ── Double-block mission description ── */}
            <Container maxWidth="md">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    sx={{ textAlign: "center", mt: 6, mb: 12 }}
                >
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.6 }}>
                            Estamos cerrando la brecha entre el IT y el OT en la infraestructura industrial que sostiene
                            el mundo moderno. La industria opera con PLCs y sistemas legacy que no permiten la
                            recolección, el análisis de datos ni la correcta implementación de la IA. LogOS conecta este
                            entorno para entregar monitoreo, predicción y análisis operativo en tiempo real respecto a
                            los datos aprovechados de campo, aplicando herramientas digitales en entornos analógicos.
                            Entregamos herramientas modernas al O&M, aumentando considerablemente la productividad.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.6 }}>
                            Entendemos el desafío y temor a probar nuevas tecnologías en áreas críticas; por eso creamos
                            LogOS, operando desde Hispanoamérica, como una solución amigable que se integra fácilmente a
                            tu infraestructura sin interrumpir lo que funciona. Aportamos lo necesario para que la
                            industria se atreva a dar el salto hacia la IA.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

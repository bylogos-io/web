"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, alpha } from "@mui/material";
import { ReterminalScene } from "@/components/3d/ReterminalScene";
import { ClientsMarquee } from "@/sections/landing/ClientsMarquee";

export function Hero() {
    return (
        <Box
            component="section"
            id="hero"
            sx={{
                position: "relative",
                minHeight: "100dvh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "background.default",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 20, mt: { xs: 12, md: 16 } }}>
                <Box sx={{ textAlign: "center", maxWidth: "lg", mx: "auto" }}>
                    {/* Main title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Typography
                            variant="subtitle2"
                            sx={{
                                color: "primary.main",
                                fontWeight: 500,
                                userSelect: "none",
                                pointerEvents: "none",
                                letterSpacing: 2,
                                mb: 2,
                            }}
                        >
                            PROCESOS INTELLIGENTES, INDUSTRIA EFICIENTE.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                                mb: 3,
                                lineHeight: 1.1,
                                userSelect: "none",
                                pointerEvents: "none",
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
                                LogOS es la nueva manera de eficiencia{" "}
                            </Box>
                            <Box component="span" sx={{ color: "primary.main" }}>
                                industrial
                            </Box>
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{
                                mb: 2,
                                maxWidth: 768,
                                mx: "auto",
                                lineHeight: 1.6,
                                fontWeight: 400,
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        >
                            La mejor integración{" "}
                            <Box component="strong" sx={{ color: "primary.main" }}>
                                AIIoT
                            </Box>{" "}
                            para optimización de procesos industriales.
                        </Typography>
                    </motion.div>
                </Box>
            </Container>

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 20, mt: { xs: 0, md: 0 } }}>
                <Box
                    sx={{
                        position: "relative",
                        py: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* Glowing Aura Effect with Pulse */}
                    <Box
                        component={motion.div}
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.6, 0.8, 0.6],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: { xs: "80vw", md: "60vw" },
                            height: { xs: "300px", md: "500px" },
                            background: (theme) => `
                                radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.22)} 0%, transparent 65%),
                                radial-gradient(circle at 30% 40%, ${alpha(theme.palette.primary.light, 0.15)} 0%, transparent 50%),
                                radial-gradient(circle at 70% 60%, ${alpha(theme.palette.primary.dark, 0.12)} 0%, transparent 55%)
                            `,
                            filter: "blur(70px)",
                            borderRadius: "50%",
                            zIndex: 0,
                            pointerEvents: "none",
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                    />

                    {/* Secondary softer glow for depth */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: { xs: "90vw", md: "100%" },
                            height: { xs: "400px", md: "600px" },
                            background: (theme) =>
                                `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
                            filter: "blur(100px)",
                            zIndex: -1,
                            pointerEvents: "none",
                        }}
                    />

                    <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
                        <ReterminalScene />
                    </Box>
                </Box>
            </Container>

            <ClientsMarquee />
        </Box>
    );
}

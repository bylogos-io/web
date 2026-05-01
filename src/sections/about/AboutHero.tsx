"use client";

import { Box, Container, Typography, Stack, alpha } from "@mui/material";
import { motion } from "@/lib/motion-shim";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

export function AboutHero() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.about as any;

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                width: "100%",
                minHeight: { xs: "70vh", md: "82vh" },
                overflow: "hidden",
                backgroundColor: "background.default",
                display: "flex",
                alignItems: "center",
                pt: { xs: 18, md: 16 },
                pb: { xs: 8, md: 10 },
            }}
        >
            <Box
                sx={(theme) => ({
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 20% 30%, ${alpha(theme.palette.primary.main, 0.12)} 0%, transparent 45%), radial-gradient(circle at 80% 70%, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 45%)`,
                    pointerEvents: "none",
                })}
            />
            <Box
                sx={(theme) => ({
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(${alpha(theme.palette.text.primary, 0.04)} 1px, transparent 1px), linear-gradient(90deg, ${alpha(theme.palette.text.primary, 0.04)} 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                    pointerEvents: "none",
                })}
            />
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(/isologo.svg)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: 0.1,
                    pointerEvents: "none",
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Typography
                    component={motion.div}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                        fontFamily: monoFont,
                        fontSize: "0.75rem",
                        letterSpacing: "0.22em",
                        color: "primary.main",
                        mb: 3,
                    }}
                >
                    {c.heroEyebrow}
                </Typography>

                <Typography
                    component={motion.h1}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    variant="h1"
                    sx={{
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.05,
                        color: "common.white",
                        maxWidth: 1100,
                        textWrap: "balance" as any,
                        fontSize: { xs: "2.5rem", md: "4.5rem", lg: "5rem" },
                        mb: { xs: 3, md: 4 },
                    }}
                >
                    {c.heroHeadline}
                </Typography>
                <Typography
                    component={motion.p}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    sx={{
                        color: "text.secondary",
                        maxWidth: 720,
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        lineHeight: 1.6,
                        mb: { xs: 6, md: 8 },
                    }}
                >
                    {c.heroSub}
                </Typography>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 2, sm: 0 }}
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    sx={(theme) => ({
                        borderTop: `1px solid ${theme.palette.divider}`,
                        pt: 3,
                        flexWrap: "wrap",
                        gap: { sm: 6 },
                    })}
                >
                    {[
                        { k: "ARQUITECTURA", v: "Edge Native" },
                        { k: "ENFOQUE", v: "Industrial AI" },
                        { k: "BASE", v: "Hispanoamérica" },
                        { k: "VERTICALES", v: "7 en producción" },
                    ].map((stat) => (
                        <Box key={stat.k}>
                            <Typography
                                sx={{
                                    fontFamily: monoFont,
                                    fontSize: "0.65rem",
                                    letterSpacing: "0.22em",
                                    color: "text.disabled",
                                    mb: 0.5,
                                }}
                            >
                                {stat.k}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: monoFont,
                                    fontSize: "0.95rem",
                                    color: "common.white",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                {stat.v}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}

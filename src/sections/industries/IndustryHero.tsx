"use client";

import { Box, Container, Typography, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

export function IndustryHero() {
    const locale = useLocale();
    const content = getSiteContent(locale);

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                width: "100%",
                height: { xs: "70vh", md: "85vh" },
                minHeight: { xs: 520, md: 640 },
                overflow: "hidden",
                backgroundColor: "background.default",
            }}
        >
            <Box
                component="video"
                src="/industries/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/industries/datacenter.jpeg"
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(20%) brightness(0.55)",
                }}
            />
            <Box
                sx={(theme) => ({
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to bottom, ${alpha(theme.palette.background.default, 0.8)} 0%, ${alpha(theme.palette.background.default, 0.35)} 35%, ${alpha(theme.palette.background.default, 0.55)} 75%, ${theme.palette.background.default} 100%)`,
                })}
            />
            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
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
                    {content.industries.heroEyebrow}
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
                        lineHeight: 1.1,
                        color: "common.white",
                        maxWidth: 920,
                        mx: "auto",
                        textWrap: "balance" as any,
                        fontSize: { xs: "2.25rem", md: "3.75rem" },
                    }}
                >
                    {content.industries.heroTitle ?? "Operaciones críticas en industrias exigentes"}
                </Typography>
                <Typography
                    component={motion.p}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    sx={{
                        mt: 3,
                        color: alpha("#fff", 0.75),
                        maxWidth: 640,
                        mx: "auto",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                    }}
                >
                    {content.industries.heroDescription ??
                        "Energía, infraestructura crítica, agua, manufactura y más."}
                </Typography>
            </Container>
        </Box>
    );
}

"use client";
import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

export function AboutHero() {
    const theme = useTheme();
    const locale = useLocale();
    const content = getSiteContent(locale);

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
                        backgroundImage: `url(/isologo.svg)`,
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
                            {content.about.heroTitle}
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
                    sx={{ mt: 8, mb: 12 }}
                >
                    <Box sx={{ mb: 6 }}>
                        <Typography
                            variant="h6"
                            color="text.primary"
                            sx={{
                                fontWeight: 400,
                                lineHeight: 1.8,
                                textAlign: "justify",
                                hyphens: "auto",
                                opacity: 0.9,
                                fontSize: { xs: "1rem", md: "1.25rem" },
                            }}
                        >
                            {content.about.paragraphs[0]}
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography
                            variant="h6"
                            color="text.primary"
                            sx={{
                                fontWeight: 400,
                                lineHeight: 1.8,
                                textAlign: "justify",
                                hyphens: "auto",
                                opacity: 0.9,
                                fontSize: { xs: "1rem", md: "1.25rem" },
                            }}
                        >
                            {content.about.paragraphs[1]}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

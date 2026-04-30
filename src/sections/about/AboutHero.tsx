"use client";
import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

export function AboutHero() {
    const theme = useTheme();
    const locale = useLocale();
    const content = getSiteContent(locale);

    return (
        <Box component="section" sx={{ width: "100%" }}>
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
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundImage: `url(/isologo.svg)`,
                        opacity: 0.12,
                        filter: "brightness(0.8)",
                    }}
                />
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
                <Box
                    sx={{
                        position: "absolute",
                        top: "55%",
                        left: 0,
                        right: 0,
                        transform: "translateY(-50%)",
                        zIndex: 3,
                        textAlign: "center",
                        px: { xs: 4, md: 8 },
                    }}
                >
                    <Typography
                        component={motion.div}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        sx={{
                            fontFamily: monoFont,
                            fontSize: "0.75rem",
                            letterSpacing: "0.18em",
                            color: "primary.main",
                            mb: 2,
                        }}
                    >
                        {content.about.heroEyebrow}
                    </Typography>
                    <Typography
                        component={motion.h1}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        variant="h1"
                        sx={{
                            fontWeight: 600,
                            letterSpacing: "-0.03em",
                            textWrap: "balance" as any,
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

            <Container maxWidth="md">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 8, md: 12 } }}
                >
                    {content.about.paragraphs.map((p, idx) => (
                        <Typography
                            key={idx}
                            variant="body1"
                            sx={{
                                color: "text.primary",
                                opacity: 0.9,
                                lineHeight: 1.8,
                                fontSize: { xs: "1rem", md: "1.125rem" },
                                mb: idx === content.about.paragraphs.length - 1 ? 0 : 4,
                                textWrap: "balance" as any,
                            }}
                        >
                            {p}
                        </Typography>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

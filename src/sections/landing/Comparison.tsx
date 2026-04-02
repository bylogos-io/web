"use client";

import { motion } from "framer-motion";
import React from "react";
import { Box, Container, Typography, alpha, Stack, Grid2 as Grid, Card, useTheme } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HubIcon from "@mui/icons-material/Hub";
import SpeedIcon from "@mui/icons-material/Speed";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import SecurityIcon from "@mui/icons-material/Security";

import { COMPARISON_BEFORE, COMPARISON_AFTER } from "@/data/landing";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

const ICON_MAP: Record<string, React.ReactNode> = {
    cloud: <CloudQueueIcon />,
    unified: <HubIcon />,
    ai: <PsychologyIcon />,
    realtime: <SpeedIcon />,
    savings: <TrendingDownIcon />,
    security: <SecurityIcon />,
};

export function Comparison() {
    const theme = useTheme();
    const locale = useLocale();
    const content = getSiteContent(locale);
    const beforeItems = COMPARISON_BEFORE.map((item, index) => ({
        ...item,
        ...content.home.comparison.beforeItems[index],
    }));
    const afterFeatures = COMPARISON_AFTER.map((item, index) => ({
        ...item,
        ...content.home.comparison.afterItems[index],
    }));

    return (
        <Box
            component="section"
            id="comparison"
            sx={{
                py: { xs: 10, md: 15 },
                background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 50%, ${alpha(theme.palette.background.default, 0)} 100%)`,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background blobs for "epic" look */}
            <Box
                sx={{
                    position: "absolute",
                    top: "20%",
                    right: "-10%",
                    width: "40%",
                    height: "40%",
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
                    filter: "blur(80px)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                color: "primary.main",
                                fontWeight: 800,
                                letterSpacing: 2,
                                mb: 1,
                                display: "block",
                                fontSize: "0.75rem",
                            }}
                        >
                            {content.home.comparison.eyebrow}
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={(theme) => ({
                                fontWeight: 900,
                                fontSize: { xs: "2rem", md: "3.2rem" },
                                lineHeight: 1.1,
                                mb: 2,
                                background: `linear-gradient(to right, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 100%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            })}
                        >
                            {content.home.comparison.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: 600,
                                mx: "auto",
                                color: "text.secondary",
                                fontWeight: 400,
                                lineHeight: 1.5,
                                fontSize: { xs: "0.95rem", md: "1.1rem" },
                            }}
                        >
                            {content.home.comparison.description}
                        </Typography>
                    </motion.div>
                </Box>

                <Grid
                    container
                    spacing={0}
                    alignItems="stretch"
                    sx={{ borderRadius: 4, overflow: "hidden", border: "1px solid", borderColor: "divider" }}
                >
                    {/* El Pasado (Antes) */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{ height: "100%" }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    p: { xs: 4, md: 5 },
                                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: "text.secondary",
                                        mb: 4,
                                        fontWeight: 800,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        opacity: 0.5,
                                        letterSpacing: 1,
                                    }}
                                >
                                    {content.home.comparison.beforeLabel}
                                </Typography>

                                <Stack spacing={3}>
                                    {beforeItems.map((item: any, idx: number) => (
                                        <Box key={idx}>
                                            <Stack direction="row" spacing={2} alignItems="flex-start">
                                                <ErrorOutlineIcon
                                                    sx={{
                                                        color: alpha(theme.palette.error.main, 0.4),
                                                        mt: 0.3,
                                                        fontSize: 20,
                                                    }}
                                                />
                                                <Box>
                                                    <Typography
                                                        variant="subtitle2"
                                                        sx={{
                                                            fontWeight: 700,
                                                            color: "text.secondary",
                                                            lineHeight: 1.2,
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: "text.disabled",
                                                            display: "block",
                                                            mt: 0.5,
                                                            lineHeight: 1.5,
                                                            maxWidth: "90%",
                                                        }}
                                                    >
                                                        {item.desc}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* El Futuro (Ahora con LogOS) */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{ height: "100%" }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    p: { xs: 4, md: 5 },
                                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.12)} 0%, ${alpha(theme.palette.primary.main, 0.04)} 100%)`,
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    borderLeft: { md: "1px solid" },
                                    borderColor: { md: "divider" },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "inline-flex",
                                        mb: 5,
                                        p: 0.5,
                                        px: 1.5,
                                        background: theme.palette.primary.main,
                                        borderRadius: 1,
                                        width: "fit-content",
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontWeight: 900,
                                            fontSize: "0.65rem",
                                            color: "white",
                                            letterSpacing: 1.5,
                                        }}
                                    >
                                        {content.home.comparison.afterLabel}
                                    </Typography>
                                </Box>

                                <Grid container spacing={3.5}>
                                    {afterFeatures.map((feature: any, idx: number) => (
                                        <Grid key={idx} size={{ xs: 12, sm: 6 }}>
                                            <Box>
                                                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                                    <Box
                                                        sx={{
                                                            color: "primary.main",
                                                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                            p: 0.75,
                                                            borderRadius: 1,
                                                            display: "flex",
                                                            "& svg": { fontSize: "1.1rem" },
                                                        }}
                                                    >
                                                        {ICON_MAP[feature.icon]}
                                                    </Box>
                                                    <Box>
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{
                                                                fontWeight: 800,
                                                                fontSize: "0.85rem",
                                                                lineHeight: 1.2,
                                                            }}
                                                        >
                                                            {feature.title}
                                                        </Typography>
                                                        <Typography
                                                            variant="caption"
                                                            sx={{
                                                                color: "text.secondary",
                                                                display: "block",
                                                                mt: 0.5,
                                                                lineHeight: 1.5,
                                                                fontSize: "0.75rem",
                                                            }}
                                                        >
                                                            {feature.desc}
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>

                                <Box sx={{ mt: "auto", pt: 5 }}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: 2,
                                            backgroundColor: alpha(theme.palette.primary.main, 0.08),
                                            border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ color: "primary.main", fontWeight: 800, lineHeight: 1.2 }}
                                        >
                                            {content.home.comparison.savingsTitle}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{ color: "text.secondary", fontSize: "0.7rem" }}
                                        >
                                            {content.home.comparison.savingsDescription}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

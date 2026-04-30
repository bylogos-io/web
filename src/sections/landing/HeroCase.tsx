"use client";

import { Box, Container, Grid2 as Grid, Stack, Typography, alpha } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

function computeProductionTime(
    sinceISO: string,
    monthsUnit: string,
    yearsUnit: string,
): string {
    const start = new Date(sinceISO + "T00:00:00Z");
    const now = new Date();
    let months =
        (now.getUTCFullYear() - start.getUTCFullYear()) * 12 +
        (now.getUTCMonth() - start.getUTCMonth());
    if (now.getUTCDate() < start.getUTCDate()) months -= 1;
    if (months < 1) months = 1;

    if (months >= 24) {
        const years = Math.floor(months / 12);
        const rem = months % 12;
        return rem === 0
            ? `${years} ${yearsUnit}`
            : `${years}.${Math.round((rem / 12) * 10)} ${yearsUnit}`;
    }
    return `${months} ${monthsUnit}`;
}

export function HeroCase() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const data = (content.home as any).landingV2.heroCase as {
        eyebrow: string;
        quote: string;
        cite: string;
        role: string;
        inProductionSince: string;
        inProductionLabel: string;
        monthsUnit: string;
        yearsUnit: string;
        metrics: { value: string; label: string }[];
    };

    const [duration, setDuration] = useState<string>(() =>
        computeProductionTime(data.inProductionSince, data.monthsUnit, data.yearsUnit),
    );

    useEffect(() => {
        // Recompute on mount and once a day in case page stays open
        setDuration(computeProductionTime(data.inProductionSince, data.monthsUnit, data.yearsUnit));
        const id = window.setInterval(
            () =>
                setDuration(
                    computeProductionTime(data.inProductionSince, data.monthsUnit, data.yearsUnit),
                ),
            1000 * 60 * 60 * 24,
        );
        return () => window.clearInterval(id);
    }, [data.inProductionSince, data.monthsUnit, data.yearsUnit]);

    const metrics = [...data.metrics, { value: duration, label: data.inProductionLabel }];

    return (
        <Box
            component="section"
            id="hero-case"
            sx={(theme) => ({
                py: { xs: 10, md: 16 },
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse at center, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
                    pointerEvents: "none",
                },
            })}
        >
            <Container maxWidth="lg" sx={{ position: "relative" }}>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    sx={(theme) => ({
                        position: "relative",
                        p: { xs: 4, md: 7 },
                        borderRadius: 1,
                        border: `1px solid ${theme.palette.divider}`,
                        background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.7)} 0%, ${alpha(theme.palette.background.paper, 0.3)} 100%)`,
                        backdropFilter: "blur(16px)",
                        overflow: "hidden",
                    })}
                >
                    <Box
                        sx={(theme) => ({
                            position: "absolute",
                            top: -40,
                            right: -40,
                            color: alpha(theme.palette.primary.main, 0.08),
                            fontSize: 280,
                            pointerEvents: "none",
                        })}
                    >
                        <FormatQuoteIcon sx={{ fontSize: "inherit" }} />
                    </Box>

                    <Typography
                        sx={{
                            fontFamily: monoFont,
                            fontSize: "0.75rem",
                            letterSpacing: "0.18em",
                            color: "primary.main",
                            mb: 4,
                            position: "relative",
                        }}
                    >
                        {data.eyebrow}
                    </Typography>

                    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ position: "relative" }}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography
                                component="blockquote"
                                sx={{
                                    fontSize: { xs: "1.35rem", md: "1.75rem" },
                                    fontWeight: 500,
                                    lineHeight: 1.35,
                                    letterSpacing: "-0.015em",
                                    mb: 4,
                                    color: "text.primary",
                                    textWrap: "balance" as any,
                                }}
                            >
                                {data.quote}
                            </Typography>
                            <Stack spacing={0.5}>
                                <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
                                    {data.cite}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: monoFont,
                                        fontSize: "0.75rem",
                                        color: "text.secondary",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    {data.role}
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <Stack
                                spacing={2.5}
                                divider={
                                    <Box
                                        sx={(theme) => ({
                                            height: 1,
                                            background: `linear-gradient(90deg, transparent, ${theme.palette.divider} 30%, ${theme.palette.divider} 70%, transparent)`,
                                        })}
                                    />
                                }
                                sx={{
                                    pl: { md: 4 },
                                    borderLeft: { md: 1 },
                                    borderColor: { md: "divider" },
                                }}
                            >
                                {metrics.map((m, idx) => (
                                    <Box
                                        key={idx}
                                        component={motion.div}
                                        initial={{ opacity: 0, x: 12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    >
                                        <Stack direction="row" alignItems="baseline" spacing={2}>
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: "1.6rem", md: "2rem" },
                                                    fontWeight: 600,
                                                    color: "primary.main",
                                                    letterSpacing: "-0.02em",
                                                    minWidth: 130,
                                                }}
                                            >
                                                {m.value}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "0.85rem",
                                                    color: "text.secondary",
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                {m.label}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

"use client";

import { useEffect, useState } from "react";
import { Box, Container, Typography, Grid2 as Grid, alpha } from "@mui/material";
import { motion, AnimatePresence } from "@/lib/motion-shim";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { INDUSTRY_CARDS_DATA } from "@/data/industries";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { BracketedFrame } from "@/components/BracketedFrame";
import { monoFont } from "@/theme";

const ROTATE_MS = 7000;

export function IndustryFeatured() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const solutions = (content.industries as any).solutions as string[] | undefined;
    const slides = INDUSTRY_CARDS_DATA.map((industry, idx) => ({
        ...industry,
        title: content.industries.cards[idx]?.title ?? industry.title,
        description: content.industries.cards[idx]?.description ?? industry.description,
        points: content.industries.cards[idx]?.points ?? industry.points,
        solution: solutions?.[idx] ?? solutions?.[0] ?? "",
    }));
    const caseLabel = (content.industries as any).caseAriaLabel ?? "Case";

    const [current, setCurrent] = useState(0);
    const total = slides.length;

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((i) => (i + 1) % total);
        }, ROTATE_MS);
        return () => clearInterval(id);
    }, [total]);

    const slide = slides[current];

    const cols = [
        {
            label: content.industries.featuredChallengeLabel,
            icon: WarningAmberIcon,
            body: slide.description,
        },
        {
            label: content.industries.featuredSolutionLabel,
            icon: DoneAllIcon,
            body: slide.solution,
        },
        {
            label: content.industries.featuredImpactLabel,
            icon: TrendingUpIcon,
            body: slide.points.join("\n"),
        },
    ];

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 6 },
                backgroundColor: "background.default",
                minHeight: { md: "100dvh" },
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                    <Typography
                        sx={{
                            fontFamily: monoFont,
                            fontSize: "0.75rem",
                            letterSpacing: "0.22em",
                            color: "primary.main",
                        }}
                    >
                        {content.industries.featuredEyebrow}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: monoFont,
                            fontSize: "0.75rem",
                            letterSpacing: "0.18em",
                            color: "text.disabled",
                        }}
                    >
                        {String(current + 1).padStart(2, "0")}{" "}
                        <Box component="span" sx={{ opacity: 0.5 }}>
                            / {String(total).padStart(2, "0")}
                        </Box>
                    </Typography>
                </Box>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: { xs: 3, md: 3 } }}>
                            <Grid size={{ xs: 12, md: 8 }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 400,
                                        letterSpacing: "-0.02em",
                                        lineHeight: 1.05,
                                        color: "common.white",
                                        mb: 1.5,
                                        fontSize: { xs: "1.75rem", md: "2.25rem" },
                                    }}
                                >
                                    {slide.title}
                                </Typography>
                                <Typography
                                    sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.5, maxWidth: 560 }}
                                >
                                    {slide.description}
                                </Typography>
                            </Grid>
                            <Grid
                                size={{ xs: 12, md: 4 }}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: { xs: "flex-start", md: "flex-end" },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: monoFont,
                                        fontSize: "0.7rem",
                                        letterSpacing: "0.2em",
                                        color: "primary.main",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {slide.tag}
                                </Typography>
                            </Grid>
                        </Grid>

                        <BracketedFrame sx={{ mb: { xs: 3, md: 3 }, p: { xs: 1.5, md: 2 } }}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: { xs: 180, md: "26vh" },
                                    maxHeight: 280,
                                    overflow: "hidden",
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    filter: "grayscale(15%) brightness(0.95)",
                                }}
                            />
                        </BracketedFrame>

                        <BracketedFrame color="divider" size={20} sx={{ p: { xs: 0, md: 0 } }}>
                            <Grid container sx={{ position: "relative" }}>
                                {cols.map((col, idx) => {
                                    const Icon = col.icon;
                                    return (
                                        <Grid
                                            key={idx}
                                            size={{ xs: 12, md: 4 }}
                                            sx={(theme) => ({
                                                p: { xs: 2.5, md: 3 },
                                                borderLeft: {
                                                    xs: "none",
                                                    md:
                                                        idx === 0
                                                            ? "none"
                                                            : `1px solid ${alpha(theme.palette.divider, 0.6)}`,
                                                },
                                                borderTop: {
                                                    xs:
                                                        idx === 0
                                                            ? "none"
                                                            : `1px solid ${alpha(theme.palette.divider, 0.6)}`,
                                                    md: "none",
                                                },
                                            })}
                                        >
                                            <Icon sx={{ color: "primary.main", fontSize: 18, mb: 1.5 }} />
                                            <Typography
                                                sx={{
                                                    fontFamily: monoFont,
                                                    fontSize: "0.7rem",
                                                    letterSpacing: "0.22em",
                                                    color: "common.white",
                                                    mb: 1.25,
                                                }}
                                            >
                                                {col.label}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "text.secondary",
                                                    fontSize: "0.85rem",
                                                    lineHeight: 1.5,
                                                    whiteSpace: "pre-line",
                                                }}
                                            >
                                                {col.body}
                                            </Typography>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </BracketedFrame>
                    </motion.div>
                </AnimatePresence>

                <Box sx={{ display: "flex", justifyContent: "center", gap: 1.25, mt: { xs: 3, md: 3 } }}>
                    {slides.map((_, idx) => {
                        const active = idx === current;
                        return (
                            <Box
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                role="button"
                                aria-label={`${caseLabel} ${idx + 1}`}
                                sx={(theme) => ({
                                    width: active ? 28 : 8,
                                    height: 8,
                                    borderRadius: 1,
                                    backgroundColor: active
                                        ? theme.palette.primary.main
                                        : alpha(theme.palette.text.primary, 0.2),
                                    cursor: "pointer",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    "&:hover": {
                                        backgroundColor: active
                                            ? theme.palette.primary.main
                                            : alpha(theme.palette.text.primary, 0.4),
                                    },
                                })}
                            />
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}

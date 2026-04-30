"use client";

import { useRef, useState } from "react";
import { Box, Container, Grid2 as Grid, Stack, Typography, alpha } from "@mui/material";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

export function PlatformProcess() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const process = (content.platform as any).process;

    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const [active, setActive] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const total = process?.steps?.length ?? 3;
        const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total - 0.0001)));
        setActive(idx);
    });

    if (!process) return null;
    const steps = process.steps as Array<{ title: string; body: string; items: string[] }>;

    return (
        <Box
            ref={ref}
            component="section"
            sx={{
                position: "relative",
                width: "100%",
                height: `${steps.length * 100}dvh`,
                backgroundColor: "background.default",
            }}
        >
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    height: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="lg" sx={{ width: "100%" }}>
                    <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography
                                sx={{
                                    fontFamily: monoFont,
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.22em",
                                    color: "primary.main",
                                    mb: 2,
                                }}
                            >
                                {process.eyebrow}
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 600,
                                    letterSpacing: "-0.025em",
                                    lineHeight: 1.05,
                                    color: "common.white",
                                    mb: 2,
                                    textWrap: "balance" as any,
                                }}
                            >
                                {process.title}
                            </Typography>
                            <Typography sx={{ color: "text.secondary", lineHeight: 1.6, mb: 5, maxWidth: 460 }}>
                                {process.sub}
                            </Typography>

                            <Stack spacing={1.5}>
                                {steps.map((s, idx) => {
                                    const isActive = idx === active;
                                    const isPast = idx < active;
                                    return (
                                        <Box
                                            key={idx}
                                            sx={(theme) => ({
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                                py: 1,
                                                opacity: isActive ? 1 : isPast ? 0.55 : 0.35,
                                                transition: "opacity 0.4s ease",
                                            })}
                                        >
                                            <Box
                                                sx={(theme) => ({
                                                    position: "relative",
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: "50%",
                                                    border: `1px solid ${
                                                        isActive || isPast
                                                            ? theme.palette.primary.main
                                                            : alpha(theme.palette.text.primary, 0.25)
                                                    }`,
                                                    backgroundColor:
                                                        isPast || isActive
                                                            ? alpha(theme.palette.primary.main, 0.15)
                                                            : "transparent",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontFamily: monoFont,
                                                    fontSize: "0.7rem",
                                                    color: isActive || isPast ? "primary.main" : "text.disabled",
                                                    transition: "all 0.3s ease",
                                                    flexShrink: 0,
                                                })}
                                            >
                                                0{idx + 1}
                                            </Box>
                                            <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    color: isActive ? "common.white" : "text.secondary",
                                                    fontSize: "0.95rem",
                                                    transition: "color 0.3s ease",
                                                }}
                                            >
                                                {s.title}
                                            </Typography>
                                        </Box>
                                    );
                                })}
                            </Stack>

                            <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 1.5 }}>
                                <Box
                                    sx={(theme) => ({
                                        flex: 1,
                                        height: 2,
                                        borderRadius: 1,
                                        backgroundColor: alpha(theme.palette.text.primary, 0.1),
                                        overflow: "hidden",
                                        position: "relative",
                                    })}
                                >
                                    <Box
                                        component={motion.div}
                                        style={{ scaleX: scrollYProgress }}
                                        sx={(theme) => ({
                                            position: "absolute",
                                            inset: 0,
                                            backgroundColor: theme.palette.primary.main,
                                            transformOrigin: "left",
                                        })}
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: monoFont,
                                        fontSize: "0.7rem",
                                        letterSpacing: "0.18em",
                                        color: "text.disabled",
                                    }}
                                >
                                    0{active + 1} / 0{steps.length}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box
                                sx={(theme) => ({
                                    position: "relative",
                                    p: { xs: 4, md: 6 },
                                    borderRadius: 1,
                                    border: `1px solid ${theme.palette.divider}`,
                                    backgroundColor: alpha(theme.palette.background.paper, 0.5),
                                    backdropFilter: "blur(12px)",
                                    minHeight: { xs: 380, md: 460 },
                                    overflow: "hidden",
                                })}
                            >
                                <Box
                                    sx={(theme) => ({
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 2,
                                        background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, transparent 100%)`,
                                        opacity: 0.5,
                                    })}
                                />
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={active}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: monoFont,
                                                fontSize: "5rem",
                                                fontWeight: 600,
                                                letterSpacing: "-0.05em",
                                                lineHeight: 1,
                                                color: "primary.main",
                                                opacity: 0.85,
                                                mb: 3,
                                            }}
                                        >
                                            0{active + 1}
                                        </Typography>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: 600,
                                                letterSpacing: "-0.02em",
                                                color: "common.white",
                                                mb: 2.5,
                                                fontSize: { xs: "1.75rem", md: "2.25rem" },
                                            }}
                                        >
                                            {steps[active].title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "text.secondary",
                                                fontSize: "1rem",
                                                lineHeight: 1.65,
                                                mb: 4,
                                                maxWidth: 540,
                                            }}
                                        >
                                            {steps[active].body}
                                        </Typography>
                                        <Stack spacing={1.25}>
                                            {steps[active].items.map((it, i) => (
                                                <Stack key={i} direction="row" spacing={1.25} alignItems="center">
                                                    <CheckCircleOutlineIcon
                                                        sx={{ color: "primary.main", fontSize: 18 }}
                                                    />
                                                    <Typography
                                                        sx={{ color: "text.primary", fontSize: "0.95rem" }}
                                                    >
                                                        {it}
                                                    </Typography>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </motion.div>
                                </AnimatePresence>

                                {active === steps.length - 1 && (
                                    <Box
                                        component={motion.div}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        sx={(theme) => ({
                                            position: "absolute",
                                            right: { xs: 16, md: 24 },
                                            bottom: { xs: 16, md: 24 },
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            color: "primary.main",
                                            fontFamily: monoFont,
                                            fontSize: "0.7rem",
                                            letterSpacing: "0.18em",
                                        })}
                                    >
                                        <span>{process.ctaHint}</span>
                                        <ArrowDownwardIcon sx={{ fontSize: 14 }} />
                                    </Box>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

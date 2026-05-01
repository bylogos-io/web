"use client";

import { motion } from "@/lib/motion-shim";
import { Box, Button, Container, Grid2 as Grid, Typography, alpha } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { JoinedButtonGroup } from "@/components/JoinedButtonGroup";
import dynamic from "next/dynamic";
const ReterminalScene = dynamic(
    () => import("@/components/3d/ReterminalScene").then((m) => m.ReterminalScene),
    {
        ssr: false,
        loading: () => <div style={{ width: "100%", aspectRatio: "1/1", maxWidth: 450 }} />,
    },
);
import { ClientsMarquee } from "@/sections/landing/ClientsMarquee";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

export function Hero() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const data = (content.home as any).landingV2.hero as {
        eyebrow: string;
        titleLead: string;
        titleEmphasis: string;
        sub: string;
        subSecondary: string;
        subTertiary: string;
        audience: string;
        ctaPrimary: string;
        ctaSecondary: string;
        ctaPrimaryHref: string;
        ctaSecondaryHref: string;
        callouts: { label: string; value: string }[];
    };

    return (
        <Box
            component="section"
            id="hero"
            sx={{
                position: "relative",
                minHeight: "100dvh",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                justifyContent: "center",
                backgroundColor: "background.default",
                overflow: "hidden",
                pt: { xs: 14, md: 18 },
                pb: { xs: 6, md: 8 },
            }}
        >
            {/* Vercel-style grid backdrop */}
            <Box
                sx={(theme) => ({
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `
                        linear-gradient(${alpha(theme.palette.text.primary, 0.07)} 1px, transparent 1px),
                        linear-gradient(90deg, ${alpha(theme.palette.text.primary, 0.07)} 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                    maskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
                    pointerEvents: "none",
                })}
            />
            {/* Soft glow on right */}
            <Box
                sx={(theme) => ({
                    position: "absolute",
                    top: "30%",
                    right: "5%",
                    width: { xs: "90vw", md: "45vw" },
                    height: { xs: 320, md: 480 },
                    background: `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.14)} 0%, transparent 65%)`,
                    filter: "blur(80px)",
                    pointerEvents: "none",
                })}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
                <Grid container spacing={{ xs: 6, md: 4, lg: 6 }} alignItems="center">
                    {/* LEFT — text block */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ textAlign: "left", maxWidth: 640 }}>
                            {/* Eyebrow */}
                            <Typography
                                component={motion.p}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                sx={{
                                    fontFamily: monoFont,
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.18em",
                                    color: "primary.main",
                                    mb: 3,
                                }}
                            >
                                {data.eyebrow}
                            </Typography>

                            {/* Title */}
                            <Typography
                                component={motion.h1}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.05 }}
                                variant="h1"
                                sx={{ mb: 4, textWrap: "balance" as any }}
                            >
                                {data.titleLead}{" "}
                                <Box
                                    component="span"
                                    sx={(theme) => ({
                                        background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    })}
                                >
                                    {data.titleEmphasis}
                                </Box>
                            </Typography>

                            {/* Primary paragraph — justified */}
                            <Typography
                                component={motion.p}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                sx={{
                                    color: "text.primary",
                                    fontSize: { xs: "1rem", md: "1.08rem" },
                                    lineHeight: 1.55,
                                    textAlign: "justify",
                                    textJustify: "inter-word",
                                    hyphens: "none",
                                    WebkitHyphens: "none",
                                    mb: 3,
                                }}
                            >
                                {data.sub} {data.subTertiary}
                            </Typography>

                            {/* Mid separator — italic, no decorations */}
                            <Typography
                                component={motion.p}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                sx={{
                                    color: "text.secondary",
                                    fontSize: { xs: "0.95rem", md: "1.02rem" },
                                    lineHeight: 1.5,
                                    fontStyle: "italic",
                                    mb: 3,
                                }}
                            >
                                {data.subSecondary}
                            </Typography>

                            {/* Audience filter */}
                            <Typography
                                sx={{
                                    fontFamily: monoFont,
                                    fontSize: "0.72rem",
                                    color: "text.disabled",
                                    mb: 4,
                                }}
                            >
                                {data.audience}
                            </Typography>

                            {/* CTAs */}
                            <JoinedButtonGroup
                                component={motion.div}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.25 }}
                            >
                                <Button
                                    href={data.ctaPrimaryHref}
                                    variant="contained"
                                    size="lg"
                                    endIcon={<ArrowForwardIcon />}
                                >
                                    {data.ctaPrimary}
                                </Button>
                                <Button
                                    href={data.ctaSecondaryHref}
                                    variant="contained"
                                    size="lg"
                                    startIcon={<PlayArrowRoundedIcon />}
                                    sx={(theme) => ({
                                        backgroundColor: "transparent",
                                        color: theme.palette.text.primary,
                                        "&:hover": { backgroundColor: alpha(theme.palette.text.primary, 0.04) },
                                    })}
                                >
                                    {data.ctaSecondary}
                                </Button>
                            </JoinedButtonGroup>
                        </Box>
                    </Grid>

                    {/* RIGHT — 3D scene */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            sx={{
                                position: "relative",
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                component={motion.div}
                                animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.75, 0.5] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                sx={(theme) => ({
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    width: { xs: "70vw", md: "100%" },
                                    height: { xs: 320, md: 480 },
                                    background: `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.22)} 0%, transparent 65%)`,
                                    filter: "blur(80px)",
                                    borderRadius: "50%",
                                    zIndex: 0,
                                    pointerEvents: "none",
                                    transform: "translate(-50%, -50%)",
                                })}
                            />
                            <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
                                <ReterminalScene />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Callouts grid — full width below */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    sx={(theme) => ({
                        mt: { xs: 6, md: 8 },
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        backgroundColor: alpha(theme.palette.background.paper, 0.4),
                        backdropFilter: "blur(12px)",
                        overflow: "hidden",
                    })}
                >
                    <Grid container>
                        {data.callouts.map((c, idx) => (
                            <Grid
                                key={c.label}
                                size={{ xs: 12, sm: 6, md: 3 }}
                                sx={(theme) => ({
                                    py: { xs: 2, md: 2.5 },
                                    px: 2,
                                    borderRight: {
                                        sm:
                                            idx % 2 === 0
                                                ? `1px solid ${theme.palette.divider}`
                                                : "none",
                                        md:
                                            idx < data.callouts.length - 1
                                                ? `1px solid ${theme.palette.divider}`
                                                : "none",
                                    },
                                    borderBottom: {
                                        xs:
                                            idx < data.callouts.length - 1
                                                ? `1px solid ${theme.palette.divider}`
                                                : "none",
                                        sm:
                                            idx < data.callouts.length - 2
                                                ? `1px solid ${theme.palette.divider}`
                                                : "none",
                                        md: "none",
                                    },
                                    textAlign: "center",
                                })}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: monoFont,
                                        fontSize: "0.65rem",
                                        color: "text.disabled",
                                        letterSpacing: "0.18em",
                                        mb: 0.75,
                                    }}
                                >
                                    {c.label}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: monoFont,
                                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                                        color: "text.primary",
                                        fontWeight: 500,
                                        letterSpacing: "-0.005em",
                                    }}
                                >
                                    {c.value}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            <Box sx={{ mt: { xs: 3, md: 4 } }}>
                <ClientsMarquee />
            </Box>
        </Box>
    );
}

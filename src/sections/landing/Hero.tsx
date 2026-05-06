"use client";

import { Box, Button, Container, Grid2 as Grid, Typography, alpha } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { JoinedButtonGroup } from "@/components/JoinedButtonGroup";
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
            {/* Background video */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                    zIndex: 0,
                    backgroundColor: "#000",
                }}
            >
                <Box
                    component="video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/redsalud-bg-study.png"
                    aria-hidden
                    sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.35,
                        filter: "saturate(0.85) contrast(1.05)",
                    }}
                >
                    <source src="/hero.webm" type="video/webm" />
                    <source src="/hero.mp4" type="video/mp4" />
                </Box>
                {/* Vignette */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse 90% 75% at 50% 45%, transparent 0%, transparent 45%, rgba(0,0,0,0.55) 85%, rgba(0,0,0,0.85) 100%)",
                    }}
                />
                {/* Fade bottom into page */}
                <Box
                    sx={(theme) => ({
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.35)} 0%, ${alpha(theme.palette.background.default, 0.15)} 35%, ${alpha(theme.palette.background.default, 0.55)} 70%, ${theme.palette.background.default} 100%)`,
                    })}
                />
                {/* Top fade for nav legibility */}
                <Box
                    sx={(theme) => ({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 160,
                        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, transparent 100%)`,
                    })}
                />
            </Box>

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
                <Box sx={{ textAlign: "left", maxWidth: 640 }}>
                            {/* Eyebrow */}
                            <Typography
                                component="p"
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
                                component="h1"
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
                                component="p"
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
                                component="p"
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
                            <JoinedButtonGroup>
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

                {/* Callouts grid — full width below */}
                <Box
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

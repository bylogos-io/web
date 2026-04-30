"use client";

import { Box, Container, Grid2 as Grid, Stack, Typography, alpha } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";
import { monoFont } from "@/theme";
import { ReactNode } from "react";

function MonoLabel({ children, color = "primary" }: { children: ReactNode; color?: "primary" | "secondary" | "muted" }) {
    return (
        <Typography
            sx={(theme) => ({
                fontFamily: monoFont,
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                color:
                    color === "primary"
                        ? theme.palette.primary.main
                        : color === "muted"
                          ? theme.palette.text.disabled
                          : theme.palette.text.primary,
                textTransform: "none",
            })}
        >
            {children}
        </Typography>
    );
}

function EdgeVsCloud({ data }: { data: any }) {
    return (
        <Box>
            <MonoLabel>{data.eyebrow}</MonoLabel>
            <Typography variant="h3" sx={{ fontWeight: 600, letterSpacing: "-0.02em", mt: 1.5, mb: 1.5, color: "common.white" }}>
                {data.title}
            </Typography>
            <Typography sx={{ color: "text.secondary", maxWidth: 720, mb: 5 }}>{data.sub}</Typography>

            <Grid container spacing={{ xs: 2, md: 2.5 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        sx={(theme) => ({
                            p: { xs: 3, md: 4 },
                            height: "100%",
                            borderRadius: 1,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.45)}`,
                            backgroundColor: alpha(theme.palette.primary.main, 0.05),
                            position: "relative",
                            overflow: "hidden",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: 3,
                                height: "100%",
                                backgroundColor: theme.palette.primary.main,
                            },
                        })}
                    >
                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                            <MonoLabel>{data.onPremTag}</MonoLabel>
                            <CheckCircleOutlineIcon sx={{ color: "primary.main", fontSize: 18 }} />
                        </Stack>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 600, color: "common.white", mb: 3, textTransform: "none" }}
                        >
                            {data.onPremTitle}
                        </Typography>
                        <Stack spacing={1.5}>
                            {data.onPremPoints.map((p: string, i: number) => (
                                <Stack key={i} direction="row" spacing={1.25} alignItems="flex-start">
                                    <Box
                                        sx={(theme) => ({
                                            width: 5,
                                            height: 5,
                                            borderRadius: 1,
                                            backgroundColor: theme.palette.primary.main,
                                            mt: "0.55em",
                                            flexShrink: 0,
                                        })}
                                    />
                                    <Typography sx={{ color: "text.primary", fontSize: "0.92rem", lineHeight: 1.55 }}>
                                        {p}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        sx={(theme) => ({
                            p: { xs: 3, md: 4 },
                            height: "100%",
                            borderRadius: 1,
                            border: `1px solid ${theme.palette.divider}`,
                            backgroundColor: "transparent",
                            opacity: 0.85,
                        })}
                    >
                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                            <MonoLabel color="muted">{data.cloudTag}</MonoLabel>
                            <HighlightOffIcon sx={{ color: "text.disabled", fontSize: 18 }} />
                        </Stack>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 600, color: "text.primary", mb: 3, textTransform: "none" }}
                        >
                            {data.cloudTitle}
                        </Typography>
                        <Stack spacing={1.5}>
                            {data.cloudPoints.map((p: string, i: number) => (
                                <Stack key={i} direction="row" spacing={1.25} alignItems="flex-start">
                                    <Box
                                        sx={(theme) => ({
                                            width: 5,
                                            height: 5,
                                            borderRadius: 1,
                                            backgroundColor: alpha(theme.palette.text.primary, 0.3),
                                            mt: "0.55em",
                                            flexShrink: 0,
                                        })}
                                    />
                                    <Typography sx={{ color: "text.secondary", fontSize: "0.92rem", lineHeight: 1.55 }}>
                                        {p}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

function AllInOne({ data }: { data: any }) {
    return (
        <Box>
            <MonoLabel>{data.eyebrow}</MonoLabel>
            <Typography variant="h3" sx={{ fontWeight: 600, letterSpacing: "-0.02em", mt: 1.5, mb: 1.5, color: "common.white" }}>
                {data.title}
            </Typography>
            <Typography sx={{ color: "text.secondary", maxWidth: 720, mb: 5 }}>{data.sub}</Typography>

            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={(theme) => ({
                    position: "relative",
                    p: { xs: 4, md: 6 },
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: alpha(theme.palette.background.paper, 0.3),
                    overflow: "hidden",
                })}
            >
                <Box
                    sx={(theme) => ({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: 180, md: 260 },
                        height: { xs: 180, md: 260 },
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.18)} 0%, transparent 70%)`,
                        pointerEvents: "none",
                    })}
                />
                <Box
                    sx={{
                        position: "relative",
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr auto 1fr" },
                        gridTemplateRows: { xs: "auto auto auto", sm: "1fr auto 1fr" },
                        alignItems: "center",
                        justifyItems: "center",
                        gap: { xs: 2, md: 3 },
                    }}
                >
                    <SiloChip silo={data.silos[0]} from="left" delay={0.1} />
                    <Box sx={{ display: { xs: "none", sm: "block" } }} />
                    <SiloChip silo={data.silos[1]} from="right" delay={0.2} />

                    <Box sx={{ display: { xs: "none", sm: "block" } }} />
                    <HubBadge label={data.hubLabel} />
                    <Box sx={{ display: { xs: "none", sm: "block" } }} />

                    <SiloChip silo={data.silos[2]} from="left" delay={0.3} />
                    <Box sx={{ display: { xs: "none", sm: "block" } }} />
                    <SiloChip silo={data.silos[3]} from="right" delay={0.4} />
                </Box>

                <Box
                    sx={(theme) => ({
                        mt: { xs: 4, md: 6 },
                        pt: { xs: 3, md: 4 },
                        borderTop: `1px solid ${theme.palette.divider}`,
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "flex-start", md: "center" },
                        gap: { xs: 1.5, md: 3 },
                    })}
                >
                    <MonoLabel>{data.outcomeLabel}</MonoLabel>
                    <Typography sx={{ color: "text.primary", fontSize: "1rem", lineHeight: 1.6, flex: 1, textTransform: "none" }}>
                        {data.outcome}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

function HubBadge({ label }: { label: string }) {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            sx={(theme) => ({
                px: 3,
                py: 2,
                borderRadius: 1,
                border: `1.5px solid ${theme.palette.primary.main}`,
                backgroundColor: alpha(theme.palette.background.default, 0.8),
                boxShadow: `0 0 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                fontFamily: monoFont,
                fontSize: "0.95rem",
                letterSpacing: "0.05em",
                color: "primary.main",
                textTransform: "none",
            })}
        >
            {label}
        </Box>
    );
}

function SiloChip({ silo, from, delay }: { silo: { label: string; note: string }; from: "left" | "right"; delay: number }) {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, x: from === "left" ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay }}
            sx={(theme) => ({
                position: "relative",
                px: 2.5,
                py: 1.5,
                borderRadius: 1,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: alpha(theme.palette.background.default, 0.7),
                minWidth: { xs: 200, md: 220 },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    [from === "left" ? "right" : "left"]: -2,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: `0 0 8px ${alpha(theme.palette.primary.main, 0.6)}`,
                    transform: "translateY(-50%)",
                    display: { xs: "none", sm: "block" },
                },
            })}
        >
            <Typography sx={{ fontWeight: 600, color: "common.white", fontSize: "0.95rem", textTransform: "none" }}>
                {silo.label}
            </Typography>
            <Typography
                sx={{
                    fontFamily: monoFont,
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    color: "text.disabled",
                    mt: 0.5,
                    textTransform: "none",
                }}
            >
                {silo.note}
            </Typography>
        </Box>
    );
}

function BeforeAfter({ data }: { data: any }) {
    return (
        <Box>
            <MonoLabel>{data.eyebrow}</MonoLabel>
            <Typography variant="h3" sx={{ fontWeight: 600, letterSpacing: "-0.02em", mt: 1.5, mb: 4, color: "common.white" }}>
                {data.title}
            </Typography>

            <Box
                sx={(theme) => ({
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    overflow: "hidden",
                })}
            >
                <Grid
                    container
                    sx={(theme) => ({
                        backgroundColor: alpha(theme.palette.background.paper, 0.4),
                        borderBottom: `1px solid ${theme.palette.divider}`,
                    })}
                >
                    <Grid size={{ xs: 12, sm: 4 }} sx={{ p: 2 }}>
                        <MonoLabel color="muted">TÓPICO</MonoLabel>
                    </Grid>
                    <Grid
                        size={{ xs: 6, sm: 4 }}
                        sx={(theme) => ({
                            p: 2,
                            borderLeft: { sm: `1px solid ${theme.palette.divider}` },
                        })}
                    >
                        <MonoLabel color="muted">{data.beforeLabel}</MonoLabel>
                    </Grid>
                    <Grid
                        size={{ xs: 6, sm: 4 }}
                        sx={(theme) => ({
                            p: 2,
                            borderLeft: `1px solid ${theme.palette.divider}`,
                        })}
                    >
                        <MonoLabel>{data.afterLabel}</MonoLabel>
                    </Grid>
                </Grid>

                {data.rows.map((row: any, i: number) => (
                    <Grid
                        key={i}
                        container
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        sx={(theme) => ({
                            borderBottom: i === data.rows.length - 1 ? 0 : `1px solid ${theme.palette.divider}`,
                            transition: "background-color 0.2s ease",
                            "&:hover": {
                                backgroundColor: alpha(theme.palette.primary.main, 0.03),
                            },
                        })}
                    >
                        <Grid size={{ xs: 12, sm: 4 }} sx={{ p: 2.5 }}>
                            <Typography sx={{ fontWeight: 600, color: "common.white", textTransform: "none" }}>
                                {row.topic}
                            </Typography>
                        </Grid>
                        <Grid
                            size={{ xs: 12, sm: 4 }}
                            sx={(theme) => ({
                                p: 2.5,
                                borderLeft: { sm: `1px solid ${theme.palette.divider}` },
                                color: "text.disabled",
                                position: "relative",
                                fontSize: "0.92rem",
                                textTransform: "none",
                            })}
                        >
                            <Box component="span" sx={{ textDecoration: "line-through", textDecorationColor: "rgba(255,255,255,0.2)" }}>
                                {row.before}
                            </Box>
                        </Grid>
                        <Grid
                            size={{ xs: 12, sm: 4 }}
                            sx={(theme) => ({
                                p: 2.5,
                                borderLeft: `1px solid ${theme.palette.divider}`,
                                position: "relative",
                            })}
                        >
                            <Stack direction="row" spacing={1} alignItems="flex-start">
                                <ArrowRightAltIcon sx={{ color: "primary.main", fontSize: 18, mt: "0.15em", flexShrink: 0 }} />
                                <Typography sx={{ color: "text.primary", fontSize: "0.92rem", textTransform: "none" }}>
                                    {row.after}
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </Box>
    );
}

export function PlatformWhy() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const why = (content.platform as any).why;

    if (!why) return null;

    return (
        <Box
            component="section"
            sx={(theme) => ({
                py: { xs: 10, md: 16 },
                backgroundColor: alpha(theme.palette.background.paper, 0.4),
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `1px solid ${theme.palette.divider}`,
            })}
        >
            <Container maxWidth="lg">
                <SectionHeader eyebrow={why.eyebrow} title={why.title} description={why.sub} />

                <Stack spacing={{ xs: 8, md: 12 }}>
                    <EdgeVsCloud data={why.edge} />
                    <AllInOne data={why.allInOne} />
                    <BeforeAfter data={why.comparison} />
                </Stack>
            </Container>
        </Box>
    );
}

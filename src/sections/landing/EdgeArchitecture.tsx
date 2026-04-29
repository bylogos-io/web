"use client";

import { motion } from "framer-motion";
import { Box, Container, Grid2 as Grid, Typography, Stack, alpha } from "@mui/material";
import SensorsIcon from "@mui/icons-material/Sensors";
import MemoryIcon from "@mui/icons-material/Memory";
import PersonIcon from "@mui/icons-material/Person";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import EastIcon from "@mui/icons-material/East";
import SouthIcon from "@mui/icons-material/South";
import type { SvgIconComponent } from "@mui/icons-material";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

type NodeData = {
    icon: SvgIconComponent;
    title: string;
    tag: string;
    lines: string[];
    accent?: boolean;
};

function NodeCard({ icon: Icon, title, tag, lines, accent }: NodeData) {
    return (
        <Box
            sx={(theme) => ({
                position: "relative",
                width: "100%",
                minWidth: 0,
                p: { xs: 2.5, md: 3 },
                borderRadius: 2.5,
                border: "1px solid",
                borderColor: accent
                    ? alpha(theme.palette.primary.main, 0.5)
                    : theme.palette.divider,
                backgroundColor: accent
                    ? alpha(theme.palette.primary.main, 0.06)
                    : alpha(theme.palette.background.paper, 0.5),
                backdropFilter: "blur(12px)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                    borderColor: alpha(theme.palette.primary.main, 0.7),
                    transform: "translateY(-2px)",
                },
            })}
        >
            <Stack spacing={1.75}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                    <Box
                        sx={(theme) => ({
                            width: 36,
                            height: 36,
                            borderRadius: 1.5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: alpha(theme.palette.primary.main, accent ? 0.18 : 0.08),
                            color: "primary.main",
                            flexShrink: 0,
                        })}
                    >
                        <Icon sx={{ fontSize: 20 }} />
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: monoFont,
                            fontSize: "0.65rem",
                            color: accent ? "primary.main" : "text.disabled",
                            letterSpacing: "0.15em",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {tag}
                    </Typography>
                </Stack>
                <Typography sx={{ fontWeight: 600, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                    {title}
                </Typography>
                <Stack spacing={0.75} sx={{ pt: 0.25 }}>
                    {lines.map((l) => (
                        <Stack key={l} direction="row" spacing={0.75} alignItems="flex-start">
                            <Box
                                component="span"
                                sx={{
                                    color: "primary.main",
                                    fontFamily: monoFont,
                                    fontSize: "0.72rem",
                                    lineHeight: 1.5,
                                    flexShrink: 0,
                                }}
                            >
                                ›
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily: monoFont,
                                    fontSize: "0.72rem",
                                    color: "text.secondary",
                                    letterSpacing: "0.01em",
                                    lineHeight: 1.5,
                                }}
                            >
                                {l}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
}

function Connector() {
    return (
        <Box
            sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: alpha(theme.palette.primary.main, 0.6),
            })}
        >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <EastIcon sx={{ fontSize: 22 }} />
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <SouthIcon sx={{ fontSize: 22 }} />
            </Box>
        </Box>
    );
}

export function EdgeArchitecture() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const ea = (content.home as any).landingV2.edge as {
        eyebrow: string;
        titleStart: string;
        titleAccent: string;
        sub: string;
        nodes: {
            field: { title: string; tag: string; lines: string[] };
            edge: { title: string; tag: string; lines: string[] };
            user: { title: string; tag: string; lines: string[] };
        };
        benefits: { title: string; body: string }[];
    };

    const benefitIcons: SvgIconComponent[] = [BoltOutlinedIcon, ShieldOutlinedIcon];

    return (
        <Box component="section" id="edge-architecture" sx={{ py: { xs: 10, md: 14 } }}>
            <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: { xs: 6, md: 8 } }}
                >
                    <Typography
                        sx={{
                            fontFamily: monoFont,
                            fontSize: "0.75rem",
                            letterSpacing: "0.18em",
                            color: "primary.main",
                            mb: 2,
                        }}
                    >
                        {ea.eyebrow}
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ mb: 2, fontWeight: 600, letterSpacing: "-0.025em", textWrap: "balance" as any }}
                    >
                        {ea.titleStart}{" "}
                        <Box
                            component="span"
                            sx={(theme) => ({
                                background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            })}
                        >
                            {ea.titleAccent}
                        </Box>
                    </Typography>
                    <Typography sx={{ color: "text.secondary", textWrap: "balance" as any }}>
                        {ea.sub}
                    </Typography>
                </Box>

                {/* Diagram — full width */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    sx={(theme) => ({
                        position: "relative",
                        p: { xs: 2.5, md: 4 },
                        borderRadius: 3.5,
                        border: `1px solid ${theme.palette.divider}`,
                        backgroundColor: alpha(theme.palette.background.paper, 0.3),
                        backdropFilter: "blur(16px)",
                        mb: { xs: 4, md: 6 },
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: "inherit",
                            background: `radial-gradient(ellipse at 50% 50%, ${alpha(theme.palette.primary.main, 0.06)} 0%, transparent 70%)`,
                            pointerEvents: "none",
                        },
                    })}
                >
                    <Grid
                        container
                        spacing={{ xs: 2, md: 0 }}
                        alignItems="stretch"
                        sx={{ position: "relative" }}
                    >
                        <Grid size={{ xs: 12, md: "grow" }} sx={{ display: "flex" }}>
                            <NodeCard
                                icon={SensorsIcon}
                                title={ea.nodes.field.title}
                                tag={ea.nodes.field.tag}
                                lines={ea.nodes.field.lines}
                            />
                        </Grid>
                        <Grid
                            size={{ xs: 12, md: "auto" }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                px: { md: 1.5 },
                                py: { xs: 0.5, md: 0 },
                            }}
                        >
                            <Connector />
                        </Grid>
                        <Grid size={{ xs: 12, md: "grow" }} sx={{ display: "flex" }}>
                            <NodeCard
                                icon={MemoryIcon}
                                title={ea.nodes.edge.title}
                                tag={ea.nodes.edge.tag}
                                lines={ea.nodes.edge.lines}
                                accent
                            />
                        </Grid>
                        <Grid
                            size={{ xs: 12, md: "auto" }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                px: { md: 1.5 },
                                py: { xs: 0.5, md: 0 },
                            }}
                        >
                            <Connector />
                        </Grid>
                        <Grid size={{ xs: 12, md: "grow" }} sx={{ display: "flex" }}>
                            <NodeCard
                                icon={PersonIcon}
                                title={ea.nodes.user.title}
                                tag={ea.nodes.user.tag}
                                lines={ea.nodes.user.lines}
                            />
                        </Grid>
                    </Grid>
                </Box>

                {/* Benefits — full row, balanced */}
                <Grid container spacing={{ xs: 2, md: 4 }}>
                    {ea.benefits.map((p, idx) => {
                        const Icon = benefitIcons[idx] ?? BoltOutlinedIcon;
                        return (
                            <Grid key={idx} size={{ xs: 12, md: 6 }}>
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Stack direction="row" spacing={2} alignItems="flex-start">
                                        <Box
                                            sx={(theme) => ({
                                                flexShrink: 0,
                                                width: 40,
                                                height: 40,
                                                borderRadius: 1.5,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                color: "primary.main",
                                            })}
                                        >
                                            <Icon sx={{ fontSize: 22 }} />
                                        </Box>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    mb: 0.75,
                                                    fontSize: "1.05rem",
                                                    letterSpacing: "-0.015em",
                                                }}
                                            >
                                                {p.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: "text.secondary", lineHeight: 1.6, textWrap: "pretty" as any }}
                                            >
                                                {p.body}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}

"use client";

import { Box, Container, Typography, Grid2 as Grid, alpha, Stack } from "@mui/material";
import { motion } from "framer-motion";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HubIcon from "@mui/icons-material/Hub";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import DevicesIcon from "@mui/icons-material/Devices";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";
import { monoFont } from "@/theme";
import { ReactNode } from "react";

type CellProps = {
    icon: ReactNode;
    title: string;
    description: string;
    visual: ReactNode;
    span?: { xs?: number; md?: number };
    delay?: number;
};

function Cell({ icon, title, description, visual, span = { xs: 12, md: 6 }, delay = 0 }: CellProps) {
    return (
        <Grid size={{ xs: span.xs ?? 12, md: span.md ?? 6 }}>
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                sx={(theme) => ({
                    position: "relative",
                    height: "100%",
                    minHeight: { xs: 280, md: 340 },
                    p: { xs: 3, md: 4 },
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: alpha(theme.palette.background.paper, 0.35),
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                        borderColor: alpha(theme.palette.primary.main, 0.4),
                        backgroundColor: alpha(theme.palette.background.paper, 0.55),
                    },
                })}
            >
                <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 1.5 }}>
                    <Box sx={{ color: "primary.main", display: "flex", alignItems: "center" }}>{icon}</Box>
                    <Typography
                        sx={{
                            fontFamily: monoFont,
                            fontSize: "0.7rem",
                            letterSpacing: "0.2em",
                            color: "primary.main",
                            textTransform: "uppercase",
                        }}
                    >
                        Módulo
                    </Typography>
                </Stack>
                <Typography
                    variant="h5"
                    sx={{ fontWeight: 400, letterSpacing: "-0.015em", mb: 1, color: "common.white" }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        color: "text.secondary",
                        fontSize: "0.95rem",
                        lineHeight: 1.55,
                        maxWidth: 520,
                        mb: 3,
                    }}
                >
                    {description}
                </Typography>
                <Box sx={{ flex: 1, display: "flex", alignItems: "flex-end", position: "relative" }}>{visual}</Box>
            </Box>
        </Grid>
    );
}

function VisualWaveform() {
    return (
        <Box sx={{ width: "100%", position: "relative" }}>
            <Box
                component="svg"
                viewBox="0 0 600 160"
                sx={{ width: "100%", height: { xs: 140, md: 180 }, display: "block" }}
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="lgGrid" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                    <linearGradient id="lgArea" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="rgba(225,110,9,0.35)" />
                        <stop offset="100%" stopColor="rgba(225,110,9,0)" />
                    </linearGradient>
                </defs>
                {[...Array(8)].map((_, i) => (
                    <line
                        key={i}
                        x1={i * 75}
                        x2={i * 75}
                        y1="0"
                        y2="160"
                        stroke="rgba(255,255,255,0.04)"
                        strokeWidth="1"
                    />
                ))}
                {[...Array(5)].map((_, i) => (
                    <line
                        key={i}
                        x1="0"
                        x2="600"
                        y1={i * 40}
                        y2={i * 40}
                        stroke="rgba(255,255,255,0.04)"
                        strokeWidth="1"
                    />
                ))}
                <path
                    d="M0 110 L60 95 L120 105 L180 70 L240 80 L300 50 L360 60 L420 35 L480 45 L540 25 L600 30 L600 160 L0 160 Z"
                    fill="url(#lgArea)"
                />
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                    d="M0 110 L60 95 L120 105 L180 70 L240 80 L300 50 L360 60 L420 35 L480 45 L540 25 L600 30"
                    fill="none"
                    stroke="#e16e09"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="540" cy="25" r="4" fill="#e16e09">
                    <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                </circle>
            </Box>
            <Stack direction="row" spacing={3} sx={{ mt: 2, fontFamily: monoFont, fontSize: "0.7rem" }}>
                <Box>
                    <Box sx={{ color: "primary.main" }}>+12.4%</Box>
                    <Box sx={{ color: "text.disabled", letterSpacing: "0.1em" }}>UPTIME</Box>
                </Box>
                <Box>
                    <Box sx={{ color: "primary.main" }}>847ms</Box>
                    <Box sx={{ color: "text.disabled", letterSpacing: "0.1em" }}>LATENCIA</Box>
                </Box>
                <Box>
                    <Box sx={{ color: "primary.main" }}>2.1k</Box>
                    <Box sx={{ color: "text.disabled", letterSpacing: "0.1em" }}>EVENTOS/MIN</Box>
                </Box>
            </Stack>
        </Box>
    );
}

function VisualAlert() {
    return (
        <Stack spacing={1.5} sx={{ width: "100%" }}>
            {[
                { sev: "CRÍTICA", label: "Bomba B-203 fuera de rango", time: "12s", color: "#ef4444" },
                { sev: "ALERTA", label: "Temperatura sala 4 → 38°C", time: "1m", color: "#e16e09" },
                { sev: "INFO", label: "Reporte diario generado", time: "5m", color: "rgba(255,255,255,0.4)" },
            ].map((a, i) => (
                <Box
                    key={i}
                    component={motion.div}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    sx={(theme) => ({
                        p: 1.5,
                        borderRadius: 1,
                        border: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
                        backgroundColor: alpha(theme.palette.background.default, 0.5),
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                    })}
                >
                    <Box
                        sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: a.color,
                            boxShadow: `0 0 8px ${a.color}`,
                            flexShrink: 0,
                        }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                            sx={{
                                fontFamily: monoFont,
                                fontSize: "0.65rem",
                                letterSpacing: "0.18em",
                                color: a.color,
                            }}
                        >
                            {a.sev}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "0.8rem",
                                color: "text.primary",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {a.label}
                        </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: monoFont, fontSize: "0.7rem", color: "text.disabled" }}>
                        {a.time}
                    </Typography>
                </Box>
            ))}
        </Stack>
    );
}

function VisualIntegrations() {
    const items = [
        { label: "WhatsApp", color: "#25D366" },
        { label: "Telegram", color: "#27A7E7" },
        { label: "Email", color: "#e16e09" },
        { label: "REST API", color: "rgba(255,255,255,0.55)" },
        { label: "OPC UA", color: "rgba(255,255,255,0.55)" },
        { label: "MQTT", color: "rgba(255,255,255,0.55)" },
        { label: "Webhooks", color: "rgba(255,255,255,0.55)" },
    ];
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, width: "100%" }}>
            {items.map((it, i) => (
                <Box
                    key={i}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    sx={(theme) => ({
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 1,
                        border: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
                        backgroundColor: alpha(theme.palette.background.default, 0.6),
                        fontFamily: monoFont,
                        fontSize: "0.7rem",
                        letterSpacing: "0.05em",
                        color: it.color,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.75,
                    })}
                >
                    <Box sx={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: it.color }} />
                    {it.label}
                </Box>
            ))}
        </Box>
    );
}

function VisualReports() {
    return (
        <Box sx={{ width: "100%", position: "relative", height: 140 }}>
            {[0, 1, 2].map((i) => (
                <Box
                    key={i}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    sx={(theme) => ({
                        position: "absolute",
                        left: i * 14,
                        top: i * 8,
                        width: { xs: "70%", md: "75%" },
                        height: 110,
                        borderRadius: 1,
                        border: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
                        backgroundColor: alpha(theme.palette.background.default, 0.85),
                        p: 1.5,
                        zIndex: 3 - i,
                    })}
                >
                    <Box
                        sx={{
                            fontFamily: monoFont,
                            fontSize: "0.6rem",
                            letterSpacing: "0.18em",
                            color: "primary.main",
                            mb: 1,
                        }}
                    >
                        REPORTE-{2026 - i}-Q{4 - i}.PDF
                    </Box>
                    {[80, 65, 90, 50].map((w, j) => (
                        <Box
                            key={j}
                            sx={(theme) => ({
                                width: `${w}%`,
                                height: 4,
                                mb: 0.75,
                                borderRadius: 1,
                                backgroundColor: alpha(theme.palette.text.primary, 0.15),
                            })}
                        />
                    ))}
                </Box>
            ))}
        </Box>
    );
}

function VisualAI() {
    const lines = [
        { who: "user", text: "¿Cuántas fallas en B-203 esta semana?" },
        { who: "ai", text: "3 eventos. 2 picos > 80°C el martes." },
    ];
    return (
        <Stack spacing={1.25} sx={{ width: "100%" }}>
            {lines.map((l, i) => (
                <Box
                    key={i}
                    component={motion.div}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                    sx={(theme) => ({
                        alignSelf: l.who === "user" ? "flex-end" : "flex-start",
                        maxWidth: "85%",
                        px: 1.5,
                        py: 1,
                        borderRadius: 1,
                        border: `1px solid ${l.who === "ai" ? alpha(theme.palette.primary.main, 0.4) : alpha(theme.palette.divider, 0.6)}`,
                        backgroundColor:
                            l.who === "ai"
                                ? alpha(theme.palette.primary.main, 0.08)
                                : alpha(theme.palette.background.default, 0.6),
                        fontSize: "0.8rem",
                        color: "text.primary",
                    })}
                >
                    <Box
                        sx={{
                            fontFamily: monoFont,
                            fontSize: "0.6rem",
                            letterSpacing: "0.18em",
                            color: l.who === "ai" ? "primary.main" : "text.disabled",
                            mb: 0.5,
                        }}
                    >
                        {l.who === "ai" ? "LOGOS-AI" : "USUARIO"}
                    </Box>
                    {l.text}
                </Box>
            ))}
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                sx={(theme) => ({
                    alignSelf: "flex-start",
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 1,
                    border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                    fontFamily: monoFont,
                    fontSize: "0.65rem",
                    color: "text.disabled",
                })}
            >
                <Box component="span" sx={{ display: "inline-flex", gap: 0.5 }}>
                    <Dot delay={0} /> <Dot delay={0.2} /> <Dot delay={0.4} />
                </Box>
            </Box>
        </Stack>
    );
}

function Dot({ delay }: { delay: number }) {
    return (
        <Box
            component={motion.span}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay }}
            sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                display: "inline-block",
            }}
        />
    );
}

function VisualTwin() {
    return (
        <Box
            sx={{
                width: "100%",
                height: 180,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                component="svg"
                viewBox="-50 -50 200 200"
                sx={{ width: "70%", height: "100%" }}
            >
                <defs>
                    <linearGradient id="cubeGrad" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="rgba(225,110,9,0.6)" />
                        <stop offset="100%" stopColor="rgba(225,110,9,0.1)" />
                    </linearGradient>
                </defs>
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50px 50px" }}
                >
                    <polygon
                        points="0,30 50,0 100,30 50,60"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="0.8"
                    />
                    <polygon
                        points="0,30 0,90 50,120 50,60"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="0.8"
                    />
                    <polygon
                        points="100,30 100,90 50,120 50,60"
                        fill="url(#cubeGrad)"
                        stroke="#e16e09"
                        strokeWidth="0.8"
                    />
                    <circle cx="50" cy="60" r="3" fill="#e16e09" />
                    <circle cx="0" cy="30" r="2" fill="rgba(255,255,255,0.6)" />
                    <circle cx="100" cy="30" r="2" fill="rgba(255,255,255,0.6)" />
                    <circle cx="50" cy="0" r="2" fill="rgba(255,255,255,0.6)" />
                    <circle cx="50" cy="120" r="2" fill="rgba(255,255,255,0.6)" />
                </motion.g>
            </Box>
        </Box>
    );
}

function VisualDevices() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
                gap: 2,
                pb: 1,
            }}
        >
            <Box
                sx={(theme) => ({
                    width: 200,
                    height: 120,
                    borderRadius: 1,
                    border: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
                    backgroundColor: alpha(theme.palette.background.default, 0.6),
                    position: "relative",
                    p: 1,
                })}
            >
                <Box
                    sx={{
                        fontFamily: monoFont,
                        fontSize: "0.55rem",
                        letterSpacing: "0.18em",
                        color: "text.disabled",
                        mb: 1,
                    }}
                >
                    LOGOS · WEB
                </Box>
                {[60, 80, 45].map((w, i) => (
                    <Box
                        key={i}
                        sx={(theme) => ({
                            width: `${w}%`,
                            height: 6,
                            mb: 0.75,
                            borderRadius: 1,
                            backgroundColor:
                                i === 0
                                    ? alpha(theme.palette.primary.main, 0.5)
                                    : alpha(theme.palette.text.primary, 0.15),
                        })}
                    />
                ))}
                <Box
                    sx={(theme) => ({
                        position: "absolute",
                        bottom: -3,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 60,
                        height: 4,
                        borderRadius: 1,
                        backgroundColor: alpha(theme.palette.divider, 0.7),
                    })}
                />
            </Box>
            <Box
                sx={(theme) => ({
                    width: 60,
                    height: 110,
                    borderRadius: 1.5,
                    border: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
                    backgroundColor: alpha(theme.palette.background.default, 0.6),
                    p: 0.75,
                })}
            >
                <Box
                    sx={(theme) => ({
                        width: 14,
                        height: 2,
                        borderRadius: 1,
                        backgroundColor: alpha(theme.palette.divider, 0.8),
                        mx: "auto",
                        mb: 1,
                    })}
                />
                {[80, 60, 70].map((w, i) => (
                    <Box
                        key={i}
                        sx={(theme) => ({
                            width: `${w}%`,
                            height: 4,
                            mb: 0.5,
                            borderRadius: 1,
                            backgroundColor:
                                i === 1
                                    ? alpha(theme.palette.primary.main, 0.5)
                                    : alpha(theme.palette.text.primary, 0.15),
                        })}
                    />
                ))}
            </Box>
        </Box>
    );
}

export function PlatformModules() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const m = content.platform.modules;

    return (
        <Box component="section" sx={{ py: { xs: 10, md: 16 }, backgroundColor: "background.default" }}>
            <Container maxWidth="lg">
                <SectionHeader eyebrow="MÓDULOS" title={content.platform.modulesTitle} description={content.platform.modulesDescription} />
                <Grid container spacing={{ xs: 2, md: 2.5 }}>
                    <Cell
                        span={{ xs: 12, md: 8 }}
                        delay={0}
                        icon={<MonitorHeartIcon fontSize="small" />}
                        title={m[0]?.title ?? "Monitoreo en tiempo real"}
                        description={m[0]?.description ?? ""}
                        visual={<VisualWaveform />}
                    />
                    <Cell
                        span={{ xs: 12, md: 4 }}
                        delay={0.05}
                        icon={<NotificationsActiveIcon fontSize="small" />}
                        title={m[3]?.title ?? "Alarmas inteligentes"}
                        description={m[3]?.description ?? ""}
                        visual={<VisualAlert />}
                    />
                    <Cell
                        span={{ xs: 12, md: 4 }}
                        delay={0.1}
                        icon={<HubIcon fontSize="small" />}
                        title={m[4]?.title ?? "Integraciones"}
                        description={m[4]?.description ?? ""}
                        visual={<VisualIntegrations />}
                    />
                    <Cell
                        span={{ xs: 12, md: 4 }}
                        delay={0.15}
                        icon={<DescriptionIcon fontSize="small" />}
                        title={m[5]?.title ?? "Reportes automáticos"}
                        description={m[5]?.description ?? ""}
                        visual={<VisualReports />}
                    />
                    <Cell
                        span={{ xs: 12, md: 4 }}
                        delay={0.2}
                        icon={<AutoAwesomeIcon fontSize="small" />}
                        title={m[6]?.title ?? "Asistente de IA"}
                        description={m[6]?.description ?? ""}
                        visual={<VisualAI />}
                    />
                    <Cell
                        span={{ xs: 12, md: 6 }}
                        delay={0.25}
                        icon={<ViewInArIcon fontSize="small" />}
                        title={m[7]?.title ?? "Gemelo digital"}
                        description={m[7]?.description ?? ""}
                        visual={<VisualTwin />}
                    />
                    <Cell
                        span={{ xs: 12, md: 6 }}
                        delay={0.3}
                        icon={<DevicesIcon fontSize="small" />}
                        title={m[8]?.title ?? "Acceso multi-dispositivo"}
                        description={m[8]?.description ?? ""}
                        visual={<VisualDevices />}
                    />
                </Grid>
            </Container>
        </Box>
    );
}

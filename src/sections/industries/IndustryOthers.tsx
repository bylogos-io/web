"use client";

import { useState } from "react";
import { Box, Container, Typography, Grid2 as Grid, Stack, Collapse, alpha } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { motion } from "@/lib/motion-shim";
import { INDUSTRY_CARDS_DATA } from "@/data/industries";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { BracketedFrame } from "@/components/BracketedFrame";
import { monoFont } from "@/theme";

const SOLUTIONS = [
    "Conexión segura de PLCs/SCADA legacy con telemetría continua y modelos predictivos en el edge para anticipar fallas en tiempo real.",
    "Capa unificada sobre BMS y sistemas de cooling. Telemetría sub-segundo y alarmas de prevención de caídas con IA.",
    "Telemetría agnóstica al hardware sobre redes distribuidas. Monitoreo central con alertas tempranas de fugas y rendimiento.",
    "Conectividad cloud sobre activos aislados. Analítica de eficiencia energética y monitoreo continuo del estado.",
    "Datos del piso de planta unificados con IT. Trazabilidad de variables y reportes de KPIs automatizados.",
    "OEE en tiempo real sobre líneas mixtas. Integración multi-marca de PLCs y trazabilidad por lote y turno.",
    "Control supervisado de HVAC sobre equipos existentes. Optimización energética sin reemplazar infraestructura.",
];

const USAGE_SCENARIOS = [
    {
        title: "Plataformas y refinerías sin pausa operativa",
        body: "LogOS se conecta a PLCs y SCADAs existentes mediante OPC UA, Modbus y MQTT. Los operadores ven flujos de pozo, presiones y niveles en dashboards en tiempo real. La IA detecta desviaciones tempranas y dispara alertas a campo por WhatsApp o radio. Reportes regulatorios se generan automáticamente.",
    },
    {
        title: "Visibilidad continua de PUE, cooling y energía",
        body: "LogOS unifica BMS legacy, UPS, chillers y sensores ambientales en una sola capa. Los equipos de O&M monitorean PUE en vivo, anticipan caídas con alertas predictivas y revisan tendencias por sala. Cumple políticas de seguridad sin sacar datos del sitio.",
    },
    {
        title: "Telemetría confiable sobre redes distribuidas",
        body: "Conectamos sensores de caudal, presión y calidad de plantas y elevadoras dispersas. LogOS consolida datos en una vista central, alerta sobre fugas y rebalses, y genera reportes operativos automáticos. Funciona aunque caiga la conectividad por el procesamiento en el edge.",
    },
    {
        title: "Activos de generación conectados sin tocar el control",
        body: "LogOS lee desde generadores, transformadores y subestaciones en tiempo real. Los analistas ven eficiencia energética, predicen mantenimientos y reciben alertas operativas. Integración no intrusiva sobre infraestructura existente, sin reemplazar el sistema de control.",
    },
    {
        title: "Trazabilidad y KPIs de planta automatizados",
        body: "Cada variable del piso de planta — temperatura, pH, dosificación, tiempos de ciclo — se registra y correlaciona en LogOS. Los reportes de calidad y cumplimiento se generan solos. Las alarmas inteligentes avisan antes de que el lote salga de especificación.",
    },
    {
        title: "OEE en vivo sobre líneas mixtas",
        body: "LogOS habla con PLCs de distintas marcas, ERPs y MES. El equipo de manufactura ve OEE por línea, turno y máquina. Los reportes de eficiencia y trazabilidad de lotes se exportan automáticamente. Cambios de receta y cuellos de botella se detectan en minutos, no en auditorías.",
    },
    {
        title: "HVAC supervisado y optimizado a distancia",
        body: "LogOS se conecta a controladores HVAC existentes, sensores de temperatura, humedad y CO₂. Optimiza setpoints automáticamente, detecta consumo anómalo y permite control remoto sobre múltiples edificios. La gestión energética se vuelve continua y comparable entre sitios.",
    },
];

export function IndustryOthers() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const items = INDUSTRY_CARDS_DATA.map((industry, idx) => ({
        ...industry,
        title: content.industries.cards[idx]?.title ?? industry.title,
        description: content.industries.cards[idx]?.description ?? industry.description,
        points: content.industries.cards[idx]?.points ?? industry.points,
        usage: USAGE_SCENARIOS[idx] ?? USAGE_SCENARIOS[0],
        solution: SOLUTIONS[idx] ?? SOLUTIONS[0],
    }));

    const labels = {
        challenge: (content.industries as any).featuredChallengeLabel ?? "DESAFÍO",
        solution: (content.industries as any).featuredSolutionLabel ?? "SOLUCIÓN",
        impact: (content.industries as any).featuredImpactLabel ?? "IMPACTO OPERATIVO",
    };

    return (
        <Box component="section" sx={(theme) => ({ py: { xs: 8, md: 14 }, borderTop: `1px solid ${theme.palette.divider}` })}>
            <Container maxWidth="lg">
                <Typography
                    sx={{
                        fontFamily: monoFont,
                        fontSize: "0.75rem",
                        letterSpacing: "0.22em",
                        color: "primary.main",
                        mb: 3,
                    }}
                >
                    {content.industries.othersEyebrow}
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        color: "common.white",
                        mb: 3,
                    }}
                >
                    {content.industries.othersTitle}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "1rem", lineHeight: 1.6, maxWidth: 600, mb: { xs: 6, md: 10 } }}>
                    {content.industries.othersDescription}
                </Typography>

                <Stack divider={<Divider />} spacing={0}>
                    {items.map((it, idx) => (
                        <AccordionRow key={idx} index={idx + 1} total={items.length} item={it} labels={labels} />
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}

function Divider() {
    return (
        <Box
            sx={(theme) => ({
                height: "1px",
                width: "100%",
                backgroundColor: theme.palette.divider,
            })}
        />
    );
}

function AccordionRow({
    index,
    total,
    item,
    labels,
}: {
    index: number;
    total: number;
    item: any;
    labels: { challenge: string; solution: string; impact: string };
}) {
    const denom = String(total).padStart(2, "0");
    const [open, setOpen] = useState(false);

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <Box
                role="button"
                tabIndex={0}
                onClick={() => setOpen((v) => !v)}
                onKeyDown={(e: any) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpen((v) => !v);
                    }
                }}
                sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 3, md: 6 },
                    py: { xs: 4, md: 5 },
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.03) },
                })}
            >
                <Typography
                    sx={{
                        fontFamily: monoFont,
                        fontSize: "0.85rem",
                        letterSpacing: "0.18em",
                        color: "text.disabled",
                        minWidth: { xs: 44, md: 90 },
                    }}
                >
                    0{index} <Box component="span" sx={{ color: "text.disabled", opacity: 0.5 }}>/ {denom}</Box>
                </Typography>
                <Box sx={{ flex: 1 }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.5rem", md: "1.875rem" },
                            fontWeight: 400,
                            letterSpacing: "-0.015em",
                            color: "common.white",
                            mb: 0.75,
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: monoFont,
                            fontSize: "0.85rem",
                            letterSpacing: "0.16em",
                            color: "primary.main",
                            textTransform: "uppercase",
                        }}
                    >
                        {item.tag}
                    </Typography>
                </Box>
                <Box
                    sx={(theme) => ({
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 1,
                        border: `1px solid ${theme.palette.divider}`,
                        color: "primary.main",
                        transition: "transform 0.3s ease, border-color 0.2s ease",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    })}
                >
                    <KeyboardArrowDownIcon fontSize="small" />
                </Box>
            </Box>

            <Collapse in={open} timeout={400} unmountOnExit>
                <Box sx={{ pb: { xs: 5, md: 8 } }}>
                    <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <BracketedFrame>
                                <Box
                                    sx={{
                                        width: "100%",
                                        aspectRatio: "16/10",
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        filter: "grayscale(10%) brightness(0.95)",
                                    }}
                                />
                            </BracketedFrame>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography
                                sx={{
                                    fontFamily: monoFont,
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.22em",
                                    color: "primary.main",
                                    mb: 2,
                                    textTransform: "none",
                                }}
                            >
                                USO DEL SOFTWARE
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                                    fontWeight: 400,
                                    letterSpacing: "-0.015em",
                                    color: "common.white",
                                    mb: 2,
                                    lineHeight: 1.25,
                                    textTransform: "none",
                                }}
                            >
                                {item.usage.title}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "text.secondary",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.7,
                                    textTransform: "none",
                                }}
                            >
                                {item.usage.body}
                            </Typography>
                        </Grid>
                    </Grid>

                    <BracketedFrame color="divider" size={20} sx={{ mt: { xs: 4, md: 6 }, p: 0 }}>
                        <Grid container>
                            {[
                                { label: labels.challenge, icon: WarningAmberIcon, body: item.description },
                                { label: labels.solution, icon: DoneAllIcon, body: item.solution },
                                { label: labels.impact, icon: TrendingUpIcon, body: item.points.join("\n") },
                            ].map((col, idx) => {
                                const Icon = col.icon;
                                return (
                                    <Grid
                                        key={idx}
                                        size={{ xs: 12, md: 4 }}
                                        sx={(theme) => ({
                                            p: { xs: 3, md: 4 },
                                            borderLeft: {
                                                xs: "none",
                                                md: idx === 0 ? "none" : `1px solid ${alpha(theme.palette.divider, 0.6)}`,
                                            },
                                            borderTop: {
                                                xs: idx === 0 ? "none" : `1px solid ${alpha(theme.palette.divider, 0.6)}`,
                                                md: "none",
                                            },
                                        })}
                                    >
                                        <Icon sx={{ color: "primary.main", fontSize: 20, mb: 2 }} />
                                        <Typography
                                            sx={{
                                                fontFamily: monoFont,
                                                fontSize: "0.7rem",
                                                letterSpacing: "0.22em",
                                                color: "common.white",
                                                mb: 1.5,
                                            }}
                                        >
                                            {col.label}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "text.secondary",
                                                fontSize: "0.9rem",
                                                lineHeight: 1.55,
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
                </Box>
            </Collapse>
        </Box>
    );
}

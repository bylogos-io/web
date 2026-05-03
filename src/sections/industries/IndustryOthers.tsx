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

export function IndustryOthers() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const solutions = (content.industries as any).solutions as string[] | undefined;
    const usageScenarios = (content.industries as any).usageScenarios as
        | { title: string; body: string }[]
        | undefined;
    const items = INDUSTRY_CARDS_DATA.map((industry, idx) => ({
        ...industry,
        title: content.industries.cards[idx]?.title ?? industry.title,
        description: content.industries.cards[idx]?.description ?? industry.description,
        points: content.industries.cards[idx]?.points ?? industry.points,
        usage: usageScenarios?.[idx] ?? usageScenarios?.[0] ?? { title: "", body: "" },
        solution: solutions?.[idx] ?? solutions?.[0] ?? "",
    }));

    const labels = {
        challenge: (content.industries as any).featuredChallengeLabel ?? "CHALLENGE",
        solution: (content.industries as any).featuredSolutionLabel ?? "SOLUTION",
        impact: (content.industries as any).featuredImpactLabel ?? "OPERATIONAL IMPACT",
    };
    const usageEyebrow = (content.industries as any).usageEyebrow ?? "SOFTWARE IN USE";

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
                        <AccordionRow
                            key={idx}
                            index={idx + 1}
                            total={items.length}
                            item={it}
                            labels={labels}
                            usageEyebrow={usageEyebrow}
                        />
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
    usageEyebrow,
}: {
    index: number;
    total: number;
    item: any;
    labels: { challenge: string; solution: string; impact: string };
    usageEyebrow: string;
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
                                {usageEyebrow}
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

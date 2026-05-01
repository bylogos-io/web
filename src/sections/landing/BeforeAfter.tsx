"use client";

import { Box, Container, Grid2 as Grid, Stack, Typography, alpha } from "@mui/material";
import { motion } from "@/lib/motion-shim";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

type Item = { title: string; body: string };

function Column({
    label,
    items,
    accent,
}: {
    label: string;
    items: Item[];
    accent: boolean;
}) {
    return (
        <Box
            sx={(theme) => ({
                position: "relative",
                height: "100%",
                p: { xs: 3, md: 4 },
                borderRadius: 1,
                border: `1px solid ${accent ? alpha(theme.palette.primary.main, 0.4) : theme.palette.divider}`,
                background: accent
                    ? `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.06)} 0%, ${alpha(theme.palette.background.paper, 0.4)} 100%)`
                    : alpha(theme.palette.background.paper, 0.3),
                backdropFilter: "blur(8px)",
            })}
        >
            <Typography
                sx={(theme) => ({
                    fontFamily: monoFont,
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    color: accent ? theme.palette.primary.main : theme.palette.text.disabled,
                    mb: 3,
                })}
            >
                {label}
            </Typography>
            <Stack spacing={2.5}>
                {items.map((item, idx) => (
                    <Box
                        key={idx}
                        component={motion.div}
                        initial={{ opacity: 0, x: accent ? 12 : -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                    >
                        <Stack direction="row" spacing={1.5} alignItems="flex-start">
                            <Box
                                sx={(theme) => ({
                                    flexShrink: 0,
                                    mt: 0.85,
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    backgroundColor: accent
                                        ? theme.palette.primary.main
                                        : theme.palette.text.disabled,
                                    boxShadow: accent
                                        ? `0 0 8px ${alpha(theme.palette.primary.main, 0.6)}`
                                        : "none",
                                })}
                            />
                            <Box>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "0.95rem",
                                        color: accent ? "text.primary" : "text.secondary",
                                        mb: 0.5,
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "0.85rem",
                                        color: accent ? "text.secondary" : "text.disabled",
                                        lineHeight: 1.55,
                                    }}
                                >
                                    {item.body}
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}

export function BeforeAfter() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const data = (content.home as any).landingV2.beforeAfter as {
        eyebrow: string;
        title: string;
        sub: string;
        before: { label: string; items: Item[] };
        after: { label: string; items: Item[] };
    };

    return (
        <Box
            component="section"
            id="before-after"
            sx={(theme) => ({
                py: { xs: 10, md: 16 },
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse at top, ${alpha(theme.palette.primary.main, 0.06)} 0%, transparent 60%)`,
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
                    sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: { xs: 6, md: 8 } }}
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
                        {data.eyebrow}
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ mb: 2, fontWeight: 600, letterSpacing: "-0.025em", textWrap: "balance" as any }}
                    >
                        {data.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", textWrap: "balance" as any }}>
                        {data.sub}
                    </Typography>
                </Box>

                <Box sx={{ position: "relative" }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Column label={data.before.label} items={data.before.items} accent={false} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Column label={data.after.label} items={data.after.items} accent={true} />
                        </Grid>
                    </Grid>

                    {/* Center arrow indicator on desktop */}
                    <Box
                        sx={(theme) => ({
                            display: { xs: "none", md: "flex" },
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            backgroundColor: theme.palette.background.default,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                            alignItems: "center",
                            justifyContent: "center",
                            color: theme.palette.primary.main,
                            boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                            zIndex: 2,
                        })}
                    >
                        <ArrowForwardIcon sx={{ fontSize: 22 }} />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

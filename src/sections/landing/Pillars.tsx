"use client";

import { Box, Container, Grid2 as Grid, Stack, Typography, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

export function Pillars() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const data = (content.home as any).landingV2.pillars as {
        eyebrow: string;
        title: string;
        sub: string;
        items: { n: string; title: string; claim: string; outcome: string }[];
    };

    return (
        <Box component="section" id="pillars" sx={{ py: { xs: 10, md: 16 }, position: "relative" }}>
            <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    sx={{ maxWidth: 720, mb: { xs: 6, md: 8 } }}
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
                    <Typography
                        variant="body1"
                        sx={{ color: "text.secondary", maxWidth: 600, textWrap: "balance" as any }}
                    >
                        {data.sub}
                    </Typography>
                </Box>

                <Grid container spacing={{ xs: 2, md: 2.5 }}>
                    {data.items.map((item, idx) => (
                        <Grid key={item.n} size={{ xs: 12, sm: 6 }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                sx={(theme) => ({
                                    position: "relative",
                                    height: "100%",
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 1,
                                    border: `1px solid ${theme.palette.divider}`,
                                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                                    backdropFilter: "blur(12px)",
                                    overflow: "hidden",
                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                    "&:hover": {
                                        borderColor: alpha(theme.palette.primary.main, 0.4),
                                        backgroundColor: alpha(theme.palette.background.paper, 0.6),
                                        transform: "translateY(-2px)",
                                    },
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 1,
                                        background: `linear-gradient(90deg, transparent 0%, ${alpha(theme.palette.primary.main, 0.4)} 50%, transparent 100%)`,
                                        opacity: 0,
                                        transition: "opacity 0.3s ease",
                                    },
                                    "&:hover::before": { opacity: 1 },
                                })}
                            >
                                <Stack spacing={2}>
                                    <Stack direction="row" alignItems="center" spacing={1.5}>
                                        <Typography
                                            sx={{
                                                fontFamily: monoFont,
                                                fontSize: "0.75rem",
                                                color: "primary.main",
                                                letterSpacing: "0.1em",
                                            }}
                                        >
                                            {item.n}
                                        </Typography>
                                        <Box
                                            sx={(theme) => ({
                                                flex: 1,
                                                height: 1,
                                                background: `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.3)} 0%, transparent 100%)`,
                                            })}
                                        />
                                    </Stack>
                                    <Typography
                                        variant="h4"
                                        sx={{ fontWeight: 600, letterSpacing: "-0.015em" }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "text.primary",
                                            fontSize: "0.95rem",
                                            lineHeight: 1.55,
                                        }}
                                    >
                                        {item.claim}
                                    </Typography>
                                    <Typography
                                        sx={(theme) => ({
                                            pt: 2,
                                            borderTop: `1px solid ${theme.palette.divider}`,
                                            color: "text.secondary",
                                            fontSize: "0.875rem",
                                            lineHeight: 1.55,
                                            fontStyle: "italic",
                                        })}
                                    >
                                        {item.outcome}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

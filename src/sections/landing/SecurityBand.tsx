"use client";

import { Box, Container, Grid2 as Grid, Stack, Typography, alpha } from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

export function SecurityBand() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const data = (content.home as any).landingV2.security as {
        eyebrow: string;
        title: string;
        sub: string;
        badges: { name: string; tag: string }[];
    };

    return (
        <Box
            component="section"
            id="security"
            sx={(theme) => ({
                py: { xs: 10, md: 14 },
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `1px solid ${theme.palette.divider}`,
                backgroundColor: alpha(theme.palette.background.paper, 0.2),
            })}
        >
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
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
                                variant="h3"
                                sx={{ mb: 2, fontWeight: 600, letterSpacing: "-0.02em", textWrap: "balance" as any }}
                            >
                                {data.title}
                            </Typography>
                            <Typography sx={{ color: "text.secondary", lineHeight: 1.6, textWrap: "balance" as any }}>
                                {data.sub}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 7 }}>
                        <Grid container spacing={{ xs: 1.5, md: 2 }}>
                            {data.badges.map((b, idx) => (
                                <Grid key={b.name} size={{ xs: 12, sm: 6 }}>
                                    <Box
                                        component={motion.div}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.06 }}
                                        sx={(theme) => ({
                                            p: 2.5,
                                            borderRadius: 2.5,
                                            border: `1px solid ${theme.palette.divider}`,
                                            backgroundColor: alpha(theme.palette.background.paper, 0.5),
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            transition: "all 0.25s ease",
                                            "&:hover": {
                                                borderColor: alpha(theme.palette.primary.main, 0.4),
                                            },
                                        })}
                                    >
                                        <Box
                                            sx={(theme) => ({
                                                width: 38,
                                                height: 38,
                                                borderRadius: 1.5,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                color: theme.palette.primary.main,
                                                flexShrink: 0,
                                            })}
                                        >
                                            <ShieldOutlinedIcon sx={{ fontSize: 20 }} />
                                        </Box>
                                        <Stack spacing={0.25}>
                                            <Typography
                                                sx={{
                                                    fontFamily: monoFont,
                                                    fontSize: "0.85rem",
                                                    fontWeight: 600,
                                                    letterSpacing: "0.02em",
                                                }}
                                            >
                                                {b.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "0.78rem",
                                                    color: "text.secondary",
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                {b.tag}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

"use client";

import { Box, Container, Typography, Grid2 as Grid, alpha } from "@mui/material";
import { motion } from "@/lib/motion-shim";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";
import { monoFont } from "@/theme";

export function AboutPrinciples() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.about;

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
                <SectionHeader
                    eyebrow="PRINCIPLES"
                    title={c.principlesTitle}
                    description={c.principlesDescription}
                />
                <Grid container spacing={{ xs: 2, md: 2.5 }}>
                    {c.principles.map((p, idx) => (
                        <Grid key={idx} size={{ xs: 12, md: 4 }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                sx={(theme) => ({
                                    height: "100%",
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 1,
                                    border: `1px solid ${theme.palette.divider}`,
                                    backgroundColor: alpha(theme.palette.background.default, 0.6),
                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                    "&:hover": {
                                        borderColor: alpha(theme.palette.primary.main, 0.4),
                                        transform: "translateY(-2px)",
                                    },
                                })}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: monoFont,
                                        fontSize: "0.75rem",
                                        letterSpacing: "0.18em",
                                        color: "primary.main",
                                        mb: 1.5,
                                    }}
                                >
                                    {String(idx + 1).padStart(2, "0")}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: 400, letterSpacing: "-0.015em", mb: 1.5 }}
                                >
                                    {p.title}
                                </Typography>
                                <Typography
                                    sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.55 }}
                                >
                                    {p.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

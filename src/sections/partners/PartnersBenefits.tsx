"use client";

import { Box, Container, Typography, Grid2 as Grid, alpha } from "@mui/material";
import { motion } from "@/lib/motion-shim";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";
import { monoFont } from "@/theme";

export function PartnersBenefits() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.partners as any;

    return (
        <Box component="section" sx={{ py: { xs: 10, md: 16 }, backgroundColor: "background.default" }}>
            <Container maxWidth="lg">
                <SectionHeader
                    eyebrow="COLABORACIÓN"
                    title={c.benefitsTitle}
                    description={c.benefitsSub}
                />
                <Grid container spacing={{ xs: 2, md: 2.5 }}>
                    {c.benefits.map((b: any, idx: number) => (
                        <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                                sx={(theme) => ({
                                    height: "100%",
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 1,
                                    border: `1px solid ${theme.palette.divider}`,
                                    backgroundColor: "transparent",
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
                                        fontSize: "0.7rem",
                                        letterSpacing: "0.2em",
                                        color: "primary.main",
                                        mb: 1.5,
                                    }}
                                >
                                    {String(idx + 1).padStart(2, "0")}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 400,
                                        letterSpacing: "-0.015em",
                                        color: "common.white",
                                        mb: 1.5,
                                        textTransform: "none",
                                    }}
                                >
                                    {b.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "0.95rem",
                                        lineHeight: 1.6,
                                        textTransform: "none",
                                    }}
                                >
                                    {b.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

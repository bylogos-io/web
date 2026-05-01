"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "@/lib/motion-shim";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

export function AboutWhy() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.about as any;

    return (
        <Box
            component="section"
            sx={(theme) => ({
                py: { xs: 8, md: 14 },
                backgroundColor: "background.default",
                borderTop: `1px solid ${theme.palette.divider}`,
            })}
        >
            <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 2fr)" },
                        gap: { xs: 4, md: 8 },
                        alignItems: "flex-start",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: monoFont,
                                fontSize: "0.75rem",
                                letterSpacing: "0.22em",
                                color: "primary.main",
                                mb: 3,
                            }}
                        >
                            {c.whyEyebrow ?? "POR QUÉ"}
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 400,
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                color: "common.white",
                                fontSize: { xs: "1.75rem", md: "2.5rem" },
                                textWrap: "balance" as any,
                                mb: 2,
                            }}
                        >
                            {c.heroTitle}
                        </Typography>
                        {c.whyKicker && (
                            <Typography
                                sx={{
                                    color: "text.secondary",
                                    fontSize: "1rem",
                                    lineHeight: 1.6,
                                    maxWidth: 360,
                                }}
                            >
                                {c.whyKicker}
                            </Typography>
                        )}
                    </Box>

                    <Stack spacing={{ xs: 3, md: 4 }} sx={{ maxWidth: 720 }}>
                        {c.paragraphs.map((p: string, idx: number) => (
                            <Typography
                                key={idx}
                                sx={{
                                    color: "text.secondary",
                                    fontSize: { xs: "1rem", md: "1.05rem" },
                                    lineHeight: 1.7,
                                    textAlign: "left",
                                }}
                            >
                                {p}
                            </Typography>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

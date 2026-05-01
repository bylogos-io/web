"use client";

import { Box, Container, Typography, Stack, alpha } from "@mui/material";
import { motion } from "@/lib/motion-shim";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";
import { monoFont } from "@/theme";

export function PartnersTiers() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.partners as any;

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
            <Container maxWidth="md">
                <SectionHeader eyebrow="IDEAS" title={c.ideasTitle} description={c.ideasSub} />

                <Stack
                    spacing={0}
                    component={motion.div}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    sx={(theme) => ({
                        borderTop: `1px solid ${theme.palette.divider}`,
                    })}
                >
                    {c.ideas.map((idea: string, idx: number) => (
                        <Box
                            key={idx}
                            sx={(theme) => ({
                                display: "flex",
                                alignItems: "flex-start",
                                gap: { xs: 2.5, md: 4 },
                                py: { xs: 3, md: 4 },
                                borderBottom: `1px solid ${theme.palette.divider}`,
                                transition: "background-color 0.2s ease",
                                "&:hover": {
                                    backgroundColor: alpha(theme.palette.primary.main, 0.03),
                                    "& .idea-arrow": {
                                        opacity: 1,
                                        transform: "translate(2px, -2px)",
                                    },
                                },
                            })}
                        >
                            <Typography
                                sx={{
                                    fontFamily: monoFont,
                                    fontSize: "0.85rem",
                                    letterSpacing: "0.18em",
                                    color: "text.disabled",
                                    minWidth: { xs: 36, md: 60 },
                                    pt: 0.5,
                                }}
                            >
                                0{idx + 1}
                            </Typography>
                            <Typography
                                sx={{
                                    flex: 1,
                                    color: "common.white",
                                    fontSize: { xs: "1rem", md: "1.125rem" },
                                    lineHeight: 1.5,
                                    textTransform: "none",
                                }}
                            >
                                {idea}
                            </Typography>
                            <ArrowOutwardIcon
                                className="idea-arrow"
                                sx={{
                                    color: "primary.main",
                                    fontSize: 20,
                                    opacity: 0.4,
                                    transition: "all 0.25s ease",
                                    flexShrink: 0,
                                }}
                            />
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}

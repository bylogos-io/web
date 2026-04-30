"use client";

import { Box, Container, Stack, Typography, alpha } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";

export function PlatformArchitecture() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.platform;

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
                <SectionHeader
                    eyebrow="ARCHITECTURE"
                    title={c.architectureTitle}
                    description={c.architectureDescription}
                />
                <Stack spacing={2} sx={{ maxWidth: 640, mx: "auto" }}>
                    {c.architecturePoints.map((p, idx) => (
                        <Box
                            key={idx}
                            component={motion.div}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                        >
                            <CheckCircleOutlineIcon sx={{ color: "primary.main", mt: 0.5 }} />
                            <Typography sx={{ color: "text.primary", lineHeight: 1.6 }}>{p}</Typography>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}

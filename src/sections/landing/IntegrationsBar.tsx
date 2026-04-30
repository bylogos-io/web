"use client";

import { Box, Container, Stack, Typography, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

function Chips({ items }: { items: string[] }) {
    return (
        <Stack
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap", gap: 1, rowGap: 1 }}
        >
            {items.map((item, idx) => (
                <Box
                    key={item}
                    component={motion.div}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    viewport={{ once: true }}
                    sx={(theme) => ({
                        px: 1.5,
                        py: 0.6,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        fontFamily: monoFont,
                        fontSize: "0.72rem",
                        color: "text.secondary",
                        letterSpacing: "0.02em",
                        transition: "all 0.2s ease",
                        "&:hover": {
                            borderColor: alpha(theme.palette.primary.main, 0.5),
                            color: "text.primary",
                            backgroundColor: alpha(theme.palette.primary.main, 0.04),
                        },
                    })}
                >
                    {item}
                </Box>
            ))}
        </Stack>
    );
}

export function IntegrationsBar() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const data = (content.home as any).landingV2.integrations as {
        label: string;
        sub: string;
        protocolsLabel: string;
        protocols: string[];
        vendorsLabel: string;
        vendors: string[];
    };

    return (
        <Box
            component="section"
            id="integrations"
            sx={(theme) => ({
                py: { xs: 5, md: 7 },
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `1px solid ${theme.palette.divider}`,
                backgroundColor: alpha(theme.palette.background.paper, 0.3),
            })}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 4, md: 6 }}
                    alignItems={{ xs: "flex-start", md: "flex-start" }}
                >
                    <Box sx={{ flexShrink: 0, maxWidth: { md: 220 } }}>
                        <Typography
                            sx={{
                                fontFamily: monoFont,
                                fontSize: "0.7rem",
                                color: "primary.main",
                                letterSpacing: "0.18em",
                                mb: 1,
                            }}
                        >
                            {data.label}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", fontSize: "0.85rem", lineHeight: 1.5 }}
                        >
                            {data.sub}
                        </Typography>
                    </Box>

                    <Stack spacing={2.5} sx={{ flex: 1, minWidth: 0 }}>
                        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1.5, md: 3 }} alignItems={{ md: "center" }}>
                            <Typography
                                sx={{
                                    fontFamily: monoFont,
                                    fontSize: "0.65rem",
                                    color: "text.disabled",
                                    letterSpacing: "0.18em",
                                    minWidth: { md: 110 },
                                    flexShrink: 0,
                                }}
                            >
                                {data.protocolsLabel}
                            </Typography>
                            <Chips items={data.protocols} />
                        </Stack>

                        <Box
                            sx={(theme) => ({
                                height: 1,
                                background: `linear-gradient(90deg, transparent, ${theme.palette.divider} 20%, ${theme.palette.divider} 80%, transparent)`,
                            })}
                        />

                        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1.5, md: 3 }} alignItems={{ md: "center" }}>
                            <Typography
                                sx={{
                                    fontFamily: monoFont,
                                    fontSize: "0.65rem",
                                    color: "text.disabled",
                                    letterSpacing: "0.18em",
                                    minWidth: { md: 110 },
                                    flexShrink: 0,
                                }}
                            >
                                {data.vendorsLabel}
                            </Typography>
                            <Chips items={data.vendors} />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

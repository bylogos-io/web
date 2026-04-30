"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, Grid2 as Grid, alpha, Button, Stack } from "@mui/material";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

type PlanProps = {
    eyebrow: string;
    title: string;
    price: string;
    period?: string;
    subtitle: string;
    description: string;
    features: string[];
    button: string;
    highlight?: boolean;
    delay?: number;
};

function Plan({ eyebrow, title, price, period, subtitle, description, features, button, highlight, delay = 0 }: PlanProps) {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            sx={(theme) => ({
                p: { xs: 4, md: 5 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                border: `1px solid ${highlight ? alpha(theme.palette.primary.main, 0.4) : theme.palette.divider}`,
                backgroundColor: "transparent",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                    borderColor: alpha(theme.palette.primary.main, 0.5),
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
                    mb: 2,
                }}
            >
                {eyebrow}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: "-0.015em", mb: 1 }}>
                {title}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 4, fontSize: "0.95rem" }}>
                {subtitle}
            </Typography>

            <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mb: 3 }}>
                <Typography
                    variant="h2"
                    sx={{ fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1 }}
                >
                    {price}
                </Typography>
                {period && (
                    <Typography sx={{ color: "text.secondary", fontFamily: monoFont, fontSize: "0.875rem" }}>
                        {period}
                    </Typography>
                )}
            </Stack>

            <Typography
                sx={{
                    color: "text.secondary",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    mb: 4,
                    pb: 4,
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                }}
            >
                {description}
            </Typography>

            <Stack spacing={1.5} sx={{ flex: 1 }}>
                {features.map((f, idx) => (
                    <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                        <Box
                            sx={(theme) => ({
                                width: 5,
                                height: 5,
                                borderRadius: 1,
                                backgroundColor: theme.palette.primary.main,
                                mt: "0.55em",
                                flexShrink: 0,
                            })}
                        />
                        <Typography sx={{ color: "text.primary", fontSize: "0.9rem", lineHeight: 1.55 }}>
                            {f}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            <Box sx={{ mt: 4 }}>
                <Button
                    component={Link}
                    href="/contact"
                    variant={highlight ? "contained" : "outline"}
                    size="lg"
                    fullWidth
                >
                    {button}
                </Button>
            </Box>
        </Box>
    );
}

export function PricingHero() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.pricing;

    return (
        <Box component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 2, md: 2.5 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Plan
                            eyebrow="01 / CAPEX"
                            title={c.installationTitle}
                            price={c.installationPrice}
                            subtitle={c.installationSubtitle}
                            description={c.installationDescription}
                            features={c.installationFeatures}
                            button={c.installationButton}
                            delay={0}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Plan
                            eyebrow="02 / OPEX"
                            title={c.subscriptionTitle}
                            price={c.subscriptionPrice}
                            period={c.subscriptionPeriod}
                            subtitle={c.subscriptionSubtitle}
                            description={c.subscriptionDescription}
                            features={c.subscriptionFeatures}
                            button={c.subscriptionButton}
                            highlight
                            delay={0.1}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

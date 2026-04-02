"use client";

import { motion } from "framer-motion";
import { Box, Container, Typography, Grid2 as Grid, Card, alpha, Stack, Divider, Button } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

export function PricingHero() {
    const locale = useLocale();
    const content = getSiteContent(locale);

    return (
        <Box sx={{ bgcolor: "background.default" }}>
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {/* Instalación Inicial */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            sx={{ height: "100%" }}
                        >
                            <Card
                                sx={(theme) => ({
                                    p: 5,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "hidden",
                                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                                    backdropFilter: "blur(12px)",
                                    border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        borderColor: theme.palette.primary.main,
                                    },
                                })}
                            >
                                <Stack spacing={3} sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Box
                                            sx={(theme) => ({
                                                p: 1.5,
                                                borderRadius: 1.5,
                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                color: "primary.main",
                                                display: "flex",
                                            })}
                                        >
                                            <MemoryIcon fontSize="large" />
                                        </Box>
                                        <Typography variant="h5" fontWeight={800} letterSpacing={1}>
                                            {content.pricing.installationTitle}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h3" fontWeight={900}>
                                            {content.pricing.installationPrice}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            sx={{ mt: 1, fontWeight: 600 }}
                                        >
                                            {content.pricing.installationSubtitle}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" color="text.secondary">
                                        {content.pricing.installationDescription}
                                    </Typography>

                                    <Divider />

                                    <Stack spacing={2}>
                                        {content.pricing.installationFeatures.map((feature, fIdx) => (
                                            <Typography
                                                key={fIdx}
                                                variant="body2"
                                                sx={{
                                                    color: "text.secondary",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 2,
                                                }}
                                            >
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        bgcolor: "primary.main",
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                {feature}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Stack>
                                <Box sx={{ mt: 4 }}>
                                    <Link href="/#newsletter" style={{ textDecoration: "none" }}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                fontWeight: 700,
                                                py: 1.5,
                                            }}
                                        >
                                            {content.pricing.installationButton}
                                        </Button>
                                    </Link>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>

                    {/* Suscripción Mensual */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            sx={{ height: "100%" }}
                        >
                            <Card
                                sx={(theme) => ({
                                    p: 5,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "hidden",
                                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                                    backdropFilter: "blur(12px)",
                                    border: `2px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        borderColor: theme.palette.secondary.main,
                                    },
                                })}
                            >
                                <Stack spacing={3} sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Box
                                            sx={(theme) => ({
                                                p: 1.5,
                                                borderRadius: 1.5,
                                                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                                                color: "secondary.main",
                                                display: "flex",
                                            })}
                                        >
                                            <CloudSyncIcon fontSize="large" />
                                        </Box>
                                        <Typography variant="h5" fontWeight={800} letterSpacing={1}>
                                            {content.pricing.subscriptionTitle}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h3" fontWeight={900}>
                                            {content.pricing.subscriptionPrice}{" "}
                                            <Typography component="span" variant="h5" color="text.secondary">
                                                {content.pricing.subscriptionPeriod}
                                            </Typography>
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            sx={{ mt: 1, fontWeight: 600 }}
                                        >
                                            {content.pricing.subscriptionSubtitle}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" color="text.secondary">
                                        {content.pricing.subscriptionDescription}
                                    </Typography>

                                    <Divider />

                                    <Stack spacing={2}>
                                        {content.pricing.subscriptionFeatures.map((feature, fIdx) => (
                                            <Typography
                                                key={fIdx}
                                                variant="body2"
                                                sx={{
                                                    color: "text.secondary",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 2,
                                                }}
                                            >
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        bgcolor: "secondary.main",
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                {feature}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Stack>
                                <Box sx={{ mt: 4 }}>
                                    <Link href="/#newsletter" style={{ textDecoration: "none" }}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                fontWeight: 700,
                                                py: 1.5,
                                            }}
                                        >
                                            {content.pricing.subscriptionButton}
                                        </Button>
                                    </Link>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

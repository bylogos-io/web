"use client";
import { motion } from "framer-motion";
import { Box, Container, Grid2 as Grid, Typography, alpha, Stack, Card } from "@mui/material";
import { FEATURES_DATA } from "@/data/landing";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

export function Features() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const features = FEATURES_DATA.map((feature, index) => ({
        ...feature,
        ...content.home.features.items[index],
    }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <Box
            component="section"
            id="features"
            sx={(theme) => ({
                py: 8,
                backgroundColor: "transparent",
                overflow: "hidden",
            })}
        >
            <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    sx={{ textAlign: "center", mb: 6 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                            mb: 2,
                            fontWeight: 800,
                            lineHeight: 1.2,
                        }}
                    >
                        <Box
                            component="span"
                            sx={(theme) => ({
                                background: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            })}
                        >
                            {content.home.features.titleStart}
                        </Box>{" "}
                        <Box component="span" sx={{ color: "primary.main" }}>
                            {content.home.features.titleAccent}
                        </Box>
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{
                            maxWidth: 800,
                            mx: "auto",
                            fontWeight: 400,
                            fontSize: "1.125rem",
                            lineHeight: 1.6,
                        }}
                    >
                        {content.home.features.description}
                    </Typography>
                </Box>

                <Box
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Grid container spacing={2}>
                        {features.map((feature, index) => (
                            <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
                                <Box
                                    component={motion.div}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    sx={{ height: "100%" }}
                                >
                                    <Card
                                        sx={(theme) => ({
                                            height: "100%",
                                            p: 2.5,
                                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                            backgroundColor: "background.paper",
                                            border: "1px solid",
                                            borderColor: "divider",
                                            "&:hover": {
                                                borderColor: alpha(theme.palette.primary.main, 0.5),
                                                backgroundColor: alpha(theme.palette.background.paper, 0.8),
                                                boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.05)}`,
                                            },
                                            "& .feature-icon-wrapper": {
                                                transition: "all 0.3s ease",
                                            },
                                            "&:hover .feature-icon-wrapper": {
                                                transform: "rotate(10deg) scale(1.1)",
                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                            },
                                            "&:hover .feature-title": {
                                                color: "primary.main",
                                            },
                                        })}
                                    >
                                        <Stack direction="row" spacing={2} alignItems="flex-start">
                                            <Box
                                                className="feature-icon-wrapper"
                                                sx={(theme) => ({
                                                    p: 1.5,
                                                    borderRadius: 2,
                                                    backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                                                    color: "primary.main",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                })}
                                            >
                                                <feature.icon sx={{ fontSize: 24 }} />
                                            </Box>
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    className="feature-title"
                                                    sx={{
                                                        mb: 1,
                                                        fontWeight: 700,
                                                        transition: "color 0.3s ease",
                                                        fontSize: "1.1rem",
                                                    }}
                                                >
                                                    {feature.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ lineHeight: 1.6, fontSize: "0.9rem" }}
                                                >
                                                    {feature.description}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

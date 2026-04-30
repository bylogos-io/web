"use client";

import { Box, Container, Grid2 as Grid, Typography, Card, Avatar, alpha, IconButton, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ABOUT_FOUNDERS_DATA } from "@/data/about";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";

export function AboutFounders() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const founders = ABOUT_FOUNDERS_DATA.founders.map((founder, index) => ({
        ...founder,
        role: content.about.founders[index]?.role ?? founder.role,
    }));

    return (
        <Box component="section" sx={{ py: { xs: 10, md: 16 } }}>
            <Container maxWidth="lg">
                <SectionHeader eyebrow="TEAM" title={content.about.foundersTitle} />

                <Grid container spacing={4} justifyContent="center">
                    {founders.map((founder, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 5 }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                sx={{ height: "100%" }}
                            >
                                <Card
                                    elevation={0}
                                    sx={(theme) => ({
                                        height: "100%",
                                        p: 5,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        textAlign: "center",
                                        backgroundColor: "transparent",
                                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                        borderRadius: 1,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            borderColor: alpha(theme.palette.primary.main, 0.4),
                                            backgroundColor: alpha(theme.palette.primary.main, 0.02),
                                        },
                                    })}
                                >
                                    <Avatar
                                        src={founder.image}
                                        alt={founder.name}
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mb: 4,
                                            border: (theme) => `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                                            filter: "grayscale(100%)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                filter: "grayscale(0%)",
                                            },
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{ color: "text.primary", fontWeight: 400, letterSpacing: "-0.015em", mb: 1 }}
                                    >
                                        {founder.name}
                                    </Typography>
                                    <Typography
                                        sx={(theme) => ({
                                            fontFamily: "var(--font-geist-mono)",
                                            color: theme.palette.primary.main,
                                            fontSize: "0.75rem",
                                            letterSpacing: "0.18em",
                                            mb: 4,
                                            flexGrow: 1,
                                        })}
                                    >
                                        {founder.role}
                                    </Typography>

                                    <Stack direction="row" spacing={1.5}>
                                        {founder.linkedin && (
                                            <IconButton
                                                component="a"
                                                href={founder.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={(theme) => ({
                                                    color: "text.secondary",
                                                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                                    "&:hover": {
                                                        color: "primary.main",
                                                        borderColor: "primary.main",
                                                        backgroundColor: alpha(theme.palette.primary.main, 0.05),
                                                    },
                                                    transition: "all 0.2s ease",
                                                })}
                                            >
                                                <LinkedInIcon fontSize="small" />
                                            </IconButton>
                                        )}
                                        {founder.github && (
                                            <IconButton
                                                component="a"
                                                href={founder.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={(theme) => ({
                                                    color: "text.secondary",
                                                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                                    "&:hover": {
                                                        color: "text.primary",
                                                        borderColor: "text.primary",
                                                        backgroundColor: alpha(theme.palette.text.primary, 0.05),
                                                    },
                                                    transition: "all 0.2s ease",
                                                })}
                                            >
                                                <GitHubIcon fontSize="small" />
                                            </IconButton>
                                        )}
                                    </Stack>
                                </Card>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

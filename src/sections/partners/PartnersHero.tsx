"use client";

import { Box, Container, Typography, Button, alpha } from "@mui/material";
import { monoFont } from "@/theme";
import { motion } from "@/lib/motion-shim";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

export function PartnersHero() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.partners;

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                backgroundColor: "background.default",
                pt: { xs: 18, md: 22 },
                pb: { xs: 8, md: 12 },
            }}
        >
            <Container maxWidth="lg" sx={{ textAlign: "center" }}>
                <Typography
                    component={motion.div}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                        fontFamily: monoFont,
                        fontSize: "0.75rem",
                        letterSpacing: "0.22em",
                        color: "primary.main",
                        mb: 3,
                    }}
                >
                    {c.heroEyebrow}
                </Typography>
                <Typography
                    component={motion.h1}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    variant="h1"
                    sx={{
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        color: "common.white",
                        maxWidth: 920,
                        mx: "auto",
                        textWrap: "balance" as any,
                        fontSize: { xs: "2.25rem", md: "3.75rem" },
                    }}
                >
                    {c.heroTitleStart} {c.heroTitleAccent}
                </Typography>
                <Typography
                    component={motion.p}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    sx={{
                        mt: 3,
                        mb: 5,
                        color: "text.secondary",
                        maxWidth: 640,
                        mx: "auto",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                    }}
                >
                    {c.heroDescription}
                </Typography>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Button
                        component={Link}
                        href="/contact"
                        sx={(theme) => ({
                            fontFamily: monoFont,
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            px: 4,
                            py: 1.75,
                            borderRadius: 1,
                            color: theme.palette.primary.main,
                            backgroundColor: "transparent",
                            border: `1px solid ${theme.palette.primary.main}`,
                            boxShadow: "none",
                            transition: "background-color 0.15s ease",
                            "&:hover": {
                                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                                boxShadow: "none",
                                transform: "none",
                            },
                        })}
                    >
                        {c.heroCta}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

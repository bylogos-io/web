"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { getSiteContent } from "@/i18n/siteContent";
import { JoinedButtonGroup } from "@/components/JoinedButtonGroup";
import { monoFont } from "@/theme";

export function PlatformHero() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.platform;

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                backgroundColor: "background.default",
                pt: { xs: 18, md: 22 },
                pb: { xs: 8, md: 12 },
                overflow: "hidden",
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
                    transition={{ duration: 0.5, delay: 0.4 }}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <JoinedButtonGroup>
                        <Button
                            component={Link}
                            href="/contact"
                            variant="contained"
                            size="lg"
                        >
                            {c.heroCtaPrimary}
                        </Button>
                        <Button
                            component={Link}
                            href="/industries"
                            variant="contained"
                            size="lg"
                            sx={(theme) => ({
                                backgroundColor: "transparent",
                                color: theme.palette.text.primary,
                                "&:hover": { backgroundColor: "rgba(255,255,255,0.04)" },
                            })}
                        >
                            {c.heroCtaSecondary}
                        </Button>
                    </JoinedButtonGroup>
                </Box>
            </Container>
        </Box>
    );
}

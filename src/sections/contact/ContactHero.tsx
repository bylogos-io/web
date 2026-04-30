"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

export function ContactHero() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.contact;

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                backgroundColor: "background.default",
                pt: { xs: 18, md: 22 },
                pb: { xs: 4, md: 6 },
            }}
        >
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
                <Typography
                    component={motion.h1}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    variant="h1"
                    sx={{
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.05,
                        color: "common.white",
                        mb: 3,
                        fontSize: { xs: "2.75rem", md: "4.25rem" },
                    }}
                >
                    {c.heroTitle}
                </Typography>
                <Typography
                    component={motion.p}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    sx={{
                        color: "text.secondary",
                        maxWidth: 540,
                        mx: "auto",
                        fontSize: "1.05rem",
                        lineHeight: 1.6,
                    }}
                >
                    {c.heroDescription}{" "}
                    <Box
                        component="a"
                        href="mailto:contact@bylogos.io"
                        sx={{
                            color: "primary.main",
                            textDecoration: "underline",
                            textUnderlineOffset: 4,
                            "&:hover": { color: "primary.light" },
                        }}
                    >
                        contact@bylogos.io
                    </Box>
                </Typography>
            </Container>
        </Box>
    );
}

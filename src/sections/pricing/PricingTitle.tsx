"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "@/lib/motion-shim";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

export function PricingTitle() {
    const locale = useLocale();
    const content = getSiteContent(locale);

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
                    {content.pricing.eyebrow}
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
                    {content.pricing.titleStart} {content.pricing.titleAccent}
                </Typography>
                <Typography
                    component={motion.p}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    sx={{
                        mt: 3,
                        color: "text.secondary",
                        maxWidth: 640,
                        mx: "auto",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                    }}
                >
                    {content.pricing.description}
                </Typography>
            </Container>
        </Box>
    );
}

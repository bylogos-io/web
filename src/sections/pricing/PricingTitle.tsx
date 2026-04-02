"use client";

import { Box, Typography, Container } from "@mui/material";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

export function PricingTitle() {
    const locale = useLocale();
    const content = getSiteContent(locale);

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "background.default",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 20, mt: 15, textAlign: "center" }}>
                <Typography
                    variant="subtitle2"
                    sx={{
                        color: "primary.main",
                        fontWeight: 500,
                        userSelect: "none",
                        pointerEvents: "none",
                        letterSpacing: 2,
                        mb: 2,
                    }}
                >
                    {content.pricing.eyebrow}
                </Typography>
                <Typography
                    variant="h1"
                    fontWeight={900}
                    sx={{
                        fontSize: { xs: "2.5rem", md: "4.5rem" },
                        letterSpacing: "-0.02em",
                        mb: 3,
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
                        {content.pricing.titleStart}{" "}
                    </Box>
                    <Box component="span" sx={{ color: "primary.main" }}>
                        {content.pricing.titleAccent}
                    </Box>
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        color: "text.secondary",
                        maxWidth: 800,
                        mx: "auto",
                        lineHeight: 1.6,
                        fontWeight: 400,
                    }}
                >
                    {content.pricing.description}
                </Typography>
            </Container>
        </Box>
    );
}

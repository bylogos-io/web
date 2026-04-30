"use client";

import { Box, Container, Typography, Grid2 as Grid, alpha } from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";
import { monoFont } from "@/theme";

const moduleIcons = [
    DynamicFeedIcon,
    AutoGraphIcon,
    ViewInArIcon,
    DashboardCustomizeIcon,
    GroupAddIcon,
    PrecisionManufacturingIcon,
];

export function PricingModules() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const items = content.pricing.modules.map((m, idx) => ({
        title: m.title,
        description: m.description,
        icon: moduleIcons[idx % moduleIcons.length],
    }));

    return (
        <Box component="section" sx={{ py: { xs: 10, md: 16 }, backgroundColor: "background.default" }}>
            <Container maxWidth="lg">
                <SectionHeader
                    eyebrow="ADD-ONS"
                    title={content.pricing.modulesTitle}
                    description={content.pricing.modulesDescription}
                />
                <Grid container spacing={{ xs: 2, md: 2.5 }}>
                    {items.map((mod, index) => {
                        const Icon = mod.icon;
                        return (
                            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                                    viewport={{ once: true }}
                                    sx={(theme) => ({
                                        height: "100%",
                                        p: { xs: 3, md: 4 },
                                        borderRadius: 1,
                                        border: `1px solid ${theme.palette.divider}`,
                                        backgroundColor: "transparent",
                                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                        "&:hover": {
                                            borderColor: alpha(theme.palette.primary.main, 0.4),
                                            transform: "translateY(-2px)",
                                        },
                                    })}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                                        <Icon sx={{ color: "primary.main", fontSize: 22 }} />
                                        <Typography
                                            sx={{
                                                fontFamily: monoFont,
                                                fontSize: "0.7rem",
                                                letterSpacing: "0.2em",
                                                color: "primary.main",
                                            }}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h4"
                                        sx={{ fontWeight: 400, letterSpacing: "-0.015em", mb: 1.5 }}
                                    >
                                        {mod.title}
                                    </Typography>
                                    <Typography sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.55 }}>
                                        {mod.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}

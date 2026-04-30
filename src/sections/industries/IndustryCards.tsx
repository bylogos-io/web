"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Container, alpha, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { INDUSTRY_CARDS_DATA } from "@/data/industries";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { SectionHeader } from "@/components/SectionHeader";
import { monoFont } from "@/theme";

const HEADER_HEIGHT = 96;

const toSlug = (title: string) =>
    title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/\s+/g, "-");

export function IndustryCards() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const industryDetails = INDUSTRY_CARDS_DATA.map((industry, index) => ({
        ...industry,
        title: content.industries.cards[index]?.title ?? industry.title,
        description: content.industries.cards[index]?.description ?? industry.description,
        points: content.industries.cards[index]?.points ?? industry.points,
    }));

    return (
        <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <SectionHeader
                    eyebrow="PORTFOLIO"
                    title={content.industries.titleSection}
                    description={content.industries.descriptionSection}
                />
                <Stack spacing={{ xs: 2, md: 2.5 }}>
                    {industryDetails.map((industry, index) => (
                        <Box key={index} id={toSlug(industry.title)} sx={{ scrollMarginTop: `${HEADER_HEIGHT}px` }}>
                            <IndustryCard industry={industry} index={index} />
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}

function IndustryCard({ industry, index }: { industry: any; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            component={motion.div}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true }}
            sx={(theme) => ({
                position: "relative",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                overflow: "hidden",
                backgroundColor: "transparent",
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                    borderColor: alpha(theme.palette.primary.main, 0.4),
                },
            })}
        >
            <Box
                sx={{
                    position: "relative",
                    width: { xs: "100%", md: "38%" },
                    height: { xs: 220, md: 280 },
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${industry.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "grayscale(20%) brightness(0.85)",
                        transition: "transform 0.6s ease",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                    }}
                />
                <Typography
                    sx={(theme) => ({
                        position: "absolute",
                        top: 16,
                        left: 16,
                        zIndex: 2,
                        fontFamily: monoFont,
                        fontSize: "0.7rem",
                        letterSpacing: "0.2em",
                        color: theme.palette.primary.main,
                        backgroundColor: alpha(theme.palette.background.default, 0.7),
                        backdropFilter: "blur(8px)",
                        px: 1.25,
                        py: 0.5,
                        borderRadius: 1,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                    })}
                >
                    {industry.tag}
                </Typography>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    p: { xs: 3, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: monoFont,
                        fontSize: "0.7rem",
                        letterSpacing: "0.2em",
                        color: "primary.main",
                        mb: 1.5,
                    }}
                >
                    {String(index + 1).padStart(2, "0")} / {String(INDUSTRY_CARDS_DATA.length).padStart(2, "0")}
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 600, letterSpacing: "-0.015em", mb: 1.5 }}
                >
                    {industry.title}
                </Typography>
                <Typography
                    sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.6, mb: 3, maxWidth: 520 }}
                >
                    {industry.description}
                </Typography>

                <Stack spacing={1}>
                    {industry.points.map((point: string, idx: number) => (
                        <Stack key={idx} direction="row" spacing={1.25} alignItems="center">
                            <CheckCircleOutlineIcon sx={{ fontSize: 16, color: "primary.main" }} />
                            <Typography variant="body2" sx={{ color: "text.primary" }}>
                                {point}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}

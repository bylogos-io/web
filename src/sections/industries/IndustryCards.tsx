"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Container, alpha, Stack, Chip } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { INDUSTRY_CARDS_DATA } from "@/data/industries";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

const HEADER_HEIGHT = 96;

const toSlug = (title: string) =>
    title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
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
        <Container maxWidth="lg" sx={{ mt: 15 }}>
            <Box sx={{ mb: 8, textAlign: "center" }}>
                <Typography variant="h2" fontWeight={800}>
                    {content.industries.titleSection}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mt: 2 }}>
                    {content.industries.descriptionSection}
                </Typography>
            </Box>

            {industryDetails.map((industry, index) => (
                <Box key={index} id={toSlug(industry.title)} sx={{ scrollMarginTop: `${HEADER_HEIGHT}px` }}>
                    <IndustryCard industry={industry} index={index} />
                </Box>
            ))}
        </Container>
    );
}

function IndustryCard({ industry, index }: { industry: any; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            component={motion.div}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            sx={(theme) => ({
                position: "relative",
                mb: 4,
                height: { xs: "auto", md: 320 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                overflow: "hidden",
                backgroundColor: alpha(theme.palette.background.paper, 0.4),
                backdropFilter: "blur(10px)",
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                borderRadius: 2,
                transition: "border-color 0.3s ease",
                "&:hover": {
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                },
            })}
        >
            {/* Left Image Section */}
            <Box
                sx={{
                    position: "relative",
                    width: { xs: "100%", md: "40%" },
                    height: { xs: 200, md: "100%" },
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
                        transition: "transform 0.5s ease",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                />
                <Chip
                    label={industry.tag}
                    sx={(theme) => ({
                        position: "absolute",
                        top: 20,
                        left: 20,
                        zIndex: 2,
                        backgroundColor: alpha(theme.palette.primary.main, 0.9),
                        fontWeight: 700,
                        color: "white",
                        fontSize: "0.75rem",
                        px: 1,
                    })}
                />
            </Box>

            {/* Right Content Section */}
            <Box
                sx={{
                    flex: 1,
                    p: { xs: 3, md: 5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: 1,
                }}
            >
                <Typography variant="h4" fontWeight={900} sx={{ mb: 1.5, color: "text.primary" }}>
                    {industry.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, maxWidth: 450 }}>
                    {industry.description}
                </Typography>

                <Stack spacing={1.5}>
                    {industry.points.map((point: string, idx: number) => (
                        <Stack key={idx} direction="row" spacing={1.5} alignItems="center">
                            <CheckCircleOutlineIcon sx={{ fontSize: 18, color: "primary.main" }} />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {point}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}

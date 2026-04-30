"use client";

import { Box, Typography, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { monoFont } from "@/theme";

type Props = {
    eyebrow?: string;
    title: ReactNode;
    accent?: string;
    description?: ReactNode;
    align?: "left" | "center";
    as?: "h1" | "h2";
    maxWidth?: number | string;
};

export function SectionHeader({
    eyebrow,
    title,
    accent,
    description,
    align = "center",
    as = "h2",
    maxWidth = 720,
}: Props) {
    const isH1 = as === "h1";

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
                maxWidth,
                mx: align === "center" ? "auto" : 0,
                textAlign: align,
                mb: { xs: 5, md: 7 },
            }}
        >
            {eyebrow && (
                <Typography
                    sx={{
                        fontFamily: monoFont,
                        fontSize: "0.75rem",
                        letterSpacing: "0.18em",
                        color: "primary.main",
                        mb: 2,
                    }}
                >
                    {eyebrow}
                </Typography>
            )}
            <Typography
                variant={isH1 ? "h1" : "h2"}
                sx={{
                    mb: description ? 2 : 0,
                    fontWeight: 600,
                    letterSpacing: isH1 ? "-0.03em" : "-0.025em",
                    textWrap: "balance" as any,
                }}
            >
                {accent ? (
                    <>
                        <Box
                            component="span"
                            sx={(theme) => ({
                                background: `linear-gradient(to right, ${theme.palette.text.primary}, ${theme.palette.text.primary}, ${alpha(theme.palette.primary.main, 0.95)})`,
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            })}
                        >
                            {title}{" "}
                        </Box>
                        <Box component="span" sx={{ color: "primary.main" }}>
                            {accent}
                        </Box>
                    </>
                ) : (
                    title
                )}
            </Typography>
            {description && (
                <Typography
                    variant="body1"
                    sx={{
                        color: "text.secondary",
                        textWrap: "balance" as any,
                        maxWidth: 640,
                        mx: align === "center" ? "auto" : 0,
                        lineHeight: 1.6,
                    }}
                >
                    {description}
                </Typography>
            )}
        </Box>
    );
}

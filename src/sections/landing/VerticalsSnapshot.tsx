"use client";

import { Box, Container, Grid2 as Grid, Stack, Typography, alpha } from "@mui/material";
import { motion } from "@/lib/motion-shim";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { Link } from "@/i18n/routing";
import { monoFont } from "@/theme";

type Item = { tag: string; title: string; line: string; agnostic?: boolean };

export function VerticalsSnapshot() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const data = (content.home as any).landingV2.verticals as {
        eyebrow: string;
        title: string;
        sub: string;
        items: Item[];
        cta: string;
        ctaHref: string;
    };

    return (
        <Box component="section" id="verticals" sx={{ py: { xs: 10, md: 14 } }}>
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", md: "flex-end" }}
                    spacing={3}
                    sx={{ mb: { xs: 5, md: 7 } }}
                >
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        sx={{ maxWidth: 600 }}
                    >
                        <Typography
                            sx={{
                                fontFamily: monoFont,
                                fontSize: "0.75rem",
                                letterSpacing: "0.18em",
                                color: "primary.main",
                                mb: 2,
                            }}
                        >
                            {data.eyebrow}
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{ mb: 2, fontWeight: 600, letterSpacing: "-0.025em", textWrap: "balance" as any }}
                        >
                            {data.title}
                        </Typography>
                        <Typography sx={{ color: "text.secondary", textWrap: "balance" as any }}>
                            {data.sub}
                        </Typography>
                    </Box>
                    <Link href={data.ctaHref} style={{ textDecoration: "none" }}>
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={(theme) => ({
                                px: 2.5,
                                py: 1.25,
                                borderRadius: 1,
                                border: `1px solid ${theme.palette.divider}`,
                                color: "text.primary",
                                fontFamily: monoFont,
                                fontSize: "0.8rem",
                                letterSpacing: "0.05em",
                                transition: "all 0.2s ease",
                                "&:hover": {
                                    borderColor: alpha(theme.palette.primary.main, 0.6),
                                    color: "primary.main",
                                },
                            })}
                        >
                            <span>{data.cta}</span>
                            <ArrowForwardIcon sx={{ fontSize: 16 }} />
                        </Stack>
                    </Link>
                </Stack>

                {(() => {
                    const normalCount = data.items.filter((it) => !it.agnostic).length;
                    const mdRemainder = normalCount % 3;
                    const mdAgnosticSpan = mdRemainder === 0 ? 12 : (3 - mdRemainder) * 4;
                    const smRemainder = normalCount % 2;
                    const smAgnosticSpan = smRemainder === 0 ? 12 : 6;
                    return (
                <Grid container spacing={{ xs: 1.5, md: 2 }}>
                    {data.items.map((item, idx) => {
                        const isAgnostic = Boolean(item.agnostic);
                        const colSize = isAgnostic
                            ? { xs: 12, sm: smAgnosticSpan, md: mdAgnosticSpan }
                            : { xs: 12, sm: 6, md: 4 };
                        return (
                            <Grid key={item.tag} size={colSize}>
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    sx={(theme) => ({
                                        height: "100%",
                                        p: 3,
                                        borderRadius: 1,
                                        border: `1px solid ${
                                            isAgnostic
                                                ? alpha(theme.palette.primary.main, 0.4)
                                                : theme.palette.divider
                                        }`,
                                        backgroundColor: isAgnostic
                                            ? alpha(theme.palette.primary.main, 0.05)
                                            : alpha(theme.palette.background.paper, 0.3),
                                        background: isAgnostic
                                            ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`
                                            : undefined,
                                        transition: "all 0.25s ease",
                                        cursor: "pointer",
                                        "&:hover": {
                                            borderColor: alpha(theme.palette.primary.main, 0.55),
                                            backgroundColor: isAgnostic
                                                ? alpha(theme.palette.primary.main, 0.08)
                                                : alpha(theme.palette.background.paper, 0.55),
                                            "& .vertical-arrow": {
                                                opacity: 1,
                                                transform: "translateX(0)",
                                            },
                                        },
                                    })}
                                >
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        sx={{ mb: 2 }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: monoFont,
                                                fontSize: "0.7rem",
                                                color: "primary.main",
                                                letterSpacing: "0.15em",
                                            }}
                                        >
                                            {item.tag}
                                        </Typography>
                                        {isAgnostic ? (
                                            <Box
                                                sx={(theme) => ({
                                                    width: 24,
                                                    height: 24,
                                                    borderRadius: "50%",
                                                    border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                                                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                    color: theme.palette.primary.main,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                })}
                                            >
                                                <AddIcon sx={{ fontSize: 14 }} />
                                            </Box>
                                        ) : (
                                            <ArrowForwardIcon
                                                className="vertical-arrow"
                                                sx={{
                                                    fontSize: 16,
                                                    color: "primary.main",
                                                    opacity: 0,
                                                    transform: "translateX(-4px)",
                                                    transition: "all 0.2s ease",
                                                }}
                                            />
                                        )}
                                    </Stack>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mb: 1,
                                            fontWeight: 600,
                                            letterSpacing: "-0.015em",
                                            color: isAgnostic ? "primary.main" : "text.primary",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.55,
                                            textWrap: "pretty" as any,
                                        }}
                                    >
                                        {item.line}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
                    );
                })()}
            </Container>
        </Box>
    );
}

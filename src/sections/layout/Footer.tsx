"use client";

import { motion } from "@/lib/motion-shim";
import Image from "next/image";
import logoImage from "@public/isologo.svg";
import nvidiaInceptionBadge from "@public/nvidia-inception-program-badge-rgb-for-screen.svg";
import seeedLogo from "@public/seeed.webp";
import { SOCIAL_LINKS } from "@/data/layout";
import { Box, Container, Grid2 as Grid, Typography, Divider, Stack, alpha, Button, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "@/i18n/routing";
import { getSiteContent } from "@/i18n/siteContent";
import { useLocale } from "next-intl";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const locale = useLocale();
    const content = getSiteContent(locale);
    const socialLinks = SOCIAL_LINKS;

    return (
        <Box
            component="footer"
            id="contact"
            sx={(theme) => ({
                backgroundColor: theme.palette.background.paper,
                borderTop: `1px solid ${theme.palette.divider}`,
                py: 2,
            })}
        >
            <Container maxWidth="lg" sx={{ pt: 10 }}>
                <Grid container spacing={8}>
                    {/* Brand */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Image
                                    src={logoImage}
                                    alt={content.common.logosWordmarkAlt}
                                    width={100}
                                    height={36}
                                    style={{ objectFit: "contain", objectPosition: "left" }}
                                    unoptimized
                                />
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                                {content.footer.tagline}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                {socialLinks.map((social) => (
                                    <IconButton
                                        key={social.href}
                                        component="a"
                                        href={social.href}
                                        target="_blank"
                                        aria-label={content.common.socialLinkAriaLabel}
                                        sx={(theme) => ({
                                            color: "text.secondary",
                                            backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                                            "&:hover": {
                                                color: "primary.main",
                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                            },
                                        })}
                                    >
                                        <social.icon sx={{ fontSize: 22 }} />
                                    </IconButton>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Contact */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h6" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
                                {content.footer.directContactTitle}
                            </Typography>
                            <Stack spacing={2}>
                                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                                    <MailIcon
                                        sx={{
                                            color: "primary.main",
                                            fontSize: 18,
                                            marginTop: 0.5,
                                        }}
                                    />
                                    <Box>
                                        <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
                                            {content.footer.contactInfoLabel}
                                        </Typography>
                                        <Box
                                            component="a"
                                            href="mailto:contact@bylogos.io"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ textDecoration: "none" }}
                                        >
                                            <Typography
                                                variant="body2"
                                                color="text.primary"
                                                sx={{ "&:hover": { color: "primary.main" } }}
                                            >
                                                contact@bylogos.io
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>

                            <Box sx={{ mt: 3 }}>
                                <Link href="/contact" style={{ textDecoration: "none" }}>
                                    <Button variant="default" sx={{ width: "100%", gap: 1 }}>
                                        <MailIcon sx={{ fontSize: 18 }} />
                                        {content.footer.contactButton}
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 6 }} />

                {/* Partners */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    sx={{ mb: 6 }}
                >
                    <Typography
                        variant="overline"
                        color="text.secondary"
                        sx={{ letterSpacing: "0.12em", fontWeight: 600, display: "block", mb: 2 }}
                    >
                        {content.footer.partnersTitle}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Box
                            component="a"
                            href="https://www.nvidia.com/en-us/startups/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={content.footer.nvidiaInceptionAlt}
                            sx={{ display: "inline-flex", lineHeight: 0 }}
                        >
                            <Image
                                src={nvidiaInceptionBadge}
                                alt={content.footer.nvidiaInceptionAlt}
                                width={139}
                                height={60}
                                style={{ width: "auto", height: 56, objectFit: "fill", display: "block", margin: 0, padding: 0, border: 0 }}
                                unoptimized
                            />
                        </Box>
                        <Box
                            component="a"
                            href="https://www.seeedstudio.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Seeed Studio"
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 116,
                                height: 43,
                                px: 1.5,
                                backgroundColor: "#fff",
                                border: "1px solid #000",
                                borderRadius: 0,
                                lineHeight: 0,
                                boxSizing: "border-box",
                            }}
                        >
                            <Image
                                src={seeedLogo}
                                alt="Seeed Studio"
                                width={750}
                                height={103}
                                style={{ width: "100%", height: "auto", objectFit: "contain", display: "block", margin: 0, padding: 0, border: 0 }}
                                unoptimized
                            />
                        </Box>
                    </Stack>
                </Box>

                <Divider sx={{ mb: 6 }} />

                {/* Bottom section */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        {content.footer.copyright.replace("{year}", String(currentYear))}
                    </Typography>

                    <Stack direction="row" spacing={3}>
                        <Link href="/privacy" style={{ textDecoration: "none" }}>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ "&:hover": { color: "primary.main" } }}
                            >
                                {content.footer.privacy}
                            </Typography>
                        </Link>
                        <Link href="/terms" style={{ textDecoration: "none" }}>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ "&:hover": { color: "primary.main" } }}
                            >
                                {content.footer.terms}
                            </Typography>
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

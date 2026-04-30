"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import posthog from "posthog-js";

// MUI Icons - Outlined version
// MUI Icons - Outlined version
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import { NEWSLETTER_BENEFITS } from "@/data/landing";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";

import {
    Box,
    Container,
    Grid2 as Grid,
    Typography,
    Stack,
    alpha,
    CircularProgress,
    Alert,
    TextField,
    Card,
    Button,
} from "@mui/material";

export function Newsletter() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const locale = useLocale();
    const content = getSiteContent(locale);
    const benefits = NEWSLETTER_BENEFITS.map((benefit, index) => ({
        ...benefit,
        ...content.home.newsletter.benefits[index],
    }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError(content.home.newsletter.invalidEmail);
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("https://cloud.bylogos.com/webhook/email-catcher", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email }),
            });

            if (!response.ok) {
                throw new Error("Error al suscribirse");
            }

            setIsSubmitted(true);
            setEmail("");
            setName("");
            posthog.capture("newsletter_subscribed", { locale });
        } catch (err) {
            setError(content.home.newsletter.subscribeError);
            posthog.capture("newsletter_subscription_failed", { locale });
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <Box
                component="section"
                sx={(theme) => ({
                    py: 8,
                    background: `linear-gradient(to bottom right, ${alpha(theme.palette.primary.main, 0.08)}, ${theme.palette.background.default})`,
                })}
            >
                <Container maxWidth="sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring", damping: 12 }}
                    >
                        <Card
                            sx={(theme) => ({
                                p: 5,
                                textAlign: "center",
                                borderColor: alpha(theme.palette.primary.main, 0.4),
                                boxShadow: theme.shadows[10],
                            })}
                        >
                            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                                <Box
                                    sx={(theme) => ({
                                        p: 3,
                                        borderRadius: "50%",
                                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    })}
                                >
                                    <CheckCircleOutlineOutlinedIcon sx={{ fontSize: 64, color: "primary.main" }} />
                                </Box>
                            </Box>
                            <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
                                {content.home.newsletter.successTitle}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ mb: 6, fontSize: "1.125rem", lineHeight: 1.6 }}
                            >
                                {content.home.newsletter.successDescription}
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => setIsSubmitted(false)}
                                sx={{ px: 4, py: 1.25, fontWeight: 700 }}
                            >
                                {content.home.newsletter.subscribeAnother}
                            </Button>
                        </Card>
                    </motion.div>
                </Container>
            </Box>
        );
    }

    return (
        <Box
            component="section"
            id="newsletter"
            sx={(theme) => ({
                py: 8,
                background: `linear-gradient(to bottom right, ${alpha(theme.palette.primary.main, 0.05)}, ${theme.palette.background.default})`,
                borderBottom: `1px solid ${theme.palette.divider}`,
                position: "relative",
                overflow: "hidden",
            })}
        >
            <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    sx={{ textAlign: "center", mb: 8 }}
                >
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
                        {content.home.newsletter.eyebrow}
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                            mb: 2,
                            fontWeight: 600,
                            lineHeight: 1.2,
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
                            {content.home.newsletter.titleStart}
                        </Box>{" "}
                        <Box component="span" sx={{ color: "primary.main" }}>
                            {content.home.newsletter.titleAccent}
                        </Box>
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{
                            maxWidth: 800,
                            mx: "auto",
                            fontWeight: 400,
                            fontSize: "1.125rem",
                            lineHeight: 1.6,
                        }}
                    >
                        {content.home.newsletter.description}{" "}
                        <Box
                            component="a"
                            href="mailto:contact@bylogos.io"
                            sx={{
                                color: "primary.main",
                                textDecoration: "none",
                                fontWeight: 700,
                                "&:hover": { textDecoration: "underline" },
                            }}
                        >
                            contact@bylogos.io
                        </Box>
                    </Typography>
                </Box>

                <Grid container spacing={6} alignItems="center">
                    {/* Benefits */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h4" sx={{ mb: 6, fontWeight: 600 }}>
                                {content.home.newsletter.benefitsTitle}
                            </Typography>

                            <Stack spacing={5}>
                                {benefits.map((benefit, index) => (
                                    <Box
                                        key={index}
                                        component={motion.div}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 * index }}
                                        viewport={{ once: true }}
                                        sx={{ display: "flex", gap: 3 }}
                                    >
                                        <Box
                                            sx={(theme) => ({
                                                p: 2,
                                                backgroundColor: alpha(theme.palette.background.paper, 1),
                                                border: "1px solid",
                                                borderColor: alpha(theme.palette.primary.main, 0.2),
                                                height: "fit-content",
                                                boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.05)}`,
                                            })}
                                        >
                                            <benefit.icon
                                                sx={{
                                                    fontSize: 24,
                                                    color: "primary.main",
                                                    display: "block",
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 700, mb: 1, fontSize: "1.125rem" }}
                                            >
                                                {benefit.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                sx={{ lineHeight: 1.7, fontSize: "0.975rem" }}
                                            >
                                                {benefit.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Form */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                sx={(theme) => ({
                                    p: { xs: 3, md: 5 },
                                    boxShadow: `0 30px 60px ${alpha(theme.palette.common.black, 0.1)}`,
                                    border: "1px solid",
                                    borderColor: alpha(theme.palette.divider, 0.5),
                                })}
                            >
                                <Box sx={{ textAlign: "center", mb: 6 }}>
                                    <Box
                                        sx={(theme) => ({
                                            display: "inline-flex",
                                            width: 80,
                                            height: 80,
                                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                            borderRadius: "50%",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mb: 3,
                                        })}
                                    >
                                        <MailOutlineIcon sx={{ fontSize: 40, color: "primary.main" }} />
                                    </Box>
                                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 1.5 }}>
                                        {content.home.newsletter.formTitle}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        {content.home.newsletter.formSubtitle}
                                    </Typography>
                                </Box>

                                <Box
                                    component="form"
                                    onSubmit={handleSubmit}
                                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                                >
                                    <TextField
                                        id="newsletter-name"
                                        fullWidth
                                        label={content.home.newsletter.nameLabel}
                                        variant="outlined"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <TextField
                                        id="newsletter-email"
                                        fullWidth
                                        label={content.home.newsletter.emailLabel}
                                        type="email"
                                        variant="outlined"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                    {error && (
                                        <Alert
                                            severity="error"
                                            variant="outlined"
                                            icon={<ErrorOutlineOutlinedIcon />}
                                            sx={{ fontSize: "0.875rem" }}
                                        >
                                            {error}
                                        </Alert>
                                    )}

                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={isLoading}
                                        sx={(theme) => ({
                                            height: 56,
                                            mt: 2,
                                            fontWeight: 700,
                                            fontSize: "1rem",
                                            boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                                        })}
                                    >
                                        {isLoading ? (
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <CircularProgress size={24} thickness={5} sx={{ color: "inherit" }} />
                                                <Typography variant="button">
                                                    {content.home.newsletter.submitting}
                                                </Typography>
                                            </Stack>
                                        ) : (
                                            <Stack direction="row" spacing={1.5} alignItems="center">
                                                <MailOutlineIcon />
                                                <Typography variant="button" sx={{ letterSpacing: 1 }}>
                                                    {content.home.newsletter.submit}
                                                </Typography>
                                            </Stack>
                                        )}
                                    </Button>
                                </Box>

                                <Typography
                                    variant="caption"
                                    color="text.disabled"
                                    sx={{
                                        display: "block",
                                        textAlign: "center",
                                        mt: 4,
                                        fontWeight: 500,
                                    }}
                                >
                                    {content.home.newsletter.privacyNote}
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={(theme) => ({
                        mt: 8,
                        pt: 6,
                        borderTop: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
                        textAlign: "center",
                    })}
                >
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: "text.secondary",
                            fontWeight: 700,
                            letterSpacing: 2,
                            mb: 3,
                            textTransform: "uppercase",
                        }}
                    >
                        {content.home.newsletter.supportedBy}
                    </Typography>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={4}
                        alignItems="center"
                        justifyContent="center"
                        useFlexGap
                        sx={{ flexWrap: "wrap" }}
                    >
                        <Box
                            component="a"
                            href="https://elevenlabs.io/startup-grants"
                            target="_blank"
                            rel="noreferrer"
                            sx={{ display: "inline-block" }}
                        >
                            <Box
                                component="img"
                                src="https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp"
                                alt="ElevenLabs"
                                sx={{
                                    width: { xs: 220, sm: 250 },
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </Box>

                        <Box
                            component="img"
                            src="https://miro.medium.com/1*-7Kx8b_-GrH6FDnIOJFIAQ.png"
                            alt="AWS"
                            sx={{
                                width: { xs: 120, sm: 140 },
                                maxWidth: "100%",
                                height: "auto",
                                filter: "brightness(0) invert(1)",
                                display: "block",
                            }}
                        />

                        <Box
                            component="img"
                            src="https://wordlift.io/blog/en/wp-content/uploads/sites/3/2025/06/CloudforStartups-3.png"
                            alt="Partner logo"
                            sx={{
                                width: { xs: 120, sm: 140 },
                                maxWidth: "100%",
                                height: "auto",
                                filter: "brightness(0) invert(1)",
                                display: "block",
                            }}
                        />
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

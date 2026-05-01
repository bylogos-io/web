"use client";

import { useState } from "react";
import { Box, Button, Container, Stack, TextField, Typography, alpha } from "@mui/material";
import { motion } from "@/lib/motion-shim";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

export function NewsletterCompact() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const data = (content.home as any).landingV2.newsletterCompact as {
        title: string;
        sub: string;
        placeholder: string;
        cta: string;
        privacy: string;
    };

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState("");

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError(content.home.newsletter.invalidEmail);
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("https://cloud.bylogos.com/webhook/email-catcher", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            if (!res.ok) throw new Error();
            setDone(true);
            setEmail("");
        } catch {
            setError(content.home.newsletter.subscribeError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            component="section"
            id="newsletter"
            sx={(theme) => ({
                py: { xs: 8, md: 12 },
                borderTop: `1px solid ${theme.palette.divider}`,
            })}
        >
            <Container maxWidth="md">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    sx={{ textAlign: "center", mb: 4 }}
                >
                    <Typography
                        variant="h3"
                        sx={{ mb: 1.5, fontWeight: 600, letterSpacing: "-0.025em", textWrap: "balance" as any }}
                    >
                        {data.title}
                    </Typography>
                    <Typography
                        sx={{ color: "text.secondary", maxWidth: 520, mx: "auto", textWrap: "balance" as any }}
                    >
                        {data.sub}
                    </Typography>
                </Box>

                {done ? (
                    <Box
                        sx={(theme) => ({
                            textAlign: "center",
                            p: 3,
                            borderRadius: 1,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                            backgroundColor: alpha(theme.palette.primary.main, 0.06),
                            color: "primary.main",
                            fontFamily: monoFont,
                            fontSize: "0.85rem",
                            letterSpacing: "0.05em",
                        })}
                    >
                        ✓ {content.home.newsletter.successDescription}
                    </Box>
                ) : (
                    <Box component="form" onSubmit={submit}>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={1.5}
                            sx={{ maxWidth: 540, mx: "auto" }}
                        >
                            <TextField
                                fullWidth
                                type="email"
                                placeholder={data.placeholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                size="medium"
                                error={Boolean(error)}
                                helperText={error || undefined}
                                sx={{
                                    "& .MuiInputBase-root": { borderRadius: 1, height: 52, px: 1 },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={loading}
                                size="lg"
                                sx={{ height: 52, px: 4, flexShrink: 0 }}
                            >
                                {loading ? "..." : data.cta}
                            </Button>
                        </Stack>
                        <Typography
                            sx={{
                                mt: 2,
                                textAlign: "center",
                                fontSize: "0.75rem",
                                color: "text.disabled",
                                fontFamily: monoFont,
                                letterSpacing: "0.05em",
                            }}
                        >
                            {data.privacy}
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
}

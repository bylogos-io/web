"use client";

import { useState } from "react";
import { Box, Container, Stack, Button, Alert, Typography, CircularProgress, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";

const CONTACT_ENDPOINT = "https://api.bylogos.io/placeholder/contact";

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    comment: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({
    label,
    placeholder,
    value,
    onChange,
    error,
    type = "text",
    multiline,
    autoComplete,
    disabled,
    required,
}: {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    type?: string;
    multiline?: boolean;
    autoComplete?: string;
    disabled?: boolean;
    required?: boolean;
}) {
    const Component = multiline ? "textarea" : "input";
    return (
        <Box>
            <Typography
                sx={{
                    fontFamily: monoFont,
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    color: "text.disabled",
                    mb: 1.5,
                }}
            >
                {label}
                {required && (
                    <Box component="span" sx={{ color: "primary.main", ml: 0.25 }}>
                        *
                    </Box>
                )}
            </Typography>
            <Box
                component={Component as any}
                {...(multiline ? { rows: 3 } : { type })}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                autoComplete={autoComplete}
                sx={(theme) => ({
                    width: "100%",
                    backgroundColor: "transparent",
                    color: theme.palette.common.white,
                    border: "none",
                    borderBottom: `1px solid ${error ? theme.palette.error.main : alpha(theme.palette.text.primary, 0.25)}`,
                    px: 0,
                    py: 1.5,
                    fontFamily: "inherit",
                    fontSize: "1.05rem",
                    outline: "none",
                    resize: multiline ? "vertical" : "none",
                    transition: "border-color 0.2s ease",
                    "&:focus": {
                        borderBottomColor: theme.palette.primary.main,
                    },
                    "&:disabled": { opacity: 0.5 },
                    "&::placeholder": {
                        color: alpha(theme.palette.text.primary, 0.35),
                    },
                })}
            />
            {error && (
                <Typography
                    sx={(theme) => ({
                        mt: 1,
                        fontFamily: monoFont,
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        color: theme.palette.error.main,
                    })}
                >
                    {error}
                </Typography>
            )}
        </Box>
    );
}

export function ContactForm() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.contact.form as any;

    const [values, setValues] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        comment: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange =
        (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setValues((v) => ({ ...v, [field]: e.target.value }));
            if (errors[field]) {
                setErrors((prev) => ({ ...prev, [field]: undefined }));
            }
        };

    const validate = (): boolean => {
        const next: FormErrors = {};
        (Object.keys(values) as Array<keyof FormState>).forEach((k) => {
            if (k === "comment") return;
            if (!values[k].trim()) next[k] = c.requiredError;
        });
        if (values.email && !EMAIL_REGEX.test(values.email)) {
            next.email = c.emailError;
        }
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus("submitting");
        try {
            const res = await fetch(CONTACT_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, locale }),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("success");
            setValues({ firstName: "", lastName: "", email: "", company: "", comment: "" });
        } catch {
            setStatus("error");
        }
    };

    return (
        <Box component="section" sx={{ py: { xs: 6, md: 10 }, backgroundColor: "background.default" }}>
            <Container maxWidth="sm">
                <Box
                    component={motion.form}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <Stack spacing={5}>
                        <Field
                            label={c.firstNameLabel}
                            placeholder={c.firstNamePlaceholder}
                            value={values.firstName}
                            onChange={handleChange("firstName")}
                            error={errors.firstName}
                            disabled={status === "submitting"}
                            autoComplete="given-name"
                            required
                        />
                        <Field
                            label={c.lastNameLabel}
                            placeholder={c.lastNamePlaceholder}
                            value={values.lastName}
                            onChange={handleChange("lastName")}
                            error={errors.lastName}
                            disabled={status === "submitting"}
                            autoComplete="family-name"
                            required
                        />
                        <Field
                            label={c.emailLabel}
                            placeholder={c.emailPlaceholder}
                            type="email"
                            value={values.email}
                            onChange={handleChange("email")}
                            error={errors.email}
                            disabled={status === "submitting"}
                            autoComplete="email"
                            required
                        />
                        <Field
                            label={c.companyLabel}
                            placeholder={c.companyPlaceholder}
                            value={values.company}
                            onChange={handleChange("company")}
                            error={errors.company}
                            disabled={status === "submitting"}
                            autoComplete="organization"
                            required
                        />
                        <Field
                            label={c.commentLabel}
                            placeholder={c.commentPlaceholder}
                            multiline
                            value={values.comment}
                            onChange={handleChange("comment")}
                            error={errors.comment}
                            disabled={status === "submitting"}
                        />
                    </Stack>

                    {status === "success" && (
                        <Alert
                            severity="success"
                            sx={(theme) => ({
                                mt: 4,
                                borderRadius: 1,
                                border: `1px solid ${alpha(theme.palette.success.main, 0.4)}`,
                                backgroundColor: alpha(theme.palette.success.main, 0.08),
                            })}
                        >
                            <Typography fontWeight={600}>{c.successTitle}</Typography>
                            <Typography sx={{ fontSize: "0.9rem", opacity: 0.9 }}>
                                {c.successDescription}
                            </Typography>
                        </Alert>
                    )}
                    {status === "error" && (
                        <Alert
                            severity="error"
                            sx={(theme) => ({
                                mt: 4,
                                borderRadius: 1,
                                border: `1px solid ${alpha(theme.palette.error.main, 0.4)}`,
                                backgroundColor: alpha(theme.palette.error.main, 0.08),
                            })}
                        >
                            <Typography fontWeight={600}>{c.errorTitle}</Typography>
                            <Typography sx={{ fontSize: "0.9rem", opacity: 0.9 }}>{c.errorDescription}</Typography>
                        </Alert>
                    )}

                    <Box sx={{ mt: 6, display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            type="submit"
                            variant="contained"
                            size="lg"
                            disabled={status === "submitting"}
                            startIcon={
                                status === "submitting" ? <CircularProgress size={16} color="inherit" /> : null
                            }
                            sx={{ minWidth: 200 }}
                        >
                            {status === "submitting" ? c.submitting : c.submit}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

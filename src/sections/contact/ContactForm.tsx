"use client";

import { useState, useTransition } from "react";
import {
    Box,
    Container,
    Stack,
    Button,
    Alert,
    Typography,
    CircularProgress,
    alpha,
    MenuItem,
    Select,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLocale } from "next-intl";
import { getSiteContent } from "@/i18n/siteContent";
import { monoFont } from "@/theme";
import { submitContact } from "@/app/actions/contact";
import { CONTACT_REASONS, type ContactReason } from "@/app/actions/contact-types";

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    reason: ContactReason | "";
    comment: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FieldShell({
    label,
    required,
    error,
    children,
}: {
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}) {
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
            {children}
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

function TextField({
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
        <FieldShell label={label} required={required} error={error}>
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
                    "&:focus": { borderBottomColor: theme.palette.primary.main },
                    "&:disabled": { opacity: 0.5 },
                    "&::placeholder": { color: alpha(theme.palette.text.primary, 0.35) },
                })}
            />
        </FieldShell>
    );
}

export function ContactForm() {
    const locale = useLocale();
    const content = getSiteContent(locale);
    const c = content.contact.form as any;
    const reasonOptions = (c.reasonOptions ?? []) as Array<{ value: ContactReason; label: string }>;

    const [values, setValues] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        reason: "",
        comment: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [, startTransition] = useTransition();

    const handleChange =
        (field: keyof FormState) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setValues((v) => ({ ...v, [field]: e.target.value }));
            if (errors[field]) {
                setErrors((prev) => ({ ...prev, [field]: undefined }));
            }
        };

    const validate = (): boolean => {
        const next: FormErrors = {};
        const requiredFields: Array<keyof FormState> = ["firstName", "lastName", "email", "company", "reason"];
        requiredFields.forEach((k) => {
            if (!String(values[k] ?? "").trim()) next[k] = c.requiredError;
        });
        if (values.email && !EMAIL_REGEX.test(values.email)) {
            next.email = c.emailError;
        }
        if (values.reason && !CONTACT_REASONS.includes(values.reason as ContactReason)) {
            next.reason = c.requiredError;
        }
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus("submitting");
        startTransition(async () => {
            try {
                const result = await submitContact({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    company: values.company,
                    reason: values.reason as ContactReason,
                    comment: values.comment,
                    locale,
                });
                if (result.ok) {
                    setStatus("success");
                    setValues({ firstName: "", lastName: "", email: "", company: "", reason: "", comment: "" });
                } else {
                    if (result.field === "email" && result.error === "invalid_email") {
                        setErrors((prev) => ({ ...prev, email: c.emailError }));
                    } else if (result.field) {
                        setErrors((prev) => ({ ...prev, [result.field as keyof FormState]: c.requiredError }));
                    }
                    setStatus("error");
                }
            } catch {
                setStatus("error");
            }
        });
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
                        <TextField
                            label={c.firstNameLabel}
                            placeholder={c.firstNamePlaceholder}
                            value={values.firstName}
                            onChange={handleChange("firstName")}
                            error={errors.firstName}
                            disabled={status === "submitting"}
                            autoComplete="given-name"
                            required
                        />
                        <TextField
                            label={c.lastNameLabel}
                            placeholder={c.lastNamePlaceholder}
                            value={values.lastName}
                            onChange={handleChange("lastName")}
                            error={errors.lastName}
                            disabled={status === "submitting"}
                            autoComplete="family-name"
                            required
                        />
                        <TextField
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
                        <TextField
                            label={c.companyLabel}
                            placeholder={c.companyPlaceholder}
                            value={values.company}
                            onChange={handleChange("company")}
                            error={errors.company}
                            disabled={status === "submitting"}
                            autoComplete="organization"
                            required
                        />

                        <FieldShell label={c.reasonLabel} required error={errors.reason}>
                            <Select
                                fullWidth
                                value={values.reason}
                                onChange={(e) => {
                                    setValues((v) => ({ ...v, reason: e.target.value as ContactReason }));
                                    if (errors.reason) setErrors((prev) => ({ ...prev, reason: undefined }));
                                }}
                                disabled={status === "submitting"}
                                displayEmpty
                                IconComponent={KeyboardArrowDownIcon}
                                renderValue={(v) => {
                                    if (!v)
                                        return (
                                            <Box
                                                component="span"
                                                sx={(theme) => ({ color: alpha(theme.palette.text.primary, 0.35) })}
                                            >
                                                {c.reasonPlaceholder}
                                            </Box>
                                        );
                                    const opt = reasonOptions.find((o) => o.value === v);
                                    return (
                                        <Box
                                            component="span"
                                            sx={{
                                                fontFamily: monoFont,
                                                fontSize: "0.95rem",
                                                letterSpacing: "0.12em",
                                                color: "common.white",
                                            }}
                                        >
                                            {opt?.label ?? v}
                                        </Box>
                                    );
                                }}
                                sx={(theme) => ({
                                    backgroundColor: "transparent",
                                    border: "none",
                                    borderRadius: 0,
                                    "& .MuiSelect-select": {
                                        backgroundColor: "transparent",
                                        border: "none",
                                        py: 1.5,
                                        px: 0,
                                        fontSize: "1.05rem",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": { display: "none" },
                                    "&.MuiInputBase-root": {
                                        backgroundColor: "transparent",
                                        border: "none",
                                        borderBottom: `1px solid ${
                                            errors.reason
                                                ? theme.palette.error.main
                                                : alpha(theme.palette.text.primary, 0.25)
                                        }`,
                                        borderRadius: 0,
                                    },
                                    "&.Mui-focused": {
                                        borderBottomColor: theme.palette.primary.main,
                                        boxShadow: "none",
                                    },
                                    "& .MuiSelect-icon": { color: theme.palette.primary.main, right: 0 },
                                })}
                                MenuProps={{
                                    PaperProps: {
                                        sx: (theme: any) => ({
                                            mt: 1,
                                            border: `1px solid ${theme.palette.divider}`,
                                            backgroundColor: alpha(theme.palette.background.paper, 0.95),
                                            backdropFilter: "blur(8px)",
                                        }),
                                    },
                                }}
                            >
                                {reasonOptions.map((opt) => (
                                    <MenuItem
                                        key={opt.value}
                                        value={opt.value}
                                        sx={{
                                            fontFamily: monoFont,
                                            fontSize: "0.85rem",
                                            letterSpacing: "0.15em",
                                            py: 1.5,
                                        }}
                                    >
                                        {opt.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FieldShell>

                        <TextField
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
                            <Typography sx={{ fontSize: "0.9rem", opacity: 0.9 }}>{c.successDescription}</Typography>
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

                    <Box sx={{ mt: 6 }}>
                        <Button
                            type="submit"
                            disabled={status === "submitting"}
                            fullWidth
                            sx={(theme) => ({
                                fontFamily: monoFont,
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                py: 2,
                                borderRadius: 1,
                                color: theme.palette.primary.main,
                                backgroundColor: "transparent",
                                border: `1px solid ${theme.palette.primary.main}`,
                                boxShadow: "none",
                                transition: "background-color 0.15s ease, color 0.15s ease",
                                "&:hover": {
                                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                                    borderColor: theme.palette.primary.main,
                                    color: theme.palette.primary.main,
                                    boxShadow: "none",
                                    transform: "none",
                                },
                                "&.Mui-disabled": {
                                    borderColor: alpha(theme.palette.primary.main, 0.3),
                                    color: alpha(theme.palette.primary.main, 0.4),
                                },
                            })}
                        >
                            <Box
                                component="span"
                                sx={{ display: "inline-flex", alignItems: "center", gap: 1.5 }}
                            >
                                {status === "submitting" ? (
                                    <>
                                        <CircularProgress size={12} color="inherit" />
                                        <span>{c.submitting}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{c.submit}</span>
                                        <ArrowForwardIcon sx={{ fontSize: 14 }} />
                                    </>
                                )}
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

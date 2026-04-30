export const CONTACT_REASONS = [
    "PARTNERSHIP",
    "DEMO",
    "CUSTOMER",
    "PRESS",
    "INVESTOR",
    "GENERAL",
    "OTHER",
] as const;

export type ContactReason = (typeof CONTACT_REASONS)[number];

export type ContactInput = {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    reason: ContactReason | string;
    comment?: string;
    locale?: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string; field?: keyof ContactInput };

"use server";

import Zavudev from "@zavudev/sdk";
import { CONTACT_REASONS, type ContactInput, type ContactReason, type ContactResult } from "./contact-types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: ContactInput): ContactResult | null {
    const required: Array<keyof ContactInput> = ["firstName", "lastName", "email", "company", "reason"];
    for (const k of required) {
        if (!String(v[k] ?? "").trim()) {
            return { ok: false, error: "required", field: k };
        }
    }
    if (!EMAIL_REGEX.test(v.email)) {
        return { ok: false, error: "invalid_email", field: "email" };
    }
    if (!CONTACT_REASONS.includes(v.reason as ContactReason)) {
        return { ok: false, error: "invalid_reason", field: "reason" };
    }
    if (
        v.firstName.length > 200 ||
        v.lastName.length > 200 ||
        v.company.length > 300 ||
        (v.comment ?? "").length > 5000
    ) {
        return { ok: false, error: "too_long" };
    }
    return null;
}

function escapeHtml(s: string) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export async function submitContact(input: ContactInput): Promise<ContactResult> {
    const fail = validate(input);
    if (fail) return fail;

    const apiKey = process.env.ZAVUDEV_API_KEY;
    const sender = process.env.ZAVU_SENDER_ID;
    const recipientsEnv = process.env.CONTACT_TO_EMAIL ?? "contact@bylogos.io,javier@bylogos.io";
    const recipients = Array.from(
        new Set(
            recipientsEnv
                .split(",")
                .map((s) => s.trim())
                .filter((s) => s && EMAIL_REGEX.test(s))
        )
    );
    if (recipients.length === 0) recipients.push("contact@bylogos.io");

    const fullName = `${input.firstName.trim()} ${input.lastName.trim()}`.trim();
    const subject = `[${input.reason}] ${fullName} — ${input.company}`;
    const body = (input.comment ?? "").trim();

    const text = [
        `Reason: ${input.reason}`,
        `Name: ${fullName}`,
        `Email: ${input.email}`,
        `Company: ${input.company}`,
        input.locale ? `Locale: ${input.locale}` : null,
        "",
        "Comment:",
        body || "(none)",
    ]
        .filter(Boolean)
        .join("\n");

    const htmlBody = `
<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#111;max-width:560px">
  <div style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;letter-spacing:.18em;color:#e16e09;text-transform:uppercase">
    LOGOS · NEW CONTACT
  </div>
  <h2 style="margin:8px 0 16px">${escapeHtml(fullName)} — ${escapeHtml(input.company)}</h2>
  <table style="border-collapse:collapse;width:100%;font-size:14px">
    <tr><td style="padding:6px 0;color:#666;width:120px">Reason</td><td><strong>${escapeHtml(input.reason)}</strong></td></tr>
    <tr><td style="padding:6px 0;color:#666">Email</td><td><a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></td></tr>
    <tr><td style="padding:6px 0;color:#666">Company</td><td>${escapeHtml(input.company)}</td></tr>
    ${input.locale ? `<tr><td style="padding:6px 0;color:#666">Locale</td><td>${escapeHtml(input.locale)}</td></tr>` : ""}
  </table>
  <h3 style="margin:24px 0 8px;font-size:15px">Comment</h3>
  <div style="white-space:pre-wrap;line-height:1.5;font-size:14px">${escapeHtml(body) || "<em>(none)</em>"}</div>
</div>`.trim();

    if (!apiKey) {
        console.log(`[contact] ZAVUDEV_API_KEY missing — logging payload only (would send to: ${recipients.join(", ")})`);
        console.log(text);
        return { ok: true };
    }

    try {
        const zavu = new Zavudev({ apiKey });

        // 1) Upsert contact in Zavu (best-effort; don't fail send on duplicate)
        try {
            await zavu.contacts.create({
                displayName: fullName,
                channels: [
                    {
                        channel: "email",
                        identifier: input.email,
                        isPrimary: true,
                    },
                ],
                metadata: {
                    company: input.company,
                    reason: input.reason,
                    locale: input.locale ?? "",
                    source: "website-contact",
                },
            });
        } catch (err) {
            console.warn("[contact] zavu contacts.create failed (continuing)", err);
        }

        // 2) Fan out notification email to all recipients
        const idemBase = `contact-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const sends = await Promise.allSettled(
            recipients.map((to) =>
                zavu.messages.send({
                    to,
                    channel: "email",
                    subject,
                    text,
                    htmlBody,
                    replyTo: input.email,
                    idempotencyKey: `${idemBase}-${to}`,
                    metadata: {
                        reason: input.reason,
                        source: "website-contact",
                        locale: input.locale ?? "",
                    },
                    ...(sender ? { "Zavu-Sender": sender } : {}),
                } as any)
            )
        );

        const failed = sends.filter((r) => r.status === "rejected");
        if (failed.length === sends.length) {
            console.error("[contact] all recipients failed", failed);
            return { ok: false, error: "send_failed" };
        }
        if (failed.length > 0) {
            console.warn(`[contact] ${failed.length}/${sends.length} recipients failed`, failed);
        }

        return { ok: true };
    } catch (err) {
        console.error("[contact] zavu send failed", err);
        return { ok: false, error: "send_failed" };
    }
}

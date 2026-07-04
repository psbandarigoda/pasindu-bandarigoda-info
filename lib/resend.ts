import { Resend } from "resend";
import type { Lead } from "./types";
import { OWNER_EMAIL, SITE_URL } from "./site";

let resend: Resend | null = null;

function getResend() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return null;
    }
    if (!resend) {
        resend = new Resend(apiKey);
    }
    return resend;
}

export async function sendLeadNotification(lead: Lead) {
    const client = getResend();
    if (!client) {
        console.warn("RESEND_API_KEY not set - skipping email notification");
        return { ok: false as const, skipped: true };
    }

    const from = process.env.RESEND_FROM ?? "Pasindu Bandarigoda Website <onboarding@resend.dev>";
    const to = process.env.NOTIFY_EMAIL ?? OWNER_EMAIL;
    const adminUrl = `${SITE_URL.replace(/\/$/, "")}/admin`;

    const html = `
        <h2>New consultation inquiry</h2>
        <p><strong>${escapeHtml(lead.name)}</strong> submitted the contact form on your website.</p>
        <table style="border-collapse:collapse;width:100%;max-width:560px;">
            <tr><td style="padding:6px 0;color:#666;">Email</td><td>${escapeHtml(lead.email)}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Organization</td><td>${escapeHtml(lead.organization ?? "-")}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Region</td><td>${escapeHtml(lead.region)}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Engagement</td><td>${escapeHtml(lead.inquiry_type)}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Newsletter</td><td>${lead.newsletter_opt_in ? "Yes" : "No"}</td></tr>
        </table>
        <p style="margin-top:1rem;"><strong>Message</strong></p>
        <p style="white-space:pre-wrap;">${escapeHtml(lead.message)}</p>
        <p style="margin-top:1.5rem;"><a href="${adminUrl}">Open admin dashboard</a></p>
    `;

    const { error } = await client.emails.send({
        from,
        to: [to],
        subject: `New inquiry from ${lead.name}`,
        html,
    });

    if (error) {
        console.error("Resend error:", error);
        return { ok: false as const, error: error.message };
    }

    return { ok: true as const };
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

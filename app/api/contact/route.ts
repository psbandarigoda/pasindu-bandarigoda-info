import { NextResponse } from "next/server";
import { insertLead } from "@/lib/db";
import { sendLeadNotification } from "@/lib/resend";
import type { LeadInput } from "@/lib/types";

export const runtime = "nodejs";

function validateLead(body: unknown): LeadInput | null {
    if (!body || typeof body !== "object") {
        return null;
    }

    const data = body as Record<string, unknown>;
    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const region = String(data.region ?? "").trim();
    const inquiry_type = String(data.inquiry_type ?? "").trim();
    const message = String(data.message ?? "").trim();
    const organization = String(data.organization ?? "").trim() || null;

    if (!name || !email || !region || !inquiry_type || !message) {
        return null;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return null;
    }

    return {
        name,
        email,
        organization,
        region,
        inquiry_type,
        message,
        newsletter_opt_in: Boolean(data.newsletter_opt_in),
        source: "website",
    };
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const input = validateLead(body);

        if (!input) {
            return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
        }

        const lead = insertLead(input);

        try {
            await sendLeadNotification(lead);
        } catch (emailError) {
            console.error("Email notification failed:", emailError);
        }

        return NextResponse.json({ ok: true, id: lead.id });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

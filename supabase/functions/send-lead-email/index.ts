import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL") ?? "bgpsandaruwan@gmail.com";
const FROM_EMAIL =
    Deno.env.get("RESEND_FROM") ?? "Pasindu Bandarigoda Website <onboarding@resend.dev>";
const ADMIN_URL = Deno.env.get("ADMIN_URL") ?? "https://pasindu-bandarigoda.info/admin.html";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req: Request) => {
    if (req.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders });
    }

    if (req.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method not allowed" }), {
            status: 405,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }

    if (!RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not configured");
        return new Response(JSON.stringify({ error: "Email service not configured" }), {
            status: 503,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }

    try {
        const lead = await req.json();
        const name = String(lead.name ?? "").trim();

        if (!name) {
            return new Response(JSON.stringify({ error: "Invalid lead payload" }), {
                status: 400,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
        }

        const html = `
            <p>You have a new consultation inquiry on your website.</p>
            <p><strong>${name}</strong> submitted the contact form.</p>
            <p>Open your admin dashboard to read the full message and details:</p>
            <p><a href="${ADMIN_URL}">${ADMIN_URL}</a></p>
            <p style="color:#666;font-size:14px;">This is a notification only. Inquiry details are stored securely in your dashboard.</p>
        `;

        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: FROM_EMAIL,
                to: [NOTIFY_EMAIL],
                subject: "New website inquiry — open your dashboard",
                html,
            }),
        });

        if (!resendResponse.ok) {
            const errorText = await resendResponse.text();
            console.error("Resend error:", errorText);
            return new Response(JSON.stringify({ error: "Failed to send email" }), {
                status: 502,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ ok: true }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }
});

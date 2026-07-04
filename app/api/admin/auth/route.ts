import { NextResponse } from "next/server";
import { isAuthenticated, setSessionCookie, verifyAdminPassword } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const password = String(body.password ?? "");

        if (!password || !verifyAdminPassword(password)) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        await setSessionCookie();
        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Admin login error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

export async function GET() {
    const authed = await isAuthenticated();
    return NextResponse.json({ authenticated: authed });
}

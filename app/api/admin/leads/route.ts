import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { listLeads, updateLeadStatus } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
    if (!(await isAuthenticated())) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const leads = await listLeads();
    return NextResponse.json({ leads });
}

export async function PATCH(request: Request) {
    if (!(await isAuthenticated())) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const id = String(body.id ?? "");
    const status = body.status === "read" ? "read" : "new";

    if (!id) {
        return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const updated = await updateLeadStatus(id, status);
    if (!updated) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
}

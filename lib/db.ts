import fs from "fs";
import path from "path";
import type { Lead, LeadInput, LeadStatus } from "./types";

const defaultPath = path.join(process.cwd(), "data", "leads.json");

function getDataPath() {
    return process.env.DATABASE_PATH ?? defaultPath;
}

function ensureDataFile() {
    const filePath = getDataPath();
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "[]", "utf8");
    }
    return filePath;
}

function readLeads(): Lead[] {
    const filePath = ensureDataFile();
    const raw = fs.readFileSync(filePath, "utf8");
    try {
        return JSON.parse(raw) as Lead[];
    } catch {
        return [];
    }
}

function writeLeads(leads: Lead[]) {
    const filePath = ensureDataFile();
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf8");
}

export function insertLead(input: LeadInput): Lead {
    const leads = readLeads();
    const lead: Lead = {
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        name: input.name,
        email: input.email,
        organization: input.organization ?? null,
        region: input.region,
        inquiry_type: input.inquiry_type,
        message: input.message,
        newsletter_opt_in: Boolean(input.newsletter_opt_in),
        source: input.source ?? "website",
        status: "new",
    };

    leads.unshift(lead);
    writeLeads(leads);
    return lead;
}

export function listLeads(): Lead[] {
    return readLeads().sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
}

export function updateLeadStatus(id: string, status: LeadStatus): boolean {
    const leads = readLeads();
    const index = leads.findIndex((lead) => lead.id === id);
    if (index === -1) {
        return false;
    }
    leads[index] = { ...leads[index], status };
    writeLeads(leads);
    return true;
}

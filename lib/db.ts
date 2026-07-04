import { kv } from "@vercel/kv";
import fs from "fs";
import path from "path";
import type { Lead, LeadInput, LeadStatus } from "./types";

const LEADS_KEY = "leads:all";
const defaultPath = path.join(process.cwd(), "data", "leads.json");

function getDataPath() {
    if (process.env.VERCEL) {
        return path.join("/tmp", "leads.json");
    }
    return process.env.DATABASE_PATH ?? defaultPath;
}

function useKv() {
    return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export function createLead(input: LeadInput): Lead {
    return {
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

function readLeadsFromFile(): Lead[] {
    const filePath = ensureDataFile();
    const raw = fs.readFileSync(filePath, "utf8");
    try {
        return JSON.parse(raw) as Lead[];
    } catch {
        return [];
    }
}

function writeLeadsToFile(leads: Lead[]) {
    const filePath = ensureDataFile();
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf8");
}

async function readLeadsFromKv(): Promise<Lead[]> {
    return (await kv.get<Lead[]>(LEADS_KEY)) ?? [];
}

async function writeLeadsToKv(leads: Lead[]): Promise<void> {
    await kv.set(LEADS_KEY, leads);
}

export async function insertLead(input: LeadInput): Promise<Lead> {
    const lead = createLead(input);

    if (useKv()) {
        const leads = await readLeadsFromKv();
        leads.unshift(lead);
        await writeLeadsToKv(leads);
        return lead;
    }

    const leads = readLeadsFromFile();
    leads.unshift(lead);
    writeLeadsToFile(leads);
    return lead;
}

export async function listLeads(): Promise<Lead[]> {
    if (useKv()) {
        const leads = await readLeadsFromKv();
        return leads.sort(
            (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
    }

    return readLeadsFromFile().sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<boolean> {
    if (useKv()) {
        const leads = await readLeadsFromKv();
        const index = leads.findIndex((lead) => lead.id === id);
        if (index === -1) {
            return false;
        }
        leads[index] = { ...leads[index], status };
        await writeLeadsToKv(leads);
        return true;
    }

    const leads = readLeadsFromFile();
    const index = leads.findIndex((lead) => lead.id === id);
    if (index === -1) {
        return false;
    }
    leads[index] = { ...leads[index], status };
    writeLeadsToFile(leads);
    return true;
}

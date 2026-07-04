export type LeadStatus = "new" | "read";

export type Lead = {
    id: string;
    created_at: string;
    name: string;
    email: string;
    organization: string | null;
    region: string;
    inquiry_type: string;
    message: string;
    newsletter_opt_in: boolean;
    source: string;
    status: LeadStatus;
};

export type LeadInput = {
    name: string;
    email: string;
    organization?: string | null;
    region: string;
    inquiry_type: string;
    message: string;
    newsletter_opt_in?: boolean;
    source?: string;
};

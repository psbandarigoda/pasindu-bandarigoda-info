"use client";

import { FormEvent, useState } from "react";
import { OWNER_EMAIL } from "@/lib/site";

type FormStatus = { message: string; type: "" | "is-success" | "is-error" | "is-loading" };

export function ContactForm() {
    const [status, setStatus] = useState<FormStatus>({ message: "", type: "" });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const organization = String(formData.get("organization") ?? "").trim() || null;
        const role = String(formData.get("role") ?? "").trim();
        const region = String(formData.get("region") ?? "").trim();
        const inquiry_type = String(formData.get("inquiry_type") ?? "").trim();
        const problem = String(formData.get("message") ?? "").trim();
        const affected = String(formData.get("affected") ?? "").trim();
        const desiredOutcome = String(formData.get("desired_outcome") ?? "").trim();
        const alreadyTried = String(formData.get("already_tried") ?? "").trim();
        const timeline = String(formData.get("timeline") ?? "").trim();
        const newsletter_opt_in = formData.get("newsletter_opt_in") === "on";

        if (!name || !email || !region || !inquiry_type || !problem) {
            setStatus({ message: "Please complete all required fields.", type: "is-error" });
            return;
        }

        const messageParts = [
            problem,
            role ? `Role: ${role}` : "",
            affected ? `Business or operational area affected: ${affected}` : "",
            desiredOutcome ? `Desired outcome: ${desiredOutcome}` : "",
            alreadyTried ? `Already considered or tried: ${alreadyTried}` : "",
            timeline ? `Timeline: ${timeline}` : "",
        ].filter(Boolean);

        const payload = {
            name,
            email,
            organization,
            region,
            inquiry_type,
            message: messageParts.join("\n\n"),
            newsletter_opt_in,
        };

        setSubmitting(true);
        setStatus({ message: "Submitting your request...", type: "is-loading" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                setStatus({
                    message: `Something went wrong. Please email ${OWNER_EMAIL} directly.`,
                    type: "is-error",
                });
                return;
            }

            form.reset();
            setStatus({
                message: "Thank you. Your request has been received. I will respond within 48 hours.",
                type: "is-success",
            });
        } catch {
            setStatus({
                message: `Network error. Please check your connection or email ${OWNER_EMAIL} directly.`,
                type: "is-error",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form className="lead-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
                <div className="form-field">
                    <label htmlFor="lead-name">Name</label>
                    <input id="lead-name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="form-field">
                    <label htmlFor="lead-email">Work email</label>
                    <input id="lead-email" name="email" type="email" autoComplete="email" required />
                </div>
            </div>
            <div className="form-row">
                <div className="form-field">
                    <label htmlFor="lead-org">Organization</label>
                    <input id="lead-org" name="organization" type="text" autoComplete="organization" />
                </div>
                <div className="form-field">
                    <label htmlFor="lead-role">Role</label>
                    <input id="lead-role" name="role" type="text" autoComplete="organization-title" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-field">
                    <label htmlFor="lead-region">Region</label>
                    <select id="lead-region" name="region" required defaultValue="">
                        <option value="">Select region</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Europe">Europe</option>
                        <option value="United States">United States</option>
                        <option value="Australia">Australia</option>
                        <option value="Middle East">Middle East / UAE</option>
                        <option value="Asia Pacific">Asia Pacific</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-field">
                    <label htmlFor="lead-inquiry">Problem type</label>
                    <select id="lead-inquiry" name="inquiry_type" required defaultValue="">
                        <option value="">Select problem type</option>
                        <option value="Complex process & system problem">Complex process &amp; system problem</option>
                        <option value="Technology-enabled process redesign">Technology-enabled process redesign</option>
                        <option value="AI & human work design">AI &amp; human work design</option>
                        <option value="Architecture & integration">Architecture &amp; integration</option>
                        <option value="Build · Buy · Integrate · Partner">Build · Buy · Integrate · Partner</option>
                        <option value="Modernization & transformation">Modernization &amp; transformation</option>
                        <option value="Technology decision review">Independent technology decision review</option>
                        <option value="Other complex technology problem">Other complex technology problem</option>
                    </select>
                </div>
            </div>
            <div className="form-field">
                <label htmlFor="lead-message">What problem or decision are you facing?</label>
                <textarea
                    id="lead-message"
                    name="message"
                    placeholder="Describe the technology, system, AI, architecture, or process problem."
                    required
                />
            </div>
            <div className="form-field">
                <label htmlFor="lead-affected">Business or operational area affected</label>
                <input
                    id="lead-affected"
                    name="affected"
                    type="text"
                    placeholder="e.g. operations, product, platform, customer delivery"
                />
            </div>
            <div className="form-field">
                <label htmlFor="lead-outcome">Desired outcome</label>
                <input
                    id="lead-outcome"
                    name="desired_outcome"
                    type="text"
                    placeholder="What needs to improve?"
                />
            </div>
            <div className="form-field">
                <label htmlFor="lead-tried">What has already been considered or tried?</label>
                <textarea
                    id="lead-tried"
                    name="already_tried"
                    placeholder="Optional - approaches, tools, vendors, or projects already examined."
                />
            </div>
            <div className="form-field">
                <label htmlFor="lead-timeline">Timeline</label>
                <input id="lead-timeline" name="timeline" type="text" placeholder="Optional" />
            </div>
            <label className="form-checkbox">
                <input type="checkbox" name="newsletter_opt_in" />
                <span>Occasional notes on complex systems and technology decisions.</span>
            </label>
            <button className="btn btn-primary" type="submit" disabled={submitting}>
                Request an Independent Review
            </button>
            <p className={`form-status${status.type ? ` ${status.type}` : ""}`} role="status" aria-live="polite">
                {status.message}
            </p>
        </form>
    );
}

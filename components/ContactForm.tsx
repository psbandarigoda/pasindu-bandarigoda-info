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

        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            organization: String(formData.get("organization") ?? "").trim() || null,
            region: String(formData.get("region") ?? "").trim(),
            inquiry_type: String(formData.get("inquiry_type") ?? "").trim(),
            message: String(formData.get("message") ?? "").trim(),
            newsletter_opt_in: formData.get("newsletter_opt_in") === "on",
        };

        if (!payload.name || !payload.email || !payload.region || !payload.inquiry_type || !payload.message) {
            setStatus({ message: "Please complete all required fields.", type: "is-error" });
            return;
        }

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
                message: "Thank you. Your consultation request has been received. I will respond within 48 hours.",
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
                    <label htmlFor="lead-name">Full name</label>
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
            </div>
            <div className="form-field">
                <label htmlFor="lead-inquiry">Engagement type</label>
                <select id="lead-inquiry" name="inquiry_type" required defaultValue="">
                    <option value="">Select engagement</option>
                    <option value="Executive Strategy Session">Executive Strategy Session</option>
                    <option value="Strategic Technology Review">Strategic Technology Review</option>
                    <option value="Digital Transformation Advisory">Digital Transformation Advisory</option>
                    <option value="AI Readiness Assessment">AI Readiness Assessment</option>
                    <option value="Enterprise Capability Review">Enterprise Capability Review</option>
                    <option value="Technology Leadership Advisory">Technology Leadership Advisory</option>
                    <option value="Discuss Strategic Partnership">Discuss Strategic Partnership</option>
                    <option value="Other executive inquiry">Other executive inquiry</option>
                </select>
            </div>
            <div className="form-field">
                <label htmlFor="lead-message">Business challenge</label>
                <textarea
                    id="lead-message"
                    name="message"
                    placeholder="Describe the decision, constraint, or transformation challenge your leadership team is facing."
                    required
                />
            </div>
            <label className="form-checkbox">
                <input type="checkbox" name="newsletter_opt_in" />
                <span>Occasional insights on technology strategy and executive decision-making.</span>
            </label>
            <button className="btn btn-primary" type="submit" disabled={submitting}>
                Request Executive Consultation
            </button>
            <p className={`form-status${status.type ? ` ${status.type}` : ""}`} role="status" aria-live="polite">
                {status.message}
            </p>
        </form>
    );
}

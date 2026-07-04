"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import type { Lead } from "@/lib/types";

type AdminDashboardProps = {
    initialAuthenticated: boolean;
};

export function AdminDashboard({ initialAuthenticated }: AdminDashboardProps) {
    const [authenticated, setAuthenticated] = useState(initialAuthenticated);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(false);

    const loadLeads = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/admin/leads");
            if (!response.ok) {
                setAuthenticated(false);
                return;
            }
            const data = await response.json();
            setLeads(data.leads ?? []);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (authenticated) {
            loadLeads();
        }
    }, [authenticated, loadLeads]);

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();
        setLoginStatus("Signing in...");
        setLoginError(false);

        const response = await fetch("/api/admin/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            setLoginStatus("Invalid username or password.");
            setLoginError(true);
            return;
        }

        setAuthenticated(true);
        setLoginStatus("");
        setUsername("");
        setPassword("");
    };

    const handleSignOut = async () => {
        await fetch("/api/admin/auth/logout", { method: "POST" });
        setAuthenticated(false);
        setLeads([]);
    };

    const markAsRead = async (id: string) => {
        await fetch("/api/admin/leads", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, status: "read" }),
        });
        await loadLeads();
    };

    const formatDate = (value: string) =>
        new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));

    const total = leads.length;
    const unread = leads.filter((lead) => lead.status === "new").length;
    const newsletter = leads.filter((lead) => lead.newsletter_opt_in).length;

    if (!authenticated) {
        return (
            <section className="admin-login" id="admin-login">
                <div className="admin-login-card">
                    <p className="admin-kicker">Private dashboard</p>
                    <h1>Consultation inquiries</h1>
                    <p className="admin-copy">Sign in to view messages from your website contact form.</p>
                    <form className="admin-form" onSubmit={handleLogin}>
                        <label htmlFor="login-username">Username</label>
                        <input
                            type="text"
                            id="login-username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="username"
                        />
                        <label htmlFor="login-password">Password</label>
                        <input
                            type="password"
                            id="login-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                        <button type="submit" className="admin-button" id="login-submit">
                            Sign in
                        </button>
                    </form>
                    <p className={`admin-status${loginError ? " is-error" : ""}`} role="status" aria-live="polite">
                        {loginStatus}
                    </p>
                    <a className="admin-back-link" href="/">
                        ← Back to website
                    </a>
                </div>
            </section>
        );
    }

    return (
        <section className="admin-dashboard" id="admin-dashboard">
            <header className="admin-header">
                <div>
                    <p className="admin-kicker">Inquiries dashboard</p>
                    <h1>Website leads</h1>
                </div>
                <div className="admin-header-actions">
                    <button type="button" className="admin-button admin-button-secondary" onClick={loadLeads} disabled={loading}>
                        Refresh
                    </button>
                    <button type="button" className="admin-button admin-button-ghost" onClick={handleSignOut}>
                        Sign out
                    </button>
                </div>
            </header>

            <div className="admin-stats" aria-live="polite">
                <article className="admin-stat">
                    <strong>{total}</strong>
                    <span>Total inquiries</span>
                </article>
                <article className="admin-stat">
                    <strong>{unread}</strong>
                    <span>New / unread</span>
                </article>
                <article className="admin-stat">
                    <strong>{newsletter}</strong>
                    <span>Newsletter opt-ins</span>
                </article>
            </div>

            {leads.length === 0 ? (
                <p className="admin-empty">No inquiries yet.</p>
            ) : (
                <div className="admin-leads">
                    {leads.map((lead) => (
                        <article key={lead.id} className={`admin-lead-card${lead.status === "new" ? " is-new" : ""}`}>
                            <div className="admin-lead-top">
                                <div>
                                    <h2>{lead.name}</h2>
                                    <p className="admin-lead-meta">{formatDate(lead.created_at)}</p>
                                </div>
                                <span className={`admin-badge ${lead.status === "new" ? "admin-badge-new" : "admin-badge-read"}`}>
                                    {lead.status === "new" ? "New" : "Read"}
                                </span>
                            </div>
                            <div className="admin-lead-grid">
                                <div>
                                    <span className="admin-field-label">Email</span>
                                    <div className="admin-field-value">{lead.email}</div>
                                </div>
                                <div>
                                    <span className="admin-field-label">Organization</span>
                                    <div className="admin-field-value">{lead.organization || "—"}</div>
                                </div>
                                <div>
                                    <span className="admin-field-label">Region</span>
                                    <div className="admin-field-value">{lead.region}</div>
                                </div>
                                <div>
                                    <span className="admin-field-label">Inquiry type</span>
                                    <div className="admin-field-value">{lead.inquiry_type}</div>
                                </div>
                            </div>
                            <span className="admin-field-label">Message</span>
                            <div className="admin-message">{lead.message}</div>
                            <div className="admin-lead-actions">
                                <a
                                    className="admin-button admin-button-small"
                                    href={`mailto:${encodeURIComponent(lead.email)}?subject=${encodeURIComponent(`Re: ${lead.inquiry_type}`)}`}
                                >
                                    Reply by email
                                </a>
                                {lead.status === "new" && (
                                    <button
                                        type="button"
                                        className="admin-button admin-button-secondary admin-button-small"
                                        onClick={() => markAsRead(lead.id)}
                                    >
                                        Mark as read
                                    </button>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

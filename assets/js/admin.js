const OWNER_EMAIL = "bgpsandaruwan@gmail.com";

const config = window.SITE_CONFIG || {};

const getAuthRedirectUrl = () => {
    if (config.adminRedirectUrl) {
        return config.adminRedirectUrl;
    }

    if (config.siteUrl) {
        return `${config.siteUrl.replace(/\/$/, "")}/root-pasblk-admin.html`;
    }

    return window.location.origin + window.location.pathname;
};
const loginSection = document.querySelector("#admin-login");
const dashboardSection = document.querySelector("#admin-dashboard");
const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#login-email");
const loginStatus = document.querySelector("#login-status");
const loginSubmit = document.querySelector("#login-submit");
const adminStats = document.querySelector("#admin-stats");
const adminLeads = document.querySelector("#admin-leads");
const adminEmpty = document.querySelector("#admin-empty");
const refreshButton = document.querySelector("#refresh-leads");
const signOutButton = document.querySelector("#sign-out");

let supabaseClient = null;

const setLoginStatus = (message, type = "") => {
    if (!loginStatus) {
        return;
    }

    loginStatus.textContent = message;
    loginStatus.className = "admin-status";
    if (type) {
        loginStatus.classList.add(`is-${type}`);
    }
};

const formatDate = (value) => {
    if (!value) {
        return "-";
    }

    return new Intl.DateTimeFormat("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(value));
};

const escapeHtml = (value) => {
    const node = document.createElement("div");
    node.textContent = String(value ?? "");
    return node.innerHTML;
};

const showLogin = () => {
    loginSection.hidden = false;
    dashboardSection.hidden = true;
};

const showDashboard = () => {
    loginSection.hidden = true;
    dashboardSection.hidden = false;
};

const initSupabase = () => {
    if (!config.supabaseUrl || !config.supabaseAnonKey || !window.supabase) {
        setLoginStatus("Dashboard configuration is missing.", "error");
        showLogin();
        return null;
    }

    return window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
};

const renderStats = (leads) => {
    const total = leads.length;
    const unread = leads.filter((lead) => lead.status === "new").length;
    const newsletter = leads.filter((lead) => lead.newsletter_opt_in).length;

    adminStats.innerHTML = `
        <article class="admin-stat">
            <strong>${total}</strong>
            <span>Total inquiries</span>
        </article>
        <article class="admin-stat">
            <strong>${unread}</strong>
            <span>New / unread</span>
        </article>
        <article class="admin-stat">
            <strong>${newsletter}</strong>
            <span>Newsletter opt-ins</span>
        </article>
    `;
};

const renderLeads = (leads) => {
    adminLeads.innerHTML = "";

    if (!leads.length) {
        adminEmpty.hidden = false;
        return;
    }

    adminEmpty.hidden = true;

    leads.forEach((lead) => {
        const card = document.createElement("article");
        card.className = `admin-lead-card${lead.status === "new" ? " is-new" : ""}`;
        card.innerHTML = `
            <div class="admin-lead-top">
                <div>
                    <h2>${escapeHtml(lead.name)}</h2>
                    <p class="admin-lead-meta">${escapeHtml(formatDate(lead.created_at))}</p>
                </div>
                <span class="admin-badge ${lead.status === "new" ? "admin-badge-new" : "admin-badge-read"}">
                    ${lead.status === "new" ? "New" : "Read"}
                </span>
            </div>
            <div class="admin-lead-grid">
                <div>
                    <span class="admin-field-label">Email</span>
                    <div class="admin-field-value">${escapeHtml(lead.email)}</div>
                </div>
                <div>
                    <span class="admin-field-label">Organization</span>
                    <div class="admin-field-value">${escapeHtml(lead.organization || "-")}</div>
                </div>
                <div>
                    <span class="admin-field-label">Region</span>
                    <div class="admin-field-value">${escapeHtml(lead.region || "-")}</div>
                </div>
                <div>
                    <span class="admin-field-label">Inquiry type</span>
                    <div class="admin-field-value">${escapeHtml(lead.inquiry_type)}</div>
                </div>
            </div>
            <span class="admin-field-label">Message</span>
            <div class="admin-message">${escapeHtml(lead.message)}</div>
            <div class="admin-lead-actions">
                <a class="admin-button admin-button-small" href="mailto:${encodeURIComponent(lead.email)}?subject=${encodeURIComponent(`Re: ${lead.inquiry_type}`)}">Reply by email</a>
                ${lead.status === "new" ? `<button type="button" class="admin-button admin-button-secondary admin-button-small" data-mark-read="${lead.id}">Mark as read</button>` : ""}
            </div>
        `;

        adminLeads.appendChild(card);
    });

    adminLeads.querySelectorAll("[data-mark-read]").forEach((button) => {
        button.addEventListener("click", async () => {
            const leadId = button.getAttribute("data-mark-read");
            await markLeadAsRead(leadId);
        });
    });
};

const loadLeads = async () => {
    const { data, error } = await supabaseClient
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        adminLeads.innerHTML = `<p class="admin-status is-error">Could not load inquiries: ${escapeHtml(error.message)}</p>`;
        return;
    }

    renderStats(data);
    renderLeads(data);
};

const markLeadAsRead = async (leadId) => {
    const { error } = await supabaseClient.from("leads").update({ status: "read" }).eq("id", leadId);

    if (error) {
        return;
    }

    await loadLeads();
};

const handleLogin = async (event) => {
    event.preventDefault();

    const email = String(loginEmail.value || "")
        .trim()
        .toLowerCase();

    if (email !== OWNER_EMAIL) {
        setLoginStatus("This dashboard is restricted to the site owner email.", "error");
        return;
    }

    loginSubmit.disabled = true;
    setLoginStatus("Sending sign-in link...", "");

    const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo: getAuthRedirectUrl(),
        },
    });

    loginSubmit.disabled = false;

    if (error) {
        setLoginStatus(error.message, "error");
        return;
    }

    setLoginStatus("Check your email for the sign-in link.", "success");
};

const initDashboard = async () => {
    supabaseClient = initSupabase();

    if (!supabaseClient) {
        return;
    }

    const { data } = await supabaseClient.auth.getSession();

    if (data.session?.user?.email?.toLowerCase() === OWNER_EMAIL) {
        showDashboard();
        await loadLeads();
        return;
    }

    showLogin();
};

if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
}

if (refreshButton) {
    refreshButton.addEventListener("click", loadLeads);
}

if (signOutButton) {
    signOutButton.addEventListener("click", async () => {
        await supabaseClient.auth.signOut();
        showLogin();
        setLoginStatus("Signed out.", "success");
    });
}

supabaseClient = initSupabase();

if (supabaseClient) {
    supabaseClient.auth.onAuthStateChange(async (_event, session) => {
        if (session?.user?.email?.toLowerCase() === OWNER_EMAIL) {
            showDashboard();
            await loadLeads();
            return;
        }

        if (!session) {
            showLogin();
        }
    });

    initDashboard();
}

const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
const sections = [...document.querySelectorAll("main section[id]")];
const revealNodes = [...document.querySelectorAll("[data-reveal]")];
const leadForm = document.querySelector("#lead-form");
const formStatus = document.querySelector("#form-status");
const backToTop = document.querySelector("#back-to-top");
const themeToggle = document.querySelector("#theme-toggle");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setHeaderState = () => {
    if (!header) {
        return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const closeNav = () => {
    if (!nav || !navToggle) {
        return;
    }

    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
};

const setActiveLink = () => {
    if (!sections.length || !navLinks.length) {
        return;
    }

    let currentId = sections[0].id;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        if (window.scrollY >= sectionTop) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("is-active", isActive);
    });
};

const setBackToTopState = () => {
    if (!backToTop) {
        return;
    }

    backToTop.classList.toggle("is-visible", window.scrollY > 480);
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "auto" : "smooth",
    });
};

const getTheme = () => document.documentElement.getAttribute("data-theme") || "light";

const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeToggle) {
        themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
};

const toggleTheme = () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
};

if (themeToggle) {
    setTheme(getTheme());
    themeToggle.addEventListener("click", toggleTheme);
}

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("is-open", !expanded);
    });
}

const setFormStatus = (message, type = "") => {
    if (!formStatus) {
        return;
    }

    formStatus.textContent = message;
    formStatus.className = "form-status";
    if (type) {
        formStatus.classList.add(type);
    }
};

const submitLead = async (event) => {
    event.preventDefault();

    if (!leadForm) {
        return;
    }

    const config = window.SITE_CONFIG || {};
    const submitButton = leadForm.querySelector("#lead-submit");

    if (!config.supabaseUrl || !config.supabaseAnonKey) {
        setFormStatus("Configuration error. Please email directly.", "is-error");
        return;
    }

    const formData = new FormData(leadForm);
    const payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        organization: String(formData.get("organization") || "").trim() || null,
        region: String(formData.get("region") || "").trim(),
        inquiry_type: String(formData.get("inquiry_type") || "").trim(),
        message: String(formData.get("message") || "").trim(),
        newsletter_opt_in: formData.get("newsletter_opt_in") === "on",
        source: "website",
    };

    if (!payload.name || !payload.email || !payload.region || !payload.inquiry_type || !payload.message) {
        setFormStatus("Please complete all required fields.", "is-error");
        return;
    }

    if (submitButton) {
        submitButton.disabled = true;
    }
    setFormStatus("Submitting your request...", "is-loading");

    try {
        const response = await fetch(`${config.supabaseUrl}/rest/v1/leads`, {
            method: "POST",
            headers: {
                apikey: config.supabaseAnonKey,
                Authorization: `Bearer ${config.supabaseAnonKey}`,
                "Content-Type": "application/json",
                Prefer: "return=minimal",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            let errorMessage = "Something went wrong. Please email bgpsandaruwan@gmail.com directly.";

            try {
                const errorBody = await response.json();
                if (errorBody.code === "PGRST205") {
                    errorMessage =
                        "The inquiry database is not set up yet. Please email bgpsandaruwan@gmail.com directly for now.";
                } else if (response.status === 401 || response.status === 403) {
                    errorMessage = "Authentication error. Please email bgpsandaruwan@gmail.com directly.";
                } else if (errorBody.message) {
                    console.error("Lead submission failed:", errorBody);
                }
            } catch {
                console.error("Lead submission failed with status:", response.status);
            }

            setFormStatus(errorMessage, "is-error");
            return;
        }

        try {
            const emailResponse = await fetch(`${config.supabaseUrl}/functions/v1/send-lead-email`, {
                method: "POST",
                headers: {
                    apikey: config.supabaseAnonKey,
                    Authorization: `Bearer ${config.supabaseAnonKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!emailResponse.ok) {
                console.error("Lead saved but email notification failed.");
            }
        } catch {
            console.error("Lead saved but email notification failed.");
        }

        leadForm.reset();
        setFormStatus("Thank you. Your consultation request has been received. I will respond within 48 hours.", "is-success");
    } catch {
        setFormStatus("Network error. Please check your connection or email bgpsandaruwan@gmail.com directly.", "is-error");
    } finally {
        if (submitButton) {
            submitButton.disabled = false;
        }
    }
};

if (leadForm) {
    leadForm.addEventListener("submit", submitLead);
}

if (backToTop) {
    backToTop.addEventListener("click", scrollToTop);
}

navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
});

window.addEventListener(
    "scroll",
    () => {
        setHeaderState();
        setActiveLink();
        setBackToTopState();
    },
    { passive: true }
);

window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
        closeNav();
    }
});

if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -6% 0px",
        }
    );

    revealNodes.forEach((node) => observer.observe(node));
} else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
}

document.addEventListener("click", (event) => {
    if (!nav || !navToggle) {
        return;
    }

    const clickedInsideNav = nav.contains(event.target) || navToggle.contains(event.target);
    if (!clickedInsideNav) {
        closeNav();
    }
});

setHeaderState();
setActiveLink();
setBackToTopState();

const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
const sections = [...document.querySelectorAll("main section[id]")];
const revealNodes = [...document.querySelectorAll("[data-reveal]")];
const capabilityQuote = document.querySelector(".capability-quote p");
const leadForm = document.querySelector("#lead-form");
const formStatus = document.querySelector("#form-status");
const backToTop = document.querySelector("#back-to-top");
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

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("is-open", !expanded);
    });
}

if (capabilityQuote) {
    capabilityQuote.textContent =
        "Business owners need advisors who understand cost, delivery, and risk. I consult from that perspective because I engineer systems, implement AI, and build companies myself.";
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
        setFormStatus("Please fill in all required fields.", "is-error");
        return;
    }

    if (submitButton) {
        submitButton.disabled = true;
    }
    setFormStatus("Sending your message...", "is-loading");

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
            throw new Error("Submission failed");
        }

        leadForm.reset();
        setFormStatus("Thank you - your message has been received. I will respond within 48 hours.", "is-success");
    } catch {
        setFormStatus("Something went wrong. Please email bgpsandaruwan@gmail.com directly.", "is-error");
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
    if (window.innerWidth > 860) {
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
            threshold: 0.18,
            rootMargin: "0px 0px -8% 0px",
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

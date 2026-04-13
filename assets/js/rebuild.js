const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
const sections = [...document.querySelectorAll("main section[id]")];
const revealNodes = [...document.querySelectorAll("[data-reveal]")];
const capabilityQuote = document.querySelector(".capability-quote p");
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

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("is-open", !expanded);
    });
}

if (capabilityQuote) {
    capabilityQuote.textContent =
        "Secure access, deep visibility, and resilient platform execution matter most when they operate as one engineering system.";
}

navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
});

window.addEventListener(
    "scroll",
    () => {
        setHeaderState();
        setActiveLink();
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

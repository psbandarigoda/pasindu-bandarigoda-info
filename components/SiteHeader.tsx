"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeProvider";
import { TOPMATE_URL } from "@/lib/site";

type SiteHeaderProps = {
    variant?: "home" | "minimal";
};

const homeNavLinks = [
    { href: "/#about", label: "About" },
    { href: "/#problems", label: "Challenges" },
    { href: "/#thinking", label: "Perspective" },
    { href: "/#trust", label: "Trust" },
    { href: "/#credentials", label: "Experience" },
    { href: "/#engage", label: "Engage" },
    { href: "/insights", label: "Insights" },
];

export function SiteHeader({ variant = "home" }: SiteHeaderProps) {
    const pathname = usePathname();
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isHome = variant === "home" && pathname === "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setNavOpen(false);
    }, [pathname]);

    const navLinks =
        variant === "home"
            ? homeNavLinks
            : [
                  { href: "/insights", label: "Insights" },
                  { href: "/#consultation", label: "Consultation" },
              ];

    return (
        <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
            <div className="shell header-inner">
                <Link className="brand" href="/">
                    Pasindu Bandarigoda
                </Link>

                {isHome && (
                    <button
                        className="nav-toggle"
                        type="button"
                        aria-expanded={navOpen}
                        aria-controls="site-nav"
                        aria-label="Toggle navigation"
                        onClick={() => setNavOpen((open) => !open)}
                    >
                        <span />
                        <span />
                    </button>
                )}

                <nav
                    className={`site-nav${navOpen ? " is-open" : ""}`}
                    id="site-nav"
                    aria-label="Primary navigation"
                >
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setNavOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                    {isHome && (
                        <div className="site-nav-cta">
                            <a className="btn btn-outline" href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                Book Appointment
                            </a>
                            <Link className="btn btn-primary" href="/#consultation">
                                Request Consultation
                            </Link>
                        </div>
                    )}
                </nav>

                <div className="header-actions">
                    {isHome && <ThemeToggle />}
                    <a className="btn btn-outline header-cta btn-nav" href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                        Book Appointment
                    </a>
                    <Link className="btn btn-primary header-cta btn-nav" href="/#consultation">
                        Request Consultation
                    </Link>
                </div>
            </div>
        </header>
    );
}

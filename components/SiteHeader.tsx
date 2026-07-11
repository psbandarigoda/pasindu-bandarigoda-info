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
    { href: "/#problems", label: "Expertise" },
    { href: "/portfolio", label: "Track Record" },
    { href: "/insights", label: "Insights" },
];

const minimalNavLinks = [
    { href: "/", label: "Home" },
    { href: "/#problems", label: "Expertise" },
    { href: "/portfolio", label: "Track Record" },
    { href: "/insights", label: "Insights" },
];

function ConnectButton({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
    return (
        <a
            className={["btn btn-primary btn-nav", className].filter(Boolean).join(" ")}
            href={TOPMATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
        >
            Connect
        </a>
    );
}

export function SiteHeader({ variant = "home" }: SiteHeaderProps) {
    const pathname = usePathname();
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isHome = variant === "home" && pathname === "/";
    const navLinks = isHome ? homeNavLinks : minimalNavLinks;
    const closeNav = () => setNavOpen(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setNavOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = navOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [navOpen]);

    return (
        <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
            <div className="shell header-inner">
                <Link className="brand" href="/" onClick={closeNav}>
                    <span className="brand-full">Pasindu Bandarigoda</span>
                    <span className="brand-short">P. Bandarigoda</span>
                </Link>

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

                <nav
                    className={`site-nav${navOpen ? " is-open" : ""}`}
                    id="site-nav"
                    aria-label="Primary navigation"
                >
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={closeNav}>
                            {link.label}
                        </Link>
                    ))}
                    <div className="site-nav-cta">
                        <ConnectButton onNavigate={closeNav} />
                    </div>
                </nav>

                <div className="header-actions">
                    <ThemeToggle />
                    <ConnectButton className="header-connect" />
                </div>
            </div>
        </header>
    );
}

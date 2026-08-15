import Link from "next/link";
import { LINKEDIN_URL, TOPMATE_URL } from "@/lib/site";

type SiteFooterProps = {
    variant?: "home" | "minimal";
};

export function SiteFooter({ variant = "home" }: SiteFooterProps) {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="shell footer-inner">
                <span className="footer-brand">Pasindu Bandarigoda</span>
                {variant === "home" && (
                    <span className="footer-meta">
                        &copy; {year} · Technology Strategy Advisor
                    </span>
                )}
                <nav className="footer-links" aria-label="Footer navigation">
                    <Link href="/#about">About</Link>
                    <Link href="/#problems">Problems</Link>
                    <Link href="/portfolio">Track Record</Link>
                    <Link href="/insights">Insights</Link>
                    <Link href="/#consultation">Discuss a Problem</Link>
                    <a href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                        Topmate
                    </a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </nav>
            </div>
        </footer>
    );
}

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
                    {variant === "home" ? (
                        <>
                            <Link href="/#about">About</Link>
                            <Link href="/#problems">Challenges</Link>
                            <Link href="/#engage">Engage</Link>
                            <Link href="/insights">Insights</Link>
                            <Link href="/#consultation">Consultation</Link>
                            <a href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                Book Appointment
                            </a>
                            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </>
                    ) : (
                        <>
                            <Link href="/">Home</Link>
                            <Link href="/insights">Insights</Link>
                            <Link href="/#consultation">Consultation</Link>
                        </>
                    )}
                </nav>
            </div>
        </footer>
    );
}

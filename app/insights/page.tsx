import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_URL, TOPMATE_URL } from "@/lib/site";
import "@/styles/article.css";

export const metadata: Metadata = {
    title: "Insights | Pasindu Bandarigoda - Technology Strategy & Executive Advisory",
    description:
        "Executive perspectives by Pasindu Bandarigoda on technology strategy, AI enablement, digital transformation, and business decision-making.",
    alternates: { canonical: `${SITE_URL}/insights` },
};

export default function InsightsPage() {
    return (
        <>
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>
            <SiteHeader variant="minimal" />

            <main id="main-content" className="section article-page">
                <div className="shell">
                    <header className="article-header">
                        <p className="article-meta">
                            <span>Insights</span>
                            <span>Pasindu Bandarigoda</span>
                        </p>
                        <h1 className="article-title">Perspectives on business challenges at the intersection of strategy and technology.</h1>
                        <p className="article-deck">
                            Analysis for executives navigating technology investment, AI enablement, and enterprise transformation.
                        </p>
                    </header>

                    <div className="insights-hub-grid">
                        <section className="insights-category" id="technology-strategy">
                            <h2>Technology Strategy</h2>
                            <ul>
                                <li>
                                    <Link href="/insights/technology-strategy/ai-strategy-business-architecture">
                                        Why AI strategy must begin with business architecture
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="insights-category" id="ai">
                            <h2>AI Enablement</h2>
                            <ul>
                                <li>
                                    <Link href="/insights/technology-strategy/ai-strategy-business-architecture">
                                        AI strategy and business architecture
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="insights-category" id="digital-transformation">
                            <h2>Digital Transformation</h2>
                            <ul>
                                <li>
                                    <em>Further analysis in preparation.</em>
                                </li>
                            </ul>
                        </section>
                        <section className="insights-category" id="leadership">
                            <h2>Executive Decision-Making</h2>
                            <ul>
                                <li>
                                    <em>Further analysis in preparation.</em>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <p style={{ marginTop: "3rem" }}>
                        <Link href="/#consultation">Request a consultation</Link> ·{" "}
                        <a href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                            Book an appointment
                        </a>{" "}
                        · <Link href="/">Return home</Link>
                    </p>
                </div>
            </main>

            <SiteFooter variant="minimal" />
        </>
    );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { insightPillars } from "@/lib/advisory-content";
import { SITE_URL, TOPMATE_URL } from "@/lib/site";
import "@/styles/article.css";

export const metadata: Metadata = {
    title: "Insights | Complex Systems & Technology Decisions",
    description:
        "How Pasindu Bandarigoda thinks about complex systems, technology decisions, AI and human work, architecture, and build/buy/integrate choices.",
    alternates: { canonical: `${SITE_URL}/insights` },
    openGraph: {
        title: "Insights | Pasindu Bandarigoda",
        description:
            "Business outcomes first. Technology in service of strategy - notes on complex systems and technology decisions.",
        url: `${SITE_URL}/insights`,
    },
};

export default function InsightsPage() {
    const published = insightPillars.flatMap((pillar) =>
        pillar.articles.filter((a) => a.status === "published" && a.href).map((a) => ({ ...a, pillar: pillar.title })),
    );

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
                            <span aria-hidden="true">·</span>
                            <span>How I think</span>
                        </p>
                        <h1 className="article-title">How I think about complex systems and technology decisions.</h1>
                        <p className="article-deck">
                            Start with the business outcome. Understand the system. Identify the constraint. Then define the
                            technology direction. Not a general technology blog.
                        </p>
                    </header>

                    {published.length > 0 && (
                        <section className="insights-featured" aria-labelledby="featured-heading">
                            <h2 id="featured-heading" className="insights-section-title">
                                Published
                            </h2>
                            <ul className="insights-featured-list">
                                {published.map((article) => (
                                    <li key={article.href}>
                                        <Link href={article.href!}>{article.title}</Link>
                                        <span>{article.pillar}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <section className="insights-brief" aria-labelledby="brief-heading">
                        <h2 id="brief-heading" className="insights-section-title">
                            Technology Decision Brief
                        </h2>
                        <p>
                            Each brief examines one bounded problem: the decision, why the obvious answer may be wrong, system
                            context, constraints, options, trade-offs, questions worth asking, and a decision principle. No
                            universal prescriptions.
                        </p>
                    </section>

                    <div className="insights-hub-grid">
                        {insightPillars.map((pillar) => {
                            const hasPublished = pillar.articles.some((a) => a.status === "published");
                            const planned = pillar.articles.filter((a) => a.status === "planned");

                            return (
                                <section key={pillar.id} className="insights-category" id={pillar.id}>
                                    <h2>{pillar.title}</h2>
                                    <p className="insights-category-desc">{pillar.description}</p>
                                    <ul>
                                        {pillar.articles
                                            .filter((a) => a.status === "published" && a.href)
                                            .map((article) => (
                                                <li key={article.href}>
                                                    <Link href={article.href!}>{article.title}</Link>
                                                </li>
                                            ))}
                                        {!hasPublished &&
                                            planned.slice(0, 2).map((article) => (
                                                <li key={article.title} className="insights-planned">
                                                    <span>{article.title}</span>
                                                    {article.brief && <em>Decision Brief · planned</em>}
                                                </li>
                                            ))}
                                        {hasPublished &&
                                            planned.slice(0, 1).map((article) => (
                                                <li key={article.title} className="insights-planned">
                                                    <span>{article.title}</span>
                                                    {article.brief && <em>Decision Brief · planned</em>}
                                                </li>
                                            ))}
                                    </ul>
                                </section>
                            );
                        })}
                    </div>

                    <aside className="insights-cta">
                        <h2>Discuss a complex technology problem</h2>
                        <p>
                            Share the technology, AI, architecture, process, or systems problem you are evaluating. The first
                            step is understanding the objective and the system behind the problem.
                        </p>
                        <div className="insights-cta-actions">
                            <a className="btn btn-primary" href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                Discuss a Problem
                            </a>
                            <Link className="btn btn-outline" href="/#consultation">
                                Request an Independent Review
                            </Link>
                        </div>
                        <p className="insights-cta-links">
                            <Link href="/portfolio">Track Record</Link>
                            {" · "}
                            <Link href="/#problems">Problems</Link>
                            {" · "}
                            <Link href="/">Home</Link>
                        </p>
                    </aside>
                </div>
            </main>

            <SiteFooter variant="minimal" />
        </>
    );
}

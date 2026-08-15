import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioEvidenceCard } from "@/components/PortfolioEvidenceCard";
import { PortfolioRoleTimeline } from "@/components/PortfolioRoleTimeline";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StrategicCaseCard } from "@/components/StrategicCaseCard";
import {
    academicExperience,
    education,
    educationProgressionNote,
    enterpriseHighlights,
    industryExperience,
    myResearch,
    myResearchProjects,
    myResearchThemes,
    portfolioEvidence,
    portfolioMetrics,
    portfolioPillars,
    researchAffiliations,
    selectedInsights,
    strategicCases,
    supervisedResearch,
    ventures,
} from "@/lib/portfolio-data";
import { SITE_URL, TOPMATE_URL } from "@/lib/site";
import "@/styles/article.css";

export const metadata: Metadata = {
    title: "Track Record | Pasindu Bandarigoda",
    description:
        "Evidence behind technology judgment - enterprise platforms, architecture, AI/MLOps, founder/operator work, and emerging Enterprise Decision Intelligence research.",
    alternates: { canonical: `${SITE_URL}/portfolio` },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Track Record | Pasindu Bandarigoda",
        description:
            "Verified experience supporting complex systems and technology-enabled problem solving.",
        url: `${SITE_URL}/portfolio`,
    },
};

export default function PortfolioPage() {
    return (
        <>
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>
            <SiteHeader variant="minimal" />

            <main id="main-content" className="section portfolio-page">
                <div className="shell">
                    {/* 1. Track Record Behind the Advisory Work */}
                    <header className="article-header portfolio-hero">
                        <p className="article-meta">
                            <span>Track record</span>
                            <span aria-hidden="true">·</span>
                            <span>Evidence</span>
                        </p>
                        <h1 className="article-title">Evidence behind my technology judgment.</h1>
                        <p className="article-deck">
                            Enterprise software and platform engineering, architecture, AI and MLOps, founder/operator work,
                            research, and academic contribution. Together they show how complex systems are understood - and
                            how operational problems are translated into technology direction that serves a business outcome.
                        </p>
                        <p className="portfolio-core-areas">
                            Business outcomes first · Technology in service of strategy
                        </p>
                        <div className="portfolio-hero-actions">
                            <Link className="portfolio-back" href="/">
                                ← Home
                            </Link>
                            <Link className="portfolio-back" href="/#problems">
                                Problems →
                            </Link>
                        </div>
                    </header>

                    <section className="portfolio-metrics" aria-label="Verified impact">
                        {portfolioMetrics.map((metric) => (
                            <article key={metric.label} className="portfolio-metric">
                                <strong>{metric.value}</strong>
                                <span>{metric.label}</span>
                            </article>
                        ))}
                    </section>

                    <section className="portfolio-pillars" aria-label="Credibility foundation">
                        {portfolioPillars.map((pillar) => (
                            <article key={pillar.label} className="portfolio-pillar">
                                <span>{pillar.label}</span>
                                <h2>{pillar.title}</h2>
                                <p>{pillar.text}</p>
                            </article>
                        ))}
                    </section>

                    {/* 2. Selected Complex Problems & Strategic Work */}
                    <section className="portfolio-section" id="strategic-work" aria-labelledby="strategic-heading">
                        <header className="portfolio-section-header">
                            <h2 id="strategic-heading">Selected complex problems &amp; strategic work</h2>
                            <p>
                                Verified work framed around context, constraint, options, direction, contribution, and
                                outcome. Includes completed work, work in progress, and proposals - without inventing results
                                still underway.
                            </p>
                        </header>
                        <div className="strategic-case-list">
                            {strategicCases.map((item) => (
                                <StrategicCaseCard key={item.id} item={item} />
                            ))}
                        </div>
                    </section>

                    {/* 3. Enterprise Technology & Systems Experience */}
                    <section className="portfolio-section" id="enterprise" aria-labelledby="enterprise-heading">
                        <header className="portfolio-section-header">
                            <h2 id="enterprise-heading">Enterprise technology &amp; systems experience</h2>
                            <p>
                                Platform reliability, observability, AI-enabled systems, and translating technical complexity
                                into guidance engineering teams can use.
                            </p>
                        </header>
                        <div className="portfolio-leadership">
                            {enterpriseHighlights.map((item) => (
                                <article key={item.title} className="portfolio-leadership-card">
                                    <span>{item.organization}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* 4. Founder & Operator Experience */}
                    <section className="portfolio-section" id="operator" aria-labelledby="operator-heading">
                        <header className="portfolio-section-header">
                            <h2 id="operator-heading">Founder &amp; operator experience</h2>
                            <p>
                                Product, technology, architecture, partnership, and resource decisions under real constraints
                                - where outcomes are personally owned.
                            </p>
                        </header>
                        <div className="portfolio-ventures">
                            {ventures.map((venture) => (
                                <article key={venture.name} className="portfolio-venture">
                                    <div className="portfolio-venture-top">
                                        <h3>{venture.name}</h3>
                                        <span>{venture.period}</span>
                                    </div>
                                    <p className="portfolio-venture-role">{venture.role}</p>
                                    <p className="portfolio-venture-tagline">{venture.tagline}</p>
                                    <p>{venture.description}</p>
                                    <ul className="portfolio-operator-points">
                                        {venture.operatorPoints.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                    {venture.note && <p className="portfolio-venture-note">{venture.note}</p>}
                                    <a href={venture.url} target="_blank" rel="noopener noreferrer">
                                        Visit {venture.name} →
                                    </a>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* 5. Research - Enterprise Decision Intelligence */}
                    <section className="portfolio-section" id="research" aria-labelledby="research-heading">
                        <header className="portfolio-section-header">
                            <h2 id="research-heading">Research - Enterprise Decision Intelligence</h2>
                            <p>{myResearch.description}</p>
                        </header>

                        <article className="portfolio-research-own">
                            <h3>{myResearch.title}</h3>
                            <p className="portfolio-research-themes-label">Themes under development</p>
                            <ul className="portfolio-theme-list">
                                {myResearchThemes.map((theme) => (
                                    <li key={theme}>{theme}</li>
                                ))}
                            </ul>
                            <p className="portfolio-research-themes-label">My research</p>
                            <ul className="portfolio-research-list">
                                {myResearchProjects.map((project) => (
                                    <li key={project}>{project}</li>
                                ))}
                            </ul>
                        </article>

                        <div className="portfolio-research-group">
                            <PortfolioRoleTimeline roles={researchAffiliations} />
                        </div>

                        <div className="portfolio-research-topics">
                            <h3 className="portfolio-research-topics-title">Selected research supervision</h3>
                            <p className="portfolio-research-topics-intro">
                                Research projects under supervision at IIT - listed separately so they are not mistaken for
                                personal publications.
                            </p>
                            <ul className="portfolio-research-list">
                                {supervisedResearch.map((project) => (
                                    <li key={project}>{project}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 6. Education & Professional Development */}
                    <section className="portfolio-section" id="education" aria-labelledby="education-heading">
                        <header className="portfolio-section-header">
                            <h2 id="education-heading">Education &amp; professional development</h2>
                            <p>Completed qualifications only. Planned programmes are not listed as completed.</p>
                        </header>
                        <ul className="portfolio-education-list">
                            {education.map((item) => (
                                <li key={item.credential}>
                                    <strong>{item.credential}</strong>
                                    <span>{item.institution}</span>
                                    {item.detail && <em>{item.detail}</em>}
                                </li>
                            ))}
                        </ul>
                        <p className="portfolio-verified-note">{educationProgressionNote}</p>
                    </section>

                    {/* 7. Selected Teaching, Speaking & Academic Service */}
                    <section className="portfolio-section" id="teaching" aria-labelledby="teaching-heading">
                        <header className="portfolio-section-header">
                            <h2 id="teaching-heading">Selected teaching, speaking &amp; academic service</h2>
                            <p>Communication, mentoring, and academic contribution - secondary to the core practice.</p>
                        </header>
                        <PortfolioRoleTimeline roles={academicExperience} />
                        <div className="portfolio-evidence-grid portfolio-evidence-compact">
                            {portfolioEvidence.map((item) => (
                                <PortfolioEvidenceCard key={item.id} item={item} />
                            ))}
                        </div>
                        <p className="portfolio-verified-note">
                            Where media is available it is shown here; entries are backed by institutional references or
                            published coverage.
                        </p>
                    </section>

                    {/* 8. Selected Insights */}
                    <section className="portfolio-section" id="insights" aria-labelledby="insights-heading">
                        <header className="portfolio-section-header">
                            <h2 id="insights-heading">Selected insights</h2>
                            <p>Notes on systems, AI and human work, and technology decisions.</p>
                        </header>
                        <ul className="portfolio-insight-list">
                            {selectedInsights.map((insight) => (
                                <li key={insight.href}>
                                    <Link href={insight.href}>{insight.title}</Link>
                                    <span>{insight.category}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="portfolio-back">
                            <Link href="/insights">More insights →</Link>
                        </p>
                    </section>

                    {/* 9. Professional History */}
                    <section className="portfolio-section" id="history" aria-labelledby="history-heading">
                        <header className="portfolio-section-header">
                            <h2 id="history-heading">Professional history</h2>
                            <p>
                                Chronological roles for reference. The sections above explain how this experience informs
                                systems and technology problem solving.
                            </p>
                        </header>
                        <PortfolioRoleTimeline roles={industryExperience} />
                    </section>

                    {/* 10. CTA */}
                    <aside className="portfolio-cta">
                        <h2 className="portfolio-cta-title">Discuss a complex technology problem</h2>
                        <p>
                            Share the technology, AI, architecture, process, or systems problem you are evaluating. The first
                            step is understanding the objective and the system behind the problem.
                        </p>
                        <div className="portfolio-cta-actions">
                            <a className="btn btn-primary" href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                Discuss a Problem
                            </a>
                            <Link className="btn btn-outline" href="/#consultation">
                                Request an Independent Review
                            </Link>
                            <Link className="btn btn-outline" href="/insights">
                                Insights
                            </Link>
                        </div>
                    </aside>
                </div>
            </main>

            <SiteFooter variant="minimal" />
        </>
    );
}

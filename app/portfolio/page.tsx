import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioEvidenceCard } from "@/components/PortfolioEvidenceCard";
import { PortfolioRoleTimeline } from "@/components/PortfolioRoleTimeline";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
    academicExperience,
    enterpriseLeadership,
    industryExperience,
    portfolioEvidence,
    portfolioMetrics,
    portfolioPillars,
    researchAffiliations,
    researchExploration,
    researchProjects,
    ventures,
} from "@/lib/portfolio-data";
import { SITE_URL } from "@/lib/site";
import "@/styles/article.css";

export const metadata: Metadata = {
    title: "Professional Portfolio & Track Record",
    description:
        "Full professional history of Pasindu Bandarigoda - enterprise platform engineering, founder leadership, computational neuroscience research, and academic work supporting technology strategy advisory.",
    alternates: { canonical: `${SITE_URL}/portfolio` },
    robots: { index: true, follow: true },
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
                    <header className="article-header portfolio-hero">
                        <p className="article-meta">
                            <span>Professional portfolio</span>
                            <span aria-hidden="true">·</span>
                            <span>Pasindu Bandarigoda</span>
                        </p>
                        <h1 className="article-title">The experience behind the advisory work.</h1>
                        <p className="article-deck">
                            Senior Software Engineer at IFS specializing in platform infrastructure, monitoring, and AI-enabled
                            systems. Active researcher, guest lecturer, and speaker - focused on scalable, reliable, and ethically
                            aligned systems. This page is the verified track record behind my technology strategy advisory practice.
                        </p>
                        <Link className="portfolio-back" href="/">
                            ← Return to advisory homepage
                        </Link>
                    </header>

                    <section className="portfolio-metrics" aria-label="Impact at a glance">
                        {portfolioMetrics.map((metric) => (
                            <article key={metric.label} className="portfolio-metric">
                                <strong>{metric.value}</strong>
                                <span>{metric.label}</span>
                            </article>
                        ))}
                    </section>

                    <section className="portfolio-pillars" aria-label="Professional pillars">
                        {portfolioPillars.map((pillar) => (
                            <article key={pillar.label} className="portfolio-pillar">
                                <span>{pillar.label}</span>
                                <h2>{pillar.title}</h2>
                                <p>{pillar.text}</p>
                            </article>
                        ))}
                    </section>

                    <section className="portfolio-section" id="industry" aria-labelledby="industry-heading">
                        <header className="portfolio-section-header">
                            <h2 id="industry-heading">Industry experience</h2>
                            <p>
                                Enterprise platform engineering, MLOps, and product delivery at global software companies -
                                the operational backbone for advising on AI, architecture, and scalable systems.
                            </p>
                        </header>
                        <div className="portfolio-leadership">
                            {enterpriseLeadership.map((item) => (
                                <article key={item.title} className="portfolio-leadership-card">
                                    <span>{item.organization}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            ))}
                        </div>
                        <PortfolioRoleTimeline roles={industryExperience} />
                    </section>

                    <section className="portfolio-section" id="speaking" aria-labelledby="speaking-heading">
                        <header className="portfolio-section-header">
                            <h2 id="speaking-heading">Speaking, teaching & verified impact</h2>
                            <p>
                                Guest lectures, workshops, and academic service - evidence that I can translate complex technical
                                systems into clear guidance for engineers, students, and leadership audiences.
                            </p>
                        </header>
                        <div className="portfolio-evidence-grid">
                            {portfolioEvidence.map((item) => (
                                <PortfolioEvidenceCard key={item.id} item={item} />
                            ))}
                        </div>
                        <p className="portfolio-verified-note">
                            Many professional activities were conducted without official photography or recordings. Where media is
                            available, it is shown here; all entries are backed by institutional references, official invitations,
                            or published coverage.
                        </p>
                    </section>

                    <section className="portfolio-section" id="ventures" aria-labelledby="ventures-heading">
                        <header className="portfolio-section-header">
                            <h2 id="ventures-heading">Ventures & leadership</h2>
                            <p>
                                Founder and director roles that bring operator judgment to strategy - from B2B technology
                                consulting to consumer platform innovation.
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
                                    <a href={venture.url} target="_blank" rel="noopener noreferrer">
                                        Visit {venture.name} →
                                    </a>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="portfolio-section" id="research" aria-labelledby="research-heading">
                        <header className="portfolio-section-header">
                            <h2 id="research-heading">Research</h2>
                            <p>
                                Computational neuroscience and applied AI research - informing decision support, human-AI
                                systems, enterprise intelligence, and evidence-based technology strategy.
                            </p>
                        </header>
                        <PortfolioRoleTimeline roles={researchAffiliations} />
                        <div className="portfolio-research-group">
                            <PortfolioRoleTimeline roles={researchExploration} />
                            <div className="portfolio-research-topics">
                                <h3 className="portfolio-research-topics-title">Research topics</h3>
                                <p className="portfolio-research-topics-intro">
                                    Supervision at IIT and personal research explorations across the following directions.
                                </p>
                                <ul className="portfolio-research-list">
                                    {researchProjects.map((project) => (
                                        <li key={project}>{project}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="portfolio-section" id="academic" aria-labelledby="academic-heading">
                        <header className="portfolio-section-header">
                            <h2 id="academic-heading">Academic work</h2>
                            <p>
                                Teaching, supervision, and examination - maintaining academic rigor alongside industry and
                                research practice.
                            </p>
                        </header>
                        <PortfolioRoleTimeline roles={academicExperience} />
                    </section>

                    <aside className="portfolio-cta">
                        <p>Interested in advisory on technology strategy, AI, or enterprise transformation?</p>
                        <Link className="btn btn-primary" href="/#consultation">
                            Request Executive Consultation
                        </Link>
                    </aside>
                </div>
            </main>

            <SiteFooter variant="minimal" />
        </>
    );
}

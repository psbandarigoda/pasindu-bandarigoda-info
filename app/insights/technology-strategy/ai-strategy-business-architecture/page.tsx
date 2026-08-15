import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleToc } from "@/components/ArticleToc";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PROFILE_IMAGE, SITE_URL, TOPMATE_URL } from "@/lib/site";
import "@/styles/article.css";

const slug = "ai-strategy-business-architecture";
const url = `${SITE_URL}/insights/technology-strategy/${slug}`;

export const metadata: Metadata = {
    title: "Why AI Strategy Must Begin With Business Architecture",
    description:
        "AI adoption should start with how the organization actually operates - processes, decisions, people, data, and architecture - before selecting tools.",
    alternates: { canonical: url },
    openGraph: {
        type: "article",
        title: "Why AI Strategy Must Begin With Business Architecture",
        description:
            "Start with the operating system of the business - processes, decisions, information, people, data, and architecture.",
        url,
        images: [PROFILE_IMAGE],
        publishedTime: "2026-06-25",
        authors: ["Pasindu Bandarigoda"],
        section: "AI + Human Systems",
    },
};

const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            headline: "Why AI Strategy Must Begin With Business Architecture",
            description:
                "Why AI initiatives should begin with how the organization operates before committing to platforms or models.",
            image: `${SITE_URL}${PROFILE_IMAGE}`,
            datePublished: "2026-06-25",
            dateModified: "2026-06-25",
            author: { "@id": `${SITE_URL}/#person` },
            publisher: { "@id": `${SITE_URL}/#person` },
            mainEntityOfPage: url,
            articleSection: "AI + Human Systems",
            keywords: [
                "AI Strategy",
                "Business Architecture",
                "Human-AI Systems",
                "Enterprise Systems",
                "Technology Decisions",
            ],
            inLanguage: "en",
        },
    ],
};

export default function ArticlePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>
            <SiteHeader variant="minimal" />

            <main id="main-content" className="section article-page">
                <div className="shell">
                    <header className="article-header">
                        <p className="article-meta">
                            <span>AI + Human Systems</span>
                            <span id="reading-time">6 min read</span>
                            <time dateTime="2026-06-25">25 June 2026</time>
                        </p>
                        <h1 className="article-title">Why AI strategy must begin with business architecture</h1>
                        <p className="article-deck">
                            Organizations are under pressure to adopt AI. The common mistake is starting with models and
                            platforms before understanding how work actually operates.
                        </p>
                    </header>

                    <div className="article-layout">
                        <aside className="article-toc-wrap">
                            <h2>Contents</h2>
                            <nav id="article-toc" aria-label="Table of contents" />
                        </aside>

                        <article className="article-body">
                            <section className="article-summary" aria-label="Summary">
                                <h2>Summary</h2>
                                <p>
                                    AI adoption should begin with the business outcome and the operating system of the
                                    organization - processes, decisions, information, people, capabilities, data, and
                                    architecture - not vendor roadmaps. Define what needs to improve and how work actually
                                    functions before selecting tools.
                                </p>
                            </section>

                            <h2>The wrong first question</h2>
                            <p>
                                Teams are often asked: <em>Which AI platform should we buy?</em>
                            </p>
                            <p>
                                A better first question is: <em>Where does work actually happen - and where is the real
                                constraint?</em>
                            </p>
                            <p>
                                When AI strategy is disconnected from how the organization operates, the result is familiar:
                                pilots that do not scale, duplicated data infrastructure, and technology risk without system
                                improvement.
                            </p>

                            <h2>What “business architecture” means here</h2>
                            <p>
                                Business architecture is the map of how an organization creates and delivers value -
                                capabilities, processes, information flows, decision rights, and the software that supports
                                them. That map is the system boundary: it shows where AI can help, and where it mainly adds
                                cost and complexity.
                            </p>
                            <ul>
                                <li>Which decisions are high-value and information-rich?</li>
                                <li>Where are bottlenecks process, people, data, or architecture - rather than model quality?</li>
                                <li>Where should AI assist, recommend, or automate - and where must humans retain authority?</li>
                                <li>What governance is needed for trust, risk, and operational reality?</li>
                            </ul>

                            <h2>AI must fit human and operational systems</h2>
                            <p>
                                Technology works inside human systems. AI that ignores cognitive load, trust, automation
                                bias, and existing workflows will struggle even when the model is technically strong.
                            </p>
                            <p>
                                A technically correct solution can still be the wrong system decision.
                            </p>
                            <p>
                                Before automating a process, ask whether the process itself should change. Improving one
                                component - a chatbot, a model, a dashboard - does not necessarily improve the whole system.
                            </p>

                            <h2>Implications for technology and business leaders</h2>
                            <p>
                                Translate AI capability into operating-model language. Clarify what to integrate, centralize,
                                or leave independent before model selection. Treat AI readiness as a systems question - not a
                                marketing checkbox.
                            </p>

                            <h2>A practical sequence</h2>
                            <ol>
                                <li>Understand the objective and operating context</li>
                                <li>Map processes, decisions, information flows, people, and systems</li>
                                <li>Find the real constraint - process, data, architecture, or judgment</li>
                                <li>Decide where AI assists, recommends, or automates - and where humans retain authority</li>
                                <li>Design architecture and governance around that model</li>
                                <li>Run bounded experiments tied to system outcomes</li>
                                <li>Scale only where the operating model can absorb the change</li>
                            </ol>

                            <blockquote>
                                AI is not a strategy. It is an instrument applied inside a system that must be understood
                                before the technology is chosen.
                            </blockquote>

                            <section className="article-faq" aria-labelledby="article-faq-heading">
                                <h2 id="article-faq-heading">Questions worth asking</h2>
                                <article className="faq-item">
                                    <h3>Why start with business architecture?</h3>
                                    <p>
                                        Because AI initiatives fail when disconnected from processes, decision rights, data
                                        ownership, human judgment, and measurable operating outcomes.
                                    </p>
                                </article>
                                <article className="faq-item">
                                    <h3>Who should own AI strategy?</h3>
                                    <p>
                                        Shared ownership across business, technology, and governance - supported by
                                        architecture that can hold the operating model together.
                                    </p>
                                </article>
                            </section>

                            <aside className="author-box" aria-label="About the author">
                                <Image src={PROFILE_IMAGE} alt="Pasindu Bandarigoda" width={72} height={72} />
                                <div>
                                    <h2>Pasindu Bandarigoda</h2>
                                    <p>
                                        Works on complex systems and technology-enabled problem solving. Founder &amp;
                                        Director at nZO Innovations. Emerging research in Enterprise Decision Intelligence.
                                    </p>
                                    <p>
                                        <Link href="/#consultation">Discuss a problem</Link> ·{" "}
                                        <a href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                            Schedule a conversation
                                        </a>
                                    </p>
                                </div>
                            </aside>

                            <section className="related-articles" aria-labelledby="related-heading">
                                <h2 id="related-heading">Related</h2>
                                <div className="related-list">
                                    <Link href="/insights">
                                        Insights <span>All notes</span>
                                    </Link>
                                    <Link href="/#method">
                                        How I think <span>Method</span>
                                    </Link>
                                </div>
                            </section>
                        </article>
                    </div>
                </div>
            </main>

            <SiteFooter variant="minimal" />
            <ArticleToc />
        </>
    );
}

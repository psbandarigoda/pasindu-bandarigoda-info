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
        "Pasindu Bandarigoda explains why AI strategy must begin with business architecture - a technology strategy perspective for CEOs, CIOs, and enterprise leaders adopting AI.",
    alternates: { canonical: url },
    openGraph: {
        type: "article",
        title: "Why AI Strategy Must Begin With Business Architecture",
        description: "Executive perspective on aligning AI adoption with business architecture before technology investment.",
        url,
        images: [PROFILE_IMAGE],
        publishedTime: "2026-06-25",
        authors: ["Pasindu Bandarigoda"],
        section: "Technology Strategy",
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
                "Why enterprise leaders must align AI strategy with business architecture before committing capital to AI initiatives.",
            image: `${SITE_URL}${PROFILE_IMAGE}`,
            datePublished: "2026-06-25",
            dateModified: "2026-06-25",
            author: { "@id": `${SITE_URL}/#person` },
            publisher: { "@id": `${SITE_URL}/#person` },
            mainEntityOfPage: url,
            articleSection: "Technology Strategy",
            keywords: ["AI Strategy", "Technology Strategy", "Business Architecture", "Enterprise Architecture", "AI Adoption"],
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
                            <span>Technology Strategy</span>
                            <span id="reading-time">6 min read</span>
                            <time dateTime="2026-06-25">25 June 2026</time>
                        </p>
                        <h1 className="article-title">Why AI strategy must begin with business architecture</h1>
                        <p className="article-deck">
                            Enterprise leaders are under pressure to adopt AI. The mistake is starting with models and platforms before understanding how the business creates value.
                        </p>
                    </header>

                    <div className="article-layout">
                        <aside className="article-toc-wrap">
                            <h2>Contents</h2>
                            <nav id="article-toc" aria-label="Table of contents" />
                        </aside>

                        <article className="article-body">
                            <section className="article-summary" aria-label="Executive summary">
                                <h2>Executive summary</h2>
                                <p>
                                    <strong>Pasindu Bandarigoda</strong>, Technology Strategy Advisor and AI Consultant, argues that AI adoption must be anchored in business architecture - not vendor roadmaps. Leaders should define value streams, data ownership, and governance before selecting AI tools. This reduces technology risk, improves AI readiness, and aligns investment with competitive advantage.
                                </p>
                            </section>

                            <h2>The AI adoption trap</h2>
                            <p>
                                Boards and executive teams are asking the wrong first question: <em>Which AI platform should we buy?</em> The right first question is: <em>Where does technology change business outcomes?</em>
                            </p>
                            <p>
                                When AI strategy is disconnected from business architecture, organizations produce pilots that never scale, duplicate data infrastructure, and expose themselves to technology risk without corresponding return.
                            </p>

                            <h2>What is business architecture in this context?</h2>
                            <p>
                                Business architecture describes how an organization creates and delivers value - capabilities, processes, information flows, and decision rights. For a Technology Strategy Advisor, this is the map that determines where AI can compound advantage versus where it adds cost.
                            </p>
                            <ul>
                                <li>Which decisions are high-value and data-rich?</li>
                                <li>Where are bottlenecks organizational rather than technical?</li>
                                <li>What governance is required for AI risk and compliance?</li>
                            </ul>

                            <h2>Implications for CIOs, CTOs, and founders</h2>
                            <p>
                                Technology leadership must translate AI capability into business language. Enterprise architects should define integration patterns before model selection. Founders and investors should treat AI readiness as due diligence - not a marketing checkbox.
                            </p>

                            <h2>A practical sequence for AI strategy</h2>
                            <ol>
                                <li>Define business outcomes and constraints</li>
                                <li>Map capabilities and data maturity</li>
                                <li>Assess AI readiness and technology risk</li>
                                <li>Design target architecture and governance</li>
                                <li>Run bounded experiments tied to metrics</li>
                                <li>Scale with operational excellence</li>
                            </ol>

                            <blockquote>AI is not a strategy. It is an instrument applied within a strategy that must be understood in business terms first.</blockquote>

                            <section className="article-faq" aria-labelledby="article-faq-heading">
                                <h2 id="article-faq-heading">FAQ</h2>
                                <article className="faq-item">
                                    <h3>Why should AI strategy start with business architecture?</h3>
                                    <p>
                                        Because AI initiatives fail when disconnected from business processes, data ownership, governance, and measurable outcomes.
                                    </p>
                                </article>
                                <article className="faq-item">
                                    <h3>Who should own AI strategy in an enterprise?</h3>
                                    <p>
                                        Executive leadership shared across business, technology, and governance - supported by enterprise architecture and technology strategy advisors.
                                    </p>
                                </article>
                            </section>

                            <p className="article-references">
                                <strong>References:</strong> Enterprise architecture frameworks, AI readiness assessment practice, digital transformation governance literature.{" "}
                                <Link href="/#consultation">Request an AI Readiness Assessment</Link>.
                            </p>

                            <aside className="author-box" aria-label="About the author">
                                <Image src={PROFILE_IMAGE} alt="Pasindu Bandarigoda" width={72} height={72} />
                                <div>
                                    <h2>Pasindu Bandarigoda</h2>
                                    <p>
                                        Technology Strategy Advisor. Founder &amp; Director at nZO Innovations. Researcher and university lecturer. Advises leadership teams on technology investment, AI enablement, and enterprise transformation.
                                    </p>
                                    <p>
                                        <Link href="/#consultation">Request consultation</Link> ·{" "}
                                        <a href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                            Book an appointment
                                        </a>
                                    </p>
                                </div>
                            </aside>

                            <section className="related-articles" aria-labelledby="related-heading">
                                <h2 id="related-heading">Related insights</h2>
                                <div className="related-list">
                                    <Link href="/insights">
                                        More articles <span>Insights hub</span>
                                    </Link>
                                    <Link href="/#engagements">
                                        AI Readiness Assessment <span>Engagement</span>
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

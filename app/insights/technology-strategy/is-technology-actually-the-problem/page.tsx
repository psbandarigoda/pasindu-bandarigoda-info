import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleToc } from "@/components/ArticleToc";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PROFILE_IMAGE, SITE_URL, TOPMATE_URL } from "@/lib/site";
import "@/styles/article.css";

const slug = "is-technology-actually-the-problem";
const url = `${SITE_URL}/insights/technology-strategy/${slug}`;

export const metadata: Metadata = {
    title: "Is Technology Actually the Problem?",
    description:
        "Before investing in new technology, confirm that technology is what is holding the outcome back. Many problems that look like software problems are process, ownership, decision, or information problems.",
    alternates: { canonical: url },
    openGraph: {
        type: "article",
        title: "Is Technology Actually the Problem?",
        description:
            "Find the constraint before you fund the solution. Why many technology problems are really process, ownership, decision, or information problems.",
        url,
        images: [PROFILE_IMAGE],
        publishedTime: "2026-11-16",
        authors: ["Pasindu Bandarigoda"],
        section: "Complex Systems & Technology Decisions",
    },
};

const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            headline: "Is Technology Actually the Problem?",
            description:
                "Why leaders should confirm that technology is the real constraint before investing in new systems, platforms, or AI.",
            image: `${SITE_URL}${PROFILE_IMAGE}`,
            datePublished: "2026-11-16",
            dateModified: "2026-11-16",
            author: { "@id": `${SITE_URL}/#person` },
            publisher: { "@id": `${SITE_URL}/#person` },
            mainEntityOfPage: url,
            articleSection: "Complex Systems & Technology Decisions",
            keywords: [
                "Technology Strategy",
                "Technology Investment",
                "Complex Systems",
                "Systems Thinking",
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
                            <span>Technology Decision Brief</span>
                            <span>Complex Systems &amp; Technology Decisions</span>
                            <span id="reading-time">5 min read</span>
                            <time dateTime="2026-11-16">16 November 2026</time>
                        </p>
                        <h1 className="article-title">Is technology actually the problem?</h1>
                        <p className="article-deck">
                            When results stall, the usual response is new software. Often the real constraint sits
                            somewhere else - in the process, the decisions, the information, or how teams work together.
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
                                    Before investing in new technology, confirm that technology is what is actually holding
                                    the outcome back. Many problems that look like software problems are process, ownership,
                                    decision, or information problems. New software placed on top of them adds cost and
                                    complexity without changing the result. Start with the outcome, understand the system,
                                    and find the constraint. Then decide what technology should do.
                                </p>
                            </section>

                            <h2>The decision</h2>
                            <p>
                                A process is slow. Customers wait. Reports arrive late. Teams work around the system instead
                                of through it. Someone proposes a new platform, a replacement system, or an AI tool.
                            </p>
                            <p>On the surface, this is a technology decision: which system, which vendor, what budget.</p>
                            <p>
                                The more important decision comes first. Is technology actually what is holding the outcome
                                back?
                            </p>

                            <h2>Why the obvious answer may be wrong</h2>
                            <p>
                                Technology is the most visible part of any operation. It has a name, a vendor, and a cost.
                                Unclear ownership, slow approvals, and missing information are harder to see. So when results
                                stall, the system usually takes the blame.
                            </p>
                            <p>
                                But software tends to amplify what is already there. Put it on a clear process and the work
                                usually gets faster. Put it on an unclear one and the confusion moves into the new system,
                                now with license fees and a migration behind it.
                            </p>
                            <p>A new system also feels like progress long before it delivers any.</p>

                            <h2>The system context</h2>
                            <p>Most operational problems run across several layers at once:</p>
                            <ul>
                                <li>
                                    <strong>Business process</strong> - how work moves from request to result
                                </li>
                                <li>
                                    <strong>People</strong> - skills, workload, incentives, and ownership
                                </li>
                                <li>
                                    <strong>Decisions</strong> - who decides, how quickly, and with what information
                                </li>
                                <li>
                                    <strong>Information</strong> - what is known, where it lives, and who can see it
                                </li>
                                <li>
                                    <strong>Software</strong> - what systems do, and what they force people to do
                                </li>
                                <li>
                                    <strong>Data</strong> - whether it is complete, consistent, and trusted
                                </li>
                                <li>
                                    <strong>AI</strong> - where it could assist, recommend, or automate
                                </li>
                                <li>
                                    <strong>Architecture</strong> - how systems connect, and what that makes easy or hard
                                    to change
                                </li>
                            </ul>
                            <p>
                                The symptom usually appears in the software, because that is where people see it. The cause
                                often sits in another layer.
                            </p>

                            <h2>Finding the constraint</h2>
                            <p>Common complaints often point somewhere other than where they appear:</p>
                            <ul>
                                <li>
                                    <strong>“The system is too slow.”</strong> The delay may be an approval step, a handoff
                                    between teams, or a decision waiting on information no one owns.
                                </li>
                                <li>
                                    <strong>“The data is wrong.”</strong> There may be no clear owner, or the same
                                    information may be entered in several places.
                                </li>
                                <li>
                                    <strong>“Nobody uses the tool.”</strong> The tool may not fit how the work is actually
                                    done, or the process was never agreed in the first place.
                                </li>
                                <li>
                                    <strong>“Teams work around the system.”</strong> The process may have changed while the
                                    system stayed the same.
                                </li>
                            </ul>
                            <p>
                                One test helps: if the perfect system were in place tomorrow, what would still be broken?
                                Whatever remains is not a technology problem, and new technology will not fix it.
                            </p>

                            <h2>From my own work</h2>
                            <p>
                                On a shared enterprise monitoring platform, incident resolution was slowed by uneven
                                understanding of logging, alerting, and diagnostics across a large engineering
                                organization. The response was not more tooling. It was structured enablement - training
                                videos, documentation, and deep technical sessions - that helped more than 600 engineers
                                operate and troubleshoot the platform.
                            </p>
                            <p>
                                In observability cost work that is still in progress, high-volume logging was driving
                                platform cost without clear ownership. So the work is as much about ownership as
                                technology: finding the largest sources, giving each owning team evidence and fix guidance,
                                and making the cost visible.
                            </p>
                            <p>In both cases, the technology mattered. It was not the whole constraint.</p>

                            <h2>The options</h2>
                            <p>Once the constraint is clear, the options widen. New technology is one of them:</p>
                            <ul>
                                <li>Redesign the process before changing any system.</li>
                                <li>Clarify ownership and decision rights.</li>
                                <li>Fix the information flow - what is captured, where, and by whom.</li>
                                <li>Build capability through training, guidance, and shared practice.</li>
                                <li>Integrate the systems that already exist.</li>
                                <li>Automate a step that is already well understood.</li>
                                <li>
                                    Use AI where the work is repetitive and information-rich, with people keeping authority
                                    where it matters.
                                </li>
                                <li>Replace the system, when it really is the constraint.</li>
                                <li>Leave part of the system alone.</li>
                            </ul>
                            <p>
                                Sometimes new technology is the right answer. The point is to choose it because it removes
                                the constraint, not because it is the most visible option.
                            </p>

                            <h2>The trade-offs</h2>
                            <p>Every option has costs beyond the budget line:</p>
                            <ul>
                                <li>
                                    <strong>Cost and time</strong> - to adopt, maintain, and change later, not only to buy
                                    or build.
                                </li>
                                <li>
                                    <strong>Risk</strong> - what happens if the assumption behind the investment is wrong.
                                </li>
                                <li>
                                    <strong>Readiness</strong> - whether people, data, and processes can absorb the change.
                                </li>
                                <li>
                                    <strong>Dependencies</strong> - what the choice ties you to: a vendor, a platform, a
                                    skill set.
                                </li>
                                <li>
                                    <strong>Reversibility</strong> - how hard it will be to change direction in two or three
                                    years.
                                </li>
                            </ul>
                            <p>
                                A process change is usually easier to reverse than a platform decision. That alone is a
                                reason to understand the system before committing to a platform.
                            </p>

                            <h2>Decision principle</h2>
                            <blockquote>
                                Find the constraint before you fund the solution. Technology is a good investment when it
                                removes what is actually holding the outcome back.
                            </blockquote>

                            <section className="article-faq" aria-labelledby="article-faq-heading">
                                <h2 id="article-faq-heading">Questions worth asking</h2>
                                <article className="faq-item">
                                    <h3>What outcome needs to improve - and how will we know?</h3>
                                    <p>
                                        If the outcome cannot be stated in business terms, there is no way to judge whether
                                        the investment worked.
                                    </p>
                                </article>
                                <article className="faq-item">
                                    <h3>Where exactly does the work slow down or break?</h3>
                                    <p>
                                        Follow one real request from start to finish. The delays are not always where the
                                        complaints are.
                                    </p>
                                </article>
                                <article className="faq-item">
                                    <h3>Who owns this outcome?</h3>
                                    <p>
                                        Many problems that look technical are ownership problems. If no one owns the
                                        outcome, a new system will not change that.
                                    </p>
                                </article>
                                <article className="faq-item">
                                    <h3>What have we already tried - and why did it not work?</h3>
                                    <p>
                                        Past attempts often point to the real constraint. If the last system did not fix the
                                        problem, the next one may not either.
                                    </p>
                                </article>
                                <article className="faq-item">
                                    <h3>What would we do if we could not buy anything new?</h3>
                                    <p>
                                        This question brings out process, ownership, and information fixes that are often
                                        faster and cheaper to test.
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
                                    <Link href="/insights/technology-strategy/ai-strategy-business-architecture">
                                        Why AI strategy must begin with business architecture <span>AI + Human Systems</span>
                                    </Link>
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

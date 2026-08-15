import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/SiteChrome";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
    advisoryEngagements,
    advisoryPrinciples,
    expertiseDecisions,
    problemSolvingMethod,
    tangibleExamples,
} from "@/lib/advisory-content";
import { LINKEDIN_URL, OWNER_EMAIL, PROFILE_IMAGE, SITE_URL, TOPMATE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Pasindu Bandarigoda - Technology Strategy Advisor",
    description:
        "Technology Strategy Advisor for complex systems and technology-enabled problem solving. Business outcomes first. Technology in service of strategy.",
    alternates: { canonical: SITE_URL },
    openGraph: {
        title: "Pasindu Bandarigoda - Technology Strategy Advisor",
        description:
            "Improve complex technology decisions by understanding the business objective and the system behind the problem before defining the solution.",
        url: SITE_URL,
    },
};

export default function HomePage() {
    return (
        <>
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>
            <SiteHeader variant="home" />

            <main id="main-content">
                <section className="hero" aria-labelledby="hero-heading">
                    <div className="shell hero-grid">
                        <ScrollReveal className="hero-content" delay="0.05s">
                            <p className="hero-eyebrow">Technology Strategy Advisor</p>
                            <p className="hero-core-areas">
                                Complex Systems · Technology-Enabled Problem Solving
                            </p>
                            <h1 className="hero-title" id="hero-heading">
                                I help leaders solve complex technology and systems problems.
                            </h1>
                            <p className="hero-lead">
                                I work across business processes, people, software, data, AI, and architecture to understand
                                what is driving the problem and define the technology direction that best supports the
                                business objective.
                            </p>
                            <p className="hero-audience">
                                Founders · CEOs · CIOs · CTOs · COOs · Leadership Teams
                            </p>
                            <div className="hero-actions">
                                <a className="btn btn-primary" href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                    Discuss a Problem
                                </a>
                                <Link className="btn btn-outline" href="#problems">
                                    Problems I Work On
                                </Link>
                                <Link className="btn btn-outline" href="/portfolio">
                                    Track Record
                                </Link>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="hero-visual" delay="0.15s">
                            <figure className="hero-portrait-frame">
                                <Image
                                    className="hero-portrait"
                                    src={PROFILE_IMAGE}
                                    alt="Pasindu Bandarigoda, Technology Strategy Advisor"
                                    width={380}
                                    height={475}
                                    priority
                                />
                            </figure>
                            <figcaption className="hero-caption">
                                <span className="hero-caption-line">
                                    <strong>Business outcomes first.</strong>
                                </span>
                                <span className="hero-caption-line">Technology in service of strategy.</span>
                            </figcaption>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ABOUT */}
                <section className="section section-border" id="about" aria-labelledby="about-heading">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">About</span>
                            <h2 className="section-title" id="about-heading">
                                Why this perspective is useful
                            </h2>
                            <p className="section-intro">
                                I work where business objectives and complex technology or systems decisions intersect. The
                                starting point is the outcome the organization needs - not a preferred platform, architecture,
                                AI model, or implementation method. Once the objective is clear, I examine how the system
                                behind the problem actually works before deciding what should change.
                            </p>
                        </ScrollReveal>

                        <div className="about-foundations">
                            <ScrollReveal className="about-foundation">
                                <h3>Enterprise technology</h3>
                                <p>
                                    Hands-on experience with enterprise platforms, software, infrastructure, observability,
                                    AI/MLOps, authentication, cloud and on-prem systems, and architecture.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal className="about-foundation" delay="0.05s">
                                <h3>Systems thinking</h3>
                                <p>
                                    Looking across process, people, information, software, data, decisions, and architecture
                                    - rather than treating an application in isolation.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal className="about-foundation" delay="0.1s">
                                <h3>Founder / operator experience</h3>
                                <p>
                                    Product, technology, architecture, partnership, prioritization, and resource decisions
                                    where consequences are real.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal className="about-foundation" delay="0.15s">
                                <h3>Research &amp; academic perspective</h3>
                                <p>
                                    Emerging research in human-AI systems, cognition, decision-making, enterprise systems, and
                                    decision support - labeled as emerging, not established proprietary doctrine.
                                </p>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal className="split" delay="0.2s" style={{ marginTop: "3rem" }}>
                            <div className="split-block">
                                <span className="section-label">Strategy before implementation</span>
                                <h3 className="subsection-title">Recommendation first</h3>
                                <p>
                                    Primary work is understanding the objective, evaluating options, and defining system or
                                    technology direction before major implementation begins.
                                </p>
                                <p>
                                    Advisory work is recommendation-led and delivery-agnostic. Where an affiliated
                                    organization could participate in implementation, that relationship is disclosed and the
                                    client remains free to choose any delivery partner.
                                </p>
                            </div>
                            <div className="split-block funnel-cta-block">
                                <p className="funnel-cta-label">Next</p>
                                <h3 className="subsection-title">Problems I work on</h3>
                                <p>
                                    Situations where process, people, software, data, AI, and architecture interact - and the
                                    right direction is not immediately obvious.
                                </p>
                                <Link className="btn btn-primary" href="#problems">
                                    View Problems
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* PROBLEMS */}
                <section className="section section-alt" id="problems" aria-labelledby="expertise-heading">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">Expertise</span>
                            <h2 className="section-title" id="expertise-heading">
                                Complex problems I work on
                            </h2>
                            <p className="section-intro">
                                Bounded problems at the intersection of process, people, decisions, information, software,
                                data, AI, and architecture - especially when the right technical direction is not obvious.
                            </p>
                        </ScrollReveal>

                        <div className="problems-list expertise-decisions">
                            {expertiseDecisions.map((item, i) => (
                                <ScrollReveal key={item.num} className="problem-item" delay={`${i * 0.04}s`}>
                                    <span className="problem-num">{item.num}</span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p className="expertise-situation">{item.situation}</p>
                                        <ul className="expertise-questions">
                                            {item.questions.map((q) => (
                                                <li key={q}>{q}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal className="section-header" style={{ marginTop: "3.5rem" }}>
                            <span className="section-label">In practice</span>
                            <h2 className="section-title">How common situations are approached</h2>
                        </ScrollReveal>
                        <div className="tangible-examples">
                            {tangibleExamples.map((example, i) => (
                                <ScrollReveal key={example.title} className="tangible-example" delay={`${i * 0.05}s`}>
                                    <h3>{example.title}</h3>
                                    <p>{example.text}</p>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal className="funnel-cta-bar" delay="0.1s">
                            <div>
                                <h3>Evidence behind the judgment</h3>
                                <p>Enterprise technology, founder/operator work, research, and academic contribution.</p>
                            </div>
                            <Link className="btn btn-primary" href="/portfolio">
                                View Track Record
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

                {/* METHOD */}
                <section className="section section-border" id="method" aria-labelledby="method-heading">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">How I think</span>
                            <h2 className="section-title" id="method-heading">
                                Understand the system. Identify the constraint. Evaluate the options. Define the direction.
                            </h2>
                            <p className="section-intro">
                                Business outcomes first. Technology in service of strategy. Once the objective is clear, map
                                how the system works, find what is actually blocking the outcome, then decide what technology
                                should - and should not - do.
                            </p>
                        </ScrollReveal>

                        <div className="process-steps method-steps">
                            {problemSolvingMethod.map((step, i) => (
                                <ScrollReveal key={step.phase} className="process-step" delay={`${i * 0.03}s`}>
                                    <span>{step.phase}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal className="principles-block" delay="0.1s">
                            <h3 className="subsection-title">Working principles</h3>
                            <ul className="principles-list">
                                {advisoryPrinciples.map((principle) => (
                                    <li key={principle}>{principle}</li>
                                ))}
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal className="section-header" style={{ marginTop: "4rem" }}>
                            <span className="section-label">Ways to work</span>
                            <h2 className="section-title">Engagements</h2>
                            <p className="section-intro">
                                Focused on clarity before commitment - objective, system, options, and direction.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="engagement-grid" delay="0.1s" id="engagements">
                            {advisoryEngagements.map((item) => (
                                <article key={item.title} className="engagement-item">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </ScrollReveal>
                    </div>
                </section>

                <section className="section section-alt" id="trust">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">Perspective</span>
                            <h2 className="section-title">A complementary view on a bounded problem</h2>
                            <p className="section-intro">
                                You bring industry knowledge, operational experience, and authority. An external systems
                                perspective can surface options, constraints, and consequences that are harder to see from
                                inside.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="trust-grid" delay="0.1s">
                            <article className="trust-card">
                                <h3>Outcome before technology</h3>
                                <p>
                                    Start from what needs to improve - not from a preferred tool, model, or vendor roadmap.
                                </p>
                            </article>
                            <article className="trust-card">
                                <h3>Evidence over trends</h3>
                                <p>
                                    Direction based on operating context, constraints, and trade-offs - not fashion alone.
                                </p>
                            </article>
                            <article className="trust-card">
                                <h3>Grounded in real systems</h3>
                                <p>
                                    7+ years across enterprise technology, research, and founder/operator work - so direction
                                    reflects what organizations can operate.
                                </p>
                            </article>
                        </ScrollReveal>
                        <ScrollReveal className="metrics-row" delay="0.15s">
                            <div className="metric">
                                <strong>7+</strong>
                                <span>Years in enterprise technology, research, and founder/operator work</span>
                            </div>
                            <div className="metric">
                                <strong>600+</strong>
                                <span>Engineers enabled on a shared monitoring platform</span>
                            </div>
                            <div className="metric">
                                <strong>~50%</strong>
                                <span>Reduction in on-call alerts</span>
                            </div>
                            <div className="metric">
                                <strong>99%</strong>
                                <span>Uptime on critical environments</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="section section-border" id="insights" aria-labelledby="insights-heading">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">Insights</span>
                            <h2 className="section-title" id="insights-heading">
                                How I think - selected notes
                            </h2>
                            <p className="section-intro">
                                Direct analysis of systems constraints, AI and human work, architecture, and
                                build/buy/integrate choices - not a general technology blog.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="insight-list" delay="0.1s">
                            <article className="insight-item">
                                <h3>
                                    <Link href="/insights/technology-strategy/ai-strategy-business-architecture">
                                        Why AI strategy must begin with business architecture
                                    </Link>
                                </h3>
                                <span>AI + Human Systems</span>
                            </article>
                        </ScrollReveal>
                        <ScrollReveal className="funnel-cta-bar" delay="0.15s">
                            <div>
                                <h3>More analysis</h3>
                                <p>Technology Decision Briefs and notes on complex systems problems.</p>
                            </div>
                            <Link className="btn btn-primary" href="/insights">
                                View Insights
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="section section-alt" id="consultation" aria-labelledby="consultation-heading">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">Contact</span>
                            <h2 className="section-title" id="consultation-heading">
                                Discuss a complex technology problem
                            </h2>
                            <p className="section-intro">
                                If your organization is facing a difficult technology, AI, architecture, process, or systems
                                problem, share the context. The first step is understanding the objective and the system
                                behind the problem. I respond within 48 hours.
                            </p>
                        </ScrollReveal>
                        <div className="contact-grid">
                            <ScrollReveal className="contact-aside">
                                <p>
                                    For founders and senior business or technology leaders responsible for complex systems,
                                    technology, AI, or process decisions.
                                </p>
                                <div className="contact-links">
                                    <div className="contact-link">
                                        <span>Email</span>
                                        <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>
                                    </div>
                                    <div className="contact-link">
                                        <span>Phone</span>
                                        <a href="tel:+94773638063">+94 77 363 8063</a>
                                    </div>
                                    <div className="contact-link">
                                        <span>LinkedIn</span>
                                        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                                            linkedin.com/in/pasindu-bandarigoda
                                        </a>
                                    </div>
                                    <div className="contact-link">
                                        <span>Schedule</span>
                                        <a href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                            topmate.io/pasindu_bandarigoda
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay="0.1s">
                                <ContactForm />
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                <section className="section section-border" id="faq" aria-labelledby="faq-heading">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">Questions</span>
                            <h2 className="section-title" id="faq-heading">
                                Common questions
                            </h2>
                        </ScrollReveal>
                        <div className="faq-list">
                            {[
                                [
                                    "What kinds of problems do you work on?",
                                    "Problems where business processes, people, decisions, information, software, data, AI, and architecture interact - particularly when the right technical direction is not immediately obvious.",
                                ],
                                [
                                    "Who do you work with?",
                                    "Founders and senior business or technology leaders responsible for complex systems, technology, AI, or process decisions.",
                                ],
                                [
                                    "Do you provide implementation?",
                                    "Primary focus is problem definition, systems analysis, technology direction, and decision support. Implementation can follow once the direction is clear. If an affiliated company could participate in delivery, that relationship is disclosed.",
                                ],
                                [
                                    "What does an engagement produce?",
                                    "A clearer view of the business objective, the system behind the problem, the main constraints, options, trade-offs, and a practical technology-enabled direction.",
                                ],
                            ].map(([q, a], i) => (
                                <ScrollReveal key={q} className="faq-item" delay={`${i * 0.05}s`}>
                                    <h3>{q}</h3>
                                    <p>{a}</p>
                                </ScrollReveal>
                            ))}
                            <ScrollReveal className="faq-item" delay="0.2s">
                                <h3>How do we begin?</h3>
                                <p>
                                    Share the <Link href="#consultation">problem context</Link>, email directly, or{" "}
                                    <a href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                        schedule a conversation
                                    </a>
                                    .
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter variant="home" />
        </>
    );
}

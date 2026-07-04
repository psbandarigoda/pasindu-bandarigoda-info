import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/SiteChrome";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LINKEDIN_URL, OWNER_EMAIL, PROFILE_IMAGE, SITE_URL, TOPMATE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Pasindu Bandarigoda | Technology Strategy Advisor",
    description:
        "Pasindu Bandarigoda helps leadership teams solve complex business challenges through technology, AI, and strategic systems thinking - aligning investment with operational excellence and long-term value.",
    alternates: { canonical: SITE_URL },
    openGraph: {
        title: "Pasindu Bandarigoda | Technology Strategy Advisor",
        description:
            "Strategic advisory for executives navigating technology investment, AI enablement, and enterprise transformation.",
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
                            <h1 className="hero-title" id="hero-heading">
                                I help organizations solve complex business challenges through technology, AI, and strategic systems thinking.
                            </h1>
                            <p className="hero-lead">
                                I advise leadership teams when technology investment must produce measurable results - operational excellence, sustainable growth, and long-term competitive advantage. Technology is the enabler. The business outcome is the objective.
                            </p>
                            <div className="hero-actions">
                                <Link className="btn btn-primary" href="#consultation">
                                    Request Executive Consultation
                                </Link>
                                <a className="btn btn-outline" href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                    Book an Appointment
                                </a>
                                <Link className="btn btn-outline" href="#problems">
                                    Business Challenges
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
                            <figcaption className="hero-caption">Business outcomes first. Technology in service of strategy.</figcaption>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="section section-border" id="about" aria-labelledby="about-heading">
                    <div className="shell split">
                        <ScrollReveal className="split-block">
                            <span className="section-label">Who I am</span>
                            <h2 className="section-title" id="about-heading">
                                Technology Strategy Advisor to executive decision-makers.
                            </h2>
                            <p>
                                I work with founders, CEOs, boards, and enterprise leaders on decisions where technology shapes organizational capability, capital allocation, and competitive positioning.
                            </p>
                            <p>
                                My practice sits at the intersection of business strategy and technology governance - helping leadership teams move from uncertainty to clarity before significant investment is committed.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="split-block" delay="0.1s">
                            <span className="section-label">What I am not</span>
                            <h2 className="section-title">Advisory, not delivery.</h2>
                            <p>
                                I do not sell software development, implementation teams, or vendor solutions. Engagements are diagnostic and strategic - focused on executive decision-making, transformation direction, and technology governance.
                            </p>
                            <p>When execution is required, I help leaders define the path. I do not become the delivery organization.</p>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="section section-alt" id="problems">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">Business challenges</span>
                            <h2 className="section-title">Problems that affect revenue, risk, and organizational capability.</h2>
                            <p className="section-intro">These are business problems first. Technology is often involved - but never the starting point.</p>
                        </ScrollReveal>
                        <div className="problems-list">
                            {[
                                ["01", "Misaligned technology investment", "Capital deployed without clear connection to revenue growth, cost structure, or strategic priorities. I help leadership teams align technology investment with measurable business outcomes."],
                                ["02", "Transformation that fails to scale", "Digital initiatives that succeed in pilot but cannot change how the organization operates. I design transformation pathways grounded in governance, capability, and operational reality."],
                                ["03", "AI adoption without business case or readiness", "Pressure to adopt AI without honest assessment of organizational readiness, risk exposure, or return potential. I provide evidence-based AI enablement guidance for executive teams."],
                                ["04", "Growth constrained by organizational complexity", "Fragmented operations and accumulated technology cost limiting agility and margin. I advise on enterprise transformation that restores operational excellence and business resilience."],
                                ["05", "High-stakes decisions without independent perspective", "Boards and investors facing technology decisions without neutral, rigorous assessment. I support executive decision-making with independent analysis - where my experience applies."],
                            ].map(([num, title, text], i) => (
                                <ScrollReveal key={num} className="problem-item" delay={`${i * 0.05}s`}>
                                    <span className="problem-num">{num}</span>
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{text}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section section-border" id="thinking" aria-labelledby="thinking-heading">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">How I think</span>
                            <h2 className="section-title" id="thinking-heading">Business problem first. Systems thinking throughout.</h2>
                            <p className="section-intro">
                                Every engagement begins with understanding constraints, incentives, and the organizational dynamics that determine whether strategy becomes results.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="split" delay="0.1s">
                            <div className="split-block">
                                <p>
                                    I analyse deeply, recommend with precision, and say clearly when the answer is to wait, simplify, or redirect investment. That judgment comes from research discipline, founder experience, and years working inside complex technology environments.
                                </p>
                                <p>Technology is never the objective. It is one lever among many - applied only when it creates strategic advantage or operational improvement.</p>
                            </div>
                            <div className="split-block">
                                <h3 className="subsection-title">Decisions I help leadership teams navigate</h3>
                                <ul className="values-list">
                                    <li>Where to invest - and where to stop spending</li>
                                    <li>Build, buy, or partner for critical capability</li>
                                    <li>Whether the organization is ready for AI at scale</li>
                                    <li>How to de-risk transformation before board commitment</li>
                                    <li>How technology governance supports long-term value</li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="section section-alt" id="trust">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">Why executives engage</span>
                            <h2 className="section-title">Independent judgment. Evidence over opinion.</h2>
                        </ScrollReveal>
                        <ScrollReveal className="trust-grid" delay="0.1s">
                            <article className="trust-card">
                                <h3>Business-first analysis</h3>
                                <p>Recommendations anchored in business outcomes - revenue, efficiency, risk, and organizational capability - not technology trends.</p>
                            </article>
                            <article className="trust-card">
                                <h3>Vendor-neutral perspective</h3>
                                <p>No product to sell. No delivery team to feed. Assessment focused on what creates value and what does not.</p>
                            </article>
                            <article className="trust-card">
                                <h3>Depth that survives execution</h3>
                                <p>More than a decade across research, enterprise technology leadership, and founder roles - ensuring strategy reflects operational reality.</p>
                            </article>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="section section-border" id="credentials">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">Experience</span>
                            <h2 className="section-title">What supports this perspective.</h2>
                            <p className="section-intro">Supporting credentials that inform advisory work - not the primary identity.</p>
                        </ScrollReveal>
                        <div className="cred-roles">
                            {[
                                ["Primary", "Technology Strategy Advisor", "Independent advisory for executive teams on technology investment, AI enablement, and enterprise transformation."],
                                ["Leadership", "Founder & Director, nZO Innovations", "Operational and capital allocation perspective from building and leading a technology venture."],
                                ["Advisory", "Technology Consultant", "Independent consulting on digital transformation and strategic technology direction."],
                                ["Research", "Researcher", "Peer-reviewed work in healthcare technology, medical imaging, and applied machine learning."],
                                ["Academia", "University Lecturer, SLIIT", "Teaching and mentoring - connecting industry practice with structured analysis."],
                            ].map(([label, title, text], i) => (
                                <ScrollReveal key={label} className="cred-role" delay={`${i * 0.05}s`}>
                                    <span>{label}</span>
                                    <strong>{title}</strong>
                                    <p>{text}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                        <ScrollReveal className="foundation-note" delay="0.25s">
                            <p>Advisory recommendations are grounded in enterprise technology leadership experience - ensuring strategy reflects what organizations can actually execute.</p>
                        </ScrollReveal>
                        <ScrollReveal className="metrics-row" delay="0.15s">
                            <div className="metric">
                                <strong>10+</strong>
                                <span>Years across research, enterprise technology, and founder leadership</span>
                            </div>
                            <div className="metric">
                                <strong>Research</strong>
                                <span>Healthcare technology and applied AI - peer-reviewed publications</span>
                            </div>
                            <div className="metric">
                                <strong>Teaching</strong>
                                <span>University lecturer - SLIIT</span>
                            </div>
                            <div className="metric">
                                <strong>Innovation</strong>
                                <span>Competition and hackathon evaluation</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="industries-block" delay="0.2s">
                            <h3 className="subsection-title">Industries understood</h3>
                            <ul className="industries-list">
                                <li>Technology and high-growth companies</li>
                                <li>Healthcare organizations</li>
                                <li>Enterprises in digital transformation</li>
                                <li>Organizations evaluating AI enablement</li>
                                <li>Investors and leadership teams facing technology decisions</li>
                            </ul>
                        </ScrollReveal>
                        <ScrollReveal className="values-block" delay="0.25s">
                            <h3 className="subsection-title">Professional values</h3>
                            <ul className="values-list">
                                <li>Business outcomes before technology trends</li>
                                <li>Evidence-based recommendations</li>
                                <li>Honest assessment - including when not to invest</li>
                                <li>Long-term partnership over transactional advice</li>
                                <li>Clarity for executive decision-making</li>
                            </ul>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="section section-alt" id="engage">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">How we engage</span>
                            <h2 className="section-title">Structured advisory for executive teams.</h2>
                            <p className="section-intro">Engagements produce clarity and written direction - not activity for its own sake.</p>
                        </ScrollReveal>
                        <div className="process-steps">
                            {[
                                ["Phase 01", "Understand the business context", "Stakeholders, constraints, and the outcomes that define success."],
                                ["Phase 02", "Identify the real constraint", "Often organizational - not technical."],
                                ["Phase 03", "Define strategic options", "Governance, capability, and investment pathways aligned to business capacity."],
                                ["Phase 04", "Validate with evidence", "Stress-test assumptions before capital is committed."],
                                ["Phase 05", "Guide leadership through execution", "Executive oversight - without becoming the delivery team."],
                                ["Phase 06", "Measure business impact", "Outcomes tied to performance - not project activity."],
                            ].map(([phase, title, text], i) => (
                                <ScrollReveal key={phase} className="process-step" delay={`${i * 0.05}s`}>
                                    <span>{phase}</span>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                        <ScrollReveal className="section-header" style={{ marginTop: "4rem" }}>
                            <span className="section-label">Advisory engagements</span>
                            <h2 className="section-title">Where I create value for leadership teams.</h2>
                        </ScrollReveal>
                        <ScrollReveal className="engagement-grid" delay="0.1s" id="engagements">
                            {[
                                ["Executive Strategy Session", "A focused working session on a strategic decision affecting technology investment or transformation direction."],
                                ["Strategic Technology Review", "Independent assessment of whether current technology capability supports business strategy and efficiency targets."],
                                ["Digital Transformation Advisory", "Roadmap and governance design for enterprise transformation - from direction through organizational readiness."],
                                ["AI Readiness Assessment", "Honest evaluation of use cases, organizational readiness, risk, and return potential before AI investment scales."],
                                ["Enterprise Capability Review", "Assessment of scalability constraints, integration complexity, and their impact on business agility."],
                                ["Technology Leadership Advisory", "Support for CTOs and technology executives on governance, investment priorities, and organizational design."],
                            ].map(([title, text]) => (
                                <article key={title} className="engagement-item">
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </article>
                            ))}
                        </ScrollReveal>
                    </div>
                </section>

                <section className="section section-border" id="insights" aria-labelledby="insights-heading">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">Insights</span>
                            <h2 className="section-title" id="insights-heading">
                                Perspectives on strategy, AI, and transformation.
                            </h2>
                            <p className="section-intro">
                                Analysis for executives navigating complex technology decisions. <Link href="/insights">View insights archive</Link>.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal className="insight-list" delay="0.1s">
                            <article className="insight-item">
                                <h3>
                                    <Link href="/insights/technology-strategy/ai-strategy-business-architecture">
                                        Why AI strategy must begin with business architecture
                                    </Link>
                                </h3>
                                <span>Technology Strategy</span>
                            </article>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="section section-alt" id="consultation" aria-labelledby="consultation-heading">
                    <div className="shell">
                        <ScrollReveal className="section-header">
                            <span className="section-label">Start a conversation</span>
                            <h2 className="section-title" id="consultation-heading">
                                Request a confidential executive consultation.
                            </h2>
                            <p className="section-intro">
                                For founders, CEOs, board members, investors, and enterprise leaders. Share the business challenge and decision context. I respond within 48 hours.
                            </p>
                        </ScrollReveal>
                        <div className="contact-grid">
                            <ScrollReveal className="contact-aside">
                                <p>Engagements focus on strategic advisory - technology direction, transformation, AI enablement, and executive decision support.</p>
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
                                        <span>Book an appointment</span>
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
                                What executives ask before engaging.
                            </h2>
                        </ScrollReveal>
                        <div className="faq-list">
                            {[
                                ["Who do you advise?", "Founders, CEOs, board members, investors, CIOs, and enterprise leaders facing decisions where technology affects business performance, risk, or long-term value."],
                                ["What is your primary role?", "Technology Strategy Advisor. Supporting experience includes founder leadership, research, university teaching, and enterprise technology practice."],
                                ["What does an engagement produce?", "Clarity for executive decision-making - strategic direction, independent assessment, and actionable recommendations tied to business outcomes."],
                            ].map(([q, a], i) => (
                                <ScrollReveal key={q} className="faq-item" delay={`${i * 0.05}s`}>
                                    <h3>{q}</h3>
                                    <p>{a}</p>
                                </ScrollReveal>
                            ))}
                            <ScrollReveal className="faq-item" delay="0.15s">
                                <h3>How do we begin?</h3>
                                <p>
                                    Submit the <Link href="#consultation">consultation request</Link>, email directly, or{" "}
                                    <a href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                                        book an appointment
                                    </a>{" "}
                                    via Topmate.
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

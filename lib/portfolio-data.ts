export type PortfolioRole = {
    title: string;
    organization: string;
    period: string;
    location?: string;
    highlights: string[];
};

export type PortfolioVenture = {
    name: string;
    role: string;
    period: string;
    url: string;
    tagline: string;
    description: string;
    operatorPoints: string[];
    note?: string;
};

export type PortfolioEvidence = {
    id: string;
    category: "Guest lecture" | "Workshop" | "Academic service";
    title: string;
    organization: string;
    date: string;
    description: string;
    images: { src: string; alt: string }[];
    href?: string;
};

export type PortfolioMetric = {
    value: string;
    label: string;
};

export type StrategicCase = {
    id: string;
    title: string;
    organization: string;
    industry: string;
    /** Honest lifecycle label - do not mark proposed/in-progress work as completed */
    status?: "Completed" | "In progress" | "Proposed";
    situation: string;
    strategicQuestion: string;
    analysis: string;
    optionsConsidered?: string[];
    recommendation: string;
    role: string;
    technologyImplications: string;
    businessConsiderations: string;
    outcome: string;
    metrics?: string[];
};

export type EducationItem = {
    credential: string;
    institution: string;
    detail?: string;
};

export type ResearchTheme = {
    title: string;
    description: string;
};

/** Factual impact metrics only - no invented advisory KPIs */
export const portfolioMetrics: PortfolioMetric[] = [
    { value: "7+", label: "Years in enterprise technology, research, and founder/operator work" },
    { value: "600+", label: "Engineers enabled on a shared monitoring platform" },
    { value: "~50%", label: "Reduction in on-call alerts" },
    { value: "99%", label: "Uptime on critical environments" },
];

export const portfolioPillars = [
    {
        label: "Enterprise technology",
        title: "Platform engineering, architecture & AI systems",
        text: "Hands-on work on platforms, infrastructure, monitoring, MLOps, authentication, and cloud/on-prem systems - how technology operates at scale.",
    },
    {
        label: "Systems thinking",
        title: "Process, people, decisions, information & architecture",
        text: "Map how work happens across the system, identify the constraint, then evaluate technology options against the business objective.",
    },
    {
        label: "Founder & operator",
        title: "Decisions under real constraints",
        text: "Product, technology, architecture, partnership, and resource decisions where outcomes are personally owned.",
    },
    {
        label: "Research",
        title: "Enterprise Decision Intelligence",
        text: "Emerging research on human judgment, AI, software systems, information, and organizational processes in complex decisions.",
    },
];

/**
 * Verified enterprise strategic work only.
 * Do not add fabricated client advisory engagements.
 */
export const strategicCases: StrategicCase[] = [
    {
        id: "ifs-intelligent-observability",
        title: "IFS Intelligent Observability - Enterprise AI Assurance",
        organization: "IFS",
        industry: "Global enterprise software · AI & platform strategy",
        status: "Proposed",
        situation:
            "IFS can already observe whether AI services are running - availability, latency, tokens, and infrastructure health. What is not yet standardized centrally is whether AI models and agents are behaving correctly: grounded answers, correct retrieval, correct agent workflows, tool correctness, and verified business outcomes.",
        strategicQuestion:
            "Should IFS invest in a narrow, enterprise-wide AI Assurance capability that reuses existing observability foundations - or continue with fragmented, team-local monitoring that answers only “is the AI service running?”",
        analysis:
            "Authored a cross-team strategic proposal distinguishing technical health from intelligent health. Mapped reuse of proven foundations (OpenTelemetry, Elastic APM, Prometheus/Cortex/Grafana, Langfuse for POC) against the risk of duplicating platforms. Framed the gap as false success: an agent can return HTTP 200 and still perform the wrong business action.",
        optionsConsidered: [
            "Continue fragmented, product-local AI monitoring without a shared assurance contract",
            "Build a parallel proprietary AI observability stack that duplicates existing platforms",
            "Additive enterprise AI Assurance - standardize a small assurance signal set into the central monitoring platform",
        ],
        recommendation:
            "Sponsor structured discovery plus a controlled 12-week POC: define an IFS AI Observability Contract v0.1, instrument one representative agentic workflow end-to-end, publish low-cardinality assurance metrics into the central Grafana/Cortex path, and defer productionization until detection value, overhead, and safe data handling are proven.",
        role: "Initiative author and proposer - framing the strategic problem, architecture direction, collaboration map, POC design, and decision requests for managers and cross-functional teams.",
        technologyImplications:
            "Provider-neutral, OTel-first architecture; reuse existing collectors and backends; add IFS-specific assurance semantics only where business verification requires them; keep prompts/content capture opt-in and governed.",
        businessConsiderations:
            "Positions IFS to move from system health to intelligent outcome assurance - including verification of enterprise business state - while avoiding unnecessary platform spend and protecting privacy/compliance boundaries.",
        outcome:
            "Produced a decision-ready proposal for cross-team discovery and POC sponsorship. Formal enterprise rollout is explicitly deferred until the POC proves operational value.",
        metrics: ["Proposed · discovery + 12-week POC"],
    },
    {
        id: "ifs-elasticsearch-worst-culprits",
        title: "Observability Cost & Ownership - Elasticsearch Worst Culprits",
        organization: "IFS",
        industry: "Global enterprise software · FinOps & platform operations",
        status: "In progress",
        situation:
            "Verbose and high-volume logging patterns across containers, APIs, and methods were driving Elasticsearch observability cost without clear ownership. Teams lacked evidence packs that connected cost drivers to responsible owners and fix actions.",
        strategicQuestion:
            "How should IFS identify the highest-cost log sources, assign them to owning teams with evidence, and prove cost reduction - without guessing or creating unowned operational noise?",
        analysis:
            "Driving an enterprise epic under the Observability Framework to identify “worst culprits,” map them to owners, and establish a reusable methodology with before/after cost proof. Work spans non-production and customer-size cost views, FinOps calibration, cost dashboards, and ML-assisted detection of verbose patterns.",
        optionsConsidered: [
            "Continue absorbing log cost without owner accountability",
            "One-off manual cleanups without reusable evidence or monitoring",
            "Systematic worst-offender identification with evidence packs, owner handoff, and cost proof",
        ],
        recommendation:
            "Run a staged operating model: identify top verbose containers and patterns, produce owner evidence packs with fix guidance and monitoring links, deploy cost visibility, and document a reusable methodology for remaining containers.",
        role: "Epic owner / lead - driving the initiative, coordinating child workstreams, and connecting observability engineering with FinOps and team accountability.",
        technologyImplications:
            "Cost dashboards in production, FinOps rate calibration, evidence-pack workflows, and ML categorization/alerting for verbose log patterns - integrated with the existing observability platform.",
        businessConsiderations:
            "Turns observability from an unbounded platform cost into a managed investment: owners see evidence, fix instructions, and measurable cost impact.",
        outcome:
            "Initiative in active delivery (Observability Framework epic). Core identification, evidence-pack, FinOps, and dashboard workstreams underway; full cost-reduction proof documented as definition of done, not claimed as completed savings.",
        metrics: ["Epic in progress · FinOps + ownership model"],
    },
    {
        id: "ifs-monitoring-enablement",
        title: "Enterprise Platform Capability Enablement",
        organization: "IFS",
        industry: "Global enterprise software",
        status: "Completed",
        situation:
            "A shared monitoring and logging platform needed consistent understanding across a large global R&D organization - spanning on-prem and cloud deployments, observability architecture, and production diagnostics.",
        strategicQuestion:
            "How should platform knowledge, operating practice, and troubleshooting capability be scaled across hundreds of engineers without fragmenting standards?",
        analysis:
            "Assessed gaps between platform architecture complexity and day-to-day engineering readiness. Identified that uneven understanding of logging, alerting, and diagnostics created operational risk and slowed incident resolution.",
        optionsConsidered: [
            "Ad-hoc peer support and tribal knowledge",
            "Documentation-only enablement",
            "Structured technical enablement with training media and operating guidance",
        ],
        recommendation:
            "Invest in structured platform enablement - translating complex observability architecture into shared organizational capability through training, documentation, and scalable technical practice.",
        role: "Platform engineer responsible for technical enablement design, content, and delivery to global R&D audiences.",
        technologyImplications:
            "Standardized understanding of distributed logging, alerting architecture, Kubernetes observability, and production diagnostics across on-prem and cloud contexts.",
        businessConsiderations:
            "Reduced dependency on a small set of specialists; improved consistency of platform operations; supported faster, more reliable engineering practice at organizational scale.",
        outcome:
            "Enabled 600+ global R&D engineers to operate and troubleshoot a shared enterprise monitoring platform through training videos, documentation, and deep-technical sessions.",
        metrics: ["600+ engineers enabled"],
    },
    {
        id: "ifs-presales-translation",
        title: "Architecture Translation for Customer-Facing Decisions",
        organization: "IFS",
        industry: "Enterprise software / pre-sales",
        status: "Completed",
        situation:
            "Customer-facing teams needed a clear narrative of monitoring architecture that non-technical stakeholders could use in commercial and solution conversations.",
        strategicQuestion:
            "How should complex platform architecture be translated into decision-ready narratives for pre-sales and customer engagement?",
        analysis:
            "Technical depth alone was insufficient for customer-facing conversations. The gap was between architecture accuracy and decision clarity for commercial stakeholders.",
        recommendation:
            "Develop non-technical enablement that preserves architectural integrity while framing capability, trade-offs, and value in language suitable for customer-facing teams.",
        role: "Technical contributor translating monitoring architecture into decision-ready narratives for pre-sales enablement.",
        technologyImplications:
            "Preserved accurate representation of monitoring architecture while reducing cognitive load for non-specialist audiences.",
        businessConsiderations:
            "Improved the organization's ability to communicate platform capability in commercial contexts - a direct bridge from technical complexity to stakeholder understanding.",
        outcome:
            "Delivered pre-sales enablement that made enterprise monitoring architecture usable in customer-facing decision conversations.",
    },
    {
        id: "ifs-sre-automation",
        title: "Operational Risk Reduction through Monitoring Automation",
        organization: "IFS",
        industry: "Global enterprise software",
        status: "Completed",
        situation:
            "SRE on-call load from platform monitoring and alerting was consuming engineering capacity and increasing operational noise.",
        strategicQuestion:
            "Where should automation be applied to reduce operational alert volume without weakening visibility into critical systems?",
        analysis:
            "Worked with SRE teams to identify alert patterns amenable to end-to-end automation while preserving coverage for critical failure modes.",
        recommendation:
            "Automate monitoring and alerting workflows for high-noise, high-volume patterns to restore signal quality and reduce on-call burden.",
        role: "Software engineer collaborating with Site Reliability Engineering on monitoring and alerting automation.",
        technologyImplications:
            "End-to-end monitoring and alerting automation integrated with platform operations.",
        businessConsiderations:
            "Lower operational overhead and improved reliability posture - freeing specialist capacity for higher-value work.",
        outcome:
            "Reduced SRE on-call alerts by approximately 50% through monitoring and alerting automation; maintained 99% uptime for critical on-prem and cloud environments.",
        metrics: ["~50% reduction in on-call alerts", "99% uptime for critical systems"],
    },
];

export const enterpriseHighlights = [
    {
        title: "Enterprise platform complexity",
        organization: "IFS",
        text: "Work on systems used across global R&D - shared platforms, ownership, and friction between local teams and common standards.",
    },
    {
        title: "Reliability & observability",
        organization: "IFS",
        text: "How operational data, alerts, architecture, and human response interact. ~50% reduction in on-call alerts; 99% uptime on critical environments.",
    },
    {
        title: "MLOps / AI systems",
        organization: "IFS",
        text: "How AI services run in production - monitoring, CI/CD, safety validation, and a proposed Intelligent Observability / AI Assurance direction.",
    },
    {
        title: "Platform standardization",
        organization: "IFS",
        text: "Shared CI/CD, deployment, and platform patterns for on-prem and cloud - practices that affect how systems scale.",
    },
    {
        title: "Technical enablement",
        organization: "IFS",
        text: "Developed technical enablement for the Monitoring platform used by 600+ R&D engineers, translating observability concepts into operational guidance. Also supported pre-sales architecture explanation.",
    },
    {
        title: "Observability cost & ownership (in progress)",
        organization: "IFS",
        text: "Driving the Elasticsearch Worst Culprits work - identifying high-cost log sources, assigning owners with evidence, and tying cost visibility into operations.",
    },
];

export const industryExperience: PortfolioRole[] = [
    {
        title: "Senior Software Engineer, Platform Infrastructure",
        organization: "IFS",
        period: "Oct 2023 – Present",
        highlights: [
            "Authored the IFS Intelligent Observability proposal for enterprise AI Assurance - strategy, architecture direction, and 12-week POC design for cross-team sponsorship.",
            "Driving the Observability Framework epic on Elasticsearch Worst Culprits - FinOps cost visibility, owner evidence packs, and reusable cost-reduction methodology.",
            "Enabled 600+ global R&D engineers on the Monitoring & Logging Platform through structured technical enablement.",
            "Member of the IFS.AI research guild, contributing to enterprise AI initiatives.",
            "Standardized platform CI/CD, test automation, and deployment practice for on-prem and cloud deployments.",
            "Contributed to MLOps architecture: monitoring, CI/CD, and safety validation for ML services.",
            "Contributed to platform architecture initiatives including model inheritance, time zone support, EBR, backward compatibility, and near-zero-downtime upgrades.",
            "Delivered technical workshops for R&D new joiners; conducted engineering interviews and mentorship.",
        ],
    },
    {
        title: "Software Engineer, Platform Infrastructure",
        organization: "IFS",
        period: "Mar 2022 – Sep 2023",
        highlights: [
            "Reduced SRE on-call alerts by ~50% through end-to-end monitoring and alerting automation.",
            "Created training materials and documentation for internal teams and external customers.",
            "Managed on-prem and cloud environments with 99% uptime for critical systems.",
        ],
    },
    {
        title: "Associate Software Engineer",
        organization: "Zilingo",
        period: "Jan 2020 – Jan 2021",
        highlights: [
            "Contributed to zFactory - manufacturing operations, software, real-time information, and platform systems for apparel production. Relevant to later advisory work on process + systems + data.",
            "Built platform provisioning automation for client-wise configuration, reducing provisioning/configuration time by ~80%.",
        ],
    },
    {
        title: "Software Engineer Intern",
        organization: "nCinga Innovations",
        period: "Jun 2019 – Dec 2019",
        highlights: [
            "Built Java REST APIs with Elasticsearch and MongoDB microservices enabling real-time access across 100+ devices - early exposure to integrations supporting operational workflows.",
            "Developed hybrid mobile applications used by 1,000+ users collecting 1M+ data points per day.",
        ],
    },
];

export const ventures: PortfolioVenture[] = [
    {
        name: "nZO Innovations",
        role: "Founder & Director",
        period: "Nov 2020 – Present",
        url: "https://www.nzoinnovations.com/",
        tagline: "Technology consulting & solution advisory",
        description:
            "Technology consulting and solution advisory: understand the business need before defining the system. Problem discovery, process understanding, solution advisory, architecture, platform design, integration, AI adoption, automation, and technology direction.",
        operatorPoints: [
            "Understand the business need before defining the system",
            "Solution design, platform architecture, integration, and automation",
            "AI adoption and digital platform decisions under real constraints",
            "Build vs buy vs partner framing where a capability is needed",
        ],
    },
    {
        name: "Entertain Passport",
        role: "Co-Founder & Director",
        period: "May 2026 – Present",
        url: "https://www.entertainpassport.com",
        tagline: "Multi-sided access platform",
        description:
            "A multi-stakeholder access system: customers, venues, organizers, artists, tickets, identity, NFC, gates, payments, data, partner workflows, and platform architecture - physical and digital together. Evidence of systems thinking under founder/operator constraints.",
        operatorPoints: [
            "Multi-stakeholder ecosystem and partner workflows",
            "Identity, access, and gate operations across physical and digital channels",
            "Product prioritization under market and resource constraints",
            "Architecture choices for a multi-sided platform",
        ],
        note: "Entertain Passport is owned and operated by Entertain Passport Pvt Ltd. Platform development and technology solution design are led by nZO Innovations.",
    },
];

export const researchAffiliations: PortfolioRole[] = [
    {
        title: "Researcher",
        organization: "BrAIN Labs Inc.",
        period: "2025 – Present",
        highlights: ["Towards Tiny Transformers (ongoing research)."],
    },
];

export const myResearch: ResearchTheme = {
    title: "Enterprise Decision Intelligence",
    description:
        "Emerging research exploring how human judgment, AI, software systems, information, and organizational processes can work together to improve complex enterprise decisions and operations. Presented as a developing direction - not an established proprietary discipline.",
};

export const myResearchThemes = [
    "Human judgment under uncertainty",
    "Human-AI collaboration in operations",
    "Enterprise systems and information flow",
    "Decision support and technology direction",
    "AI adoption as an operating-model problem",
    "Build vs buy vs integrate vs partner",
    "Cognitive load, trust, and automation bias",
];

export const myResearchProjects = [
    "Towards Neuro-Inspired Enterprise Intelligence: Computational Models of Human Cognition for Next-Generation Decision Support Systems",
    "Towards Tiny Transformers (ongoing - BrAIN Labs Inc.)",
];

/** Clearly labeled supervised student research - not personal publications */
export const supervisedResearch = [
    "Towards Secure and Adaptive Knowledge Evolution for Retrieval-Augmented Generation over Continuously Evolving Enterprise Knowledge",
    "An Intelligent Framework for Client-Specific Business Rule Validation in ERP Master Data Migration",
    "Towards Reliable and Context-Aware Emotion Intelligence for Sinhala Customer Support Conversations",
    "Intelligent Decision Support for Fair and Adaptive Revenue Allocation in Collaborative Travel Booking Platforms",
    "Enhancing MRI Image Segmentation Through Quantization and AI-Powered Algorithms for Clinical Efficiency",
    "CCTV-Based Enhanced Public Security Management System for Sri Lanka",
];

export const education: EducationItem[] = [
    {
        credential: "MSc Software Engineering",
        institution: "University of Westminster (UK)",
        detail: "Completed",
    },
    {
        credential: "BSc (Hons) Information Technology",
        institution: "SLIIT",
        detail: "Specialized undergraduate degree - completed",
    },
];

export const educationProgressionNote =
    "Supports progression from technology toward systems, strategy, and decision intelligence. Further study will be listed here when completed - not before.";

export const portfolioEvidence: PortfolioEvidence[] = [
    {
        id: "kdu-dsa",
        category: "Guest lecture",
        title: "Data Structures & Algorithms",
        organization: "General Sir John Kotelawala Defence University (KDU)",
        date: "Aug 2024",
        description:
            "Guest lecture to 300+ undergraduate students - structured communication of foundational concepts.",
        images: [
            { src: "/assets/images/portfolio/kdu-segp-flyer.jpg", alt: "KDU SEGP 3.0 guest lecture flyer featuring Pasindu Bandarigoda" },
            { src: "/assets/images/portfolio/kdu-session-news.png", alt: "KDU Faculty of Computing news article covering the SEGP 3.0 session" },
        ],
        href: "https://foc.kdu.ac.lk/news/segp-3-0-building-blocks-of-software-data-structures-and-algorithms/",
    },
    {
        id: "iit-dsa",
        category: "Guest lecture",
        title: "Data Structures & Algorithms",
        organization: "Informatics Institute of Technology (IIT)",
        date: "2024",
        description:
            "Guest lecture to 150+ students - connecting enterprise engineering practice with academic foundations.",
        images: [
            { src: "/assets/images/portfolio/iit-guest-lecture.jpg", alt: "Pasindu Bandarigoda delivering a guest lecture at IIT" },
        ],
    },
    {
        id: "coderally",
        category: "Workshop",
        title: "Competitive Programming Workshop",
        organization: "IEEE Computer Society – IIT Student Branch (CODERALLY 6.0)",
        date: "Jul 2023",
        description:
            "Workshop speaker - mentoring structured problem-solving for software engineers.",
        images: [
            { src: "/assets/images/portfolio/coderally-speaker-flyer.jpg", alt: "CODERALLY 6.0 speaker flyer for Pasindu Bandarigoda" },
            { src: "/assets/images/portfolio/iit-coderally-audience.jpg", alt: "CODERALLY 6.0 workshop audience at IIT" },
        ],
    },
    {
        id: "nsbm-hackathon",
        category: "Academic service",
        title: "Inter-University Hackathon Judge",
        organization: "NSBM Green University",
        date: "2025",
        description:
            "Invited judge for inter-university projects - technical judgment under time constraints.",
        images: [
            { src: "/assets/images/portfolio/nsbm-hackathon-judge.jpg", alt: "Pasindu Bandarigoda judging at the NSBM inter-university hackathon" },
            { src: "/assets/images/portfolio/nsbm-hackathon-workshop.jpg", alt: "Collaborative hackathon evaluation session at NSBM" },
        ],
    },
];

export const academicExperience: PortfolioRole[] = [
    {
        title: "Visiting Lecturer, Research Supervisor & Viva Panel Examiner",
        organization: "Informatics Institute of Technology (IIT)",
        period: "2026 – Present",
        highlights: [
            "Undergraduate and master's student supervision, examination, and research guidance.",
            "Guest lectures connecting industry practice with structured analysis.",
        ],
    },
];

export const selectedInsights = [
    {
        title: "Why AI strategy must begin with business architecture",
        href: "/insights/technology-strategy/ai-strategy-business-architecture",
        category: "AI + Human Systems",
    },
];

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
};

export type PortfolioEvidence = {
    id: string;
    category: "Enterprise enablement" | "Guest lecture" | "Workshop" | "Academic service";
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

export const portfolioMetrics: PortfolioMetric[] = [
    { value: "600+", label: "Global enterprise engineers enabled through IFS platform training videos and technical enablement" },
    { value: "10+", label: "Public speaking, guest lectures and workshops" },
    { value: "7+", label: "Years across enterprise engineering, research, and founder leadership" },
    { value: "5+", label: "Active research directions in applied AI and enterprise intelligence" },
];

export const enterpriseLeadership = [
    {
        title: "Global IFS Monitoring Platform – Internal R&D Enablement",
        organization: "IFS",
        description:
            "Created training videos, documentation, and deep-technical enablement for 600+ global IFS R&D engineers on the IFS Monitoring & Logging Platform - covering distributed logging, alerting architecture, Kubernetes observability, and production diagnostics.",
    },
    {
        title: "Pre-Sales Enablement on IFS Monitoring Architecture",
        organization: "IFS",
        description:
            "Non-technical pre-sales enablement on IFS Monitoring architecture - translating complex platform design into decision-ready narratives for customer-facing teams.",
    },
    {
        title: "Global Interviews & Public Speaking",
        organization: "IFS",
        description:
            "Global interview and internal public speaking engagements for IFS R&D and platform teams - representing platform infrastructure expertise at organizational scale.",
    },
];

export const portfolioEvidence: PortfolioEvidence[] = [
    {
        id: "kdu-dsa",
        category: "Guest lecture",
        title: "Data Structures & Algorithms",
        organization: "General Sir John Kotelawala Defence University (KDU)",
        date: "Aug 2024",
        description:
            "Special guest lecture to 300+ undergraduate students on Data Structures & Algorithms - delivered in English through hybrid format. Session covered foundational structures, advanced algorithms, and performance optimization for real-world software problems.",
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
            "Guest lecture to 150+ IIT students on core Data Structures and algorithmic problem-solving - bridging enterprise engineering practice with academic foundations.",
        images: [
            { src: "/assets/images/portfolio/iit-guest-lecture.jpg", alt: "Pasindu Bandarigoda delivering a guest lecture at IIT" },
        ],
    },
    {
        id: "coderally",
        category: "Workshop",
        title: "Understanding Competitive Programming",
        organization: "IEEE Computer Society – IIT Student Branch (CODERALLY 6.0)",
        date: "Jul 2023",
        description:
            "Official speaker for CODERALLY 6.0 Workshop 01 - competitive programming fundamentals for the next generation of software engineers.",
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
            "Invited judge for an inter-university hackathon - evaluating projects from state and private universities. Partner institutions included University of Plymouth and Victoria University Melbourne.",
        images: [
            { src: "/assets/images/portfolio/nsbm-hackathon-judge.jpg", alt: "Pasindu Bandarigoda judging at the NSBM inter-university hackathon" },
            { src: "/assets/images/portfolio/nsbm-hackathon-workshop.jpg", alt: "Collaborative hackathon evaluation session at NSBM" },
        ],
    },
];

export const portfolioPillars = [
    {
        label: "Enterprise scale",
        title: "Platform, MLOps & AI at global software companies",
        text: "Senior engineering leadership on platform infrastructure, monitoring, CI/CD, and IFS.AI initiatives - where reliability, architecture, and production AI meet enterprise reality.",
    },
    {
        label: "Founder & operator",
        title: "Building ventures from strategy to market",
        text: "Founder and director roles across technology consulting and consumer platforms - bringing capital allocation, product judgment, and operational accountability to advisory work.",
    },
    {
        label: "Research depth",
        title: "Computational neuroscience & applied AI",
        text: "Active research on cognition, decision support, emotion intelligence, and enterprise AI systems - grounding strategy in evidence, not trends.",
    },
    {
        label: "Academic rigor",
        title: "Teaching, supervision & examination",
        text: "University lecturing and postgraduate supervision - connecting structured analysis with industry practice for the next generation of technologists.",
    },
];

export const industryExperience: PortfolioRole[] = [
    {
        title: "Senior Software Engineer, Platform Infrastructure",
        organization: "IFS",
        period: "Oct 2023 – Present",
        highlights: [
            "Created training videos and delivered deep-technical enablement to 600+ global IFS R&D engineers on the Monitoring & Logging Platform - distributed logging, alerting architecture, Kubernetes observability, and production diagnostics.",
            "Member of the IFS.AI research guild, contributing experience and ideas to enterprise AI initiatives.",
            "Re-designed and maintained the IFS Monitoring product repository structure, codebase organization, and pipeline architecture for on-prem and cloud deployments - standardizing CI/CD, test automation, deployment workflows, and internal technical practice policies.",
            "Contributed to core MLOps architecture: monitoring, CI/CD, and safety validation for ML services.",
            "Contributed to platform architecture initiatives including model inheritance, time zone support, EBR, backward compatibility, and near-zero-downtime upgrades.",
            "Delivered technical workshops on platform deployment and monitoring for R&D new joiners.",
            "Conducted engineering interviews and fostered team growth through mentorship and collaborative problem-solving.",
        ],
    },
    {
        title: "Software Engineer, Platform Infrastructure",
        organization: "IFS",
        period: "Mar 2022 – Sep 2023",
        highlights: [
            "Built end-to-end automation with Site Reliability Engineering teams, reducing SRE on-call alerts by 50% through monitoring and alerting automation for the IFS platform.",
            "Created training materials, instructional videos, and documentation for internal teams and external customers - improving product adoption and user satisfaction.",
            "Managed on-prem and cloud environments, maintaining 99% uptime for critical systems.",
        ],
    },
    {
        title: "Associate Software Engineer",
        organization: "Zilingo",
        period: "Jan 2020 – Jan 2021",
        highlights: [
            "Worked on zFactory - an integrated digital ecosystem for apparel manufacturing with real-time data capture, insights, and visualization.",
            "Developed platform provisioning automation for client-wise product configuration, reducing development time by 80%.",
        ],
    },
    {
        title: "Software Engineer Intern",
        organization: "nCinga Innovations",
        period: "Jun 2019 – Dec 2019",
        highlights: [
            "Developed a Java REST API with Elasticsearch and MongoDB microservices for real-time data access across 100+ devices.",
            "Built hybrid mobile applications for real-time data capture, used by 1,000+ users collecting 1M+ data points per day.",
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
            "Helping startups, SMEs, and enterprises transform ideas into scalable digital platforms through consulting, architecture, AI, and technology strategy.",
    },
    {
        name: "Entertain Passport",
        role: "Co-Founder & Director",
        period: "May 2026 – Present",
        url: "https://www.entertainpassport.com",
        tagline: "Your passport to live entertainment",
        description:
            "A platform granting access to concerts, drama, nightlife, restaurants, dating, and curated experiences - applying product and technology strategy to consumer markets.",
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

export const researchExploration: PortfolioRole[] = [
    {
        title: "Research Supervisor",
        organization: "Informatics Institute of Technology (IIT)",
        period: "2026 – Present",
        highlights: ["Supervising research at IIT for undergraduate and master's students."],
    },
    {
        title: "Independent Research",
        organization: "Personal research programme",
        period: "Ongoing",
        highlights: [
            "Started research to explore applied AI, enterprise intelligence, human-AI systems, and evidence-based decision support.",
        ],
    },
];

export const researchProjects = [
    "CCTV-Based Enhanced Public Security Management System for Sri Lanka",
    "Enhancing MRI Image Segmentation Through Quantization and AI-Powered Algorithms for Clinical Efficiency",
    "Towards Neuro-Inspired Enterprise Intelligence: Computational Models of Human Cognition for Next-Generation Decision Support Systems",
    "Towards Reliable and Context-Aware Emotion Intelligence for Sinhala Customer Support Conversations",
    "Intelligent Decision Support for Fair and Adaptive Revenue Allocation in Collaborative Travel Booking Platforms",
    "An Intelligent Framework for Client-Specific Business Rule Validation in ERP Master Data Migration",
    "Towards Secure and Adaptive Knowledge Evolution for Retrieval-Augmented Generation over Continuously Evolving Enterprise Knowledge",
];

export const academicExperience: PortfolioRole[] = [
    {
        title: "Visiting Lecturer, Research Supervisor & Viva Panel Examiner",
        organization: "Informatics Institute of Technology (IIT)",
        period: "2026 – Present",
        highlights: [
            "Undergraduate and master's student supervision, examination, and research guidance.",
            "Guest lectures on Data Structures & Algorithms and competitive programming for 150+ students.",
        ],
    },

];

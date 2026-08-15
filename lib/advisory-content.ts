/** Shared content - brand-aligned editorial layer */

export type ExpertiseArea = {
    num: string;
    title: string;
    situation: string;
    questions: string[];
};

export const expertiseDecisions: ExpertiseArea[] = [
    {
        num: "01",
        title: "Complex process & system problems",
        situation:
            "Operations involve multiple teams, systems, manual steps, or unclear ownership - and local fixes are not fixing the whole.",
        questions: [
            "What outcome needs to improve?",
            "Is the constraint process, software, data, architecture, people, or governance?",
            "Are we optimizing components while the overall system stays inefficient?",
        ],
    },
    {
        num: "02",
        title: "Technology-enabled process redesign",
        situation:
            "An existing process needs to be rethought - not simply digitized in its current form.",
        questions: [
            "What should the future operating flow look like?",
            "What should software handle - and what should remain human?",
            "What information must move between teams and systems?",
        ],
    },
    {
        num: "03",
        title: "AI & human work design",
        situation:
            "Leadership wants AI in real operations, but where it should assist, recommend, or automate is unclear.",
        questions: [
            "What outcome should AI improve?",
            "Where must humans retain authority?",
            "How should AI fit existing workflows, data, and systems?",
        ],
    },
    {
        num: "04",
        title: "Architecture & integration complexity",
        situation:
            "Individual systems may work, yet the overall operation remains fragmented or slow.",
        questions: [
            "Why are systems creating friction?",
            "What should be integrated, centralized, or left independent?",
            "What does this architecture make harder later?",
        ],
    },
    {
        num: "05",
        title: "Build · Buy · Integrate · Partner",
        situation:
            "A capability is needed, but the right implementation model is not obvious.",
        questions: [
            "Build, buy, integrate, partner, modernize - or wait?",
            "Are we buying a capability we should own?",
            "Which option preserves future flexibility?",
        ],
    },
    {
        num: "06",
        title: "Modernization & transformation",
        situation:
            "Legacy systems or accumulated complexity may be restricting growth or operational effectiveness.",
        questions: [
            "Is replacement actually necessary?",
            "What can remain, integrate, or modernize around the existing system?",
            "Is technology really the constraint - and what should change first?",
        ],
    },
    {
        num: "07",
        title: "Independent technology decision review",
        situation:
            "A solution is already proposed, and leadership wants an independent view before committing.",
        questions: [
            "Are we solving the right problem?",
            "Which assumption could make this recommendation wrong?",
            "What alternatives were set aside - and what constraints will this create?",
        ],
    },
];

/** Outcome → System → Constraint → Options → Technology role → Trade-offs → Direction */
export const problemSolvingMethod = [
    {
        phase: "01",
        title: "Business outcome",
        text: "What needs to improve - and why does it matter commercially or operationally?",
    },
    {
        phase: "02",
        title: "System understanding",
        text: "How people, processes, decisions, information, software, data, and architecture work together today.",
    },
    {
        phase: "03",
        title: "Constraint",
        text: "What is actually preventing the desired outcome - separate symptoms from causes.",
    },
    {
        phase: "04",
        title: "Options",
        text: "What realistic alternatives exist - including redesign, integration, automation, AI, architecture change, or leaving part of the system alone.",
    },
    {
        phase: "05",
        title: "Technology role",
        text: "What should software, AI, automation, integration, or architecture do - and what should remain human?",
    },
    {
        phase: "06",
        title: "Trade-offs",
        text: "Cost, risk, time, complexity, readiness, scalability, dependencies, and reversibility.",
    },
    {
        phase: "07",
        title: "Direction",
        text: "What should happen first, next, and later - before major implementation begins.",
    },
];

export const tangibleExamples = [
    {
        title: "When a process is slow",
        text: "Do not immediately automate it. Determine whether the constraint is process design, decision-making, information availability, integration, software, human workload, or architecture.",
    },
    {
        title: "When leadership wants AI",
        text: "Do not begin with a model. Determine what outcome should improve, where AI fits the workflow, what data exists, what remains human-led, how AI integrates with the operating system, and how success will be measured.",
    },
    {
        title: "When a legacy platform causes frustration",
        text: "Do not automatically recommend replacement. Evaluate what is failing, what should remain, what can be integrated or modernized, and whether replacement would genuinely improve the outcome.",
    },
];

export const advisoryEngagements = [
    {
        title: "Technology Decision Review",
        text: "Independent view of a proposed solution - problem framing, assumptions, alternatives, and consequences.",
    },
    {
        title: "Complex System Assessment",
        text: "Map people, process, decisions, information, software, data, and architecture to identify the real constraint.",
    },
    {
        title: "AI & Human Work Design",
        text: "Where AI should assist, recommend, or automate - and how it fits workflows and decision rights.",
    },
    {
        title: "Architecture & Integration Direction",
        text: "What to integrate, centralize, modernize, or leave independent given the business objective.",
    },
    {
        title: "Build · Buy · Integrate · Partner Review",
        text: "Evaluate implementation models before committing to a path or long-term dependency.",
    },
];

export const advisoryPrinciples = [
    "Business outcomes first. Technology in service of strategy.",
    "The starting point is the outcome - not a preferred platform, model, or vendor.",
    "A technically correct solution can still be the wrong system decision.",
    "Before automating a process, ask whether the process itself should change.",
    "AI should fit human judgment and operational reality.",
    "Architecture decisions shape what can change later.",
];

export type InsightPillarId =
    | "systems-decisions"
    | "ai-human-systems"
    | "architecture-transformation"
    | "build-buy-integrate"
    | "enterprise-decision-intelligence";

export type InsightArticle = {
    title: string;
    href?: string;
    status: "published" | "planned";
    brief?: boolean;
};

export type InsightPillar = {
    id: InsightPillarId;
    title: string;
    description: string;
    articles: InsightArticle[];
};

export const insightPillars: InsightPillar[] = [
    {
        id: "systems-decisions",
        title: "Complex Systems & Technology Decisions",
        description: "Finding the real constraint before choosing a technology path.",
        articles: [
            { title: "Is technology actually the problem?", status: "planned", brief: true },
            { title: "Why a broken process should not be automated", status: "planned", brief: true },
            {
                title: "When technical debt becomes a business constraint",
                status: "planned",
                brief: true,
            },
        ],
    },
    {
        id: "ai-human-systems",
        title: "AI + Human Systems",
        description: "Where AI belongs in operations - and where human judgment must remain.",
        articles: [
            {
                title: "Why AI strategy must begin with business architecture",
                href: "/insights/technology-strategy/ai-strategy-business-architecture",
                status: "published",
            },
            { title: "What should AI be allowed to decide?", status: "planned", brief: true },
            { title: "What should remain human?", status: "planned", brief: true },
        ],
    },
    {
        id: "architecture-transformation",
        title: "Architecture & Modernization",
        description: "Integration, legacy systems, and architecture as a constraint on change.",
        articles: [
            { title: "When integration is better than replacement", status: "planned", brief: true },
            { title: "When not to replace a legacy system", status: "planned", brief: true },
            { title: "What this architecture makes harder in three years", status: "planned", brief: true },
        ],
    },
    {
        id: "build-buy-integrate",
        title: "Build · Buy · Integrate · Partner",
        description: "Implementation models as capability and systems decisions.",
        articles: [
            { title: "Build vs buy is a capability decision", status: "planned", brief: true },
            { title: "When custom software is justified", status: "planned", brief: true },
            { title: "How to evaluate vendor dependency", status: "planned", brief: true },
        ],
    },
    {
        id: "enterprise-decision-intelligence",
        title: "Enterprise Decision Intelligence",
        description: "Human judgment, AI recommendations, and decisions under uncertainty.",
        articles: [
            { title: "Human judgment in AI-assisted decisions", status: "planned", brief: true },
            { title: "Technology decisions under uncertainty", status: "planned", brief: true },
            { title: "Which assumption could make this recommendation wrong?", status: "planned", brief: true },
        ],
    },
];

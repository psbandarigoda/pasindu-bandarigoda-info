import type { PortfolioRole } from "@/lib/portfolio-data";

export function PortfolioRoleTimeline({ roles }: { roles: PortfolioRole[] }) {
    return (
        <div className="portfolio-timeline">
            {roles.map((role) => (
                <article key={`${role.organization}-${role.period}-${role.title}`} className="portfolio-entry">
                    <div className="portfolio-entry-meta">
                        <span>{role.period}</span>
                        <strong>{role.organization}</strong>
                    </div>
                    <div className="portfolio-entry-body">
                        <h3>{role.title}</h3>
                        <ul>
                            {role.highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </div>
    );
}

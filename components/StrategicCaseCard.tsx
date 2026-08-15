import type { StrategicCase } from "@/lib/portfolio-data";

export function StrategicCaseCard({ item }: { item: StrategicCase }) {
    return (
        <article className="strategic-case">
            <header className="strategic-case-header">
                <p className="strategic-case-meta">
                    <span>{item.organization}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.industry}</span>
                    {item.status && (
                        <>
                            <span aria-hidden="true">·</span>
                            <span className={`strategic-case-status status-${item.status.toLowerCase().replace(/\s+/g, "-")}`}>
                                {item.status}
                            </span>
                        </>
                    )}
                </p>
                <h3>{item.title}</h3>
            </header>

            <dl className="strategic-case-body">
                <div>
                    <dt>Context</dt>
                    <dd>{item.situation}</dd>
                </div>
                <div>
                    <dt>Problem</dt>
                    <dd>{item.strategicQuestion}</dd>
                </div>
                <div>
                    <dt>System &amp; constraint</dt>
                    <dd>{item.analysis}</dd>
                </div>
                {item.optionsConsidered && item.optionsConsidered.length > 0 && (
                    <div>
                        <dt>Options</dt>
                        <dd>
                            <ul>
                                {item.optionsConsidered.map((option) => (
                                    <li key={option}>{option}</li>
                                ))}
                            </ul>
                        </dd>
                    </div>
                )}
                <div>
                    <dt>Direction</dt>
                    <dd>{item.recommendation}</dd>
                </div>
                <div>
                    <dt>My contribution</dt>
                    <dd>{item.role}</dd>
                </div>
                <div>
                    <dt>System implications</dt>
                    <dd>{item.technologyImplications}</dd>
                </div>
                <div>
                    <dt>Trade-offs &amp; consequences</dt>
                    <dd>{item.businessConsiderations}</dd>
                </div>
                <div>
                    <dt>Outcome</dt>
                    <dd>{item.outcome}</dd>
                </div>
            </dl>

            {item.metrics && item.metrics.length > 0 && (
                <ul className="strategic-case-metrics">
                    {item.metrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                    ))}
                </ul>
            )}
        </article>
    );
}

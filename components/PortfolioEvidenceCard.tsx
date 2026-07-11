import type { PortfolioEvidence } from "@/lib/portfolio-data";

export function PortfolioEvidenceCard({ item }: { item: PortfolioEvidence }) {
    const mediaClass = item.images.length > 1 ? "is-double" : "is-single";

    return (
        <article className="portfolio-evidence">
            <div className={`portfolio-evidence-media ${mediaClass}`}>
                {item.images.map((image) => (
                    <figure key={image.src}>
                        <img src={image.src} alt={image.alt} loading="lazy" />
                    </figure>
                ))}
            </div>
            <div className="portfolio-evidence-body">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p className="portfolio-evidence-meta">
                    {item.organization} · {item.date}
                </p>
                <p>{item.description}</p>
                {item.href && (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                        View institutional reference →
                    </a>
                )}
            </div>
        </article>
    );
}

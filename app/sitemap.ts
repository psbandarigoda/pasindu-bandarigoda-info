import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: "2026-11-16",
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/portfolio`,
            lastModified: "2026-11-16",
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/insights`,
            lastModified: "2026-11-16",
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/insights/technology-strategy/is-technology-actually-the-problem`,
            lastModified: "2026-11-16",
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/insights/technology-strategy/ai-strategy-business-architecture`,
            lastModified: "2026-06-25",
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}

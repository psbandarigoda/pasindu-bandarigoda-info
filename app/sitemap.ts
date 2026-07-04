import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: "2026-06-25",
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/insights`,
            lastModified: "2026-06-25",
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/insights/technology-strategy/ai-strategy-business-architecture`,
            lastModified: "2026-06-25",
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}

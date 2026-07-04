"use client";

import { useEffect } from "react";

export function ArticleToc() {
    useEffect(() => {
        const article = document.querySelector(".article-body");
        const toc = document.getElementById("article-toc");
        const readingTime = document.getElementById("reading-time");

        if (!article || !toc) {
            return;
        }

        const headings = article.querySelectorAll("h2, h3");
        const words = article.textContent?.trim().split(/\s+/).length ?? 0;
        const minutes = Math.max(1, Math.round(words / 220));

        if (readingTime) {
            readingTime.textContent = `${minutes} min read`;
        }

        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `section-${index + 1}`;
            }

            const link = document.createElement("a");
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent ?? "";
            link.className = heading.tagName === "H3" ? "toc-h3" : "toc-h2";
            toc.appendChild(link);
        });
    }, []);

    return null;
}

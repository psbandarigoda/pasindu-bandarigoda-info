"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type ScrollRevealProps = {
    children: ReactNode;
    delay?: string;
    className?: string;
    id?: string;
    style?: CSSProperties;
};

export function ScrollReveal({ children, delay = "0s", className = "", id, style }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) {
            return;
        }

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion || !("IntersectionObserver" in window)) {
            node.classList.add("is-visible");
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            id={id}
            className={className}
            data-reveal
            style={{ "--delay": delay, ...style } as CSSProperties}
        >
            {children}
        </div>
    );
}

export function BackToTop() {
    useEffect(() => {
        const button = document.getElementById("back-to-top");
        if (!button) {
            return;
        }

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const onScroll = () => {
            button.classList.toggle("is-visible", window.scrollY > 480);
        };

        const onClick = () => {
            window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        button.addEventListener("click", onClick);

        return () => {
            window.removeEventListener("scroll", onScroll);
            button.removeEventListener("click", onClick);
        };
    }, []);

    return (
        <button className="back-to-top" id="back-to-top" type="button" aria-label="Back to top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
        </button>
    );
}

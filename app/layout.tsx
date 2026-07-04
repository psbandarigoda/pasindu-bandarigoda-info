import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { BackToTop } from "@/components/SiteChrome";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PROFILE_IMAGE, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
    display: "swap",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-cormorant",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Pasindu Bandarigoda | Technology Strategy Advisor",
        template: "%s | Pasindu Bandarigoda",
    },
    description:
        "Pasindu Bandarigoda helps leadership teams solve complex business challenges through technology, AI, and strategic systems thinking.",
    authors: [{ name: "Pasindu Bandarigoda" }],
    openGraph: {
        siteName: "Pasindu Bandarigoda",
        type: "website",
        locale: "en_GB",
        images: [{ url: PROFILE_IMAGE }],
    },
    twitter: {
        card: "summary_large_image",
        images: [PROFILE_IMAGE],
    },
    icons: {
        icon: [{ url: PROFILE_IMAGE, type: "image/png" }],
        apple: [{ url: PROFILE_IMAGE, type: "image/png" }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "Pasindu Bandarigoda",
            publisher: { "@id": `${SITE_URL}/#person` },
        },
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Pasindu Bandarigoda",
            jobTitle: "Technology Strategy Advisor",
            description:
                "Technology Strategy Advisor helping organizations solve complex business challenges through technology, AI, and strategic systems thinking.",
            url: SITE_URL,
            email: "bgpsandaruwan@gmail.com",
            telephone: "+94773638063",
            sameAs: [
                "https://www.linkedin.com/in/pasindu-bandarigoda/",
                "https://topmate.io/pasindu_bandarigoda",
            ],
            worksFor: { "@id": `${SITE_URL}/#organization` },
            alumniOf: [
                { "@type": "CollegeOrUniversity", name: "University of Westminster" },
                { "@type": "CollegeOrUniversity", name: "SLIIT" },
            ],
        },
        {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "nZO Innovations",
            founder: { "@id": `${SITE_URL}/#person` },
        },
        {
            "@type": "ProfessionalService",
            name: "Technology Strategy Advisory",
            provider: { "@id": `${SITE_URL}/#person` },
            serviceType: [
                "Technology Strategy",
                "AI Enablement",
                "Digital Transformation Advisory",
                "Enterprise Transformation",
            ],
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){var s=localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",s||(d?"dark":"light"));})();`,
                    }}
                />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </head>
            <body className={`${inter.variable} ${cormorant.variable}`}>
                <ThemeProvider>
                    {children}
                    <BackToTop />
                </ThemeProvider>
            </body>
        </html>
    );
}

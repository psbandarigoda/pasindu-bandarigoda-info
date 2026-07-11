import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [],
    },
    webpack: (config, { dev }) => {
        if (dev) {
            config.cache = false;
            config.watchOptions = {
                ...config.watchOptions,
                aggregateTimeout: 300,
            };
        }
        return config;
    },
    async redirects() {
        return [
            {
                source: "/insights/technology-strategy/ai-strategy-business-architecture.html",
                destination: "/insights/technology-strategy/ai-strategy-business-architecture",
                permanent: true,
            },
            {
                source: "/root-pasblk-admin.html",
                destination: "/admin",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

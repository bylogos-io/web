import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './src/i18n/request.ts'
);

const nextConfig: NextConfig = {
    trailingSlash: true, // opcional
    images: {
        remotePatterns: [],
        dangerouslyAllowSVG: false,
    },
    async rewrites() {
        return [
            {
                source: "/ingest/static/:path*",
                destination: "https://us-assets.i.posthog.com/static/:path*",
            },
            {
                source: "/ingest/:path*",
                destination: "https://us.i.posthog.com/:path*",
            },
            // Soporte para rutas localizadas (evita 404 con next-intl)
            {
                source: "/:locale(es|en|pt)/ingest/static/:path*",
                destination: "https://us-assets.i.posthog.com/static/:path*",
            },
            {
                source: "/:locale(es|en|pt)/ingest/:path*",
                destination: "https://us.i.posthog.com/:path*",
            },
        ];
    },
    skipTrailingSlashRedirect: true,
};

export default withNextIntl(nextConfig);

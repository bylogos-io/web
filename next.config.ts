import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import withBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin(
    './src/i18n/request.ts'
);

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
    trailingSlash: true, // opcional
    images: {
        remotePatterns: [],
        dangerouslyAllowSVG: false,
    },
    skipTrailingSlashRedirect: true,
    experimental: {
        optimizePackageImports: [
            "@mui/material",
            "@mui/icons-material",
            "@react-three/drei",
            "@react-three/fiber",
            "animejs",
        ],
    },
};

export default bundleAnalyzer(withNextIntl(nextConfig));

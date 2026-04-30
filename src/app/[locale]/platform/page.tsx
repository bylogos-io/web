import type { Metadata } from "next";
import { Box } from "@mui/material";
import { PlatformHero } from "@/sections/platform/PlatformHero";
import { PlatformModules } from "@/sections/platform/PlatformModules";
import { PlatformWhy } from "@/sections/platform/PlatformWhy";
import { PlatformArchitecture } from "@/sections/platform/PlatformArchitecture";
import { PlatformProcess } from "@/sections/platform/PlatformProcess";
import { PlatformCta } from "@/sections/platform/PlatformCta";
import { getSiteContent, resolveAppLocale } from "@/i18n/siteContent";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);

    return {
        title: content.seo.platform.title,
        description: content.seo.platform.description,
        openGraph: {
            title: `${content.seo.platform.title} | LogOS`,
            description: content.seo.platform.description,
            images: [
                {
                    url: "/opengraph-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${content.seo.platform.title} | LogOS`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${content.seo.platform.title} | LogOS`,
            description: content.seo.platform.description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export default function PlatformPage() {
    return (
        <Box component="main">
            <PlatformHero />
            <PlatformModules />
            <PlatformWhy />
            <PlatformArchitecture />
            <PlatformProcess />
            <PlatformCta />
        </Box>
    );
}

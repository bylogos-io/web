import type { Metadata } from "next";
import { Box } from "@mui/material";
import { IndustryHero } from "@/sections/industries/IndustryHero";
import { IndustryFeatured } from "@/sections/industries/IndustryFeatured";
import { IndustryOthers } from "@/sections/industries/IndustryOthers";
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
        title: content.seo.industries.title,
        description: content.seo.industries.description,
        openGraph: {
            title: content.seo.industries.title,
            description: content.seo.industries.description,
            images: [
                {
                    url: "/opengraph-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${content.seo.industries.title} | LogOS`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: content.seo.industries.title,
            description: content.seo.industries.description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export default function Industrias() {
    return (
        <Box component="main">
            <IndustryHero />
            <IndustryFeatured />
            <IndustryOthers />
        </Box>
    );
}

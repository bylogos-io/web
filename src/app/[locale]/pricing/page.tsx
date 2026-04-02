import type { Metadata } from "next";
import { Box } from "@mui/material";
import { PricingHero } from "@/sections/pricing/PricingHero";
import { PricingModules } from "@/sections/pricing/PricingModules";
import { PricingTitle } from "@/sections/pricing/PricingTitle";
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
        title: content.seo.pricing.title,
        description: content.seo.pricing.description,
        openGraph: {
            title: `${content.seo.pricing.title} | LogOS`,
            description: content.seo.pricing.description,
            images: [
                {
                    url: "/opengraph-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${content.seo.pricing.title} | LogOS`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${content.seo.pricing.title} | LogOS`,
            description: content.seo.pricing.description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export default function Precios() {
    return (
        <Box component="main">
            <PricingTitle />
            <PricingHero />
            <PricingModules />
        </Box>
    );
}

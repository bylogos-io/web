import type { Metadata } from "next";
import { Box } from "@mui/material";
import { PricingHero } from "@/sections/pricing/PricingHero";
import { PricingModules } from "@/sections/pricing/PricingModules";
import { PricingTitle } from "@/sections/pricing/PricingTitle";
import { getSiteContent, resolveAppLocale } from "@/i18n/siteContent";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbList } from "@/lib/jsonLd";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);

    return buildPageMetadata({
        locale: resolvedLocale,
        path: "/pricing",
        title: content.seo.pricing.title,
        description: content.seo.pricing.description,
    });
}

export default async function Precios({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);

    const crumbs = breadcrumbList(resolvedLocale, [
        { name: content.seo.home.title, path: "" },
        { name: content.seo.pricing.title, path: "/pricing" },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
            />
            <Box component="main">
                <PricingTitle />
                <PricingHero />
                <PricingModules />
            </Box>
        </>
    );
}

import type { Metadata } from "next";
import { Box } from "@mui/material";
import { IndustryHero } from "@/sections/industries/IndustryHero";
import { IndustryFeatured } from "@/sections/industries/IndustryFeatured";
import { IndustryOthers } from "@/sections/industries/IndustryOthers";
import { getSiteContent, resolveAppLocale } from "@/i18n/siteContent";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
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
        path: "/industries",
        title: content.seo.industries.title,
        description: content.seo.industries.description,
    });
}

export default async function Industrias({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);

    const crumbs = breadcrumbList(resolvedLocale, [
        { name: content.seo.home.title, path: "" },
        { name: content.seo.industries.title, path: "/industries" },
    ]);

    const itemList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: content.seo.industries.title,
        itemListElement: [
            "Oil & Gas",
            "Energy & Power",
            "Data Centers",
            "Food & Beverage",
            "Water",
            "Climation",
        ].map((name, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name,
            url: `${SITE_URL}/${resolvedLocale}/industries#${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([crumbs, itemList]) }}
            />
            <Box component="main">
                <IndustryHero />
                <IndustryFeatured />
                <IndustryOthers />
            </Box>
        </>
    );
}

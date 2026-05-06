import type { Metadata } from "next";
import { Box } from "@mui/material";
import { PartnersHero } from "@/sections/partners/PartnersHero";
import { PartnersBenefits } from "@/sections/partners/PartnersBenefits";
import { PartnersTiers } from "@/sections/partners/PartnersTiers";
import { PartnersCta } from "@/sections/partners/PartnersCta";
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
        path: "/partners",
        title: content.seo.partners.title,
        description: content.seo.partners.description,
    });
}

export default async function PartnersPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);

    const crumbs = breadcrumbList(resolvedLocale, [
        { name: content.seo.home.title, path: "" },
        { name: content.seo.partners.title, path: "/partners" },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
            />
            <Box component="main">
                <PartnersHero />
                <PartnersBenefits />
                <PartnersTiers />
                <PartnersCta />
            </Box>
        </>
    );
}

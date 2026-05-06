import type { Metadata } from "next";
import { Box } from "@mui/material";
import { PlatformHero } from "@/sections/platform/PlatformHero";
import { PlatformModules } from "@/sections/platform/PlatformModules";
import { PlatformWhy } from "@/sections/platform/PlatformWhy";
import { PlatformArchitecture } from "@/sections/platform/PlatformArchitecture";
import { PlatformProcess } from "@/sections/platform/PlatformProcess";
import { PlatformCta } from "@/sections/platform/PlatformCta";
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
        path: "/platform",
        title: content.seo.platform.title,
        description: content.seo.platform.description,
    });
}

export default async function PlatformPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);

    const crumbs = breadcrumbList(resolvedLocale, [
        { name: content.seo.home.title, path: "" },
        { name: content.seo.platform.title, path: "/platform" },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
            />
            <Box component="main">
                <PlatformHero />
                <PlatformModules />
                <PlatformWhy />
                <PlatformArchitecture />
                <PlatformProcess />
                <PlatformCta />
            </Box>
        </>
    );
}

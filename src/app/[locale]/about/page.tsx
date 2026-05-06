import type { Metadata } from "next";
import { Box } from "@mui/material";
import { AboutHero } from "@/sections/about/AboutHero";
import { AboutWhy } from "@/sections/about/AboutWhy";
import { AboutPrinciples } from "@/sections/about/AboutPrinciples";
import { AboutFounders } from "@/sections/about/AboutFounders";
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
        path: "/about",
        title: content.seo.about.title,
        description: content.seo.about.description,
    });
}

export default async function Nosotros({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);

    const crumbs = breadcrumbList(resolvedLocale, [
        { name: content.seo.home.title, path: "" },
        { name: content.seo.about.title, path: "/about" },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
            />
            <Box
                component="main"
                sx={{
                    pb: 10,
                    flex: 1,
                    backgroundColor: "background.default",
                }}
            >
                <AboutHero />
                <AboutWhy />
                <AboutPrinciples />
                <AboutFounders />
            </Box>
        </>
    );
}

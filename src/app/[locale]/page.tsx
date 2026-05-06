import type { Metadata } from "next";
import { LandingPage } from "@/components/layout/LandingPage";
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

    return {
        ...buildPageMetadata({
            locale: resolvedLocale,
            path: "",
            title: content.seo.home.title,
            description: content.seo.home.description,
            keywords: content.seo.layout.keywords,
        }),
        title: { absolute: content.seo.home.title },
    };
}

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);

    const crumbs = breadcrumbList(resolvedLocale, [
        { name: content.seo.home.title, path: "" },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
            />
            <LandingPage />
        </>
    );
}

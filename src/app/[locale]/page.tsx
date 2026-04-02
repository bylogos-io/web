import type { Metadata } from "next";
import { LandingPage } from "@/components/layout/LandingPage";
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
        title: {
            absolute: content.seo.home.title,
        },
        description: content.seo.home.description,
        openGraph: {
            title: content.seo.home.title,
            description: content.seo.home.description,
            url: `https://bylogos.io/${resolvedLocale}`,
            siteName: "LogOS",
            images: [
                {
                    url: "/opengraph-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: content.seo.layout.openGraphImageAlt,
                },
            ],
            locale: content.seo.ogLocale,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: content.seo.home.title,
            description: content.seo.home.description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export default function Home() {
    return <LandingPage />;
}

import type { Metadata } from "next";
import { Box } from "@mui/material";
import { AboutHero } from "@/sections/about/AboutHero";
import { AboutWhy } from "@/sections/about/AboutWhy";
import { AboutPrinciples } from "@/sections/about/AboutPrinciples";
import { AboutFounders } from "@/sections/about/AboutFounders";
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
        title: content.seo.about.title,
        description: content.seo.about.description,
        openGraph: {
            title: `${content.seo.about.title} | LogOS`,
            description: content.seo.about.description,
            images: [
                {
                    url: "/opengraph-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${content.seo.about.title} | LogOS`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${content.seo.about.title} | LogOS`,
            description: content.seo.about.description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export default function Nosotros() {
    return (
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
    );
}

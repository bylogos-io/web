import type { Metadata } from "next";
import { Box } from "@mui/material";
import { PartnersHero } from "@/sections/partners/PartnersHero";
import { PartnersBenefits } from "@/sections/partners/PartnersBenefits";
import { PartnersTiers } from "@/sections/partners/PartnersTiers";
import { PartnersCta } from "@/sections/partners/PartnersCta";
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
        title: content.seo.partners.title,
        description: content.seo.partners.description,
        openGraph: {
            title: `${content.seo.partners.title} | LogOS`,
            description: content.seo.partners.description,
            images: [
                {
                    url: "/opengraph-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${content.seo.partners.title} | LogOS`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${content.seo.partners.title} | LogOS`,
            description: content.seo.partners.description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export default function PartnersPage() {
    return (
        <Box component="main">
            <PartnersHero />
            <PartnersBenefits />
            <PartnersTiers />
            <PartnersCta />
        </Box>
    );
}

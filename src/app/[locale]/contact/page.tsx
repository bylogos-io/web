import type { Metadata } from "next";
import { Box } from "@mui/material";
import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactForm } from "@/sections/contact/ContactForm";
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
        title: content.seo.contact.title,
        description: content.seo.contact.description,
        openGraph: {
            title: `${content.seo.contact.title} | LogOS`,
            description: content.seo.contact.description,
            images: [
                {
                    url: "/opengraph-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${content.seo.contact.title} | LogOS`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${content.seo.contact.title} | LogOS`,
            description: content.seo.contact.description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export default function ContactPage() {
    return (
        <Box component="main">
            <ContactHero />
            <ContactForm />
        </Box>
    );
}

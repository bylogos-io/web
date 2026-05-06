import type { Metadata } from "next";
import { Box } from "@mui/material";
import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactForm } from "@/sections/contact/ContactForm";
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
        path: "/contact",
        title: content.seo.contact.title,
        description: content.seo.contact.description,
    });
}

export default async function ContactPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);

    const crumbs = breadcrumbList(resolvedLocale, [
        { name: content.seo.home.title, path: "" },
        { name: content.seo.contact.title, path: "/contact" },
    ]);

    const contactPoint = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: `${SITE_URL}/${resolvedLocale}/contact`,
        mainEntity: {
            "@type": "Organization",
            name: "LogOS",
            email: "hi@bylogos.io",
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "hi@bylogos.io",
                areaServed: ["CL", "LATAM", "Worldwide"],
                availableLanguage: ["es", "en", "pt"],
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([crumbs, contactPoint]) }}
            />
            <Box component="main">
                <ContactHero />
                <ContactForm />
            </Box>
        </>
    );
}

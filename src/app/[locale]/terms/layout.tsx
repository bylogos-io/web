import type { Metadata } from "next";
import { getSiteContent, resolveAppLocale } from "@/i18n/siteContent";

const descriptions = {
    es: "Términos y condiciones de uso de la plataforma LogOS y sus servicios asociados.",
    en: "Terms and conditions for using the LogOS platform and its related services.",
    pt: "Termos e condições de uso da plataforma LogOS e seus serviços associados.",
} as const;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const content = getSiteContent(resolvedLocale);
    const description = descriptions[resolvedLocale];

    return {
        title: content.terms.title,
        description,
        openGraph: {
            title: `${content.terms.title} | LogOS`,
            description,
            images: ["/opengraph-image.jpg"],
        },
        twitter: {
            card: "summary_large_image",
            title: `${content.terms.title} | LogOS`,
            description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

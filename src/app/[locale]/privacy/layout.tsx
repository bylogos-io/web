import type { Metadata } from "next";
import { getSiteContent, resolveAppLocale } from "@/i18n/siteContent";

const descriptions = {
    es: "Consulta cómo protegemos tus datos y los de tu infraestructura en LogOS.",
    en: "Learn how we protect your data and your infrastructure information in LogOS.",
    pt: "Entenda como protegemos seus dados e as informações da sua infraestrutura na LogOS.",
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
        title: content.privacy.title,
        description,
        openGraph: {
            title: `${content.privacy.title} | LogOS`,
            description,
            images: ["/opengraph-image.jpg"],
        },
        twitter: {
            card: "summary_large_image",
            title: `${content.privacy.title} | LogOS`,
            description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

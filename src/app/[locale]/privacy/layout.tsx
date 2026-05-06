import type { Metadata } from "next";
import { getSiteContent, resolveAppLocale } from "@/i18n/siteContent";
import { buildPageMetadata } from "@/lib/seo";

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

    return buildPageMetadata({
        locale: resolvedLocale,
        path: "/privacy",
        title: content.privacy.title,
        description: descriptions[resolvedLocale],
    });
}

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

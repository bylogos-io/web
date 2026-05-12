import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { type AppLocale, getSiteContent, resolveAppLocale } from "@/i18n/siteContent";

export const SITE_URL = "https://bylogos.io";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image.jpg`;
export const DEFAULT_TWITTER_IMAGE = `${SITE_URL}/twitter-image.jpg`;

type PageImage = {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
};

export type BuildMetadataInput = {
    locale: string;
    path: string;
    title: string;
    description: string;
    image?: PageImage;
    keywords?: string[];
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    noindex?: boolean;
};

const cleanPath = (path: string) => {
    if (!path || path === "/") return "";
    return path.startsWith("/") ? path : `/${path}`;
};

export function buildLanguageAlternates(path: string) {
    const cleaned = cleanPath(path);
    const map = Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}${cleaned}`])
    ) as Record<string, string>;
    map["x-default"] = `${SITE_URL}/${routing.defaultLocale}${cleaned}`;
    return map;
}

export function buildPageMetadata(input: BuildMetadataInput): Metadata {
    const resolvedLocale: AppLocale = resolveAppLocale(input.locale);
    const content = getSiteContent(resolvedLocale);
    const cleaned = cleanPath(input.path);
    const url = `${SITE_URL}/${resolvedLocale}${cleaned}`;
    const ogLocale = content.seo.ogLocale;
    const titleWithBrand = `${input.title} | LogOS`;

    const ogImageUrl = input.image?.url
        ? input.image.url.startsWith("http")
            ? input.image.url
            : `${SITE_URL}${input.image.url.startsWith("/") ? "" : "/"}${input.image.url}`
        : DEFAULT_OG_IMAGE;

    const ogImageAlt = input.image?.alt ?? `${input.title} | LogOS`;

    return {
        metadataBase: new URL(SITE_URL),
        title: input.title,
        description: input.description,
        keywords: input.keywords,
        alternates: {
            canonical: url,
            languages: buildLanguageAlternates(cleaned),
        },
        robots: input.noindex
            ? { index: false, follow: false }
            : {
                  index: true,
                  follow: true,
                  googleBot: {
                      index: true,
                      follow: true,
                      "max-video-preview": -1,
                      "max-image-preview": "large",
                      "max-snippet": -1,
                  },
              },
        openGraph: {
            type: input.type ?? "website",
            locale: ogLocale,
            url,
            siteName: "LogOS",
            title: titleWithBrand,
            description: input.description,
            publishedTime: input.publishedTime,
            modifiedTime: input.modifiedTime,
            authors: input.authors,
            images: [
                {
                    url: ogImageUrl,
                    secureUrl: ogImageUrl,
                    width: input.image?.width ?? 1200,
                    height: input.image?.height ?? 630,
                    type: "image/jpeg",
                    alt: ogImageAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@bylogos",
            creator: "@javiervargas",
            title: titleWithBrand,
            description: input.description,
            images: [ogImageUrl],
        },
    };
}

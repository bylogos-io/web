import { SITE_URL } from "@/lib/seo";

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbList(locale: string, items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: item.name,
            item: item.path === ""
                ? `${SITE_URL}/${locale}`
                : `${SITE_URL}/${locale}${item.path.startsWith("/") ? "" : "/"}${item.path}`,
        })),
    };
}

export type ArticleJsonLdInput = {
    locale: string;
    title: string;
    description: string;
    slug: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
};

export function articleJsonLd(input: ArticleJsonLdInput) {
    const url = `${SITE_URL}/${input.locale}/news/${input.slug}`;
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: input.title,
        description: input.description,
        image: input.image.startsWith("http") ? input.image : `${SITE_URL}${input.image}`,
        datePublished: input.datePublished,
        dateModified: input.dateModified ?? input.datePublished,
        author: {
            "@type": input.authorName ? "Person" : "Organization",
            name: input.authorName ?? "LogOS",
        },
        publisher: {
            "@type": "Organization",
            name: "LogOS",
            logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
        },
        url,
        inLanguage: input.locale,
    };
}

export function jsonLdScript(data: unknown) {
    return JSON.stringify(data);
}

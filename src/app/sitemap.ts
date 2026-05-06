import type { MetadataRoute } from "next";
import { news } from "@/velite";
import { routing } from "@/i18n/routing";

const SITE = "https://bylogos.io";
const TODAY = new Date().toISOString().split("T")[0];

type Entry = {
    path: string;
    lastModified: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
};

const ROUTES: Entry[] = [
    { path: "", lastModified: TODAY, changeFrequency: "weekly", priority: 1.0 },
    { path: "/platform", lastModified: TODAY, changeFrequency: "monthly", priority: 0.9 },
    { path: "/industries", lastModified: TODAY, changeFrequency: "monthly", priority: 0.9 },
    { path: "/news", lastModified: TODAY, changeFrequency: "weekly", priority: 0.9 },
    { path: "/partners", lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
    { path: "/pricing", lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", lastModified: "2025-10-15", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", lastModified: "2025-10-15", changeFrequency: "yearly", priority: 0.3 },
];

const DOC_ROUTES: Entry[] = [
    { path: "/docs/introduccion", lastModified: TODAY, changeFrequency: "weekly", priority: 0.8 },
    { path: "/docs/funcionalidades", lastModified: TODAY, changeFrequency: "weekly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const localized: MetadataRoute.Sitemap = ROUTES.flatMap((r) =>
        routing.locales.map((locale) => ({
            url: `${SITE}/${locale}${r.path}`,
            lastModified: r.lastModified,
            changeFrequency: r.changeFrequency,
            priority: r.priority,
            alternates: {
                languages: Object.fromEntries(
                    routing.locales.map((l) => [l, `${SITE}/${l}${r.path}`])
                ),
            },
        }))
    );

    const newsEntries: MetadataRoute.Sitemap = news.flatMap((post) => {
        if ((post as { redirectUrl?: string }).redirectUrl) return [];
        const slug = post.slug.replace(/^news\//, "");
        return routing.locales.map((locale) => ({
            url: `${SITE}/${locale}/news/${slug}`,
            lastModified: post.date,
            changeFrequency: "monthly" as const,
            priority: 0.7,
            alternates: {
                languages: Object.fromEntries(
                    routing.locales.map((l) => [l, `${SITE}/${l}/news/${slug}`])
                ),
            },
        }));
    });

    const docs: MetadataRoute.Sitemap = DOC_ROUTES.map((r) => ({
        url: `${SITE}${r.path}`,
        lastModified: r.lastModified,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
    }));

    return [...localized, ...newsEntries, ...docs];
}

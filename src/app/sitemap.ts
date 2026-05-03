import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE = "https://bylogos.io";

type Entry = {
    path: string;
    lastModified: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
};

const ROUTES: Entry[] = [
    { path: "", lastModified: "2026-04-29", changeFrequency: "monthly", priority: 1.0 },
    { path: "/platform", lastModified: "2026-04-29", changeFrequency: "monthly", priority: 0.9 },
    { path: "/industries", lastModified: "2026-04-29", changeFrequency: "monthly", priority: 0.9 },
    { path: "/news", lastModified: "2026-04-29", changeFrequency: "weekly", priority: 0.9 },
    { path: "/partners", lastModified: "2026-04-29", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", lastModified: "2026-04-29", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", lastModified: "2026-04-29", changeFrequency: "monthly", priority: 0.8 },
    { path: "/pricing", lastModified: "2026-03-09", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", lastModified: "2025-10-15", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", lastModified: "2025-10-15", changeFrequency: "yearly", priority: 0.3 },
];

const DOC_ROUTES: Entry[] = [
    { path: "/docs/introduccion", lastModified: "2026-03-09", changeFrequency: "weekly", priority: 0.8 },
    { path: "/docs/funcionalidades", lastModified: "2026-03-09", changeFrequency: "weekly", priority: 0.8 },
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

    const docs: MetadataRoute.Sitemap = DOC_ROUTES.map((r) => ({
        url: `${SITE}${r.path}`,
        lastModified: r.lastModified,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
    }));

    return [...localized, ...docs];
}

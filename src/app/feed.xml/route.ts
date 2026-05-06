import { news } from "@/velite";

const SITE = "https://bylogos.io";

const escapeXml = (str: string) =>
    str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
    const sorted = [...news]
        .filter((p) => !(p as { redirectUrl?: string }).redirectUrl)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const lastBuild = sorted[0]?.date
        ? new Date(sorted[0].date).toUTCString()
        : new Date().toUTCString();

    const items = sorted
        .slice(0, 50)
        .map((post) => {
            const slug = post.slug.replace(/^news\//, "");
            const url = `${SITE}/es/news/${slug}`;
            const pubDate = new Date(post.date).toUTCString();
            const cover = post.cover
                ? post.cover.startsWith("http")
                    ? post.cover
                    : `${SITE}${post.cover}`
                : `${SITE}/opengraph-image.jpg`;

            return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <enclosure url="${cover}" type="image/jpeg" />
    </item>`;
        })
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LogOS — News &amp; Blog</title>
    <link>${SITE}/es/news</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Industrial IT/OT, Industrial AI, IIoT, Edge Computing — news from LogOS.</description>
    <language>es</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}

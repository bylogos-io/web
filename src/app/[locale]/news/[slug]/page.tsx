import { news } from '@/velite';
import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { NewsPost } from '@/sections/news/NewsPost';
import { resolveAppLocale } from '@/i18n/siteContent';
import { buildPageMetadata, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';
import { articleJsonLd, breadcrumbList } from '@/lib/jsonLd';

interface PageProps {
    params: Promise<{ slug: string; locale: string }>;
}

const NEWS_TITLE = {
    es: 'Noticias y Blog',
    en: 'News & Blog',
    pt: 'Notícias e Blog',
} as const;

const HOME_TITLE = {
    es: 'Inicio',
    en: 'Home',
    pt: 'Início',
} as const;

export async function generateStaticParams() {
    return news.map((post) => ({
        slug: post.slug.split('/').pop(),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const post = news.find((p) => p.slug === `news/${slug}`);

    if (!post) {
        return {
            title: 'Noticia no encontrada',
            robots: { index: false, follow: false },
        };
    }

    const coverUrl = post.cover
        ? post.cover.startsWith('http')
            ? post.cover
            : `${SITE_URL}${post.cover}`
        : DEFAULT_OG_IMAGE;

    return buildPageMetadata({
        locale: resolvedLocale,
        path: `/news/${slug}`,
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        modifiedTime: post.date,
        authors: ['LogOS'],
        keywords: post.tags,
        image: {
            url: coverUrl,
            width: 1200,
            height: 630,
            alt: post.title,
        },
    });
}

export default async function NewsPostPage({ params }: PageProps) {
    const { slug, locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);
    const post = news.find((p) => p.slug === `news/${slug}`);

    if (!post) {
        notFound();
    }

    if ((post as { redirectUrl?: string }).redirectUrl) {
        redirect((post as { redirectUrl: string }).redirectUrl);
    }

    const coverUrl = post.cover ? post.cover : DEFAULT_OG_IMAGE;

    const article = articleJsonLd({
        locale: resolvedLocale,
        title: post.title,
        description: post.description,
        slug,
        image: coverUrl,
        datePublished: post.date,
    });

    const crumbs = breadcrumbList(resolvedLocale, [
        { name: HOME_TITLE[resolvedLocale], path: '' },
        { name: NEWS_TITLE[resolvedLocale], path: '/news' },
        { name: post.title, path: `/news/${slug}` },
    ]);

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify([article, crumbs]) }}
            />
            <NewsPost post={post} />
        </>
    );
}

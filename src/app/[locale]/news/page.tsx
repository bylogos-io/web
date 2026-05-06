import { news } from '@/velite';
import { Box } from '@mui/material';
import { NewsTitle } from '@/sections/news/NewsTitle';
import { NewsSlider } from '@/sections/news/NewsSlider';
import { NewsPosts } from '@/sections/news/NewsPosts';
import type { Metadata } from 'next';
import { resolveAppLocale } from '@/i18n/siteContent';
import { buildPageMetadata, SITE_URL } from '@/lib/seo';
import { breadcrumbList } from '@/lib/jsonLd';

const NEWS_TITLE = {
    es: 'Noticias y Blog',
    en: 'News & Blog',
    pt: 'Notícias e Blog',
} as const;

const NEWS_DESCRIPTION = {
    es: 'Mantente informado con las últimas noticias sobre tecnología industrial, IA e IoT de la mano de LogOS.',
    en: 'Stay up to date on industrial technology, AI, and IoT news from LogOS.',
    pt: 'Fique por dentro das últimas notícias sobre tecnologia industrial, IA e IoT da LogOS.',
} as const;

const HOME_TITLE = {
    es: 'Inicio',
    en: 'Home',
    pt: 'Início',
} as const;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);

    return buildPageMetadata({
        locale: resolvedLocale,
        path: '/news',
        title: NEWS_TITLE[resolvedLocale],
        description: NEWS_DESCRIPTION[resolvedLocale],
    });
}

export default async function NewsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const resolvedLocale = resolveAppLocale(locale);

    const sortedPosts = [...news].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const sliderPosts = sortedPosts.slice(0, 5);

    const crumbs = breadcrumbList(resolvedLocale, [
        { name: HOME_TITLE[resolvedLocale], path: '' },
        { name: NEWS_TITLE[resolvedLocale], path: '/news' },
    ]);

    const collection = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: NEWS_TITLE[resolvedLocale],
        description: NEWS_DESCRIPTION[resolvedLocale],
        url: `${SITE_URL}/${resolvedLocale}/news`,
        inLanguage: resolvedLocale,
        hasPart: sortedPosts.slice(0, 20).map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.description,
            datePublished: p.date,
            url: `${SITE_URL}/${resolvedLocale}/news/${p.slug.replace(/^news\//, '')}`,
        })),
    };

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify([crumbs, collection]) }}
            />
            <Box component='main'>
                <NewsTitle />
                <NewsSlider posts={sliderPosts} />
                <NewsPosts posts={sortedPosts} />
            </Box>
        </>
    );
}

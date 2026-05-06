import { docs } from '@/velite';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DocsView } from '@/sections/docs/DocsView';
import { SITE_URL, DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE } from '@/lib/seo';

interface PageProps {
    params: Promise<{ slug?: string[] }>;
}

export async function generateStaticParams() {
    return docs.map((doc) => {
        return {
            slug: doc.slug.split('/').slice(1),
        };
    });
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams.slug
        ? resolvedParams.slug.join('/')
        : 'introduccion';
    const doc = docs.find((d) => d.slug === `docs/${slug}`);

    if (!doc) {
        return {
            metadataBase: new URL(SITE_URL),
            robots: { index: false, follow: false },
        };
    }

    const url = `${SITE_URL}/docs/${slug}`;
    const titleWithBrand = `${doc.title} | LogOS Docs`;

    return {
        metadataBase: new URL(SITE_URL),
        title: doc.title,
        description: doc.description,
        alternates: { canonical: url },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            type: 'article',
            url,
            siteName: 'LogOS',
            title: titleWithBrand,
            description: doc.description,
            images: [
                {
                    url: DEFAULT_OG_IMAGE,
                    secureUrl: DEFAULT_OG_IMAGE,
                    width: 1200,
                    height: 630,
                    type: 'image/jpeg',
                    alt: 'LogOS Documentation',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@bylogos',
            title: titleWithBrand,
            description: doc.description,
            images: [DEFAULT_TWITTER_IMAGE],
        },
    };
}

export default async function DocPage({ params }: PageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug
        ? resolvedParams.slug.join('/')
        : 'introduccion';
    const doc = docs.find((d) => d.slug === `docs/${slug}`);

    if (!doc) {
        notFound();
    }

    const url = `${SITE_URL}/docs/${slug}`;
    const articleLd = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: doc.title,
        description: doc.description,
        url,
        publisher: {
            '@type': 'Organization',
            name: 'LogOS',
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
        },
    };

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <DocsView doc={doc} />
        </>
    );
}

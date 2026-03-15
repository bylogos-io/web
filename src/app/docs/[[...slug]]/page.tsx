import { docs } from '@/velite';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { DocsView } from '@/sections/docs/DocsView';

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
  const doc = docs.find((doc) => doc.slug === `docs/${slug}`);

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: `${doc.title} | LogOS Docs`,
      description: doc.description,
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "LogOS Documentation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${doc.title} | LogOS Docs`,
      description: doc.description,
      images: ["/twitter-image.jpg"],
    },
  };
}

export default async function DocPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug
    ? resolvedParams.slug.join('/')
    : 'introduccion';
  const doc = docs.find((doc) => doc.slug === `docs/${slug}`);

  if (!doc) {
    notFound();
  }

  return <DocsView doc={doc} />;
}

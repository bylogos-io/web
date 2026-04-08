import { news } from '@/velite';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import { NewsPost } from '@/sections/news/NewsPost';

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return news.map((post) => ({
		slug: post.slug.split('/').pop(), // "news/my-post" -> "my-post"
	}));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const resolvedParams = await params;
	// Velite slug is 'news/slug', params.slug is 'slug'
	const post = news.find((p) => p.slug === `news/${resolvedParams.slug}`);

	if (!post) {
		return {
			title: 'Noticia no encontrada',
		};
	}

	return {
		title: post.title,
		description: post.description,
		openGraph: {
			title: `${post.title} | LogOS`,
			description: post.description,
			images: [
				post.cover
					? {
							url: post.cover,
							alt: post.title,
					  }
					: {
							url: "/opengraph-image.jpg",
							width: 1200,
							height: 630,
							alt: post.title,
					  },
			],
			type: "article",
			publishedTime: post.date,
		},
		twitter: {
			card: "summary_large_image",
			title: `${post.title} | LogOS`,
			description: post.description,
			images: [post.cover || "/twitter-image.jpg"],
		},
	};
}

export default async function NewsPostPage({ params }: PageProps) {
	const resolvedParams = await params;
	const post = news.find((p) => p.slug === `news/${resolvedParams.slug}`);

	if (!post) {
		notFound();
	}

  if ((post as any).redirectUrl) {
    redirect((post as any).redirectUrl);
  }

	return <NewsPost post={post} />;
}

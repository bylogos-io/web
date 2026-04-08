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

	const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bylogos.io";
	const fallbackOgUrl = `${baseUrl}/assets/news/default.png`;
	const coverUrl = post.cover ? (post.cover.startsWith("http") ? post.cover : `${baseUrl}${post.cover}`) : null;

	const imageUrl = coverUrl || fallbackOgUrl;

	return {
		title: post.title,
		description: post.description,
		openGraph: {
			title: `${post.title} | LogOS`,
			description: post.description,
			url: `${baseUrl}/news/${resolvedParams.slug}`,
			siteName: "LogOS",
			images: [
				{
					url: imageUrl,
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
			images: [imageUrl],
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

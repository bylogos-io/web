import { news } from "@/velite";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { NewsPost } from "@/sections/news/NewsPost";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return news.map((post) => ({
    slug: post.slug.split("/").pop(), // "news/my-post" -> "my-post"
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  // Velite slug is "news/slug", params.slug is "slug"
  const post = news.find((p) => p.slug === `news/${resolvedParams.slug}`);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Logos News`,
    description: post.description,
  };
}

export default async function NewsPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = news.find((p) => p.slug === `news/${resolvedParams.slug}`);

  if (!post) {
    notFound();
  }

  return <NewsPost post={post} />;
}

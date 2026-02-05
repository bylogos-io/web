import { docs } from '@/velite';
import { notFound } from 'next/navigation';
import { MDXContent } from '@/components/mdx-content';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateStaticParams() {
  return docs.map((doc) => {
      console.log("---> ~ generateStaticParams ~ doc->", doc)
      return {
    // Velite genera slugs como 'docs/introduccion', pero la ruta ya está en /docs
    // así que quitamos el prefijo 'docs' del slug para la URL.
    slug: doc.slug.split('/').slice(1),
  };
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ? resolvedParams.slug.join('/') : 'introduccion';
  // Reconstruimos el slug completo para buscar en Velite
  const doc = docs.find((doc) => doc.slug === `docs/${slug}`);

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
  }
}

export default async function DocPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ? resolvedParams.slug.join('/') : 'introduccion';
  const doc = docs.find((doc) => doc.slug === `docs/${slug}`);

  if (!doc) {
    notFound();
  }

  return (
    <article className="prose prose-invert prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-primary">{doc.title}</h1>
        <p className="text-xl text-muted-foreground">{doc.description}</p>
      </div>
      <MDXContent code={doc.content} />
    </article>
  );
}

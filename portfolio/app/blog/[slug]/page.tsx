// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link
        href="/blog"
        className="font-mono text-xs text-accent tracking-widest hover:underline"
      >
        ← BACK TO BLOG
      </Link>

      <header className="mt-6 mb-10">
        <p className="font-mono text-xs text-text-secondary mb-2">
          ● {post.category.toUpperCase()}
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
          {post.title}
        </h1>
        <div className="mt-3 flex items-center gap-3 font-mono text-xs text-text-secondary">
          <span>{post.author || "JKJ"}</span>
          <span>•</span>
          <span>{post.date}</span>
          {post.readTimeMinutes && (
            <>
              <span>•</span>
              <span>{post.readTimeMinutes} min read</span>
            </>
          )}
        </div>
      </header>

      {post.image && (
        <div className="relative aspect-video mb-10 overflow-hidden rounded-xl border border-surface-2">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}

      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
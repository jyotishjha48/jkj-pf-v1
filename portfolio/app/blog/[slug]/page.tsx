import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <Link
        href="/blog"
        className="font-mono text-xs text-text-secondary hover:text-accent transition-colors mb-8 inline-block tracking-widest"
      >
        ← BACK TO BLOG
      </Link>

      {post.isPlaceholder && (
        <div className="bg-warning/10 border border-warning/40 rounded p-4 mb-8">
          <p className="font-mono text-xs text-warning tracking-widest">
            ⚠ PLACEHOLDER POST — This is a template demonstration only. Not authored content.
          </p>
        </div>
      )}

      <div className="mb-8">
        {post.image && (
          <Image
            src={post.image}
            alt=""
            width={1200}
            height={675}
            className="mb-6 max-h-[28rem] w-full rounded-xl object-cover"
            priority
          />
        )}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-accent tracking-widest">{post.category.toUpperCase()}</span>
          <span className="font-mono text-xs text-text-secondary">{post.date}</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
          {post.title}
        </h1>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-text-secondary leading-relaxed text-lg">{post.content}</p>
      </div>
    </div>
  );
}

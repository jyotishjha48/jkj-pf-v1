"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "@/data/blog";

const categoryColors: Record<BlogPost["category"], string> = {
  Robotics: "text-accent",
  AI: "text-accent",
  Engineering: "text-success",
  Research: "text-warning",
  Learning: "text-warning",
};

export function BlogCard({ post }: { post: BlogPost }) {
  const [saved, setSaved] = useState(false);
  const categoryColor = categoryColors[post.category];
  const categoryLabel = post.category === "Engineering" ? "DESIGN" : post.category.toUpperCase();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-surface-2 bg-surface-2 transition-all duration-200 hover:-translate-y-1 hover:border-accent/70 motion-reduce:transform-none">
      <div className="relative aspect-video overflow-hidden bg-surface">
        {post.image ? (
          <Image src={post.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(135deg,#101820_0%,#0a0f14_55%,#12313b_100%)]" aria-hidden="true" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" aria-hidden="true" />
        <span className={`absolute left-3 top-3 rounded-full bg-surface/90 px-2.5 py-1 font-mono text-[10px] tracking-widest ${categoryColor}`}>
          ● {categoryLabel}
        </span>
        <button
          type="button"
          className="absolute right-3 top-3 rounded p-2 text-text-primary transition-colors hover:bg-surface/90 hover:text-accent"
          aria-label={saved ? "Remove post from saved items" : "Save post"}
          aria-pressed={saved}
          onClick={() => setSaved((current) => !current)}
        >
          <span aria-hidden="true" className="text-lg leading-none">{saved ? "▮" : "▯"}</span>
        </button>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-3 font-mono text-xs text-text-secondary">◉ {post.author || "JKJ"}</p>
        <h2 className="line-clamp-2 min-h-[3.5rem] font-heading text-lg font-semibold text-text-primary transition-colors group-hover:text-accent">
          <Link href={`/blog/${post.slug}`} className="focus-visible:outline-none">
            {post.title}
          </Link>
        </h2>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="font-mono text-xs text-text-secondary">
            {post.readTimeMinutes ? `◷ ${post.readTimeMinutes} min` : post.date}
          </span>
          <Link href={`/blog/${post.slug}`} className="rounded border border-accent/50 px-3 py-1.5 font-mono text-xs tracking-widest text-accent transition-colors hover:bg-accent/10 focus-visible:outline-none">
            [ READ ]
          </Link>
        </div>
        {post.isPlaceholder && <p className="mt-3 font-mono text-[10px] text-warning">⚠ PLACEHOLDER — TEMPLATE ONLY</p>}
      </div>
    </article>
  );
}

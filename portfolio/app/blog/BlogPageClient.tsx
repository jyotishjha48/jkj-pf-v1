// app/blog/BlogPageClient.tsx
"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { SectionHeader } from "@/components/SectionHeader";
import { BlogCard } from "@/components/BlogCard";
import { siteSettings } from "@/data/site-settings";

const CATEGORIES = ["All", "Robotics", "AI", "Design", "Research", "Learning"] as const;
type Category = (typeof CATEGORIES)[number];

export default function BlogPageClient() {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const requestedDisplayCategory = requestedCategory === "Engineering" ? "Design" : requestedCategory;
  const initialCategory = CATEGORIES.includes(requestedDisplayCategory as Category)
    ? (requestedDisplayCategory as Category)
    : "All";
  const [active, setActive] = useState<Category>(initialCategory);
  const filtered = active === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === (active === "Design" ? "Engineering" : active));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="SYSTEM LOG"
        title={siteSettings.blogHeader || "Blog"}
        subtitle={siteSettings.blogIntro || "Writing on robotics, AI, engineering, and learning."}
      />

      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
        {CATEGORIES.filter((cat) => cat !== "All").map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-xs px-3 py-1.5 rounded border tracking-widest transition-colors ${
              active === cat
                ? "border-accent text-accent bg-accent/10"
                : "border-surface-2 text-text-secondary hover:border-accent/50"
            }`}
            aria-pressed={active === cat}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-secondary text-center py-12 font-mono text-sm">
          NO POSTS IN THIS CATEGORY YET.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      )}
    </div>
  );
}
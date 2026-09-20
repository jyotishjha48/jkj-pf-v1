"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { makePage } from "@keystatic/next/ui/app";
import config from "@/keystatic.config";

function getPreviewPath(pathname: string) {
  if (pathname.includes("/collection/blog/item/")) {
    const slug = pathname.split("/collection/blog/item/")[1];
    return slug ? `/blog/${slug}` : "/blog";
  }
  if (pathname.includes("/singleton/siteSettings")) return "/";
  if (pathname.includes("/singleton/education")) return "/experience";
  if (pathname.includes("/singleton/skills")) return "/skills";
  if (pathname.includes("/singleton/experience")) return "/experience";
  if (pathname.includes("/singleton/projects")) return "/portfolio/projects";
  if (pathname.includes("/singleton/leadership")) return "/experience/leadership";
  if (pathname.includes("/singleton/awards")) return "/experience/awards";
  if (pathname.includes("/singleton/certifications")) return "/experience/certifications";
  return null;
}

function PreviewPanel() {
  const pathname = usePathname();
  const previewPath = getPreviewPath(pathname);
  if (!previewPath) return null;

  return (
    <aside className="cms-preview-panel fixed bottom-0 right-0 z-[55] hidden overflow-hidden border-l border-accent/40 bg-background shadow-2xl md:block">
      <div className="flex h-12 items-center justify-between border-b border-surface-2 bg-surface px-4">
        <span className="font-mono text-xs tracking-widest text-accent">SITE PREVIEW</span>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-text-secondary">SAVE TO UPDATE</span>
          <Link href="/admin-login?from=%2Fkeystatic" className="rounded border border-accent/50 px-2 py-1 font-mono text-[10px] tracking-widest text-accent hover:bg-accent/10">
            OPEN CMS
          </Link>
        </div>
      </div>
      <iframe
        key={previewPath}
        src={previewPath}
        title="Saved website preview"
        className="h-[calc(100%-48px)] w-full bg-background"
      />
    </aside>
  );
}

const KeystaticPage = makePage(config);

export default function KeystaticWithPreview() {
  return (
    <div className="cms-editor-shell">
      <KeystaticPage />
      <PreviewPanel />
    </div>
  );
}

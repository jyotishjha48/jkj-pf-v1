"use client";
import { usePathname } from "next/navigation";

const routeLabels: Record<string, string> = {
  "/": "HOME / SYSTEM",
  "/skills": "SKILLS / TECHNICAL",
  "/skills/soft": "SKILLS / SOFT",
  "/skills/graph": "SKILLS / CAPABILITY GRAPH",
  "/experience": "EXPERIENCE / TRAJECTORY",
  "/experience/professional": "EXPERIENCE / PROFESSIONAL",
  "/experience/research": "EXPERIENCE / RESEARCH",
  "/experience/certifications": "EXPERIENCE / CERTIFICATIONS",
  "/portfolio": "MISSIONS / OVERVIEW",
  "/portfolio/projects": "MISSIONS / PROJECTS",
  "/portfolio/workshops": "MISSIONS / WORKSHOPS",
  "/portfolio/research": "MISSIONS / RESEARCH",
  "/blog": "SYSTEM LOG / BLOG",
  "/contact": "COMMUNICATION NODE",
};

export function SystemStatusBar() {
  const pathname = usePathname();
  const label = routeLabels[pathname] ?? "NAVIGATING...";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 border-t border-surface-2 h-8 flex items-center px-4"
      aria-hidden="true"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <span className="font-mono text-xs text-text-secondary tracking-widest">
          ROUTE: {label}
        </span>
        <span className="font-mono text-xs text-success tracking-widest">&#9679; ONLINE</span>
      </div>
    </div>
  );
}

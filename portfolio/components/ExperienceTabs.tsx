"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/experience", label: "TRAJECTORY" },
  { href: "/experience/professional", label: "PROFESSIONAL" },
  { href: "/experience/research", label: "RESEARCH" },
  { href: "/experience/certifications", label: "CERTIFICATIONS" },
  { href: "/experience/awards", label: "AWARDS" },
  { href: "/experience/leadership", label: "LEADERSHIP & VOLUNTEERING" },
];

export function ExperienceTabs() {
  const pathname = usePathname();

  return (
    <nav className="mb-10 flex flex-wrap gap-3" aria-label="Experience sections">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={`rounded border px-3 py-1.5 font-mono text-xs tracking-widest transition-colors ${
              active
                ? "border-accent bg-accent/10 text-accent"
                : "border-surface-2 text-text-secondary hover:border-accent/50"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteSettings } from "@/data/site-settings";

type NavLink = {
  href: string;
  label: string;
  children: { href: string; label: string }[];
};

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navLinks: NavLink[] = [
    { href: "/", label: siteSettings.navSystem || "SYSTEM", children: [] },
    {
      href: "/skills",
      label: siteSettings.navSkills || "SKILLS",
      children: [
        { href: "/skills", label: "TECHNICAL SKILLS" },
        { href: "/skills/soft", label: "SOFT SKILLS" },
        { href: "/skills/graph", label: "CAPABILITY GRAPH" },
      ],
    },
    {
      href: "/experience",
      label: siteSettings.navExperience || "EXPERIENCE",
      children: [
        { href: "/experience", label: "TRAJECTORY" },
        { href: "/experience/professional", label: "PROFESSIONAL" },
        { href: "/experience/research", label: "RESEARCH" },
        { href: "/experience/certifications", label: "CERTIFICATIONS" },
        { href: "/experience/awards", label: "AWARDS" },
        { href: "/experience/leadership", label: "LEADERSHIP & VOLUNTEERING" },
      ],
    },
    {
      href: "/portfolio",
      label: siteSettings.navMissions || "MISSIONS",
      children: [
        { href: "/portfolio", label: "OVERVIEW" },
        { href: "/portfolio/projects", label: "PROJECTS" },
        { href: "/portfolio/workshops", label: "WORKSHOPS" },
      ],
    },
    {
      href: "/blog",
      label: siteSettings.navLog || "LOG",
      children: [
        { href: "/blog", label: "ALL POSTS" },
        { href: "/blog?category=Robotics", label: "ROBOTICS" },
        { href: "/blog?category=AI", label: "AI" },
        { href: "/blog?category=Engineering", label: "ENGINEERING" },
        { href: "/blog?category=Research", label: "RESEARCH" },
        { href: "/blog?category=Learning", label: "LEARNING" },
      ],
    },
    { href: "/contact", label: siteSettings.navConnect || "CONNECT", children: [] },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-surface-2 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Main navigation">
        <Link href="/" className="font-mono text-sm tracking-widest text-accent hover:text-white">
          {siteSettings.siteName || "JKJ.ROBOTICS"}
        </Link>

        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="group relative"
              onMouseEnter={() => setHoveredNav(link.href)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <Link
                href={link.href}
                className={`block rounded px-3 py-1.5 text-xs font-mono tracking-widest transition-colors ${
                  isActive(link.href)
                    ? "border border-accent/30 bg-accent/10 text-accent"
                    : "text-text-secondary hover:bg-surface-2 hover:text-text-primary"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
              {link.children.length > 0 && hoveredNav === link.href && (
                <div className="absolute left-1/2 top-full z-50 flex min-w-52 -translate-x-1/2 flex-col rounded border border-accent/30 bg-surface p-1 shadow-xl">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setHoveredNav(null)}
                      className="rounded px-3 py-2 text-left text-[10px] tracking-[0.14em] text-text-secondary transition-colors hover:bg-accent/10 hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li>
            <Link href="/admin-login?from=%2Fkeystatic" className="ml-2 rounded px-3 py-1.5 text-xs font-mono tracking-widest text-text-secondary hover:bg-surface-2 hover:text-accent">
              EDITOR
            </Link>
          </li>
          <li className="ml-2"><ThemeToggle /></li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="rounded p-2 text-text-secondary hover:text-accent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <div className="mb-1 h-0.5 w-5 bg-current" />
            <div className="mb-1 h-0.5 w-5 bg-current" />
            <div className="h-0.5 w-5 bg-current" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-surface-2 bg-surface md:hidden">
          <ul className="flex flex-col gap-2 px-4 py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded px-3 py-2 text-sm font-mono tracking-widest ${
                    isActive(link.href) ? "border border-accent/30 bg-accent/10 text-accent" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children.length > 0 && (
                  <div className="mt-1 grid gap-1 border-l border-accent/30 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded px-2 py-1.5 text-[10px] font-mono tracking-widest text-text-secondary hover:bg-accent/10 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link href="/admin-login?from=%2Fkeystatic" onClick={() => setMenuOpen(false)} className="block rounded px-3 py-2 text-sm font-mono tracking-widest text-text-secondary hover:text-accent">
                EDITOR
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

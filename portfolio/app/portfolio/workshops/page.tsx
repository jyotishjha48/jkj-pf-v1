import Link from "next/link";
import { workshops } from "@/data/workshops";
import { WorkshopCard } from "@/components/WorkshopCard";
import { SectionHeader } from "@/components/SectionHeader";

export default function WorkshopsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="MISSION CONTROL / WORKSHOPS"
        title="Workshops"
        subtitle="Hands-on robotics, AI, engineering, and STEM learning missions."
      />

      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { href: "/portfolio", label: "OVERVIEW" },
          { href: "/portfolio/projects", label: "PROJECTS" },
          { href: "/portfolio/workshops", label: "WORKSHOPS" },
        ].map((l) => (
          <Link key={l.href} href={l.href}
            className={`font-mono text-xs px-3 py-1.5 rounded border tracking-widest transition-colors ${
              l.href === "/portfolio/workshops"
                ? "border-accent text-accent bg-accent/10"
                : "border-surface-2 text-text-secondary hover:border-accent/50"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {workshops.map((workshop) => <WorkshopCard key={workshop.id} workshop={workshop} />)}
      </div>
    </div>
  );
}

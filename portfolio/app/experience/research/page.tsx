import Link from "next/link";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";

export default function ResearchExperiencePage() {
  const research = experiences.filter((e) => e.type === "research");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader missionId="SUBSYSTEM / EXPERIENCE" title="Research Experience" />

      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { href: "/experience", label: "TRAJECTORY" },
          { href: "/experience/professional", label: "PROFESSIONAL" },
          { href: "/experience/research", label: "RESEARCH" },
          { href: "/experience/certifications", label: "CERTIFICATIONS" },
          { href: "/experience/awards", label: "AWARDS" },
          { href: "/experience/leadership", label: "LEADERSHIP & VOLUNTEERING" },
        ].map((l) => (
          <Link key={l.href} href={l.href}
            className={`font-mono text-xs px-3 py-1.5 rounded border tracking-widest transition-colors ${
              l.href === "/experience/research"
                ? "border-accent text-accent bg-accent/10"
                : "border-surface-2 text-text-secondary hover:border-accent/50"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="space-y-6">
        {research.map((exp) => (
          <div key={exp.id} className="bg-surface border border-surface-2 rounded p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h2 className="font-heading font-bold text-text-primary text-lg">{exp.title}</h2>
                <p className="text-warning font-mono text-sm">{exp.organization}</p>
                <p className="text-text-secondary text-sm">{exp.location}</p>
              </div>
              <span className="font-mono text-xs text-text-secondary whitespace-nowrap">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>
            <ul className="space-y-2" role="list">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-warning mt-0.5">›</span> {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

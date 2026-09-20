import Link from "next/link";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";

export default function ProfessionalExperiencePage() {
  const professional = experiences.filter((e) => e.type === "professional");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader missionId="SUBSYSTEM / EXPERIENCE" title="Professional Experience" />

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
              l.href === "/experience/professional"
                ? "border-accent text-accent bg-accent/10"
                : "border-surface-2 text-text-secondary hover:border-accent/50"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="space-y-6">
        {professional.map((exp) => (
          <div key={exp.id} className="bg-surface border border-surface-2 rounded p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h2 className="font-heading font-bold text-text-primary text-lg">{exp.title}</h2>
                <p className="text-accent font-mono text-sm">{exp.organization}</p>
                <p className="text-text-secondary text-sm">{exp.location}</p>
              </div>
              <span className="font-mono text-xs text-text-secondary whitespace-nowrap">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>
            <ul className="space-y-2" role="list">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-accent mt-0.5">›</span> {r}
                </li>
              ))}
            </ul>
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((t) => (
                  <span key={t} className="font-mono text-xs bg-surface-2 text-text-secondary px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

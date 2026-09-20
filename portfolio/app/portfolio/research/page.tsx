import Link from "next/link";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";

export default function PortfolioResearchPage() {
  const researchExp = experiences.filter((e) => e.type === "research");
  const researchProjects = projects.filter((p) => p.status === "Research");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="MISSION CONTROL / RESEARCH"
        title="Research"
        subtitle="Research internships and research-classified projects."
      />

      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { href: "/portfolio", label: "OVERVIEW" },
          { href: "/portfolio/projects", label: "PROJECTS" },
          { href: "/portfolio/workshops", label: "WORKSHOPS" },
        ].map((l) => (
          <Link key={l.href} href={l.href}
            className={`font-mono text-xs px-3 py-1.5 rounded border tracking-widest transition-colors ${
              l.href === "/portfolio/research"
                ? "border-accent text-accent bg-accent/10"
                : "border-surface-2 text-text-secondary hover:border-accent/50"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <h2 className="font-mono text-xs text-warning tracking-[0.2em] mb-4">RESEARCH INTERNSHIPS</h2>
      <div className="space-y-4 mb-10">
        {researchExp.map((exp) => (
          <div key={exp.id} className="bg-surface border border-surface-2 rounded p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="font-heading font-semibold text-text-primary">{exp.title}</h3>
                <p className="text-warning font-mono text-sm">{exp.organization}</p>
              </div>
              <span className="font-mono text-xs text-text-secondary">{exp.startDate} – {exp.endDate}</span>
            </div>
            <ul className="space-y-1" role="list">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-warning mt-0.5">›</span> {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="font-mono text-xs text-accent tracking-[0.2em] mb-4">RESEARCH PROJECTS</h2>
      <div className="space-y-4">
        {researchProjects.map((p) => (
          <Link key={p.id} href={`/portfolio/projects/${p.slug}`} className="block bg-surface border border-surface-2 hover:border-accent/50 rounded p-5 transition-colors group">
            <h3 className="font-heading font-semibold text-text-primary group-hover:text-accent transition-colors mb-1">{p.title}</h3>
            <p className="text-text-secondary text-sm">{p.objective}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

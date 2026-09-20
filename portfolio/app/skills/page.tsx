import Link from "next/link";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";
import { siteSettings } from "@/data/site-settings";

export default function SkillsPage() {
  const categories = ["Programming", "Software", "Microcontrollers", "Languages"] as const;

  const getProjectName = (id: string) =>
    projects.find((p) => p.id === id)?.title ?? id;

  const getExperienceName = (id: string) =>
    experiences.find((e) => e.id === id)?.organization ?? id;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="SUBSYSTEM / SKILLS"
        title={siteSettings.skillsHeader || "Technical Skills"}
        subtitle="All skills mapped to real project and experience evidence."
      />

      <div className="flex flex-wrap gap-3 mb-10">
        <Link href="/skills" className="font-mono text-xs px-3 py-1.5 rounded border border-accent text-accent bg-accent/10 tracking-widest">
          TECHNICAL
        </Link>
        <Link href="/skills/soft" className="font-mono text-xs px-3 py-1.5 rounded border border-surface-2 text-text-secondary hover:border-accent/50 tracking-widest transition-colors">
          SOFT SKILLS
        </Link>
        <Link href="/skills/graph" className="font-mono text-xs px-3 py-1.5 rounded border border-surface-2 text-text-secondary hover:border-accent/50 tracking-widest transition-colors">
          CAPABILITY GRAPH
        </Link>
      </div>

      <div className="space-y-10">
        {categories.map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat);
          return (
            <div key={cat}>
              <h2 className="font-mono text-xs text-accent tracking-[0.2em] mb-4">{cat.toUpperCase()}</h2>
              <div className="space-y-3">
                {catSkills.map((skill) => (
                  <div key={skill.id} className="bg-surface border border-surface-2 rounded p-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <span className="font-heading font-semibold text-text-primary">{skill.name}</span>
                        {skill.detail && (
                          <span className="ml-2 text-text-secondary text-sm">— {skill.detail}</span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.evidenceProjectIds.map((pid) => (
                          <Link
                            key={pid}
                            href={`/portfolio/projects/${pid}`}
                            className="font-mono text-xs text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 rounded hover:bg-accent/20 transition-colors"
                          >
                            ↗ {getProjectName(pid).split(" ").slice(0, 4).join(" ")}…
                          </Link>
                        ))}
                        {skill.evidenceExperienceIds.map((eid) => (
                          <span
                            key={eid}
                            className="font-mono text-xs text-text-secondary bg-surface-2 border border-surface-2 px-2 py-0.5 rounded"
                          >
                            {getExperienceName(eid).split(" ").slice(0, 3).join(" ")}
                          </span>
                        ))}
                        {skill.evidenceProjectIds.length === 0 && skill.evidenceExperienceIds.length === 0 && (
                          <span className="font-mono text-xs text-text-secondary italic">No linked evidence yet</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

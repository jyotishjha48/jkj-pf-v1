import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader missionId="MISSION CONTROL / PROJECTS" title="Projects" subtitle="Engineering and research missions." />

      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { href: "/portfolio", label: "OVERVIEW" },
          { href: "/portfolio/projects", label: "PROJECTS" },
          { href: "/portfolio/workshops", label: "WORKSHOPS" },
        ].map((l) => (
          <Link key={l.href} href={l.href}
            className={`font-mono text-xs px-3 py-1.5 rounded border tracking-widest transition-colors ${
              l.href === "/portfolio/projects"
                ? "border-accent text-accent bg-accent/10"
                : "border-surface-2 text-text-secondary hover:border-accent/50"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <div key={project.id} className="bg-surface border border-surface-2 rounded p-5 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <span className="font-mono text-xs text-text-secondary">MISSION {String(i + 1).padStart(3, "0")}</span>
              <StatusBadge status={project.status} />
            </div>
            <h2 className="font-heading font-bold text-text-primary mb-1">{project.title}</h2>
            <p className="font-mono text-xs text-accent mb-2">{project.category}</p>
            <p className="text-text-secondary text-sm flex-1 mb-4">{project.objective}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((t) => (
                <span key={t} className="font-mono text-xs bg-surface-2 text-text-secondary px-2 py-0.5 rounded">{t}</span>
              ))}
            </div>
            <Link
              href={`/portfolio/projects/${project.slug}`}
              className="font-mono text-xs text-accent border border-accent/40 px-4 py-2 rounded hover:bg-accent/10 transition-colors text-center tracking-widest"
            >
              [ ENTER MISSION ]
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

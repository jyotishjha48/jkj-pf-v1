import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { StatusBadge } from "@/components/StatusBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const sections = [
    { key: "problem", label: "PROBLEM", value: project.problem },
    { key: "environment", label: "ENVIRONMENT", value: project.environment },
    { key: "perception", label: "PERCEPTION", value: project.perception },
    { key: "decision", label: "DECISION", value: project.decision },
    { key: "planning", label: "PLANNING", value: project.planning },
    { key: "control", label: "CONTROL", value: project.control },
    { key: "implementation", label: "IMPLEMENTATION", value: project.implementation },
    { key: "results", label: "RESULTS", value: project.results },
    { key: "limitations", label: "LIMITATIONS", value: project.limitations },
    { key: "futureWork", label: "FUTURE WORK", value: project.futureWork },
  ].filter((s) => s.value);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link
        href="/portfolio/projects"
        className="font-mono text-xs text-text-secondary hover:text-accent transition-colors mb-8 inline-block tracking-widest"
      >
        ← BACK TO PROJECTS
      </Link>

      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <StatusBadge status={project.status} />
          <span className="font-mono text-xs text-text-secondary">{project.period}</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-2">
          {project.title}
        </h1>
        <p className="font-mono text-xs text-accent tracking-widest">{project.category}</p>
      </div>

      {/* Objective */}
      <div className="bg-surface border border-surface-2 rounded p-5 mb-6">
        <p className="font-mono text-xs text-accent tracking-widest mb-2">OBJECTIVE</p>
        <p className="text-text-primary leading-relaxed">{project.objective}</p>
      </div>

      {/* Technologies */}
      {project.technologies.length > 0 && (
        <div className="mb-6">
          <p className="font-mono text-xs text-text-secondary tracking-widest mb-2">TECHNOLOGIES</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="font-mono text-xs bg-surface-2 border border-surface-2 text-text-secondary px-3 py-1 rounded">{t}</span>
            ))}
          </div>
        </div>
      )}

      {/* Pipeline sections */}
      <div className="space-y-5">
        {sections.map((s) => (
          <div key={s.key} className="border-l-2 border-accent/40 pl-5">
            <p className="font-mono text-xs text-accent tracking-widest mb-2">{s.label}</p>
            <p className="text-text-secondary leading-relaxed">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { siteSettings } from "@/data/site-settings";

export default function PortfolioPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="MISSION CONTROL"
        title={siteSettings.missionsHeader || "Mission Overview"}
        subtitle={siteSettings.missionsIntro || "All projects and workshops."}
      />

      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { href: "/portfolio", label: "OVERVIEW" },
          { href: "/portfolio/projects", label: "PROJECTS" },
          { href: "/portfolio/workshops", label: "WORKSHOPS" },
        ].map((l) => (
          <Link key={l.href} href={l.href}
            className={`font-mono text-xs px-3 py-1.5 rounded border tracking-widest transition-colors ${
              l.href === "/portfolio"
                ? "border-accent text-accent bg-accent/10"
                : "border-surface-2 text-text-secondary hover:border-accent/50"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Mission map SVG — desktop */}
      <div className="hidden md:block bg-surface border border-surface-2 rounded p-6 mb-10" aria-label="Mission map diagram" role="img">
        <svg viewBox="0 0 700 320" className="w-full">
          {/* Central node */}
          <circle cx="350" cy="160" r="32" fill="#101820" stroke="#22D3EE" strokeWidth="2" />
          <text x="350" y="156" textAnchor="middle" fill="#22D3EE" fontSize="9" fontFamily="monospace">MISSION</text>
          <text x="350" y="168" textAnchor="middle" fill="#22D3EE" fontSize="9" fontFamily="monospace">CONTROL</text>

          {/* Project nodes */}
          {[
            { id: "path-planning", label: "PATH PLANNING", cx: 150, cy: 80 },
            { id: "scara-robot", label: "SCARA ROBOT", cx: 560, cy: 80 },
            { id: "fuel-cell-scooter", label: "FUEL CELL", cx: 150, cy: 240 },
            { id: "ice-to-ev", label: "ICE TO EV", cx: 560, cy: 240 },
          ].map((node) => (
            <g key={node.id}>
              <line x1="350" y1="160" x2={node.cx} y2={node.cy} stroke="#101820" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx={node.cx} cy={node.cy} r="24" fill="#0A0F14" stroke="#9BA6B2" strokeWidth="1" className="cursor-pointer" />
              <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill="#9BA6B2" fontSize="7.5" fontFamily="monospace">{node.label}</text>
            </g>
          ))}
        </svg>
      </div>

      {/* Plain grid fallback — always visible */}
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href={`/portfolio/projects/${project.slug}`}
            className="block bg-surface border border-surface-2 hover:border-accent/50 rounded p-5 transition-colors group"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="font-mono text-xs text-text-secondary">MISSION {String(i + 1).padStart(3, "0")}</span>
              <StatusBadge status={project.status} />
            </div>
            <h3 className="font-heading font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">{project.title}</h3>
            <p className="text-text-secondary text-sm">{project.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

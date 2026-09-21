"use client";
import Link from "next/link";
import { useState } from "react";
import { skills, Skill } from "@/data/skills";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";

const CATEGORY_COLORS: Record<string, string> = {
  Programming: "#22D3EE",
  Software: "#4ADE80",
  Microcontrollers: "#FBBF24",
  Languages: "#A78BFA",
};

const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
  python:       { x: 200, y: 120 },
  matlab:       { x: 320, y: 80 },
  cpp:          { x: 440, y: 120 },
  ros2:         { x: 200, y: 230 },
  solidworks:   { x: 320, y: 270 },
  excel:        { x: 440, y: 230 },
  originpro:    { x: 560, y: 270 },
  "ms-office":  { x: 560, y: 170 },
  arduino:      { x: 200, y: 360 },
  esp32:        { x: 320, y: 400 },
  english:      { x: 440, y: 370 },
  hindi:        { x: 560, y: 370 },
  nepali:       { x: 650, y: 300 },
};

export default function CapabilityGraphPage() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const getProjectName = (id: string) =>
    projects.find((p) => p.id === id)?.title ?? id;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="SUBSYSTEM / SKILLS"
        title="Capability Graph"
        subtitle="Hover or click a node to see evidence links. Keyboard: Tab to navigate, Enter to select."
      />

      <div className="flex flex-wrap gap-3 mb-8">
        <Link href="/skills" className="font-mono text-xs px-3 py-1.5 rounded border border-surface-2 text-text-secondary hover:border-accent/50 tracking-widest transition-colors">
          TECHNICAL
        </Link>
        <Link href="/skills/soft" className="font-mono text-xs px-3 py-1.5 rounded border border-surface-2 text-text-secondary hover:border-accent/50 tracking-widest transition-colors">
          SOFT SKILLS
        </Link>
        <Link href="/skills/graph" className="font-mono text-xs px-3 py-1.5 rounded border border-accent text-accent bg-accent/10 tracking-widest">
          CAPABILITY GRAPH
        </Link>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
          <div key={cat} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
            <span className="font-mono text-xs text-text-secondary">{cat}</span>
          </div>
        ))}
      </div>

      {/* SVG Graph — hidden on small screens, list shown instead */}
      <div className="relative hidden overflow-hidden rounded-xl border border-accent/30 bg-[#071016] p-4 mb-6 shadow-[0_0_40px_rgba(34,211,238,.08)] md:block">
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(34,211,238,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.22) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
        {activeSkill && (
          <div className="absolute right-6 top-6 z-10 w-64 rounded-lg border border-accent/50 bg-background/95 p-4 shadow-2xl backdrop-blur">
            <p className="font-mono text-[10px] tracking-widest text-accent">LIVE NODE READOUT</p>
            <h3 className="mt-2 font-heading font-semibold text-text-primary">{activeSkill.name}</h3>
            <p className="mt-1 text-xs leading-5 text-text-secondary">{activeSkill.detail || "Capability node in the autonomy stack."}</p>
            <p className="mt-3 font-mono text-[10px] tracking-widest text-text-secondary">{activeSkill.category.toUpperCase()}</p>
          </div>
        )}
        <svg viewBox="0 0 780 470" className="relative z-[1] w-full" role="img" aria-label="Interactive autonomy capability constellation">
          <defs>
            <filter id="node-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <circle cx="390" cy="235" r="112" fill="none" stroke="#22D3EE" strokeOpacity=".14" strokeDasharray="3 9" />
          <circle cx="390" cy="235" r="72" fill="#0b1b24" stroke="#22D3EE" strokeOpacity=".6" />
          <circle cx="390" cy="235" r="52" fill="#071016" stroke="#22D3EE" strokeOpacity=".3" />
          <text x="390" y="231" textAnchor="middle" fill="#22D3EE" fontSize="12" fontFamily="var(--font-jetbrains-mono), monospace" letterSpacing="2">AUTONOMY</text>
          <text x="390" y="249" textAnchor="middle" fill="#9BA6B2" fontSize="9" fontFamily="var(--font-jetbrains-mono), monospace">STACK CORE</text>
          {skills.map((skill) => {
            const pos = NODE_POSITIONS[skill.id];
            if (!pos) return null;
            const color = CATEGORY_COLORS[skill.category];
            const isActive = activeSkill?.id === skill.id;
            return (
              <g key={skill.id}>
                <line x1="390" y1="235" x2={pos.x} y2={pos.y} stroke={color} strokeOpacity=".2" strokeDasharray="4 8" />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isActive ? 22 : 18}
                  fill={isActive ? color : "#101820"}
                  stroke={color}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  filter={isActive ? "url(#node-glow)" : undefined}
                  className="cursor-pointer"
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={skill.name}
                  onClick={() => setActiveSkill(isActive ? null : skill)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActiveSkill(isActive ? null : skill);
                  }}
                  onMouseEnter={() => setActiveSkill(skill)}
                />
                <text
                  x={pos.x}
                  y={pos.y + 32}
                  textAnchor="middle"
                  fill="#9BA6B2"
                  fontSize="9"
                  fontFamily="var(--font-jetbrains-mono), monospace"
                  className="pointer-events-none select-none"
                >
                  {skill.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Detail panel */}
      {activeSkill && (
        <div className="bg-surface border border-accent/40 rounded p-5 mb-6">
          <h3 className="font-heading font-semibold text-accent mb-1">{activeSkill.name}</h3>
          {activeSkill.detail && <p className="text-text-secondary text-sm mb-2">{activeSkill.detail}</p>}
          <p className="font-mono text-xs text-text-secondary tracking-widest mb-2">CATEGORY: {activeSkill.category.toUpperCase()}</p>
          {activeSkill.evidenceProjectIds.length > 0 && (
            <div className="mt-2">
              <p className="font-mono text-xs text-text-secondary mb-1">USED IN PROJECTS:</p>
              <ul className="space-y-1">
                {activeSkill.evidenceProjectIds.map((pid) => (
                  <li key={pid}>
                    <Link href={`/portfolio/projects/${pid}`} className="font-mono text-xs text-accent hover:underline">
                      ↗ {getProjectName(pid)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSkill.evidenceProjectIds.length === 0 && activeSkill.evidenceExperienceIds.length === 0 && (
            <p className="font-mono text-xs text-text-secondary italic">No linked evidence yet.</p>
          )}
        </div>
      )}

      {/* Mobile / accessible list fallback */}
      <div className="md:hidden">
        <p className="font-mono text-xs text-text-secondary tracking-widest mb-4">SKILL LIST</p>
        <div className="space-y-2">
          {skills.map((skill) => (
            <button
              key={skill.id}
              className={`w-full text-left bg-surface border rounded p-3 transition-colors ${
                activeSkill?.id === skill.id ? "border-accent" : "border-surface-2"
              }`}
              onClick={() => setActiveSkill(activeSkill?.id === skill.id ? null : skill)}
            >
              <span className="font-heading text-sm font-semibold text-text-primary">{skill.name}</span>
              <span className="ml-2 font-mono text-xs" style={{ color: CATEGORY_COLORS[skill.category] }}>
                {skill.category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";
import { leadership } from "@/data/leadership";
import { awards } from "@/data/awards";
import { siteSettings } from "@/data/site-settings";

const timelineNodes = [
  {
    id: "edu",
    label: "EDUCATION",
    title: "B.E. Mechanical Engineering",
    org: "Kathmandu University",
    period: "2019 – May 2024",
    color: "#A78BFA",
    href: "/experience",
  },
  ...experiences
    .slice()
    .reverse()
    .map((e) => ({
      id: e.id,
      label: e.type === "research" ? "RESEARCH" : "PROFESSIONAL",
      title: e.title,
      org: e.organization,
      period: `${e.startDate} – ${e.endDate}`,
      color: e.type === "research" ? "#FBBF24" : "#22D3EE",
      href: e.type === "research" ? "/experience/research" : "/experience/professional",
    })),
];

export default function ExperiencePage() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="SUBSYSTEM / EXPERIENCE"
        title={siteSettings.experienceHeader || "Career Trajectory"}
        subtitle={siteSettings.experienceIntro || "Chronological path from education through research to professional roles."}
      />

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
              l.href === "/experience"
                ? "border-accent text-accent bg-accent/10"
                : "border-surface-2 text-text-secondary hover:border-accent/50"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Timeline */}
      {siteSettings.showExperienceTimeline !== false && <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-surface-2" aria-hidden="true" />

        <ol className="space-y-8" aria-label="Experience timeline">
          {timelineNodes.map((node, i) => (
            <motion.li
              key={node.id}
              initial={prefersReduced ? {} : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative pl-14"
            >
              {/* Node dot */}
              <div
                className="absolute left-3.5 top-2 w-3 h-3 rounded-full border-2"
                style={{ backgroundColor: node.color + "33", borderColor: node.color }}
                aria-hidden="true"
              />
              <Link
                href={node.href}
                className="block bg-surface border border-surface-2 hover:border-accent/50 rounded p-4 transition-colors group"
              >
                <p className="font-mono text-xs tracking-widest mb-1" style={{ color: node.color }}>
                  {node.label}
                </p>
                <h3 className="font-heading font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {node.title}
                </h3>
                <p className="text-text-secondary text-sm">{node.org}</p>
                <p className="font-mono text-xs text-text-secondary mt-1">{node.period}</p>
              </Link>
            </motion.li>
          ))}
        </ol>
      </div>}

      {siteSettings.showLeadershipSection !== false && <section className="mt-20 border-t border-surface-2 pt-12">
        <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent">LEADERSHIP / VOLUNTEER EXPERIENCE</p>
        <h2 className="mb-6 font-heading text-2xl font-bold">Community Leadership</h2>
        <div className="space-y-5">
          {leadership.map((entry) => (
            <article key={entry.id} className="rounded border border-surface-2 bg-surface p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-text-primary">{entry.organization}</h3>
                  <p className="text-sm text-text-secondary">{entry.location}</p>
                </div>
                <span className="font-mono text-xs text-text-secondary">{entry.period}</span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {entry.roles.map((role) => (
                  <div key={role.title}>
                    <h4 className="font-mono text-xs tracking-widest text-accent">{role.title}</h4>
                    <p className="mt-1 text-sm text-text-secondary">{role.responsibilities[0]}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <Link href="/experience/leadership" className="mt-5 inline-block font-mono text-xs tracking-widest text-accent hover:underline">
          VIEW FULL LEADERSHIP EXPERIENCE →
        </Link>
      </section>}

      {siteSettings.showAwardsSection !== false && <section className="mt-16 border-t border-surface-2 pt-12">
        <p className="mb-3 font-mono text-xs tracking-[0.2em] text-warning">RECOGNITION / AWARDS</p>
        <h2 className="mb-6 font-heading text-2xl font-bold">Awards</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {awards.map((award) => (
            <article key={award.id} className="rounded border border-surface-2 bg-surface p-4">
              <h3 className="font-heading font-semibold text-text-primary">{award.title}</h3>
              <p className="mt-2 font-mono text-xs text-accent">{award.issuer}</p>
              <p className="mt-1 font-mono text-xs text-text-secondary">{award.period}</p>
            </article>
          ))}
        </div>
        <Link href="/experience/awards" className="mt-5 inline-block font-mono text-xs tracking-widest text-accent hover:underline">
          VIEW ALL AWARDS →
        </Link>
      </section>}
    </div>
  );
}

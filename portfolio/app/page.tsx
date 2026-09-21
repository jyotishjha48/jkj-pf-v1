"use client";
import { useEffect, useState, useRef, type CSSProperties } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { StatusBadge } from "@/components/StatusBadge";
import { siteSettings } from "@/data/site-settings";
import { awards } from "@/data/awards";
import { certifications } from "@/data/certifications";
import { workshops } from "@/data/workshops";
import Image from "next/image";

const bootLines = [
  "SYSTEM INITIALIZING...",
  "PERCEPTION ........ ONLINE",
  "LOCALIZATION ...... ONLINE",
  "PLANNING .......... ONLINE",
  "CONTROL ........... ONLINE",
  "MULTI-AGENT ....... ONLINE",
  "SYSTEM READY",
];

function AutonomyVisualization({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div
      className="hero-visualization pointer-events-none absolute inset-x-4 bottom-4 z-0 mx-auto h-32 max-w-xl opacity-80 sm:h-44"
      aria-label="Conceptual visualization of sensing, world modeling, planning, coordination, control, and feedback"
      role="img"
    >
      <div className="absolute inset-0 rounded border border-accent/20 bg-background/30" />
      <div className="absolute left-[12%] top-[22%] h-1.5 w-1.5 rounded-full bg-accent" />
      <div className="absolute left-[20%] top-[46%] h-1.5 w-1.5 rounded-full bg-accent/70" />
      <div className="absolute left-[27%] top-[68%] h-1.5 w-1.5 rounded-full bg-accent/50" />
      <div className="absolute right-[20%] top-[30%] h-3 w-3 rotate-45 border border-warning" />
      <div className="absolute left-[39%] top-[57%] h-3 w-3 rounded-full border border-success bg-success/20" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 220" fill="none" aria-hidden="true">
        <path d="M72 130 C150 30 220 190 305 125 S450 50 528 84" stroke="rgba(34,211,238,.3)" strokeDasharray="5 7" />
        <path d="M72 130 C150 30 220 190 305 125 S450 50 528 84" stroke="#22D3EE" strokeWidth="2" strokeDasharray="120 500" className={reducedMotion ? "" : "animate-[dash_4s_linear_infinite]"} />
        <path d="M305 125 L430 125" stroke="rgba(74,222,128,.35)" strokeDasharray="3 6" />
      </svg>
      <div className="absolute left-3 top-3 font-mono text-[9px] tracking-widest text-text-secondary">CONCEPTUAL VISUALIZATION</div>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[9px] tracking-widest text-text-secondary">
        <span>SENSING → WORLD MODEL</span>
        <span className="hidden sm:inline">PLAN → ACT → FEEDBACK</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const prefersReduced = useReducedMotion();
  const [bootDone, setBootDone] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const hasBooted = useRef(false);

  useEffect(() => {
    if (prefersReduced) {
      const timeout = window.setTimeout(() => {
        setBootDone(true);
        setHeroVisible(true);
        setVisibleLines(bootLines.length);
      }, 0);
      return () => window.clearTimeout(timeout);
    }
    const isReturn = sessionStorage.getItem("jkj-booted");
    if (isReturn) {
      const timeout = window.setTimeout(() => {
        setBootDone(true);
        setHeroVisible(true);
        setVisibleLines(bootLines.length);
      }, 0);
      return () => window.clearTimeout(timeout);
    }
    if (hasBooted.current) return;
    hasBooted.current = true;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= bootLines.length) {
        clearInterval(interval);
        setTimeout(() => {
          setBootDone(true);
          sessionStorage.setItem("jkj-booted", "1");
          setTimeout(() => setHeroVisible(true), 200);
        }, 600);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [prefersReduced]);

  const featuredProjects = projects.slice(0, 4);

  useEffect(() => {
    if (featuredProjects.length < 2) return;
    const interval = window.setInterval(() => {
      setFeaturedIndex((index) => (index + 1) % featuredProjects.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [featuredProjects.length]);

  return (
    <div className="min-h-screen">
      {!bootDone && (
        <div className="fixed right-4 top-20 z-40 rounded border border-accent/30 bg-surface/95 px-3 py-2 font-mono text-[10px] text-accent shadow-lg" aria-live="polite">
          {bootLines[Math.max(0, visibleLines - 1)] || "SYSTEM INITIALIZING..."}
        </div>
      )}
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-start justify-center overflow-hidden border-b border-surface-2">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        {/* Scan sweep */}
        {!prefersReduced && (
          <div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 animate-scan pointer-events-none"
            aria-hidden="true"
          />
        )}
        <AutonomyVisualization reducedMotion={Boolean(prefersReduced)} />

        <motion.div
          className="relative z-10 w-full px-4 pb-44 pt-16 text-center sm:pb-52 sm:pt-20"
          initial={heroVisible ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-accent text-xs tracking-[0.3em] mb-4">
            {siteSettings.heroTagline || "AUTONOMOUS SYSTEM 001"}
          </p>
          <h1 className="font-heading text-5xl sm:text-7xl font-bold text-text-primary mb-2 tracking-tight">
            {(siteSettings.heroHeading || profile.name).toUpperCase()}
          </h1>
          <p className="font-mono text-xl text-text-secondary tracking-widest mb-1">
            {(siteSettings.heroSub || profile.title).toUpperCase()}
          </p>
          <p className="font-mono text-sm text-accent tracking-[0.2em] mb-10">
            {siteSettings.heroSubtitle2 || profile.subtitle}
          </p>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-text-secondary">
            {siteSettings.heroSupportingLine || profile.missionStatement}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-accent text-background font-mono text-sm font-bold tracking-widest hover:bg-accent/90 transition-colors rounded"
            >
              [ {siteSettings.heroCTA1 || "EXPLORE SYSTEM"} ]
            </Link>
            <Link
              href="/portfolio/projects"
              className="px-6 py-3 border border-accent/40 text-accent font-mono text-sm tracking-widest hover:bg-accent/10 transition-colors rounded"
            >
              [ {siteSettings.heroCTA2 || "VIEW PROJECTS"} ]
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Current State — State Estimation panel */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-surface via-surface to-accent/5 p-6 shadow-2xl shadow-accent/5 sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-accent/10 bg-accent/5 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-accent/70 to-transparent" aria-hidden="true" />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <motion.div
                className="mb-5 flex items-center gap-3"
                initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-success shadow-[0_0_14px_rgba(74,222,128,.8)]" aria-hidden="true" />
                <p className="font-mono text-xs tracking-[0.2em] text-accent">
                  {siteSettings.currentStateSubtitle || "STATE ESTIMATION / CURRENT CONFIGURATION"}
                </p>
              </motion.div>
              <motion.h2
                className="mb-6 max-w-xl font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
                initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.08 }}
              >
                {siteSettings.currentStateTitle || "System Overview"}
              </motion.h2>
              <motion.p
                className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
                initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.14 }}
              >
                {profile.missionStatement}
              </motion.p>
              <div className="mt-8 flex flex-wrap gap-3 font-mono text-[10px] tracking-widest text-text-secondary">
                <span className="rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-success">SYSTEM ONLINE</span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-accent">RESEARCH ACTIVE</span>
              </div>
            </div>

            <div className="rounded-xl border border-surface-2/80 bg-background/45 p-5 sm:p-6">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-text-secondary">ACTIVE RESEARCH VECTORS</p>
                  <p className="mt-1 text-sm text-text-secondary">Current areas of system exploration</p>
                </div>
                <span className="font-mono text-2xl text-accent/60">{String(profile.researchInterests.length).padStart(2, "0")}</span>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2" role="list">
                {profile.researchInterests.map((interest, index) => (
                  <li key={interest} className="group rounded-lg border border-surface-2 bg-surface/70 p-4 transition-colors hover:border-accent/50 hover:bg-accent/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-accent">0{index + 1}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/50 transition-colors group-hover:bg-accent" aria-hidden="true" />
                    </div>
                    <span className="text-sm leading-6 text-text-primary">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Missions */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent">MISSION FEED / PROJECT PREVIEWS</p>
            <motion.h2
              className="font-heading text-3xl font-bold"
              initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {siteSettings.featuredMissionsTitle || "Featured Projects"}
            </motion.h2>
          </div>
          <Link
            href="/portfolio/projects"
            className="font-mono text-xs text-accent hover:underline tracking-widest hidden sm:block"
          >
            VIEW ALL →
          </Link>
        </div>
        <div className="relative mx-auto max-w-6xl overflow-hidden">
          <div
            className="featured-project-track flex gap-4"
            style={{ "--featured-slide": featuredIndex } as CSSProperties}
          >
          {[...featuredProjects, ...featuredProjects].map((project, i) => (
            <motion.div
              key={`${project.id}-${i}`}
              className="w-full shrink-0 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333333%-0.666667rem)]"
              initial={false}
              animate={{ opacity: i >= featuredIndex && i < featuredIndex + 3 ? 1 : 0.55 }}
              transition={{ duration: 0.35 }}
            >
              <Link
                href={`/portfolio/projects/${project.slug}`}
                className="group mx-auto flex aspect-square w-full max-w-[360px] flex-col overflow-hidden rounded-xl border border-accent/30 bg-surface transition-all hover:border-accent/70 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="relative min-h-0 flex-1 overflow-hidden border-b border-surface-2 bg-gradient-to-br from-accent/15 via-surface-2 to-success/10">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 640px) 540px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(34,211,238,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.25) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                      <div className="absolute left-8 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-2xl border border-accent/50 bg-background/60 text-4xl font-heading font-bold text-accent shadow-[0_0_30px_rgba(34,211,238,.2)]">
                        {project.title.charAt(0)}
                      </div>
                      <div className="absolute bottom-5 right-6 max-w-[60%] text-right font-mono text-[10px] tracking-[0.2em] text-accent/80">
                        ICON PREVIEW / {project.id.toUpperCase()}
                      </div>
                    </>
                  )}
                  <div className="absolute left-4 top-4 rounded border border-accent/30 bg-background/75 px-2 py-1 font-mono text-[10px] tracking-widest text-accent backdrop-blur">
                    MISSION {String(i + 1).padStart(3, "0")}
                  </div>
                  <div className="absolute right-4 top-4">
                    <StatusBadge status={project.status} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/65 to-transparent px-5 pb-4 pt-12">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-accent/90">PROJECT PREVIEW</p>
                    <p className="mt-1 line-clamp-1 text-sm font-medium text-text-primary">{project.objective}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-text-secondary">{project.category}</span>
                    <span className="font-mono text-[10px] text-accent">{project.period}</span>
                  </div>
                  <h3 className="mb-2 line-clamp-2 font-heading text-lg font-semibold text-text-primary transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mb-3 line-clamp-1 text-xs leading-5 text-text-secondary">
                    {project.objective}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((t) => (
                        <span key={t} className="rounded bg-surface-2 px-2 py-1 font-mono text-[10px] text-text-secondary">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="shrink-0 font-mono text-[10px] tracking-widest text-accent opacity-70 transition-opacity group-hover:opacity-100">
                      OPEN →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          </div>
          <div className="mt-5 flex items-center justify-center gap-2" aria-label="Featured project slides">
            {featuredProjects.map((project, i) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setFeaturedIndex(i)}
                aria-label={`Show featured project ${i + 1}`}
                aria-pressed={i === featuredIndex}
                className={`h-2.5 w-2.5 rounded-full border transition-colors ${
                  i === featuredIndex ? "border-accent bg-accent" : "border-text-secondary/50 bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-20 sm:px-6 lg:grid-cols-3">
        <div className="rounded border border-surface-2 bg-surface p-5">
          <p className="mb-2 font-mono text-xs tracking-widest text-accent">LEARNING RECORD</p>
          <h2 className="mb-4 font-heading text-xl font-bold">Certifications</h2>
          <div className="space-y-3">
            {certifications.slice(0, 2).map((certification) => (
              <div key={certification.id} className="border-l border-accent/40 pl-3">
                <p className="font-semibold text-text-primary">{certification.title}</p>
                <p className="font-mono text-xs text-text-secondary">{certification.issuer}</p>
              </div>
            ))}
          </div>
          <Link href="/experience/certifications" className="mt-5 inline-block font-mono text-xs tracking-widest text-accent hover:underline">VIEW CERTIFICATIONS →</Link>
        </div>
        <div className="rounded border border-surface-2 bg-surface p-5">
          <p className="mb-2 font-mono text-xs tracking-widest text-warning">RECOGNITION</p>
          <h2 className="mb-4 font-heading text-xl font-bold">Awards</h2>
          <div className="space-y-3">
            {awards.slice(0, 2).map((award) => (
              <div key={award.id} className="border-l border-warning/40 pl-3">
                <p className="font-semibold text-text-primary">{award.title}</p>
                <p className="font-mono text-xs text-text-secondary">{award.issuer}</p>
              </div>
            ))}
          </div>
          <Link href="/experience/awards" className="mt-5 inline-block font-mono text-xs tracking-widest text-accent hover:underline">VIEW AWARDS →</Link>
        </div>
        <div className="rounded border border-surface-2 bg-surface p-5">
          <p className="mb-2 font-mono text-xs tracking-widest text-success">COMMUNITY MISSIONS</p>
          <h2 className="mb-4 font-heading text-xl font-bold">Workshops</h2>
          <div className="space-y-3">
            {workshops.slice(0, 2).map((workshop) => (
              <div key={workshop.id} className="border-l border-success/40 pl-3">
                <p className="font-semibold text-text-primary">{workshop.title}</p>
                <p className="font-mono text-xs text-text-secondary">{workshop.date}</p>
              </div>
            ))}
          </div>
          <Link href="/portfolio/workshops" className="mt-5 inline-block font-mono text-xs tracking-widest text-accent hover:underline">VIEW WORKSHOPS →</Link>
        </div>
      </section>
    </div>
  );
}

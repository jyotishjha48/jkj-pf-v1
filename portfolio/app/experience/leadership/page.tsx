import Link from "next/link";
import { leadership } from "@/data/leadership";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

export default function LeadershipPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="SUBSYSTEM / EXPERIENCE"
        title="Leadership & Volunteer Experience"
        subtitle="Community leadership, robotics education, and volunteer service."
      />
      <div className="mb-10 flex flex-wrap gap-3">
        <Link href="/experience" className="font-mono text-xs tracking-widest text-text-secondary hover:text-accent">TRAJECTORY</Link>
        <Link href="/experience/professional" className="font-mono text-xs tracking-widest text-text-secondary hover:text-accent">PROFESSIONAL</Link>
        <Link href="/experience/research" className="font-mono text-xs tracking-widest text-text-secondary hover:text-accent">RESEARCH</Link>
        <Link href="/experience/certifications" className="font-mono text-xs tracking-widest text-text-secondary hover:text-accent">CERTIFICATIONS</Link>
        <Link href="/experience/awards" className="font-mono text-xs tracking-widest text-text-secondary hover:text-accent">AWARDS</Link>
        <span className="font-mono text-xs tracking-widest text-accent">LEADERSHIP & VOLUNTEERING</span>
      </div>
      <div className="space-y-6">
        {leadership.map((entry) => (
          <article key={entry.id} className="rounded border border-surface-2 bg-surface p-6">
            {entry.image && <Image src={entry.image} alt={`${entry.organization} logo`} width={640} height={240} className="mb-5 max-h-40 w-full rounded object-contain" />}
            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-heading text-lg font-bold text-text-primary">{entry.organization}</h2>
                <p className="text-sm text-text-secondary">{entry.location}</p>
              </div>
              <span className="font-mono text-xs text-text-secondary">{entry.period}</span>
            </div>
            <div className="space-y-5">
              {entry.roles.map((role) => (
                <section key={role.title}>
                  <h3 className="mb-2 font-mono text-sm tracking-widest text-accent">{role.title}</h3>
                  <ul className="space-y-2" role="list">
                    {role.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary">
                        <span className="mt-0.5 text-accent">›</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

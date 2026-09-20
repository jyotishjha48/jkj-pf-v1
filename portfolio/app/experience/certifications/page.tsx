import Link from "next/link";
import { certifications } from "@/data/certifications";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader missionId="SUBSYSTEM / EXPERIENCE" title="Certifications" />

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
              l.href === "/experience/certifications"
                ? "border-accent text-accent bg-accent/10"
                : "border-surface-2 text-text-secondary hover:border-accent/50"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="space-y-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-surface border border-surface-2 rounded p-6">
            {cert.image && <Image src={cert.image} alt={`${cert.title} certificate`} width={640} height={360} className="mb-5 max-h-64 w-full rounded object-contain" />}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h2 className="font-heading font-bold text-text-primary text-lg">{cert.title}</h2>
                {cert.instructor && (
                  <p className="text-text-secondary text-sm">Instructor: {cert.instructor}</p>
                )}
                <p className="text-accent font-mono text-sm">{cert.issuer}</p>
              </div>
              <span className="font-mono text-xs text-text-secondary whitespace-nowrap">
                {cert.period}
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{cert.description}</p>
            <div className="flex flex-wrap gap-2">
              {cert.technologies.map((t) => (
                <span key={t} className="font-mono text-xs bg-surface-2 text-text-secondary px-2 py-0.5 rounded">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { certifications } from "@/data/certifications";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { siteSettings } from "@/data/site-settings";
import { ExperienceTabs } from "@/components/ExperienceTabs";

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="SUBSYSTEM / EXPERIENCE"
        title={siteSettings.certificationsHeader || "Certifications"}
        subtitle={siteSettings.certificationsIntro}
      />

      <ExperienceTabs />

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

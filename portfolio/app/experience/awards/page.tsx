import Image from "next/image";
import { awards } from "@/data/awards";
import { SectionHeader } from "@/components/SectionHeader";
import { siteSettings } from "@/data/site-settings";
import { ExperienceTabs } from "@/components/ExperienceTabs";

export default function AwardsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="SUBSYSTEM / EXPERIENCE"
        title={siteSettings.awardsHeader || "Awards"}
        subtitle={siteSettings.awardsIntro || "Recognition, grants, and academic distinctions."}
      />
      <ExperienceTabs />
      <div className="space-y-6">
        {awards.map((award) => (
          <article key={award.id} className="rounded border border-surface-2 bg-surface p-6">
            {award.image && <Image src={award.image} alt={`${award.title} award`} width={640} height={360} className="mb-5 max-h-64 w-full rounded object-contain" />}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div><h2 className="font-heading text-lg font-bold text-text-primary">{award.title}</h2><p className="font-mono text-sm text-accent">{award.issuer}</p></div>
              <span className="font-mono text-xs text-text-secondary">{award.period}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{award.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

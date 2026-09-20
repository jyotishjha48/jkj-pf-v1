import Link from "next/link";
import Image from "next/image";
import type { Workshop } from "@/data/workshops";

export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <Link href={`/portfolio/workshops/${workshop.slug}`} className="group block overflow-hidden rounded border border-surface-2 bg-surface transition-colors hover:border-accent/60">
      {workshop.image ? (
        <Image src={workshop.image} alt="" width={800} height={400} className="h-40 w-full object-cover" />
      ) : (
        <div className="flex h-24 items-end bg-gradient-to-br from-accent/20 via-surface to-success/10 p-4">
          <span className="font-mono text-[10px] tracking-widest text-accent">WORKSHOP MISSION</span>
        </div>
      )}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3 font-mono text-xs text-text-secondary">
          <span>{workshop.category}</span>
          <span>{workshop.date}</span>
        </div>
        <h3 className="font-heading font-semibold text-text-primary transition-colors group-hover:text-accent">{workshop.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{workshop.excerpt}</p>
      </div>
    </Link>
  );
}

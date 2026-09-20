import { notFound } from "next/navigation";
import Link from "next/link";
import { workshops } from "@/data/workshops";

export function generateStaticParams() {
  return workshops.map((workshop) => ({ slug: workshop.slug }));
}

export default async function WorkshopPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const workshop = workshops.find((entry) => entry.slug === slug);
  if (!workshop) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/portfolio/workshops" className="font-mono text-xs tracking-widest text-accent hover:underline">← ALL WORKSHOPS</Link>
      <p className="mt-10 font-mono text-xs tracking-[0.2em] text-accent">{workshop.category} / {workshop.date}</p>
      <h1 className="mt-3 font-heading text-4xl font-bold text-text-primary">{workshop.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-text-secondary">{workshop.excerpt}</p>
      <div className="mt-10 whitespace-pre-wrap border-t border-surface-2 pt-8 leading-8 text-text-primary">{workshop.content}</div>
    </article>
  );
}

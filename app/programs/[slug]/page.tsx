import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { programs } from "@/data/site";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const program = programs.find((item) => item.slug === params.slug);
  return { title: program ? program.title : "Program" };
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programs.find((item) => item.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <Link className="text-link" href="/programs">← Back to programs</Link>
          <div className="program-icon detail-icon" aria-hidden="true">{program.icon}</div>
          <span className="eyebrow">Program</span>
          <h1 className="section-title">{program.title}</h1>
          <p className="section-copy">{program.summary}</p>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container narrow">
          <h2>What this programme focuses on</h2>
          <p className="section-copy">{program.description}</p>
          <div className="grid outcome-grid">
            {program.outcomes.map((outcome) => (
              <div className="card mini-card" key={outcome}>{outcome}</div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

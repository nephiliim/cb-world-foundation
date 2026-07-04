import ButtonLink from './ButtonLink';

export default function PageHero({ eyebrow, title, body, ctaHref, ctaLabel }: { eyebrow: string; title: string; body: string; ctaHref?: string; ctaLabel?: string }) {
  return (
    <section className="bg-gradient-to-br from-skysoft via-white to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-royal">{eyebrow}</p>
          <h1 className="heading-font mt-4 text-5xl font-bold tracking-tight text-navy sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{body}</p>
          {ctaHref && ctaLabel && <div className="mt-8"><ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink></div>}
        </div>
        <div className="image-placeholder min-h-[360px] rounded-[2rem] p-6 shadow-soft">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-royal">Photo space</p>
          <p className="mt-3 text-2xl font-black text-navy">Replace with real foundation photography</p>
        </div>
      </div>
    </section>
  );
}

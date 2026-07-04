export default function Section({ eyebrow, title, children, className = '' }: { eyebrow?: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-3xl">
        {eyebrow && <p className="text-sm font-black uppercase tracking-[0.22em] text-royal">{eyebrow}</p>}
        <h2 className="heading-font mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">{title}</h2>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

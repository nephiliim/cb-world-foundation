export default function CardGrid({ items }: { items: { title: string; description: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
          <div className="h-2 w-14 rounded-full bg-gold" />
          <h3 className="mt-5 text-xl font-black text-navy">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

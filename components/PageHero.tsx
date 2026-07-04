type PageHeroProps = {
  eyebrow?: string;
  title: string;
  copy: string;
};

export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

import { foundationWork, missionCards } from "@/data/site";

export default function FoundationPage() {
  return (
    <main>
      <section className="page-hero text-only">
        <div><span className="eyebrow">The Foundation</span><h1>Built to honour Claudyo through action, education and community care.</h1><p>CB's World Foundation turns remembrance into practical support, awareness and hope.</p></div>
      </section>
      <section className="section-shell"><div className="mission-grid">{missionCards.map((card) => <article className="glass-card" key={card.title}><span className="card-icon">{card.icon}</span><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></section>
      <section className="section-shell"><div className="section-heading"><span className="eyebrow">Our work</span><h2>Core areas of focus.</h2></div><div className="mission-grid">{foundationWork.map((item) => <article className="glass-card" key={item.slug}><span className="card-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
    </main>
  );
}

import { foundationWork, missionCards } from "@/data/site";

export default function FoundationPage() {
  return (
    <main>
      <section className="simple-page-header">
        <span className="eyebrow">Our Foundation</span>
        <h1>Turning remembrance into action.</h1>
        <p>CB’s World Foundation exists to honour Claudyo’s life through education, support and community change.</p>
      </section>
      <section className="section">
        <div className="mission-grid">
          {missionCards.map((card) => (
            <div className="mission-card" key={card.title}>
              <span>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section dark-section">
        <div className="section-heading">
          <span className="eyebrow">Our work</span>
          <h2>Focus areas for the foundation.</h2>
        </div>
        <div className="news-grid">
          {foundationWork.map((item) => (
            <article className="news-card" key={item.slug}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

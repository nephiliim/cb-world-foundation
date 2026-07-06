type MissionCard = {
  title: string;
  icon: string;
  text?: string;
  description?: string;
};

export function V6Pillars({ cards }: { cards: MissionCard[] }) {
  return (
    <section className="v6-section">
      <div className="v6-center">
        <span className="v6-kicker">What We Stand For</span>
        <h2>Love, justice, support and change.</h2>
        <p>Each part of the foundation is built around Claudyo&apos;s memory and the young lives still to protect.</p>
      </div>
      <div className="v6-pillars">
        {cards.map((card) => (
          <article className="v6-pillar" key={card.title}>
            <span className="v6-pillar-icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.text || card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

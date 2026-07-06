type Card = { title: string; description?: string; text?: string; icon?: string };

export function V6Pillars({ cards }: { cards: Card[] }) {
  return (
    <section className="v6-section">
      <div className="v6-center">
        <p className="v6-kicker">Foundation pillars</p>
        <h2>Love, justice, support and community.</h2>
      </div>
      <div className="v6-pillars">
        {cards.map((card) => (
          <article className="v6-pillar" key={card.title}>
            <span className="v6-icon">{card.icon || "💙"}</span>
            <h3>{card.title}</h3>
            <p>{card.description || card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

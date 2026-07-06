import Link from "next/link";

const cards = [
  ["Claudyo’s Legacy", "Learn about Claudyo’s life, his dreams, his family and the legacy he left behind.", "/claudyos-legacy", "Read More"],
  ["Gallery", "Photos and videos from Claudyo’s life, memorials, events and foundation activities.", "/gallery", "View Gallery"],
  ["Legacy Wall", "Leave a message, share a memory or light a candle in honour of Claudyo.", "/legacy-wall", "Visit Wall"],
];

export function V6Cards() {
  return (
    <section className="v6-section v6-link-cards">
      {cards.map(([title, text, href, action]) => (
        <article className="v6-link-card" key={title}>
          <h3>{title}</h3>
          <p>{text}</p>
          <Link href={href}>{action} →</Link>
        </article>
      ))}
    </section>
  );
}

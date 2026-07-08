import Link from "next/link";

type FeaturedEvent = {
  id?: string;
  title: string;
  slug: string;
  summary?: string | null;
  event_date?: string | null;
  location?: string | null;
  cover_image?: string | null;
  category?: string | null;
};

export function V6FeaturedEvents({ events }: { events: FeaturedEvent[] }) {
  if (!events.length) return null;

  return (
    <section className="v6-section">
      <div className="v6-section-head">
        <div>
          <span className="v6-kicker">Featured Impact</span>
          <h2>Recent work from the foundation.</h2>
        </div>
        <Link href="/events">View all events</Link>
      </div>

      <div className="v6-light-row">
        {events.map((event) => (
          <article className="v6-link-card" key={event.id || event.slug}>
            {event.cover_image && (
              <img src={event.cover_image} alt="" style={{width:"100%",height:180,objectFit:"cover",borderRadius:18,marginBottom:16}} />
            )}
            <span className="v6-kicker">{event.category || "Community Event"}</span>
            <h3>{event.title}</h3>
            <p>{event.summary || "Community impact and awareness work from CB'S WORLD Foundation Charity."}</p>
            <Link href={`/events/${event.slug}`}>Read more →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

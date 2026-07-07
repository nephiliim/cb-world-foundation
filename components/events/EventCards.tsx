import Link from "next/link";
import type { CmsEvent } from "@/lib/events";

export function EventCards({ events }: { events: CmsEvent[] }) {
  if (!events.length) {
    return (
      <div className="event-empty">
        <h3>No events published yet</h3>
        <p>Events will appear here once they are added from the admin dashboard.</p>
      </div>
    );
  }

  return (
    <div className="event-grid">
      {events.map((event) => (
        <article className="event-card" key={event.id || event.slug}>
          {event.cover_image ? (
            <img src={event.cover_image} alt="" />
          ) : (
            <div className="event-card-placeholder">CB</div>
          )}
          <div className="event-card-body">
            <span className="event-chip">{event.category || "Community Event"}</span>
            <h3>{event.title}</h3>
            <p>{event.summary || event.description || "Community work and awareness activity from CB'S WORLD Foundation Charity."}</p>
            <div className="event-meta">
              {event.event_date && <span>{new Date(event.event_date).toLocaleDateString("en-GB")}</span>}
              {event.location && <span>{event.location}</span>}
            </div>
            <Link className="event-link" href={`/events/${event.slug}`}>View event</Link>
          </div>
        </article>
      ))}
    </div>
  );
}

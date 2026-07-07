import { notFound } from "next/navigation";
import { getEventBySlug } from "@/lib/events";
import { EventImpact } from "@/components/events/EventImpact";

export const dynamic = "force-dynamic";

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) notFound();

  return (
    <main>
      <section className="page-hero event-detail-hero">
        <div className="container">
          <span className="kicker">{event.category || "Community Event"}</span>
          <h1>{event.title}</h1>
          <p className="section-copy">{event.summary || event.description}</p>
          <div className="event-detail-meta">
            {event.event_date && <span>{new Date(event.event_date).toLocaleDateString("en-GB")}</span>}
            {event.venue && <span>{event.venue}</span>}
            {event.location && <span>{event.location}</span>}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container event-detail-layout">
          <div>
            {event.cover_image && <img className="event-detail-image" src={event.cover_image} alt="" />}
            <h2>About this event</h2>
            <p className="section-copy">{event.description || event.summary}</p>
            {event.video_url && (
              <a className="button primary" href={event.video_url} target="_blank" rel="noreferrer">
                Watch video
              </a>
            )}
          </div>

          <aside className="event-sidebar">
            <h3>Impact</h3>
            <EventImpact event={event} />
            <h3>Location</h3>
            <p>{event.venue}</p>
            <p>{event.location}</p>
            <p>{event.postcode}</p>
          </aside>
        </div>
      </section>

      {event.gallery_urls?.length ? (
        <section className="section light">
          <div className="container">
            <span className="kicker">Gallery</span>
            <h2 className="section-title">Photos from the event</h2>
            <div className="event-gallery-grid">
              {event.gallery_urls.map((url) => (
                <img key={url} src={url} alt="" />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

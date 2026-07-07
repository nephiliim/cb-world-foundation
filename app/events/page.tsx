import { EventCards } from "@/components/events/EventCards";
import { getPublishedEvents } from "@/lib/events";

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const events = await getPublishedEvents();

  return (
    <main>
      <section className="page-hero event-hero">
        <div className="container">
          <span className="kicker">Community Impact</span>
          <h1>Events, school visits and awareness work.</h1>
          <p className="section-copy">
            A living record of the work being carried out in Claudyo&apos;s memory — from school talks and community events to awareness campaigns and bleed control kit support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Latest Events</span>
          <h2 className="section-title">The legacy in action.</h2>
          <EventCards events={events} />
        </div>
      </section>
    </main>
  );
}

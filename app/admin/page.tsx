import Link from "next/link";
import { getAdminDashboardData } from "@/lib/adminDashboard";
import { CommandPanel, CommandStats, EmptyState, QuickActions } from "@/components/admin/CommandCentreCards";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const data = await getAdminDashboardData();

  const stats = [
    { icon: "📅", label: "Events", value: data.stats.events, href: "/admin/events" },
    { icon: "📰", label: "News", value: data.stats.news, href: "/admin/news" },
    { icon: "📸", label: "Gallery", value: data.stats.gallery, href: "/admin/gallery" },
    { icon: "💬", label: "Feedback", value: data.stats.feedback, href: "/admin/feedback" },
    { icon: "❤️", label: "Legacy", value: data.stats.legacyMessages, href: "/admin/legacy-wall" },
    { icon: "🩸", label: "Bleed Kits", value: data.stats.bleedKits, href: "/admin/bleed-kits" },
  ];

  return (
    <main className="command-centre">
      <section className="command-hero">
        <span>CB'S WORLD Foundation Charity</span>
        <h1>Command Centre</h1>
        <p>Manage the foundation's events, media, stories, feedback and community impact from one place.</p>
      </section>

      <CommandStats stats={stats} />

      <div className="command-layout">
        <div>
          <CommandPanel title="Upcoming and recent events">
            <div className="command-list">
              {data.upcomingEvents.length ? (
                data.upcomingEvents.map((event: any) => (
                  <Link className="command-list-item" href={`/events/${event.slug}`} key={event.id}>
                    <strong>{event.title}</strong>
                    <span>{[event.event_date, event.venue, event.location].filter(Boolean).join(" • ")}</span>
                  </Link>
                ))
              ) : (
                <EmptyState text="No events added yet." />
              )}
            </div>
          </CommandPanel>

          <CommandPanel title="Latest feedback">
            <div className="command-list">
              {data.latestFeedback.length ? (
                data.latestFeedback.map((item: any) => (
                  <div className="command-list-item" key={item.id}>
                    <strong>{item.title || item.name || "Anonymous feedback"}</strong>
                    <span>{item.message || item.quote || item.feedback || "Feedback received."}</span>
                  </div>
                ))
              ) : (
                <EmptyState text="No feedback yet." />
              )}
            </div>
          </CommandPanel>
        </div>

        <aside>
          <CommandPanel title="Quick actions">
            <QuickActions />
          </CommandPanel>

          <CommandPanel title="Recent media">
            {data.latestGallery.length ? (
              <div className="command-media-grid">
                {data.latestGallery.map((item: any) => (
                  <img src={item.media_url || item.url || item.image} alt="" key={item.id} />
                ))}
              </div>
            ) : (
              <EmptyState text="No media uploaded yet." />
            )}
          </CommandPanel>

          <CommandPanel title="Latest legacy messages">
            <div className="command-list">
              {data.latestLegacyMessages.length ? (
                data.latestLegacyMessages.map((item: any) => (
                  <div className="command-list-item" key={item.id}>
                    <strong>{item.name || "Anonymous"}</strong>
                    <span>{item.message || "Legacy message received."}</span>
                  </div>
                ))
              ) : (
                <EmptyState text="No legacy messages yet." />
              )}
            </div>
          </CommandPanel>
        </aside>
      </div>
    </main>
  );
}

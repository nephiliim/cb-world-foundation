import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminEventsPage() {
  return (
    <AdminShell title="Events" subtitle="Create one event and use it across news, gallery, homepage and community impact.">
      <div className="admin-v2-card">
        <h2>Add event</h2>
        <p className="admin-v2-muted">
          Add school visits, awareness events, community work, memorial events and bleed kit support activity.
        </p>

        <form className="admin-form" action="/api/admin/events" method="post">
          <input name="title" placeholder="Event title e.g. Knife Crime Awareness Day – Haverstock Secondary School" required />
          <input name="event_date" type="date" />
          <input name="venue" placeholder="Venue e.g. Haverstock Secondary School" />
          <input name="location" placeholder="Location e.g. Camden, London" />
          <input name="postcode" placeholder="Postcode" />
          <select name="category" defaultValue="School Visit">
            <option>School Visit</option>
            <option>Community Event</option>
            <option>Awareness Campaign</option>
            <option>Bleed Kit Support</option>
            <option>Memorial Event</option>
            <option>Fundraiser</option>
          </select>
          <textarea name="summary" placeholder="Short summary for event cards" />
          <textarea name="description" placeholder="Full event story" />
          <input name="cover_image" placeholder="Cover image URL" />
          <input name="video_url" placeholder="Video URL" />
          <textarea name="gallery_urls" placeholder="Gallery image URLs, one per line" />

          <div className="admin-form-grid">
            <input name="impact_young_people" type="number" placeholder="Young people reached" />
            <input name="impact_families" type="number" placeholder="Families supported" />
            <input name="impact_volunteers" type="number" placeholder="Volunteers involved" />
            <input name="bleed_kits_supported" type="number" placeholder="Bleed kits supported" />
          </div>

          <input name="tags" placeholder="Tags separated by commas" />
          <select name="status" defaultValue="published">
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>

          <label className="admin-checkbox">
            <input name="featured" type="checkbox" value="true" /> Feature on homepage
          </label>

          <button className="admin-v2-button" type="submit">Save Event</button>
        </form>
      </div>
    </AdminShell>
  );
}

import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminCmsStyles } from "@/components/admin/AdminCmsStyles";

const cards = [
  ["Gallery", "Upload photos and videos from events, campaigns and memories.", "/admin/gallery"],
  ["News", "Create updates, appeals and announcements.", "/admin/news"],
  ["Events", "Publish awareness events and community activities.", "/admin/events"],
  ["Feedback", "Manage anonymous testimonials and support messages.", "/admin/feedback"],
  ["Legacy Wall", "Moderate messages before they go public.", "/admin/legacy-wall"],
  ["Settings", "Prepare editable homepage and brand settings.", "/admin/settings"],
];

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Admin Dashboard" subtitle="Manage CB’S WORLD Foundation Charity content from one place.">
      <AdminCmsStyles />
      <div className="admin-cms-grid">
        {cards.map(([title, body, href]) => (
          <article className="admin-cms-card" key={href}>
            <h2 style={{ marginTop: 0 }}>{title}</h2>
            <p style={{ color: "#b7cdec" }}>{body}</p>
            <Link className="admin-cms-button" href={href}>Open</Link>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}

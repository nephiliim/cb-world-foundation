import { AdminShell } from "@/components/admin/AdminShell";

const cards = [
  ["Gallery", "Upload photos and videos", "/admin/gallery"],
  ["News", "Publish updates", "/admin/news"],
  ["Events", "Manage awareness events", "/admin/events"],
  ["Feedback", "Approve anonymous highlights", "/admin/feedback"],
  ["Legacy Wall", "Moderate messages", "/admin/legacy-wall"],
  ["Settings", "Homepage and impact settings", "/admin/settings"],
];

export default function AdminDashboard() {
  return (
    <AdminShell title="Admin Dashboard">
      <div className="admin-grid">
        {cards.map(([title, text, href]) => (
          <a className="admin-card" href={href} key={href}>
            <h2>{title}</h2><p>{text}</p><span>Open →</span>
          </a>
        ))}
      </div>
    </AdminShell>
  );
}

import { AdminShell } from "@/components/admin/AdminShell";
import { AdminActionCard, AdminStatCard } from "@/components/admin/AdminCards";
import { adminStats } from "@/data/admin";

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Admin Dashboard" subtitle="Manage CB’S WORLD Foundation Charity content from one place.">
      <div className="admin-v2-grid">{adminStats.map((item) => <AdminStatCard key={item.label} {...item} />)}</div>
      <div className="admin-v2-actions-grid">
        <AdminActionCard title="Add gallery media" body="Upload photos or videos from events, campaigns and memories." action="Open Gallery" />
        <AdminActionCard title="Post news update" body="Create a public update about events, campaigns or foundation news." action="Create Post" />
        <AdminActionCard title="Review feedback" body="Turn private messages into anonymous public highlights." action="Review Feedback" />
      </div>
    </AdminShell>
  );
}

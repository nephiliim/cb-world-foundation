import { AdminShell } from "@/components/admin/AdminShell";

export default function AdmineventsPage() {
  return (
    <AdminShell title="Events">
      <section className="admin-panel">
        <h2>Events Manager</h2>
        <p>This module is ready for Supabase-backed create, edit, approve and publish actions.</p>
        <form className="admin-form">
          <input placeholder="Title" />
          <textarea placeholder="Description, caption or content" rows={6} />
          <select><option>Draft</option><option>Published</option><option>Pending approval</option><option>Approved</option></select>
          <button type="button">Save</button>
        </form>
      </section>
    </AdminShell>
  );
}

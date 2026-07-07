import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminBleedKitsPage() {
  return (
    <AdminShell title="Bleed Kits" subtitle="Add and manage public bleed control kit locations.">
      <form className="admin-v2-form" action="/api/admin/bleed-kits" method="post">
        <label>Kit name<input name="name" placeholder="Example: Community Centre Bleed Kit" /></label>
        <label>Address<textarea name="address" placeholder="Full address" /></label>
        <label>Area<input name="area" placeholder="Coventry, London, Birmingham..." /></label>
        <label>Available hours<input name="available_hours" placeholder="24/7, office hours, event only..." /></label>
        <label>Latitude<input name="latitude" placeholder="52.4068" /></label>
        <label>Longitude<input name="longitude" placeholder="-1.5197" /></label>
        <label>Notes<textarea name="notes" placeholder="Location notes, access details, training info" /></label>
        <label>Status<select name="status"><option value="active">Active</option><option value="pending">Pending</option><option value="maintenance">Maintenance</option></select></label>
        <button className="admin-v2-button" type="submit">Save Kit</button>
      </form>
      <p className="admin-v2-note">This page is ready for the next step: turning this form into a live client-side save action with admin key headers.</p>
    </AdminShell>
  );
}

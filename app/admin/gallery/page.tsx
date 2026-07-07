import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminGalleryPage() {
  return (
    <AdminShell title="Gallery Manager" subtitle="Upload and organise photos/videos for the public gallery.">
      <div className="admin-v2-panel">
        <h2>Add media</h2>
        <p>This is the admin CMS layout. Next step is wiring this form to Supabase Storage.</p>
        <form className="admin-v2-form">
          <label>Title<input placeholder="Knife crime awareness event" /></label>
          <label>Category<select><option>Legacy</option><option>Awareness</option><option>Community Work</option><option>Videos</option></select></label>
          <label>Caption<textarea placeholder="Write the story behind this photo or video." /></label>
          <label>Media file<input type="file" accept="image/*,video/*" /></label>
          <button type="button">Save as draft</button>
        </form>
      </div>
    </AdminShell>
  );
}

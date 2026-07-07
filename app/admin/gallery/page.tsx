import { AdminShell } from "@/components/admin/AdminShell";
import { CmsManager } from "@/components/admin/CmsManager";

export default function AdminGalleryPage() {
  return (
    <AdminShell title="Gallery CMS" subtitle="Add photos, videos and campaign media without editing code.">
      <CmsManager
        module="gallery"
        title="Gallery media"
        description="Use image/video URLs for now. Next step can add direct Supabase Storage upload."
        previewField="image_url"
        fields={[
          { name: "title", label: "Title", placeholder: "Knife crime awareness event" },
          { name: "category", label: "Category", type: "select", options: ["Claudyo", "Awareness", "Community", "Videos", "Bleed Kits", "Family", "Memorial"] },
          { name: "media_type", label: "Media type", type: "select", options: ["image", "video"] },
          { name: "image_url", label: "Image / thumbnail URL", type: "url" },
          { name: "video_url", label: "Video URL", type: "url" },
          { name: "description", label: "Caption", type: "textarea", placeholder: "Write the story behind this image or video..." },
          { name: "status", label: "Status", type: "select", options: ["published", "draft"] },
        ]}
      />
    </AdminShell>
  );
}

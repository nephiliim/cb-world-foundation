import { AdminShell } from "@/components/admin/AdminShell";
import { CmsManager } from "@/components/admin/CmsManager";

export default function AdminEventsPage() {
  return (
    <AdminShell
      title="Events CMS"
      subtitle="Create, edit and publish community events."
    >
      <CmsManager
        module="events"
        title="Events"
        description="Manage school visits, campaigns and community events."
        previewField="cover_image"
        fields={[
          { name: "title", label: "Title" },
          { name: "slug", label: "Slug" },
          { name: "summary", label: "Summary", type: "textarea" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "event_date", label: "Event Date", type: "date" },
          { name: "venue", label: "Venue" },
          { name: "location", label: "Location" },
          { name: "postcode", label: "Postcode" },
          {
            name: "category",
            label: "Category",
            type: "select",
            options: [
              "School Visit",
              "Community Event",
              "Awareness Campaign",
              "Bleed Kit Support",
              "Memorial Event",
              "Fundraiser",
            ],
          },
          { name: "cover_image", label: "Cover Image URL", type: "url" },
          { name: "video_url", label: "Video URL", type: "url" },
          { name: "gallery_urls", label: "Gallery URLs", type: "textarea" },
          { name: "impact_young_people", label: "Young People" },
          { name: "impact_families", label: "Families" },
          { name: "impact_volunteers", label: "Volunteers" },
          { name: "bleed_kits_supported", label: "Bleed Kits" },
          { name: "tags", label: "Tags" },
          {
            name: "featured",
            label: "Featured",
            type: "select",
            options: ["false", "true"],
          },
          {
            name: "status",
            label: "Status",
            type: "select",
            options: ["draft", "published"],
          },
        ]}
      />
    </AdminShell>
  );
}
import { AdminShell } from "@/components/admin/AdminShell";
import { CmsManager } from "@/components/admin/CmsManager";

export default function AdminEventsPage() {
  return (
    <AdminShell title="Events CMS" subtitle="Manage awareness events, community work and future campaigns.">
      <CmsManager
        module="events"
        title="Events"
        description="Add past or upcoming events. Published events can be shown on the website."
        previewField="image_url"
        fields={[
          { name: "title", label: "Event title", placeholder: "Knife Crime Awareness Event" },
          { name: "date", label: "Event date", type: "date" },
          { name: "location", label: "Location", placeholder: "London" },
          { name: "image_url", label: "Event image URL", type: "url" },
          { name: "registration_url", label: "Registration / info URL", type: "url" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "status", label: "Status", type: "select", options: ["published", "draft"] },
        ]}
      />
    </AdminShell>
  );
}

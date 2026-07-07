import { AdminShell } from "@/components/admin/AdminShell";
import { CmsManager } from "@/components/admin/CmsManager";

export default function AdminSettingsPage() {
  return (
    <AdminShell title="Site Settings" subtitle="Manage editable website settings and homepage text.">
      <CmsManager
        module="settings"
        title="Settings"
        description="Add simple key/value settings. Later these can power the homepage automatically."
        previewField="image_url"
        fields={[
          { name: "title", label: "Setting name", placeholder: "homepage_hero_title" },
          { name: "value", label: "Value", type: "textarea" },
          { name: "category", label: "Category", type: "select", options: ["Homepage", "Donation", "Contact", "Brand", "Impact"] },
          { name: "status", label: "Status", type: "select", options: ["published", "draft"] },
        ]}
      />
    </AdminShell>
  );
}

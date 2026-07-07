import { AdminShell } from "@/components/admin/AdminShell";
import { CmsManager } from "@/components/admin/CmsManager";

export default function AdminLegacyWallPage() {
  return (
    <AdminShell title="Legacy Wall CMS" subtitle="Moderate and publish messages of love and remembrance.">
      <CmsManager
        module="legacy-wall"
        title="Legacy messages"
        description="Approve respectful messages before they appear publicly."
        previewField="image_url"
        fields={[
          { name: "name", label: "Display name", placeholder: "Anonymous" },
          { name: "relationship", label: "Relationship / label", placeholder: "Friend / Family / Community" },
          { name: "message", label: "Message", type: "textarea" },
          { name: "image_url", label: "Optional photo URL", type: "url" },
          { name: "status", label: "Status", type: "select", options: ["published", "draft"] },
        ]}
      />
    </AdminShell>
  );
}

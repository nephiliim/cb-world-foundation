import { AdminShell } from "@/components/admin/AdminShell";
import { CmsManager } from "@/components/admin/CmsManager";

export default function AdminLegacyWallPage() {
  return (
    <AdminShell
      title="Legacy Wall CMS"
      subtitle="Approve, edit and manage Legacy Wall messages."
    >
      <CmsManager
        module="legacy"
        title="Legacy Messages"
        description="Messages submitted by visitors awaiting moderation."
        fields={[
          {
            name: "name",
            label: "Display Name",
          },
          {
            name: "message",
            label: "Message",
            type: "textarea",
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
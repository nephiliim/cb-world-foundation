import { AdminShell } from "@/components/admin/AdminShell";
import { CmsManager } from "@/components/admin/CmsManager";

export default function AdminFeedbackPage() {
  return (
    <AdminShell title="Feedback CMS" subtitle="Add anonymised feedback and testimonials without personal names.">
      <CmsManager
        module="feedback"
        title="Anonymous feedback"
        description="Keep names and personal details private. Use role labels like 'Bereaved parent' or 'Community member'."
        previewField="image_url"
        fields={[
          { name: "quote", label: "Quote / feedback", type: "textarea", placeholder: "The support meant the world to me..." },
          { name: "relationship", label: "Anonymous label", placeholder: "Bereaved parent" },
          { name: "category", label: "Category", type: "select", options: ["Support", "Awareness", "Community", "Legacy", "Bereavement"] },
          { name: "image_url", label: "Optional image URL", type: "url" },
          { name: "status", label: "Status", type: "select", options: ["published", "draft"] },
        ]}
      />
    </AdminShell>
  );
}

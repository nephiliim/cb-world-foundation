import { AdminShell } from "@/components/admin/AdminShell";
import { CmsManager } from "@/components/admin/CmsManager";

export default function AdminNewsPage() {
  return (
    <AdminShell title="News CMS" subtitle="Publish foundation updates, appeals and community posts.">
      <CmsManager
        module="news"
        title="News articles"
        description="Create news updates that can later be pulled onto the live News page."
        previewField="image_url"
        fields={[
          { name: "title", label: "Headline", placeholder: "Justice appeal continues" },
          { name: "slug", label: "Slug", placeholder: "justice-appeal-continues" },
          { name: "date", label: "Date", type: "date" },
          { name: "image_url", label: "Featured image URL", type: "url" },
          { name: "excerpt", label: "Short summary", type: "textarea" },
          { name: "content", label: "Full article", type: "textarea" },
          { name: "status", label: "Status", type: "select", options: ["published", "draft"] },
        ]}
      />
    </AdminShell>
  );
}

import { AdminShell } from "@/components/admin/AdminShell";
import { HomePageSettings } from "@/components/admin/HomePageSettings";

export default function AdminSettingsPage() {
  return (
    <AdminShell
      title="Homepage CMS"
      subtitle="Manage the homepage without touching code."
    >
      <HomePageSettings />
    </AdminShell>
  );
}
import { AdminShell } from "@/components/admin/AdminShell";
import { MediaLibraryClient } from "@/components/admin/MediaLibraryClient";
import { getAdminMediaLibrary } from "@/lib/mediaLibrary";

export const dynamic = "force-dynamic";

export default async function AdminMediaPage() {
  const media = await getAdminMediaLibrary();

  return (
    <AdminShell title="Media Library" subtitle="Upload once, reuse everywhere across events, news, gallery and homepage.">
      <MediaLibraryClient initialMedia={media} />
    </AdminShell>
  );
}

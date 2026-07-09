import { supabase } from "@/lib/supabase";
import { supabaseAdmin } from "@/lib/adminAuth";

export type MediaItem = {
  id: string;
  title: string;
  description?: string | null;
  file_name?: string | null;
  file_url: string;
  file_path?: string | null;
  file_type?: string | null;
  mime_type?: string | null;
  category?: string | null;
  tags?: string[] | null;
  uploaded_by?: string | null;
  status?: string | null;
  created_at?: string;
};

export async function getMediaLibrary() {
  const { data, error } = await supabase
    .from("cms_media")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Media library fetch error", error);
    return [];
  }

  return (data || []) as MediaItem[];
}

export async function getAdminMediaLibrary() {
  const { data, error } = await supabaseAdmin
    .from("cms_media")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Admin media library fetch error", error);
    return [];
  }

  return (data || []) as MediaItem[];
}

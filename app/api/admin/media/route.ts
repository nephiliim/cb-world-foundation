import { NextResponse } from "next/server";
import { requireAdminKey, supabaseAdmin } from "@/lib/adminAuth";

function getFileType(mimeType = "") {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  if (mimeType.startsWith("audio/")) return "audio";
  if (mimeType.includes("pdf")) return "document";
  return "file";
}

export async function GET(request: Request) {
  try {
    requireAdminKey(request);

    const { data, error } = await supabaseAdmin
      .from("cms_media")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });

    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    requireAdminKey(request);
    const body = await request.json();

    const payload = {
      title: body.title || body.file_name || "Untitled media",
      description: body.description || "",
      file_name: body.file_name || body.name || "",
      file_url: body.file_url || body.url,
      file_path: body.file_path || body.path || "",
      file_type: body.file_type || getFileType(body.mime_type || body.type || ""),
      mime_type: body.mime_type || body.type || "",
      category: body.category || "General",
      tags: typeof body.tags === "string"
        ? body.tags.split(",").map((tag: string) => tag.trim()).filter(Boolean)
        : body.tags || [],
      uploaded_by: body.uploaded_by || "Admin",
      status: body.status || "active",
    };

    if (!payload.file_url) {
      return NextResponse.json({ error: "file_url is required" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("cms_media")
      .upsert(payload, { onConflict: "file_url" })
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Media save error", error);
    return NextResponse.json({ error: "Unauthorized or failed to save media" }, { status: 401 });
  }
}

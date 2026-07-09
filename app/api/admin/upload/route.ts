import { NextResponse } from "next/server";
import { requireAdminKey, supabaseAdmin } from "@/lib/adminAuth";

function safeName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getFileType(mimeType = "") {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  if (mimeType.startsWith("audio/")) return "audio";
  if (mimeType.includes("pdf")) return "document";
  return "file";
}

export async function POST(request: Request) {
  try {
    requireAdminKey(request);

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const folder = safeName(String(formData.get("folder") || "media-library"));
    const category = String(formData.get("category") || "General");
    const tags = String(formData.get("tags") || "");
    const description = String(formData.get("description") || "");
    const filename = `${folder}/${Date.now()}-${safeName(file.name)}`;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const { error: uploadError } = await supabaseAdmin.storage
      .from("cb-world-media")
      .upload(filename, buffer, {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 400 });
    }

    const { data: publicData } = supabaseAdmin.storage
      .from("cb-world-media")
      .getPublicUrl(filename);

    const publicUrl = publicData.publicUrl;

    const { data: mediaData, error: mediaError } = await supabaseAdmin
      .from("cms_media")
      .upsert(
        {
          title: file.name.replace(/\.[^/.]+$/, ""),
          description,
          file_name: file.name,
          file_url: publicUrl,
          file_path: filename,
          file_type: getFileType(file.type),
          mime_type: file.type,
          category,
          tags: tags ? tags.split(",").map((tag) => tag.trim()).filter(Boolean) : [],
          uploaded_by: "Admin",
          status: "active",
        },
        { onConflict: "file_url" }
      )
      .select()
      .single();

    if (mediaError) {
      return NextResponse.json({ error: mediaError.message }, { status: 400 });
    }

    return NextResponse.json({
      url: publicUrl,
      path: filename,
      name: file.name,
      type: file.type,
      size: file.size,
      media: mediaData,
    });
  } catch (error) {
    console.error("Upload error", error);
    return NextResponse.json({ error: "Unauthorized or upload failed" }, { status: 401 });
  }
}

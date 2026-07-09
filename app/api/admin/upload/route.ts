import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/adminAuth";

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
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const folder = safeName(String(formData.get("folder") || "media-library"));
    const filename = ${folder}/${Date.now()}-${safeName(file.name)};

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

    await supabaseAdmin.from("cms_media").upsert(
      {
        title: file.name.replace(/\.[^/.]+$/, ""),
        file_name: file.name,
        file_url: publicUrl,
        file_path: filename,
        file_type: getFileType(file.type),
        mime_type: file.type,
        category: "General",
        uploaded_by: "Admin",
        status: "active",
      },
      { onConflict: "file_url" }
    );

    return NextResponse.json({
      url: publicUrl,
      path: filename,
      name: file.name,
      type: file.type,
      size: file.size,
    });
  } catch (error) {
    console.error("Upload error", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
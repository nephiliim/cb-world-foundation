import { NextResponse } from "next/server";
import { requireAdminKey, supabaseAdmin } from "@/lib/adminAuth";

function safeName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function POST(request: Request) {
  try {
    requireAdminKey(request);

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const folder = safeName(String(formData.get("folder") || "uploads"));
    const filename = `${folder}/${Date.now()}-${safeName(file.name)}`;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const { error } = await supabaseAdmin.storage
      .from("cb-world-media")
      .upload(filename, buffer, {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const { data } = supabaseAdmin.storage
      .from("cb-world-media")
      .getPublicUrl(filename);

    return NextResponse.json({
      url: data.publicUrl,
      path: filename,
      name: file.name,
      type: file.type,
      size: file.size,
    });
  } catch (error) {
    console.error("Upload error", error);
    return NextResponse.json({ error: "Unauthorized or upload failed" }, { status: 401 });
  }
}

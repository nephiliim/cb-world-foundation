import { NextResponse } from "next/server";
import { requireAdminKey, supabaseAdmin } from "@/lib/adminAuth";

const BUCKET = "cms-media";

function safeFileName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function POST(request: Request) {
  try {
    requireAdminKey(request);

    const formData = await request.formData();
    const file = formData.get("file");
    const folder = String(formData.get("folder") || "gallery");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const cleanName = safeFileName(file.name || "upload");
    const path = `${folder}/${Date.now()}-${cleanName}`;

    const { error } = await supabaseAdmin.storage
      .from(BUCKET)
      .upload(path, buffer, {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const { data } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(path);

    return NextResponse.json({
      path,
      url: data.publicUrl,
      type: file.type,
      name: file.name,
    });
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

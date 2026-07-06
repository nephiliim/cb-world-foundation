import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (message.length > 600) {
    return NextResponse.json({ error: "Message is too long" }, { status: 400 });
  }

  const { error } = await supabase.from("legacy_messages").insert({
    name,
    email,
    message,
    approved: false,
  });

  if (error) {
    console.error("Legacy message insert error", error);
    return NextResponse.json({ error: "Could not submit message" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

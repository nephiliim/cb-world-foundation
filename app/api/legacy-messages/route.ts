
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const { data, error } = await supabase
    .from("legacy_messages")
    .select("id, name, message, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ messages: data || [] });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" && body.name.trim()
        ? body.name.trim()
        : "Anonymous";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!message) {
      return NextResponse.json(
        { error: "Please write a message before submitting." },
        { status: 400 }
      );
    }

    if (name.length > 80 || message.length > 1000) {
      return NextResponse.json(
        { error: "The message is too long." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("legacy_messages")
      .insert({
        name,
        message,
        approved: false,
      })
      .select("id, name, message, approved, created_at")
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "Thank you. Your message has been received and is awaiting approval.",
      data,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
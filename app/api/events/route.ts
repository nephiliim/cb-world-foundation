import { NextResponse } from "next/server";
import { getPublishedEvents } from "@/lib/events";

export async function GET() {
  const events = await getPublishedEvents();
  return NextResponse.json({ events });
}

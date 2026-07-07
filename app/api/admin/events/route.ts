import { adminCreate, adminDelete, adminList, adminUpdate } from "@/lib/cmsApi";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { return adminList("events", request); }
export async function POST(request: Request) { return adminCreate("events", request); }
export async function PATCH(request: Request) { return adminUpdate("events", request); }
export async function DELETE(request: Request) { return adminDelete("events", request); }

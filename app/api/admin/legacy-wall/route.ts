import { adminCreate, adminDelete, adminList, adminUpdate } from "@/lib/cmsApi";
export const dynamic = "force-dynamic";
export async function GET(request: Request) { return adminList("legacy", request); }
export async function POST(request: Request) { return adminCreate("legacy", request); }
export async function PATCH(request: Request) { return adminUpdate("legacy", request); }
export async function DELETE(request: Request) { return adminDelete("legacy", request); }

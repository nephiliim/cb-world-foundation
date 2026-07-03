import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "subject", "message"];

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const missingField = requiredFields.find((field) => !body[field] || String(body[field]).trim().length < 2);

  if (missingField) {
    return NextResponse.json({ error: `Missing ${missingField}` }, { status: 400 });
  }

  console.log("New CB's World Foundation enquiry", {
    name: body.name,
    email: body.email,
    enquiryType: body.enquiryType,
    subject: body.subject,
    message: body.message
  });

  return NextResponse.json({ success: true });
}

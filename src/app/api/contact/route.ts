import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

/**
 * Contact endpoint. Validates the payload server-side with the shared schema.
 * Wire an email provider (Resend, Postmark, …) where indicated to go live.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation échouée.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  // TODO: integrate an email/CRM provider here, e.g.
  // await resend.emails.send({ ... })

  return NextResponse.json({ ok: true }, { status: 200 });
}

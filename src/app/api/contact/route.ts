import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

// No delivery provider is configured. Never acknowledge an undelivered enquiry.
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Direct form delivery is not available. Please contact us by email or WhatsApp.",
      email: SITE.email,
      whatsappUrl: SITE.whatsappUrl,
    },
    { status: 503 },
  );
}

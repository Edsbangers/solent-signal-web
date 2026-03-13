import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Redirect to SignalPost OAuth flow
export async function GET(req: NextRequest) {
  const spUrl =
    process.env.SIGNALPOST_API_URL || "https://signalpost-api.vercel.app";
  const spKey = process.env.SIGNALPOST_API_KEY;

  if (!spKey) {
    return NextResponse.json(
      { error: "SIGNALPOST_API_KEY not configured." },
      { status: 500 }
    );
  }

  const host = req.headers.get("host") || "solentsignal.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const returnUrl = `${protocol}://${host}/admin/social`;

  const connectUrl = `${spUrl}/api/oauth/linkedin/connect?api_key=${encodeURIComponent(spKey)}&return_url=${encodeURIComponent(returnUrl)}`;

  return NextResponse.redirect(connectUrl);
}

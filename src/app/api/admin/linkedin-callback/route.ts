import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const error = req.nextUrl.searchParams.get("error");

  if (error) {
    return NextResponse.json(
      { error: `LinkedIn OAuth error: ${error}`, detail: req.nextUrl.searchParams.get("error_description") },
      { status: 400 }
    );
  }

  if (!code) {
    return NextResponse.json({ error: "No authorization code received." }, { status: 400 });
  }

  // Validate CSRF state
  const storedState = req.cookies.get("linkedin_oauth_state")?.value;
  if (!storedState || storedState !== state) {
    return NextResponse.json({ error: "Invalid OAuth state. Please try again." }, { status: 400 });
  }

  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "LinkedIn OAuth credentials not configured." },
      { status: 500 }
    );
  }

  const host = req.headers.get("host") || "solentsignal.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const redirectUri = `${protocol}://${host}/api/admin/linkedin-callback`;

  // Exchange code for access token
  const tokenRes = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!tokenRes.ok) {
    const errText = await tokenRes.text();
    return NextResponse.json(
      { error: "Token exchange failed.", detail: errText },
      { status: 502 }
    );
  }

  const tokenData = (await tokenRes.json()) as {
    access_token: string;
    expires_in: number;
    refresh_token?: string;
    scope: string;
  };

  // Get user profile
  const userRes = await fetch("https://api.linkedin.com/v2/userinfo", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });

  const userData = userRes.ok
    ? ((await userRes.json()) as { sub: string; name: string })
    : { sub: "unknown", name: "Unknown" };

  // Store token in Supabase
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const expiresAt = new Date(Date.now() + tokenData.expires_in * 1000).toISOString();

  await supabase.from("social_tokens").upsert(
    {
      platform: "linkedin",
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token || null,
      expires_at: expiresAt,
      scope: tokenData.scope,
      user_id: userData.sub,
      user_name: userData.name,
    },
    { onConflict: "platform" }
  );

  // Clear state cookie and redirect to social admin
  const res = NextResponse.redirect(new URL("/admin/social?connected=linkedin", req.url));
  res.cookies.delete("linkedin_oauth_state");

  return res;
}

import { NextRequest, NextResponse } from "next/server";

/**
 * Protects /admin/* pages and /api/admin/* routes.
 * Checks for an `admin_token` cookie whose value matches ADMIN_TOKEN env var.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow the login page and login API through
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const token = req.cookies.get("admin_token")?.value;
  const expected = process.env.ADMIN_TOKEN;

  if (!expected || token !== expected) {
    // API routes → 401
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // Admin pages → redirect to login
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

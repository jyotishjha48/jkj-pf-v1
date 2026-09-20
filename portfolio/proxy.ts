import { NextRequest, NextResponse } from "next/server";

// ── Admin password for /keystatic ─────────────────────────────────────────
// Change this to your own password. Keep it secret.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "jkj-admin-2026";
const COOKIE_NAME = "jkj-admin-auth";

export function proxy(request: NextRequest) {

  const { pathname } = request.nextUrl;

  // Only protect /keystatic and /api/keystatic routes
  if (
    pathname.startsWith("/keystatic") ||
    pathname.startsWith("/api/keystatic")
  ) {
    // Check if auth cookie is valid
    const cookie = request.cookies.get(COOKIE_NAME);
    if (cookie?.value === ADMIN_PASSWORD) {
      return NextResponse.next();
    }

    // If it's an API call without auth, return 401
    if (pathname.startsWith("/api/keystatic")) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Otherwise show the login page
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin-login";
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/keystatic/:path*", "/api/keystatic/:path*"],
};

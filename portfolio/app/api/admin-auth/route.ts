import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = "jkj-admin-2026";
const COOKIE_NAME = "jkj-admin-auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password === ADMIN_PASSWORD) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE_NAME, ADMIN_PASSWORD, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}

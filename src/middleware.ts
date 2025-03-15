import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const user = req.nextauth?.token;

    if (!user || !user.role) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const pathname = req.nextUrl.pathname;

    // ✅ Admin has full access
    if (user.role === "ADMIN") {
      return NextResponse.next();
    }

    // ✅ Paths that "USER" role can access
    const allowedUserPaths = [
      "/dashboard/assets",
      "/dashboard/booking",
      "/dashboard/messages",
      "/dashboard/settings",
    ];

    // ⛔ Block "USER" if they try to access restricted dashboard pages
    if (pathname.startsWith("/dashboard") && user.role === "USER") {
      if (!allowedUserPaths.includes(pathname)) {
        return NextResponse.redirect(new URL("/dashboard/booking", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Ensures only authenticated users can access protected routes
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"], // Middleware applies to all dashboard routes
};

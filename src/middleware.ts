// // export { default } from "next-auth/middleware";

// // export const config = { matcher: ["/", "/dashboard/:path*"] };

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const user = req.nextauth.token;

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const pathname = req.nextUrl.pathname;

    // ✅ Admin has full access to all dashboard routes
    if (pathname.startsWith("/dashboard") && user.role === "ADMIN") {
      return NextResponse.next();
    }

    // ✅ Paths that USERS can access inside /dashboard
    const allowedUserPaths = [
      "/dashboard/booking",
      "/dashboard/messages",
      "/dashboard/settings",
    ];

    // ⛔ If a user (not admin) tries to access a restricted route
    if (
      pathname.startsWith("/dashboard") &&
      !allowedUserPaths.includes(pathname)
    )
    //  {
    //   return NextResponse.redirect(new URL("/dashboard/booking", req.url));
    // }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Ensures only authenticated users can access protected routes
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"], // Middleware applies to these routes
};

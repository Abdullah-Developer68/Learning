import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.json({
    success: true,
    message:
      "Middleware executed successfully and I have modifed requests starting with about path -> about/<path>!",
  });
  // if you do not want to use matcher in the config object then conditionals liek this give the same result
  if (request.nextURL.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/redirect", request.url));
  }
}
// instead of this conditional statements in the middleware can be used as well
export const config = {
  matcher: "/about/:path*",
};

// if matcher object is not used then the middleware will run for all paths

// headers can also be added  for req and res using nextResponse api view the next.js docs for this

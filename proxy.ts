import { NextRequest, NextResponse } from "next/server";
import { TOKEN_NAME } from "./constants";

export default function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get(TOKEN_NAME)?.value;
  console.log(path);
  if (path.startsWith("/dashboard")) {
    if (!token) return NextResponse.redirect(new URL("/login", req.url));
  }
  if (path == "/") {
    if (token) return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  return NextResponse.next();
}

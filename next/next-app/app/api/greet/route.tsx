// app/api/greet/route.ts

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Example: /api/greet?name=Liya
  const name = request.nextUrl.searchParams.get("name") || "Stranger";

  return Response.json({ message: `Hello, ${name}!` });
}

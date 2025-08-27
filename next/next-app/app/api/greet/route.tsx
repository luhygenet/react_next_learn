// app/api/greet/route.ts

import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   // Example: /api/greet?name=Liya
//   const name = request.nextUrl.searchParams.get("name") || "Stranger";

//   return Response.json({ message: `Hello, ${name}!` });
// }

// example 2
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  // query is "hello" for /api/search?query=hello
  return Response.json({ message: `Hello, ${query}!` });
}
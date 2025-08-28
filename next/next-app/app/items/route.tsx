// app/items/route.ts
export async function POST(request: Request) {
  // Expecting formData body
  const formData = await request.formData()
  const name = formData.get("name")
  const email = formData.get("email")

  return Response.json({
    message: "Received FormData",
    name,
    email,
  })
}

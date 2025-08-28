// // app/items/route.ts

//formdata accepting version
// export async function POST(request: Request) {
//   // Expecting formData body
//   const formData = await request.formData()
//   const name = formData.get("name")
//   const email = formData.get("email")

//   return Response.json({
//     message: "Received FormData",
//     name,
//     email,
//   })
// }

// app/items/route.ts
//json accepting version
export async function POST(request: Request) {
  // Expecting formData body
  const body = await request.json()
  const {name,email} = body

  return Response.json({
    message: "Received FormDta",
    name,
    email,
  })
}

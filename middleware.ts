import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"
import { v4 as uuidv4 } from "uuid"

export default withAuth(
  function middleware(req) {
    const response = NextResponse.next()
    if (!req.cookies.has("anonymousId")) {
      const uniqueId = uuidv4()
      response.cookies.set("anonymousId", uniqueId)
    }
    return response
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        console.log("token: ", token)
        console.log("pathname: ", req.nextUrl.pathname)
        if (req.nextUrl.pathname.startsWith("/space") && token === null) {
          return false
        }
        return true
      },
    },
  }
)

// export default withAuth(
//   // function middleware(req: NextRequest) {
//   //   const response = NextResponse.next()
//   //   if (!req.cookies.has("anonymousId")) {
//   //     const uniqueId = uuidv4()
//   //     response.cookies.set("anonymousId", uniqueId)
//   //   }
//   //   return response
//   // },
//   {
//     callbacks: {
//       authorized({ req, token }) {
//         if (req.nextUrl.pathname.startsWith("/space")) {
//           console.log("pathname: ", req.nextUrl.pathname)
//           console.log("token: ", token)
//           return NextResponse.redirect("http://localhost:3000/login")
//         }
//         return true
//       },
//     },
//   }
// )

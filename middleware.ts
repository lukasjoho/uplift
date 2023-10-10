import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { v4 as uuidv4 } from "uuid"

export async function middleware(req: NextRequest) {
  let response = NextResponse.next()

  const { pathname } = req.nextUrl
  const protectedPaths = ["/space", "/spaces"]
  const matchesProtectedPaths = protectedPaths.some((path) =>
    pathname.startsWith(path)
  )
  const token = await getToken({ req })
  outerblock: if (matchesProtectedPaths) {
    if (!token) {
      const url = new URL(`/login`, req.url)
      url.searchParams.set("callbackUrl", encodeURI(req.url))
      response = NextResponse.redirect(url)
      break outerblock
    }
    const allowedSpaceSlugs = token?.spaces.map((space) => space.slug) || []
    const spaceSlug = pathname.split("/")[2]
    if (
      !allowedSpaceSlugs.some((slug) => slug === spaceSlug) &&
      !pathname.startsWith("/spaces") &&
      pathname !== "/space"
    ) {
      const url = new URL(`/unauthorized`, req.url)
      response = NextResponse.rewrite(url)
    }
  }

  if (!req.cookies.has("anonymousId")) {
    const uniqueId = uuidv4()
    response.cookies.set("anonymousId", uniqueId)
  }
  return response
}

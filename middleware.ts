import { NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

export function middleware(req: NextRequest) {
  if (!req.cookies.has("anonymousId")) {
    const response = NextResponse.next()
    const uniqueId = uuidv4()
    response.cookies.set("anonymousId", uniqueId)
    return response
  }
  return NextResponse.next()
}

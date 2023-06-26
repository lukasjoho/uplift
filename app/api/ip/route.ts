import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { headers }: any = request
  let ip = headers["x-real-ip"]
  if (!ip) {
    const forwardedFor = headers["x-forwarded-for"]
    if (Array.isArray(forwardedFor)) {
      ip = forwardedFor.at(0)
    } else {
      ip = forwardedFor?.split(",").at(0) ?? "Unknown"
    }
  }
  return NextResponse.json(ip)
}

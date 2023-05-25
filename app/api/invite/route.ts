import { NextRequest } from "next/server"

import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const body = await req.json()
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    })
    if (existingUser) {
      return new Response("User already a member", {
        status: 409,
        statusText: "user-exists",
      })
    }
    const existingInvite = await prisma.invite.findUnique({
      where: { email: body.email },
    })
    if (existingInvite) {
      return new Response("User already invited", {
        status: 409,
        statusText: "user-invited",
      })
    }
    const invite = await prisma.invite.create({
      data: {
        email: body.email,
      },
    })

    return new Response(JSON.stringify({ email: invite.email }), {
      status: 201,
    })
  } catch (error) {
    return new Response("Error inviting user")
  }
}

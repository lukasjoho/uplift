import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

import { prisma } from "@/lib/prisma"
import {
  EmailTemplate,
  EmailTemplateInvite,
} from "@/app/components/EmailTemplate"

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function GET(req: NextRequest) {
  const invites = await prisma.invite.findMany()
  return NextResponse.json(invites)
}

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
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: body.email,
        subject: "Your are invited to Uplift",
        react: EmailTemplateInvite({ firstName: "John" }),
      })
    } catch (error) {
      return new Response("Invite failed", {
        status: 500,
        statusText: "server-error",
      })
    }

    return new Response(JSON.stringify({ email: invite.email }), {
      status: 201,
    })
  } catch (error) {
    return new Response("Error inviting user")
  }
}

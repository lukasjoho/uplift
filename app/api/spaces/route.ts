import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  const userEmail = session?.user?.email
  try {
    const json = await request.json()

    const space = await prisma.space.create({
      data: {
        ...json,
        users: {
          connect: {
            email: userEmail,
          },
        },
        currentSpaceUsers: {
          connect: {
            email: userEmail,
          },
        },
      },
    })

    let json_response = {
      status: "success",
      data: {
        space,
      },
    }
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: any) {
    if (error.code === "P2002") {
      let error_response = {
        status: "failed",
        message: "A space with this name already exists",
      }
      return new NextResponse(JSON.stringify(error_response), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      })
    }
    let error_response = {
      status: "error",
      message: error.message,
    }
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function GET() {}

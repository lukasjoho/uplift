import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const json = await request.json()

    const workspace = await prisma.workspace.create({
      data: json,
    })

    let json_response = {
      status: "success",
      data: {
        workspace,
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
        message: "A workspace with this name already exists",
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

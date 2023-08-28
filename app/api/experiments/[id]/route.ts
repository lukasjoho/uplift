import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  try {
    const experiment = await prisma.experiment.findFirst({
      where: {
        id,
      },
    })
    if (!experiment) {
      throw { statusCode: 404, message: "Record not found" }
    }
    return NextResponse.json(experiment, {
      status: 200,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      {
        status: error.statusCode || 500,
      }
    )
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json()
    const id = params.id
    const experiment = await prisma.experiment.update({
      where: {
        id,
      },
      data,
    })
    if (!experiment) {
      throw { statusCode: 404, message: "Record not found" }
    }
    return NextResponse.json(experiment, {
      status: 200,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      {
        status: error.statusCode || 500,
      }
    )
  }
}

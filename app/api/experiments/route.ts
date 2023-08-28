import { NextRequest, NextResponse } from "next/server"
import { createExperiment } from "@/prisma/experiments"
import { Prisma } from "@prisma/client"

import { prisma } from "@/lib/prisma"

export async function GET() {
  const experiments = await prisma.experiment.findMany({
    orderBy: [
      {
        createdAt: "asc",
      },
    ],
    include: {
      decision: true,
      country: true,
      dri: true,
    },
  })
  return NextResponse.json(experiments)
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    if (!id) {
      throw new Error("ID not provided.")
    }

    const deleteExperiment = await prisma.experiment.delete({
      where: {
        id: id || "",
      },
    })
    return new NextResponse("Experiment deleted.", {
      status: 200,
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse(error.message || "Internal Server Error", {
        status: 500,
      })
    }
    return new NextResponse("Internal Server Error", {
      status: 500,
    })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()

    const experiment = await prisma.experiment.update({
      where: {
        id: body.id,
      },
      data: {
        ...body,
      },
    })
    return new NextResponse(JSON.stringify(experiment), {
      status: 200,
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse(error.message || "Internal Server Error", {
        status: 500,
      })
    }
    return new NextResponse("Internal Server Error", {
      status: 500,
    })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()

    const experiment = await prisma.experiment.create({
      data: json,
    })

    let json_response = {
      status: "success",
      data: {
        experiment,
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
        message: "Experiment with identifier already exists",
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

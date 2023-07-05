import { NextResponse } from "next/server"
import { createExperiment } from "@/prisma/experiments"

import { prisma } from "@/lib/prisma"

export async function GET() {
  const experiments = await prisma.experiment.findMany({
    include: {
      decision: true,
      country: true,
      dri: true,
    },
  })
  return NextResponse.json(experiments)
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

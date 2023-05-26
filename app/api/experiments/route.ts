import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

export async function GET() {
  const experiments = await prisma.experiment.findMany({
    include: {
      decision: true,
      country: true,
      status: true,
      dri: true,
    },
  })
  return NextResponse.json(experiments)
}

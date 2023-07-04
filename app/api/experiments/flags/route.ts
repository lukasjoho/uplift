import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

export async function GET() {
  const experiments = await prisma.experiment.findMany({
    select: {
      identifier: true,
      variants: true,
      isEnabled: true,
      startDate: true,
      endDate: true,
    },
    where: {
      isEnabled: true,
    },
  })
  return NextResponse.json(experiments)
}

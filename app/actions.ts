"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

import { Feedback } from "@/types/feedback"
import { getAuthSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function createFeedback(data: any) {
  try {
    const feedback = await prisma.feedback.create({ data })
    revalidatePath("/feedback")
    return {
      success: true,
      message: "Feedback created.",
    }
  } catch (error: unknown) {
    return {
      success: false,
      message: "Failed to create feedback.",
    }
  }
}

export async function getExperiments() {
  const session = await getAuthSession()
  const experiments = await prisma.experiment.findMany({
    include: {
      decision: true,
      country: true,
      dri: true,
      space: true,
    },
    where: {
      space: {
        slug: "uplift",
      },
    },
  })
  return experiments
}

export async function deleteExperiment(id: string) {
  try {
    await prisma.experiment.delete({
      where: {
        id,
      },
    })
    revalidateServerPath("space/uplift/dashboard")
    return {
      success: true,
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Internal Server Error",
    }
  }
}

export async function updateExperiment(data: any) {
  try {
    const experiment = await prisma.experiment.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    })
    revalidatePath("/space/uplift/dashboard")
    return {
      success: true,
    }
  } catch (error: unknown) {
    return {
      success: false,
    }
  }
}

export async function createVote(feedbackId: string) {
  const anonymousId = cookies().get("anonymousId")
  const dbVote = await prisma.vote.findUnique({
    where: {
      feedbackId_anonymousId: {
        feedbackId,
        anonymousId: anonymousId?.value || "",
      },
    },
  })
  if (dbVote) {
    await prisma.vote.delete({
      where: {
        feedbackId_anonymousId: {
          feedbackId,
          anonymousId: anonymousId?.value || "",
        },
      },
    })
    revalidatePath("/feedback")
    return
  }
  await prisma.vote.create({
    data: {
      feedback: { connect: { id: feedbackId } },
      voteType: "UP",
      anonymousId: anonymousId?.value,
    },
  })
  revalidatePath("/feedback")
  return
}

export async function assignCurrentSpace(user: any, spaceId: any) {
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      currentSpace: {
        connect: {
          id: spaceId,
        },
      },
    },
    include: {
      currentSpace: true,
    },
  })
  return updatedUser
}

export async function revalidateServerPath(path: string) {
  revalidatePath(path)
}

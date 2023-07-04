"use server"

import { revalidatePath } from "next/cache"

import { Feedback } from "@/types/feedback"
import { prisma } from "@/lib/prisma"

export async function createFeedback(values: any) {
  const feedback = await prisma.feedback.create({ data: values })
  revalidatePath("/feedback")
}

export async function createVote(feedbackId: any) {
  const feedback = await prisma.vote.create({
    data: {
      feedback: { connect: { id: feedbackId } },
      voteType: "UP",
    },
  })
  revalidatePath("/feedback")
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

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

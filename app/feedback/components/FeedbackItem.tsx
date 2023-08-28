import React, { FC } from "react"
import { cookies } from "next/headers"

import { prisma } from "@/lib/prisma"
import { Feedback } from "@/lib/types"
import { Card } from "@/components/ui/card"
import Text from "@/components/uplift/text"

import VoteItem from "./VoteItem"

interface FeedbackItemProps extends React.HTMLAttributes<HTMLDivElement> {
  feedback: Feedback
}

/* @ts-expect-error Server Component */
const FeedbackItem: FC<FeedbackItemProps> = async ({ feedback }) => {
  const anonymousId = cookies().get("anonymousId")?.value
  const userVote = await prisma.vote.findFirst({
    where: {
      anonymousId: anonymousId,
      feedbackId: feedback.id,
    },
  })
  let hasVoted = false
  if (userVote) {
    hasVoted = true
  }
  return (
    <Card className="p-4 flex gap-3 pr-12">
      <div className="flex flex-col items-center gap-1">
        <VoteItem feedback={feedback} hasVoted={hasVoted} />
        <div>{feedback._count.vote}</div>
      </div>
      <Text>{feedback.content}</Text>
    </Card>
  )
}

export default FeedbackItem

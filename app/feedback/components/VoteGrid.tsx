import React from "react"

import { prisma } from "@/lib/prisma"
import { Card } from "@/components/ui/card"
import Text from "@/components/uplift/text"

import Voting from "./Voting"

const VoteGrid = async () => {
  let feedbacks: any[] = await prisma.feedback.findMany({
    include: {
      _count: {
        select: {
          vote: true,
        },
      },
    },
  })
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      style={{ gridTemplateRows: "masonry" }}
    >
      {feedbacks.map((feedback) => (
        <Card className="p-4 flex gap-3">
          <Voting feedbackId={feedback.id} />
          <Text>{feedback.content}</Text>
        </Card>
      ))}
    </div>
  )
}

export default VoteGrid

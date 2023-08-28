import React from "react"

import { prisma } from "@/lib/prisma"
import { Feedback } from "@/lib/types"
import { Card } from "@/components/ui/card"
import Text from "@/components/uplift/text"

import FeedbackItem from "./FeedbackItem"
import Voting from "./VoteItem"

const getAllFeedback = async () => {
  const feedbacks: Feedback[] = await prisma.feedback.findMany({
    include: {
      _count: {
        select: {
          vote: true,
        },
      },
      vote: true,
    },
  })
  return feedbacks
}

const VoteGrid = async () => {
  const feedbacks = await getAllFeedback()
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      style={{ gridTemplateRows: "masonry" }}
    >
      {feedbacks.map((feedback) => (
        <FeedbackItem feedback={feedback} />
      ))}
    </div>
  )
}

export default VoteGrid

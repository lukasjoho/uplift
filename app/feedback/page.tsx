import React from "react"

import { prisma } from "@/lib/prisma"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

import Container from "../components/Container"
import Voting from "./components/Voting"

const FeedbackPage = async () => {
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
    <div className="pt-16">
      <Container>
        <div className="space-y-12">
          <div className="flex flex-col items-center">
            <Title size="t1">Feedback</Title>
            <Text className="text-muted-foreground text-lg">
              Vote on feedback or submit your own.
            </Text>
          </div>
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
        </div>
        {/* <pre>{JSON.stringify(feedbacks, null, 2)}</pre> */}
      </Container>
    </div>
  )
}

export default FeedbackPage

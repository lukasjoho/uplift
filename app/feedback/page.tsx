import React, { Suspense } from "react"

import { prisma } from "@/lib/prisma"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

import Container from "../components/Container"
import VoteGrid from "./components/VoteGrid"

const FeedbackPage = () => {
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
          <Suspense fallback={<p>Loading weather...</p>}>
            {/* @ts-ignore */}
            <VoteGrid />
          </Suspense>
        </div>
        {/* <pre>{JSON.stringify(feedbacks, null, 2)}</pre> */}
      </Container>
    </div>
  )
}

export default FeedbackPage

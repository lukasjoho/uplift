import React, { FC } from "react"

import { getLaunches, getUpcoming } from "@/lib/contentful"
import { Separator } from "@/components/ui/separator"
import FeedbackForm from "@/components/uplift/FeedbackForm"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"
import Container from "@/app/components/Container"

const UpcomingPage = async () => {
  const { data } = await getUpcoming()
  const items = data.upcomingCollection.items
  return (
    <Container>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-4 lg:col-span-3 lg:border-r lg:pr-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item: any, idx: any) => {
              return (
                <UpcomingItem
                  key={idx}
                  title={item.title}
                  description={item.description}
                />
              )
            })}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <div className="space-y-3">
            <div>
              <Title size="t5">You suggest</Title>
              <Text className="text-muted-foreground">
                What would you like to see and what problem does it solve for
                you?
              </Text>
            </div>
            <FeedbackForm />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default UpcomingPage

interface UpcomingItemProps {
  title: string
  description: string
}

const UpcomingItem: FC<UpcomingItemProps> = ({ title, description }) => {
  return (
    <div className="rounded-lg border p-6">
      <Title>{title}</Title>
      <Text>{description}</Text>
    </div>
  )
}

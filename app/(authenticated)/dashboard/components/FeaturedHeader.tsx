import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Text from "@/components/uplift/text"

const FeaturedHeader = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* @ts-ignore */}
          <Report />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <Text className="text-2xl font-bold">3 Running</Text>
          <Text className="text-2xl font-bold">5 In Delivery</Text>
          <Text className="text-2xl font-bold">4 Done</Text>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <Text className="text-2xl font-bold">3 Running</Text>
          <Text className="text-2xl font-bold">5 In Delivery</Text>
          <Text className="text-2xl font-bold">4 Done</Text>
        </CardContent>
      </Card>
    </div>
  )
}

export default FeaturedHeader

const Report = async () => {
  const res = await fetch(`http://localhost:3000/api/experiments`)
  const experiments = await res.json()
  console.log("EXPERIMENTS", experiments)
  let stagesCount: any = {
    active: 0,
    completed: 0,
    upcoming: 0,
  }
  const determineStage = (experiment: any) => {
    const { startDate, endDate, status } = experiment
    if (new Date(endDate) < new Date()) {
      return "completed"
    }
    if (new Date(startDate) < new Date() && new Date(endDate) > new Date()) {
      return "active"
    }
    if (new Date(startDate) > new Date()) {
      return "upcoming"
    }
    return ""
  }
  experiments.forEach((experiment: any) => {
    console.log("STAGEDATE", experiment.startDate)
    const stage: any = determineStage(experiment)
    stagesCount[stage]++
  })

  return (
    <div className="space-y-1">
      <Text className="text-2xl font-bold text-green-500">
        {stagesCount.active} Active
      </Text>
      <Text className="text-2xl font-bold text-blue-500">
        {stagesCount.upcoming} Upcoming
      </Text>
      <Text className="text-2xl font-bold text-purple-500">
        {stagesCount.completed} Completed
      </Text>
    </div>
  )
}

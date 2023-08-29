import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Text from "@/components/uplift/text"
import { getExperiments } from "@/app/actions"

const FeaturedHeader = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
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
    </div>
  )
}

export default FeaturedHeader

const Report = async () => {
  const experiments = await getExperiments()
  let stagesCount: any = {
    active: 0,
    completed: 0,
    upcoming: 0,
  }
  const determineStage = (experiment: any) => {
    const { startDate, endDate } = experiment
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
    const stage: any = determineStage(experiment)
    stagesCount[stage]++
  })

  return (
    <div className="flex gap-8">
      <Text className="text-xl font-bold text-neutral-500 whitespace-nowrap">
        {stagesCount.completed} Completed
      </Text>
      <Text className="text-xl font-bold text-green-500 whitespace-nowrap">
        {stagesCount.active} Active
      </Text>

      <Text className="text-xl font-bold text-purple-500 whitespace-nowrap">
        {stagesCount.upcoming} Upcoming
      </Text>
    </div>
  )
}

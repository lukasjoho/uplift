import React from "react"

import Resizable from "./Resizable"
import TimelineClientWrapper from "./Timeline/TimelineClientWrapper"
import TimelineHeader from "./Timeline/TimelineHeader"

function haveDateOverlap(exp1: any, exp2: any) {
  const startDate1 = new Date(exp1.startDate)
  const endDate1 = new Date(exp1.endDate)
  const startDate2 = new Date(exp2.startDate)
  const endDate2 = new Date(exp2.endDate)

  return (
    (startDate1 <= endDate2 && startDate2 <= endDate1) ||
    (startDate2 <= endDate1 && startDate1 <= endDate2)
  )
}

// Function to check if one experiment's date range is enclosed within another experiment's date range
function isDateEnclosed(exp1: any, exp2: any) {
  const startDate1 = new Date(exp1.startDate)
  const endDate1 = new Date(exp1.endDate)
  const startDate2 = new Date(exp2.startDate)
  const endDate2 = new Date(exp2.endDate)

  return (
    (startDate1 <= startDate2 && endDate1 >= endDate2) ||
    (startDate2 <= startDate1 && endDate2 >= endDate1)
  )
}

function clusterExperiments(experiments: any) {
  const clusteredExperiments = []

  for (const experiment of experiments) {
    let addedToCluster = false

    for (const cluster of clusteredExperiments) {
      let canAddToCluster = true

      for (const exp of cluster) {
        if (
          haveDateOverlap(experiment, exp) ||
          isDateEnclosed(experiment, exp)
        ) {
          canAddToCluster = false
          break
        }
      }

      if (canAddToCluster) {
        cluster.push(experiment)
        addedToCluster = true
        break
      }
    }

    if (!addedToCluster) {
      clusteredExperiments.push([experiment])
    }
  }

  return clusteredExperiments
}

function isOverlap(experiments: any, newExperiment: any) {
  const newStartDate = new Date(newExperiment.startDate)
  const newEndDate = new Date(newExperiment.endDate)

  for (const experiment of experiments) {
    const startDate = new Date(experiment.startDate)
    const endDate = new Date(experiment.endDate)

    if (
      (newStartDate >= startDate && newStartDate <= endDate) ||
      (newEndDate >= startDate && newEndDate <= endDate) ||
      (newStartDate <= startDate && newEndDate >= endDate)
    ) {
      return true // Overlap found
    }
  }

  return false // No overlap
}

const Timeline = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/experiments`)
  const experiments = await res.json()
  const swimlanes = clusterExperiments(experiments)

  return (
    <>
      <TimelineClientWrapper>
        <div className="inline-block">
          <div>
            <TimelineHeader />
          </div>
          <div id="swimlanes">
            <div className="flex flex-col gap-2 pb-2 pt-2 border-t">
              {swimlanes.map((swimlane: any) => {
                return (
                  <div className="relative h-10 w-full">
                    {swimlane.map((experiment: any) => {
                      return <Resizable experiment={experiment} />
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </TimelineClientWrapper>
      {/* <pre>{JSON.stringify(experiments, null, 2)}</pre> */}
    </>
  )
}

export default Timeline

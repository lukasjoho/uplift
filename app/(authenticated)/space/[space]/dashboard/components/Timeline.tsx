import React from "react"

import { getDateDiffInDays, getMonthName, isToday } from "@/lib/helpers"
import { cn } from "@/lib/utils"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"
import Text from "@/components/uplift/text"

import Resizable from "./Resizable"
import TimelineClientWrapper from "./Timeline/TimelineClientWrapper"
import TodayIndicator from "./TodayIndicator"
import WeekSeparator from "./WeekSeparator"

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

const createSwimlanes = (experiments: any) => {
  let swimlanes: any = []
  experiments.forEach((experiment: any) => {
    let swimlaneIndex = -1
    for (let i = 0; i < swimlanes.length; i++) {
      const swimlane = swimlanes[i]

      if (!isOverlap(swimlane, experiment)) {
        swimlane.push(experiment)
        swimlaneIndex = i
        break
      }
    }
    if (swimlaneIndex === -1) {
      swimlanes.push([experiment])
    }
  })
  return swimlanes
}

// function isOverlap(experiments: any, newExperiment: any) {
//   for (const experiment of experiments) {
//     if (
//       (experiment.startDate.slice(0, 10) <=
//         newExperiment.endDate?.slice(0, 10) &&
//         experiment.endDate?.slice(0, 10) >=
//           newExperiment.startDate.slice(0, 10)) ||
//       (newExperiment.startDate.slice(0, 10) <=
//         experiment.endDate?.slice(0, 10) &&
//         newExperiment.endDate?.slice(0, 10) >=
//           experiment.startDate.slice(0, 10)) ||
//       newExperiment.startDate.slice(0, 10) == experiment.startDate.slice(0, 10)
//     ) {
//       return true // Overlapping date ranges
//     }
//   }

//   return false // No overlap
// }

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
  const res = await fetch(`http://localhost:3000/api/experiments`)
  const experiments = await res.json()
  const swimlanes = clusterExperiments(experiments)

  return (
    <>
      <TimelineClientWrapper>
        {/* <Resizable /> */}
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
                      const startDate: any = new Date(experiment.startDate)
                      const endDate: any = new Date(experiment.endDate)
                      const days = getDateDiffInDays(startDate, endDate)
                      const daysFromStart = getDateDiffInDays(
                        "2023-01-01T16:21:12.256Z",
                        startDate
                      )
                      return (
                        // <SwimLaneItem
                        //   days={days}
                        //   daysFromStart={daysFromStart}
                        //   experiment={experiment}
                        // />

                        <Resizable
                          days={days}
                          daysFromStart={daysFromStart}
                          experiment={experiment}
                        />
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* <pre>{JSON.stringify(swimlanes, null, 2)}</pre> */}
      </TimelineClientWrapper>
    </>
  )
}

export default Timeline

const TimelineHeader = () => {
  const today = new Date()

  function getDatesBetween(startDate: any, endDate: any) {
    const dates = []
    let currentDate = new Date(startDate)
    let rightDate = new Date(endDate)
    while (currentDate <= rightDate) {
      dates.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    return dates
  }
  const dates = getDatesBetween(
    "2023-01-01T16:21:12.256Z",
    "2024-06-04T12:34:56.789Z"
  )

  function groupDatesByMonth(dates: any) {
    const monthGroups = []
    let currentMonth = ""

    for (const date of dates) {
      const month = date.getMonth()

      if (month !== currentMonth) {
        monthGroups.push([])
        currentMonth = month
      }
      //@ts-ignore
      monthGroups[monthGroups.length - 1].push(date)
    }

    return monthGroups
  }
  const months = groupDatesByMonth(dates)

  return (
    <div className="flex gap-[9px]  ">
      {months.map((month: any) => {
        return (
          <div>
            <div className="py-1 relative pl-2 ">
              <div className="absolute w-[1px] h-full bg-border -translate-x-[5px] top-0 left-0"></div>
              <div
                className="absolute bottom-0 bg-border h-[1px] left-0"
                style={{ width: "calc(100% + 9px)" }}
              ></div>
              <Text className="text-sm text-muted-foreground font-medium">
                {getMonthName(month[0])}
              </Text>
            </div>
            <div className="flex gap-[9px] items-end ">
              {month.map((date: any) => {
                const day = date.getDay()
                let shouldShowWeekday = false
                if (day === 1) {
                  shouldShowWeekday = true
                }
                let highlight
                if (isToday(date)) {
                  highlight = true
                }
                return (
                  <div className={cn("relative")}>
                    {/* {shouldShowWeekday && (
                      <Text className="text-xs text-muted-foreground">
                        {getDayOfWeek(date)}
                      </Text>
                    )} */}
                    {shouldShowWeekday && <WeekSeparator />}

                    <div
                      className={cn(
                        "relative text-xs w-6 h-6 aspect-square rounded-sm flex items-center justify-center text-muted-foreground",
                        highlight && "bg-red-500 text-foreground font-medium"
                      )}
                    >
                      {highlight && <TodayIndicator />}

                      {date.getDate()}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

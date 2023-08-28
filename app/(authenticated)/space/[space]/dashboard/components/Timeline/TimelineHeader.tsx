import { getMonthName, isToday } from "@/lib/helpers"
import { cn } from "@/lib/utils"
import Text from "@/components/uplift/text"

import TodayIndicator from "../TodayIndicator"
import WeekSeparator from "../WeekSeparator"

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

export default TimelineHeader

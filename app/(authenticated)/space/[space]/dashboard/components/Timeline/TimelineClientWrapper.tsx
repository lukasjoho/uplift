"use client"

import React, { useEffect } from "react"

import { getDateDiffInDays } from "@/lib/helpers"

import { TIMELINE_SETTINGS } from "./constants"

const TimelineClientWrapper = ({ children }: any) => {
  const today = new Date()
  const daysFromStart = getDateDiffInDays(
    "2023-01-01T16:21:12.256Z",
    today.toISOString()
  )
  function myFunction() {
    var element = document.getElementById("timelinecontainer")
    let elWidth = element?.getBoundingClientRect().width || 900
    element!.scrollLeft +=
      daysFromStart * TIMELINE_SETTINGS.UNIT_WIDTH - elWidth / 3
  }
  useEffect(() => {
    myFunction()
    console.log(daysFromStart, TIMELINE_SETTINGS.UNIT_WIDTH)
  }, [])

  return (
    <div className="w-full relative overflow-hidden border rounded-xl">
      <div
        className="overflow-scroll w-full scroll-smooth"
        id="timelinecontainer"
      >
        {children}
      </div>
      <div className="absolute h-full w-32 bg-gradient-to-r from-background/80 to-transparent left-0 top-0" />
      <div className="absolute h-full w-32 bg-gradient-to-l from-background/80 to-transparent right-0 top-0" />
    </div>
  )
}

export default TimelineClientWrapper

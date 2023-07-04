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
    <div
      className="overflow-scroll w-full border rounded-xl scroll-smooth"
      id="timelinecontainer"
    >
      {children}
    </div>
  )
}

export default TimelineClientWrapper

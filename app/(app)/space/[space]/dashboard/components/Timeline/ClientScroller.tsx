"use client"

import React, { useEffect, useLayoutEffect } from "react"

import { getDateDiffInDays } from "@/lib/helpers"

import { TIMELINE_SETTINGS } from "./constants"

const ClientScroller = () => {
  const today = new Date()
  const daysFromStart = getDateDiffInDays(
    "2023-01-01T16:21:12.256Z",
    today.toISOString()
  )
  function myFunction() {
    var element = document.getElementById("timelinecontainer")
    element!.scrollLeft += daysFromStart * TIMELINE_SETTINGS.UNIT_WIDTH
  }
  useLayoutEffect(() => {
    myFunction()
    console.log(daysFromStart, TIMELINE_SETTINGS.UNIT_WIDTH)
  }, [])

  return <button onClick={() => myFunction()}>Scroll</button>
}

export default ClientScroller

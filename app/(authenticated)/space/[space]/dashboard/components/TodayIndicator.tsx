"use client"

import React, { useEffect, useState } from "react"

const TodayIndicator = () => {
  const [parentHeight, setParentHeight] = useState(0)

  useEffect(() => {
    const parentElement = document.getElementById("swimlanes")
    if (parentElement) {
      const height = parentElement.clientHeight
      setParentHeight(height)
    }
  }, [])
  return (
    <div
      className="absolute bottom-0 w-[2px] bg-red-500 translate-y-full z-10"
      style={{ height: parentHeight }}
    />
  )
}

export default TodayIndicator

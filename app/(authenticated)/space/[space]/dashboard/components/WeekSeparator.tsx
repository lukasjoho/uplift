"use client"

import React, { useEffect, useState } from "react"

const WeekSeparator = () => {
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
      className="absolute w-[1px] bg-border -translate-x-[5px]"
      style={{ height: parentHeight + 24 }}
    ></div>
  )
}

export default WeekSeparator

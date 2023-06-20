"use client"

import React, { FC, useCallback, useState } from "react"
import { motion, useMotionValue } from "framer-motion"

import { cn } from "@/lib/utils"

import { TIMELINE_SETTINGS } from "./Timeline/constants"

interface SwimLaneItemProps {
  days?: number
  daysFromStart?: number
  experiment?: any
}

const Resizable: FC<SwimLaneItemProps> = ({
  days = 0,
  daysFromStart = 0,
  experiment,
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const mWidth = useMotionValue(TIMELINE_SETTINGS.UNIT_WIDTH * days)
  const mPos = useMotionValue(
    daysFromStart * TIMELINE_SETTINGS.UNIT_WIDTH -
      9 -
      TIMELINE_SETTINGS.DAY_WIDTH / 2
  )

  const handleDrag = useCallback(
    (event: any, info: any, position: "left" | "center" | "right") => {
      if (position === "left") {
        let newWidth = mWidth.get() - info.delta.x

        let newPosition = mPos.get() + info.delta.x
        mPos.set(newPosition)
        mWidth.set(newWidth)
      }
      if (position === "right") {
        let newWidth = mWidth.get() + info.delta.x
        mWidth.set(newWidth)
      }
      if (position === "center") {
        let newPosition = mPos.get() + info.delta.x
        mPos.set(newPosition)
      }
    },
    []
  )

  function convertToNearestMultiple(number: number) {
    const remainder = number % TIMELINE_SETTINGS.UNIT_WIDTH
    const halfInterval = TIMELINE_SETTINGS.UNIT_WIDTH / 2
    if (remainder <= halfInterval) {
      return number - remainder
    } else {
      return number + (TIMELINE_SETTINGS.UNIT_WIDTH - remainder)
    }
  }

  function snapPosition(number: number) {
    const newConvertedPos = convertToNearestMultiple(number)
    let snappedPos = 0
    if (newConvertedPos > mPos.get()) {
      snappedPos =
        newConvertedPos -
        TIMELINE_SETTINGS.GAP_WIDTH -
        TIMELINE_SETTINGS.DAY_WIDTH / 2
    } else {
      snappedPos = newConvertedPos + TIMELINE_SETTINGS.DAY_WIDTH / 2
    }

    mPos.set(snappedPos)
    return snappedPos
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
  }

  const stage = determineStage(experiment)

  return (
    <div className="flex">
      <motion.div
        className={cn(
          "font-semibold bg-gradient-to-tr rounded-md text-white absolute border h-10 flex items-center px-3 cursor-pointer justify-between overflow-hidden whitespace-nowrap",
          stage === "active" &&
            "from-green-500/50 to-green-400/50 border-green-500",
          stage === "completed" &&
            "from-blue-500/50 to-blue-400/50 border-blue-500",
          stage === "upcoming" &&
            " from-yellow-500/50 to-yellow-400/50 border-yellow-500",
          isDragging && "border-dashed"
        )}
        style={{
          width: mWidth,
          left: mPos,
        }}
        onDoubleClick={() => {
          mWidth.set(900)
        }}
        drag="x"
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0}
        dragMomentum={false}
        onDrag={(event, info) => handleDrag(event, info, "center")}
        onDragEnd={(event, info) => {
          // const newConvertedPos = convertToNearestMultiple(
          //   mPos.get() + info.delta.x
          // )
          // mPos.set(newConvertedPos)
          snapPosition(mPos.get() + info.delta.x)
          setIsDragging(false)
        }}
        onDragStart={() => {
          setIsDragging(true)
        }}
      >
        {experiment.name}
        <Handle
          position="left"
          onDrag={(event: any, info: any) => handleDrag(event, info, "left")}
          onDragEnd={(event: any, info: any) => {
            const newConvertedWidth = convertToNearestMultiple(
              mWidth.get() + info.delta.x
            )
            mWidth.set(newConvertedWidth)
            snapPosition(mPos.get() + info.delta.x)
            setIsDragging(false)
          }}
          onDragStart={() => {
            setIsDragging(true)
          }}
          isDragging={isDragging}
        />
        <Handle
          position="right"
          onDrag={(event: any, info: any) => handleDrag(event, info, "right")}
          onDragEnd={(event: any, info: any) => {
            const newConvertedWidth = convertToNearestMultiple(
              mWidth.get() + info.delta.x
            )
            mWidth.set(newConvertedWidth)
            setIsDragging(false)
          }}
          onDragStart={() => {
            setIsDragging(true)
          }}
          isDragging={isDragging}
        />
      </motion.div>
    </div>
  )
}

export default Resizable

interface HandleProps {
  [x: string]: any
  position: "left" | "right"
  isDragging: boolean
}

const Handle: FC<HandleProps> = ({ position, isDragging, ...props }) => {
  return (
    <motion.div
      className={cn(
        "h-full w-3 absolute right-0 transition duration-300 hover:bg-green-500 cursor-col-resize",
        position == "right" && "right-0",
        position == "left" && "left-0",
        isDragging && "bg-green-500"
      )}
      drag="x"
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0}
      dragMomentum={false}
      {...props}
    />
  )
}

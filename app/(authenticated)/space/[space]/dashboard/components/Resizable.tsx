"use client"

import React, { FC, useCallback, useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"
import { toast } from "react-hot-toast"

import { formatDate, getDateDiffInDays } from "@/lib/helpers"
import { cn } from "@/lib/utils"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"
import ToastBody from "@/components/uplift/ToastBody"
import { updateExperiment } from "@/app/actions"

import CreateExperimentForm from "./CreateExperimentForm"
import { TIMELINE_SETTINGS } from "./Timeline/constants"

interface SwimLaneItemProps {
  days?: number
  daysFromStart?: number
  experiment?: any
}

const Resizable: FC<SwimLaneItemProps> = ({ experiment }) => {
  console.log("Component rendering")
  const startDate: any = new Date(experiment.startDate)
  const endDate: any = new Date(experiment.endDate)
  const days = getDateDiffInDays(startDate, endDate)
  const daysFromStart =
    getDateDiffInDays("2023-01-01T16:21:12.256Z", startDate) + 1

  const [isDragging, setIsDragging] = useState(false)
  const mWidth = useMotionValue(TIMELINE_SETTINGS.UNIT_WIDTH * days)
  const mPos = useMotionValue(
    daysFromStart * TIMELINE_SETTINGS.UNIT_WIDTH -
      9 -
      TIMELINE_SETTINGS.DAY_WIDTH / 2
  )
  useEffect(() => {
    mWidth.set(TIMELINE_SETTINGS.UNIT_WIDTH * days)
  }, [days])
  useEffect(() => {
    mPos.set(
      daysFromStart * TIMELINE_SETTINGS.UNIT_WIDTH -
        9 -
        TIMELINE_SETTINGS.DAY_WIDTH / 2
    )
  }, [daysFromStart])

  function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...funcArgs: Parameters<T>) => void {
    let inDebounce: NodeJS.Timeout | undefined

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(this, args), delay)
    }
  }

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

  const determineStage = (startDate: string, endDate: string) => {
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

  const initStage = determineStage(experiment.startDate, experiment.endDate)
  const [stage, setStage] = useState(initStage)
  const handleClick = (e: any) => {
    console.log("clicked")
    if (isDragging) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
  }

  const getDateFromPx = (px: number) => {
    const days = px / TIMELINE_SETTINGS.UNIT_WIDTH
    const timelineStart = new Date("2023-01-01T16:21:12.256Z")
    const newDate = new Date(
      timelineStart.setDate(timelineStart.getDate() + days)
    )
    return newDate.toISOString()
  }

  return (
    <div className="flex">
      <Modal>
        <ModalOpenButton blockModalTrigger={isDragging}>
          <motion.div
            className={cn(
              "font-semibold bg-gradient-to-r rounded-md text-white absolute border h-10 flex items-center px-3 cursor-pointer justify-between overflow-hidden whitespace-nowrap",
              stage === "active" &&
                "from-green-500/50 to-green-400/50 border-green-500",
              stage === "completed" &&
                "from-neutral-700/50 to-neutral-600/50 border-neutral-500",
              stage === "upcoming" &&
                " from-purple-600/50 to-purple-500/50 border-dashed border-purple-400",
              isDragging
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
            onClick={handleClick}
            onDrag={(event, info) => handleDrag(event, info, "center")}
            onDragEnd={async (event, info) => {
              // const newConvertedPos = convertToNearestMultiple(
              //   mPos.get() + info.delta.x
              // )
              // mPos.set(newConvertedPos)
              const snappedPos = snapPosition(mPos.get() + info.delta.x)
              const newDate = getDateFromPx(snappedPos)
              const newEndDate = getDateFromPx(snappedPos + mWidth.get())
              const { success } = await updateExperiment({
                id: experiment.id,
                startDate: newDate,
                endDate: newEndDate,
              })
              if (success) {
                toast.success(
                  <ToastBody
                    title={`Date updated to ${formatDate(
                      newDate
                    )} - ${formatDate(newEndDate)}`}
                  />
                )
              } else {
                toast.success(
                  <ToastBody
                    title={`Error`}
                    message="Experiment could not be updated."
                  />
                )
              }
              setStage(determineStage(newDate, newEndDate))
              setIsDragging(false)
            }}
            onDragStart={() => {
              setIsDragging(true)
            }}
          >
            {experiment.name}
            <Handle
              position="left"
              stage={stage}
              onDrag={(event: any, info: any) =>
                handleDrag(event, info, "left")
              }
              onDragEnd={async (event: any, info: any) => {
                const newConvertedWidth = convertToNearestMultiple(
                  mWidth.get() + info.delta.x
                )
                mWidth.set(newConvertedWidth)
                const snappedPos = snapPosition(mPos.get() + info.delta.x)
                const newDate = getDateFromPx(snappedPos)
                const { success } = await updateExperiment({
                  id: experiment.id,
                  startDate: newDate,
                })
                if (success) {
                  toast.success(
                    <ToastBody
                      title={`Date updated to ${formatDate(newDate)}`}
                    />
                  )
                } else {
                  toast.success(
                    <ToastBody
                      title={`Error`}
                      message="Experiment could not be updated."
                    />
                  )
                }
                console.log("SUCCESS: ", success)
                setStage(determineStage(newDate, experiment.endDate))

                setTimeout(() => {
                  setIsDragging(false)
                }, 150)
              }}
              onDragStart={() => {
                setIsDragging(true)
              }}
              isDragging={isDragging}
            />
            <Handle
              position="right"
              stage={stage}
              onDrag={(event: any, info: any) =>
                handleDrag(event, info, "right")
              }
              onDragEnd={async (event: any, info: any) => {
                const newConvertedWidth = convertToNearestMultiple(
                  mWidth.get() + info.delta.x
                )
                mWidth.set(newConvertedWidth)
                const newDate = getDateFromPx(mPos.get() + newConvertedWidth)
                const { success } = await updateExperiment({
                  id: experiment.id,
                  endDate: newDate,
                })
                if (success) {
                  toast.success(
                    <ToastBody
                      title={`Date updated to ${formatDate(newDate)}`}
                    />
                  )
                } else {
                  toast.success(
                    <ToastBody
                      title={`Error`}
                      message="Experiment could not be updated."
                    />
                  )
                }
                setStage(determineStage(experiment.startDate, newDate))
                setIsDragging(false)
              }}
              onDragStart={() => {
                setIsDragging(true)
              }}
              isDragging={isDragging}
            />
          </motion.div>
        </ModalOpenButton>
        <ModalContents title={experiment.name} maxSize="xl">
          <CreateExperimentForm experiment={experiment} />
        </ModalContents>
      </Modal>
    </div>
  )
}

export default Resizable

interface HandleProps {
  [x: string]: any
  position: "left" | "right"
  isDragging: boolean
}

const Handle: FC<HandleProps> = ({ position, isDragging, stage, ...props }) => {
  let handleColor = ""
  switch (stage) {
    case "active":
      handleColor = "bg-green-500"
      break
    case "completed":
      handleColor = "bg-neutral-500"
      break
    case "upcoming":
      handleColor = "bg-purple-400"
      break
  }
  return (
    <motion.div
      className={cn(
        "h-full w-3 absolute right-0 transition duration-300 cursor-col-resize",
        `hover:${handleColor}`,
        position == "right" && "right-0",
        position == "left" && "left-0",
        isDragging && handleColor
      )}
      drag="x"
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0}
      dragMomentum={false}
      {...props}
    />
  )
}

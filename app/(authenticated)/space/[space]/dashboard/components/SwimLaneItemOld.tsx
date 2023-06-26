"use client"

import React, { FC, useState } from "react"
import { motion } from "framer-motion"

import { useWindowSize } from "@/lib/hooks"
import { cn } from "@/lib/utils"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

interface SwimLaneItemProps {
  days: any
  daysFromStart: any
  experiment: any
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

const SwimLaneItem: FC<SwimLaneItemProps> = ({
  experiment,
  days,
  daysFromStart,
}) => {
  const stage = determineStage(experiment)
  let size = useWindowSize()
  const [position, setPosition] = useState(0)
  function onPanStart(event: any, info: any) {}
  function onPanEnd(event: any, info: any) {}
  const handleDragStart = (e: any) => {
    // Store the initial position of the dragged element
    const initialPosition = e.clientX
    setPosition(initialPosition)
  }
  const handleDrag = (e: any) => {
    // Calculate the drag distance
    const dragDistance = e.clientX - position

    // Adjust the width and position of the element accordingly
    const element = e.target
    element.style.width = `${dragDistance}px`
    element.style.left = `${position}px`
  }

  const handleDragEnd = () => {}
  return (
    <Modal>
      <ModalOpenButton>
        <motion.div
          className={cn(
            "font-semibold bg-gradient-to-tr  rounded-md text-white absolute border  h-10 flex items-center px-3 cursor-pointer",
            stage === "active" &&
              "from-green-500/50 to-green-400/50 border-green-500",
            stage === "completed" &&
              "from-purple-500/50 to-purple-400/50 border-purple-500",
            stage === "upcoming" &&
              "from-blue-500/50 to-blue-400/50 border-blue-500"
          )}
          style={{ width: 33 * days - 9, left: 33 * daysFromStart }}
          draggable="true"
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
        >
          {experiment.name}
        </motion.div>
      </ModalOpenButton>
      <ModalContents title="Create Experiment" size={size}>
        <div>...</div>
      </ModalContents>
    </Modal>
  )
}

export default SwimLaneItem

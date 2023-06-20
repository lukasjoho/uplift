"use client"

import React, { FC, useEffect, useRef, useState } from "react"
import { motion, useMotionValue } from "framer-motion"

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
  const [isDragging, setIsDragging] = useState(false)
  const mWidth = useMotionValue(33 * days - 9)
  const handleDrag = React.useCallback((event: any, info: any) => {
    let newWidth = mWidth.get() + info.delta.x
    mWidth.set(mWidth.get() + info.delta.x)
  }, [])
  const ref = useRef(null)
  const dragOriginY = useMotionValue(0)

  return (
    <Modal>
      <ModalOpenButton>
        <motion.div
          className={cn(
            "font-semibold bg-gradient-to-tr rounded-md text-white absolute border  h-10 flex items-center px-3 cursor-pointer justify-between",
            stage === "active" &&
              "from-green-500/50 to-green-400/50 border-green-500",
            stage === "completed" &&
              "from-purple-500/50 to-purple-400/50 border-purple-500",
            stage === "upcoming" &&
              "from-blue-500/50 to-blue-400/50 border-blue-500"
          )}
          style={{ width: mWidth, left: 33 * daysFromStart }}
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

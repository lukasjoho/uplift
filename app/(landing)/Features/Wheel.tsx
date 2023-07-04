"use client"

import React, { FC, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Activity, DollarSign, Headphones, TerminalSquare } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import Text from "@/components/uplift/text"

const wheelData = {
  experiment: [
    "Hero Headline",
    "CTA Position",
    "Color Selection",
    "Dynamic Pricing",
  ],
  improvement: ["12.25 %", "-8.7%", "13.2%", "1.5%"],
  page: ["/home", "/detailpage", "/shop", "/pricing"],
  decision: ["Rollout", "Reject", "Rollout", "Iterate"],
}

const Wheel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [activeItems, setActiveItems] = React.useState({
    experiment: wheelData.experiment[activeIndex],
    improvement: wheelData.improvement[activeIndex],
    page: wheelData.page[activeIndex],
    decision: wheelData.decision[activeIndex],
  })
  useEffect(() => {
    setActiveItems({
      experiment: wheelData.experiment[activeIndex],
      improvement: wheelData.improvement[activeIndex],
      page: wheelData.page[activeIndex],
      decision: wheelData.decision[activeIndex],
    })
  }, [activeIndex])
  useEffect(() => {
    let interval: any = null

    interval = setInterval(() => {
      setActiveIndex(
        (activeIndex) => (activeIndex + 1) % wheelData.experiment.length
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className="relative w-full p-6">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-32 animate-pulse-uplift">
        <div className="relative h-6 flex items-end justify-center w-full">
          <DataItem
            type={"experiment"}
            value={activeItems.experiment}
            pos="top"
          />

          <div className="w-[1px] h-16 border-r-4 border-dotted absolute bottom-0 translate-y-24 flex items-center animate-pulse-uplift">
            <Text className="absolute mr-3 right-0 text-muted-foreground text-xs">
              Name
            </Text>
          </div>
        </div>
        <div className="flex items-center gap-32">
          <div className="relative h-6 flex items-center">
            <DataItem
              className="right-0"
              type={"decision"}
              value={activeItems.decision}
              pos="left"
            />

            <div className="w-16 h-[1px] border-t-4 border-dotted absolute right-0 translate-x-24 flex justify-center animate-pulse-uplift">
              <Text className="absolute text-muted-foreground text-xs top-0 mt-2 ">
                Decision
              </Text>
            </div>
          </div>
          <div className="relative realtime w-16 h-16">
            <Icons.logoFull className="w-16 h-16" />
          </div>
          {/* <div className="h-2 w-2 bg-green-500 rounded-xl mr-2 realtime relative" /> */}
          <div className="relative h-6 flex items-center">
            <div className="w-16 h-[1px] border-t-4 border-dotted absolute left-0 -translate-x-24 flex justify-center animate-pulse-uplift">
              <Text className="absolute text-muted-foreground text-xs top-0 -mt-2 -translate-y-full ">
                Metric
              </Text>
            </div>

            <DataItem
              type={"improvement"}
              value={activeItems.improvement}
              pos="right"
            />
          </div>
        </div>
        <div className="relative h-6 flex items-start justify-center w-full">
          <div className="w-[1px] h-16 border-r-4 border-dotted absolute top-0 -translate-y-24 flex items-center">
            <Text className="absolute ml-3 text-muted-foreground text-xs">
              Page
            </Text>
          </div>
          <DataItem type={"page"} value={activeItems.page} pos="bottom" />
        </div>
      </div>
      <div className="w-full border rounded-full aspect-square relative animate-wheel">
        <WheelItem
          icon={<TerminalSquare className="h-6" />}
          label="Engineering"
          pos="top-0 left-1/2"
        />
        <WheelItem
          icon={<Headphones className="h-6" />}
          label="Sales"
          pos="top-1/2 left-0"
        />
        <WheelItem
          icon={<DollarSign className="h-6" />}
          label="Marketing"
          pos="top-full left-1/2"
        />
        <WheelItem
          icon={<Activity className="h-6" />}
          label="Data"
          pos="top-1/2 left-full"
        />
      </div>
    </div>
  )
}

export default Wheel

interface DataItemProps {
  value: string
  type: "experiment" | "improvement" | "page" | "decision"
  pos: "left" | "top" | "right" | "bottom"
  [x: string]: any
}

const DataItem: FC<DataItemProps> = ({ value, type, pos, ...props }) => {
  let renderedItem

  let coordinates = {
    x: 0,
    y: 0,
  }
  switch (pos) {
    case "left":
      coordinates = { x: 20, y: 0 }
      break
    case "top":
      coordinates = { x: 0, y: 20 }
      break
    case "right":
      coordinates = { x: -20, y: 0 }
      break
    case "bottom":
      coordinates = { x: 0, y: -20 }
      break
  }
  switch (type) {
    case "experiment":
      renderedItem = (
        <Badge className="rounded-sm bg-muted-foreground">{value}</Badge>
      )
      break
    case "improvement":
      renderedItem = <div className="font-semibold">{value}</div>
      break
    case "page":
      renderedItem = <Badge className="bg-muted text-white">{value}</Badge>
      break
    case "decision":
      let bgColor
      let textColor
      switch (value) {
        case "Rollout":
          textColor = "text-green-500"
          bgColor = "bg-green-500/20"
          break
        case "Iterate":
          bgColor = "bg-yellow-500/20"
          textColor = "text-yellow-500"

          break
        case "Reject":
          bgColor = "bg-red-500/20"
          textColor = "text-red-500"

          break
      }
      renderedItem = (
        <Badge className={cn("", `${bgColor} ${textColor}`)}>{value}</Badge>
      )
      break
    default:
      renderedItem = <div>Default</div>
  }
  return (
    <AnimatePresence>
      <motion.div
        className={cn("absolute whitespace-nowrap", props.className)}
        key={value}
        initial={{ x: coordinates.x, y: coordinates.y, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -1 * coordinates.x, y: -1 * coordinates.y, opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {renderedItem}
      </motion.div>
    </AnimatePresence>
  )
}

interface WheelItemProps {
  icon: JSX.Element
  label: string
  pos: string
}

const WheelItem: FC<WheelItemProps> = ({ icon, label, pos }) => {
  return (
    <div className={cn("absolute -translate-x-1/2 -translate-y-1/2 ", pos)}>
      <div className="animate-counter">
        <div className="aspect-square bg-gradient-to-t from-foreground to-transparent rounded-full w-8 h-8 grid place-content-center">
          <div className="aspect-square rounded-full w-7 grid place-content-center bg-muted">
            {icon}
          </div>
        </div>
        <Text className="absolute text-xs text-muted-foreground font-semibold uppercase left-1/2 -translate-x-1/2 mt-1">
          {label}
        </Text>
      </div>
    </div>
  )
}

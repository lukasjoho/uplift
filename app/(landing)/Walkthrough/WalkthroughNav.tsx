import React, { Component, FC } from "react"
import { ArrowBigRight, CalendarPlus, Code2, LineChart } from "lucide-react"

import { cn } from "@/lib/utils"
import Container from "@/app/components/Container"

import { items } from "./items"
import { WalkthroughItem } from "./types"

interface WalkthroughNavProps {
  activeStep?: number
}

const WalkthroughNav: FC<WalkthroughNavProps> = ({ activeStep }) => {
  return (
    <div className="sticky top-10 md:top-16 py-4 md:py-6 z-10 bg-background/75 backdrop-blur-xl">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {items.map((item, idx) => {
            return (
              <WalkthroughNavItem
                item={item}
                key={idx}
                activeStep={activeStep}
              />
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default WalkthroughNav

interface WalkthroughNavItemProps {
  item: WalkthroughItem
  activeStep?: number
}

const WalkthroughNavItem: FC<WalkthroughNavItemProps> = ({
  item,
  activeStep,
}) => {
  const { icon, label, solidColor }: WalkthroughItem = item
  const isActive = activeStep === item.step
  return (
    <div
      className={cn(
        "rounded-lg p-[1px] bg-border",
        isActive && `bg-gradient-to-t ${item.color}`
      )}
    >
      <div
        className={cn(
          "bg-background rounded-lg py-2 md:py-3 px-3 md:px-4 text-base md:text-lg font-semibold md:font-bold text-muted-foreground"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2 ",
            isActive && `text-${solidColor}`
          )}
        >
          {icon}
          <div
            className={cn(
              "",
              isActive &&
                `bg-gradient-to-t bg-clip-text text-transparent ${item.color}`
            )}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import React, { FC } from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import ActiveLinkIndicator from "./ActiveLinkIndicator"

interface AppMenuItemProps {
  href: string
  label: string
  mobileLabel: string
}

const AppMenuItem: FC<AppMenuItemProps> = ({ href, label, mobileLabel }) => {
  const pathname = usePathname()
  const isActive = pathname.includes(href)
  return (
    <div
      className={cn(
        "relative flex items-center font-semibold transition duration-150 text-muted-foreground hover:text-foreground text-sm h-10",
        isActive && "text-foreground"
      )}
    >
      <span className="md:hidden">{mobileLabel}</span>
      <span className="hidden md:inline">{label}</span>
      {isActive && <ActiveLinkIndicator />}
    </div>
  )
}

export default AppMenuItem

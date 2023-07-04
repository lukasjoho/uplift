"use client"

import React from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const AppNavChild = ({ children, href }: any) => {
  const pathname = usePathname()
  const isActive = pathname.includes(href + "/")
  return (
    <div
      className={cn(
        "flex gap-1 items-center text-lg font-semibold transition duration-150 text-muted-foreground hover:text-foreground sm:text-sm",
        isActive && "text-foreground"
      )}
    >
      {children}
    </div>
  )
}

export default AppNavChild

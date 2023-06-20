"use client"

import { FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

const ReleaseToggle = () => {
  const pathname = usePathname()
  const isolatedPathname = pathname.split("/releases")[1]
  return (
    <div>
      <TabsList>
        <Tab href="/releases/launched">
          <Icons.rocket className="w-4" /> Launched
        </Tab>
        <Tab href="/releases/upcoming">
          <Icons.calendarClock className="w-4" />
          Upcoming
        </Tab>
      </TabsList>
      <div></div>
    </div>
  )
}

export default ReleaseToggle

interface TabProps {
  children: React.ReactNode
  className?: string
  href: string
}

export const Tab: FC<TabProps> = ({ children, className, href }: any) => {
  const pathname = usePathname()

  const isActive = pathname == href
  return (
    <Link href={href}>
      <div
        className={cn(
          "relative inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
          className
        )}
      >
        {isActive && <ActiveTab />}
        <div
          className={cn(
            "z-10 flex gap-1 items-center",
            isActive && "text-foreground"
          )}
        >
          {children}
        </div>
      </div>
    </Link>
  )
}

export const ActiveTab = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-background rounded-sm" />
  )
}

export const TabsList = ({ children }: any) => {
  return (
    <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
      {children}
    </div>
  )
}

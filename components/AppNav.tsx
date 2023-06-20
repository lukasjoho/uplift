import * as React from "react"
import Link from "next/link"
import { LayoutDashboard } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface AppNavProps {
  items?: NavItem[]
}

export function AppNav({ items }: AppNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <div>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex gap-1 items-center text-lg font-semibold transition duration-150 text-muted-foreground hover:text-foreground sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <LayoutDashboard className="w-4" />
                  {item.title}
                </Link>
              )
          )}
        </div>
      ) : null}
    </div>
  )
}

import * as React from "react"
import Link from "next/link"
import { LayoutDashboard } from "lucide-react"
import { getServerSession } from "next-auth"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { authOptions } from "@/lib/auth"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface AppNavProps {
  items?: NavItem[]
}

export async function AppNav({ items }: AppNavProps) {
  const session = await getServerSession(authOptions)

  return (
    <Link
      href="/"
      className={cn(
        "flex gap-1 items-center text-lg font-semibold transition duration-150 text-muted-foreground hover:text-foreground sm:text-sm"
      )}
    >
      <LayoutDashboard className="w-4" />
      Space
    </Link>
  )
}

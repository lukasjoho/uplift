import * as React from "react"
import Link from "next/link"
import { LayoutDashboard } from "lucide-react"

import { NavItem } from "@/types/nav"

import AppNavChild from "./AppNavChild"

interface AppNavProps {
  items?: NavItem[]
}

export async function AppNav({ items }: AppNavProps) {
  return (
    <Link href="/space">
      <div>
        <AppNavChild href="/space">
          <LayoutDashboard className="w-4" />
          Space
        </AppNavChild>
      </div>
    </Link>
  )
}

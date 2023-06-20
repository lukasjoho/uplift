import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

type SideBarItem = {
  icon: React.ReactNode
  label: string
  href: string
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  items?: SideBarItem[]
}

export function Sidebar({ title, items, ...rest }: SidebarProps) {
  return (
    <div className={cn("pr-8 space-y-4 py-6", rest.className)}>
      <div className="px-0 py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          {title}
        </h2>
        <div className="space-y-1">
          {items?.map(({ label, href }) => {
            return (
              <Link href={href}>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full justify-start"
                >
                  <Icons.users className="mr-1 h-5 w-5" />
                  {label}
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

import {
  LayoutGrid,
  Library,
  ListMusic,
  Mic2,
  Music2,
  PlayCircle,
  Radio,
  User,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icons } from "@/components/icons"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pr-8 space-y-4 py-6", className)}>
      <div className="px-0 py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          Settings
        </h2>
        <div className="space-y-1">
          <Button
            variant="secondary"
            size="sm"
            className="w-full justify-start"
          >
            <Icons.users className="mr-1 h-5 w-5" />
            Users
          </Button>
        </div>
      </div>
    </div>
  )
}

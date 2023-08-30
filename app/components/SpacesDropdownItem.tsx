"use client"

import React from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

const SpacesDropdownItem = ({ space, user }: any) => {
  const { space: activeSpaceSlug } = useParams()

  return (
    <Link href={`/space/${space.slug}/dashboard`}>
      <DropdownMenuItem className="cursor-pointer">
        <div className="flex gap-2">
          <div className="w-5 h-5 aspect-square rounded-md bg-muted shrink-0 grid place-items-center text-xs font-semibold">
            {space.name[0]}
          </div>
          <span className={cn(space.slug === activeSpaceSlug && "")}>
            {space.name}
          </span>
        </div>
      </DropdownMenuItem>
    </Link>
  )
}

export default SpacesDropdownItem

"use client"

import React from "react"
import { useRouter } from "next/navigation"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

import { assignCurrentSpace } from "../actions"

const SpacesDropdownItem = ({ space, user }: any) => {
  const router = useRouter()
  let spaceId = space.id
  const handleClick = async () => {
    const updatedUser = await assignCurrentSpace(user, spaceId)
    router.push(`/space/${updatedUser.currentSpace?.slug}/dashboard`)
  }
  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handleClick}>
      <div className="flex gap-2">
        <div className="w-5 h-5 aspect-square rounded-md bg-muted shrink-0 grid place-items-center text-xs font-semibold">
          {space.name[0]}
        </div>
        <span>{space.name}</span>
      </div>
    </DropdownMenuItem>
  )
}

export default SpacesDropdownItem

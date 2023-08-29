"use client"

import React, { FC } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { prisma } from "@/lib/prisma"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Text from "@/components/uplift/text"
import { assignCurrentSpace } from "@/app/actions"

interface SpaceItemProps {
  space: any
  user: any
}

const SpaceItem: FC<SpaceItemProps> = ({ space, user }) => {
  const router = useRouter()
  const handleSubmit = async (spaceId: string) => {
    const updatedUser = await assignCurrentSpace(user, spaceId)
    router.push(`/space/${updatedUser.currentSpace?.slug}/dashboard`)
  }
  const isActive = user.currentSpace?.id === space.id
  return (
    <Button
      className={cn(
        "flex items-center justify-between h-20 w-full",
        isActive && "border-foreground"
      )}
      variant="outline"
      onClick={() => handleSubmit(space.id)}
    >
      <div className="flex gap-3 items-center">
        <div className="rounded-xl bg-muted flex justify-center items-center aspect-square w-12">
          {space.name[0]}
        </div>
        <Text className="text-xl font-bold">{space.name}</Text>
      </div>

      <ArrowRight />
    </Button>
  )
}

export default SpaceItem

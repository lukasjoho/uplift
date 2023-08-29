import React, { FC } from "react"
import Link from "next/link"

import { Space } from "@/lib/types/general"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Text from "@/components/uplift/text"

interface SpaceItemProps {
  space: Space
}

const SpaceItem: FC<SpaceItemProps> = ({ space }) => {
  const { slug } = space
  return (
    <Link
      href={`/space/${slug}/dashboard`}
      className={cn(
        buttonVariants({ variant: "secondary" }),
        "w-full flex gap-3 justify-start items-center py-8"
      )}
    >
      <div className="rounded-lg bg-muted flex justify-center items-center aspect-square w-10 border">
        {space.name[0]}
      </div>
      <Text className="text-lg">{space.name}</Text>
    </Link>
  )
}

export default SpaceItem

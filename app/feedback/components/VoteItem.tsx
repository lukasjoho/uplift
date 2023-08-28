"use client"

import React, { FC } from "react"
import { cookies } from "next/headers"

import { Feedback } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { createVote } from "@/app/actions"

interface VoteItemProps {
  feedback: Feedback
  hasVoted: boolean
}

const VoteItem: FC<VoteItemProps> = ({ feedback, hasVoted }) => {
  return (
    <div onClick={() => createVote(feedback.id)} className="cursor">
      <Icons.heart
        className={cn(
          "transition duration-300 fill-transparent stroke-foreground",
          hasVoted && "fill-green-500 stroke-green-500"
        )}
      />
    </div>
  )
}

export default VoteItem

import React, { FC } from "react"

import { Icons } from "@/components/icons"

interface VotingProps {
  feedbackId: string
}

const Voting: FC<VotingProps> = ({ feedbackId }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icons.heart className="" />
      <div>0</div>
    </div>
  )
}

export default Voting

"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"

interface ActiveLinkProps {
  href: string
}

const ActiveLink: FC<ActiveLinkProps> = ({ href }) => {
  const router = useRouter()

  return (
    <div className="absolute bottom-0 w-full h-1 bg-foreground">
      {JSON.stringify(router, null, 2)}
    </div>
  )
}
export default ActiveLink

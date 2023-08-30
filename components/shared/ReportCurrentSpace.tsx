"use client"

import React, { useEffect } from "react"
import { useParams } from "next/navigation"
import { useSession } from "next-auth/react"

import { assignCurrentSpace } from "@/app/actions"

const ReportCurrentSpace = () => {
  const { space } = useParams()
  const { data: session } = useSession()
  useEffect(() => {
    console.log("effect rendered", space)
    if (!space) {
      return
    }
    if (!session) {
      return
    }
    const recordCurrentSpace = async () => {
      const updatedUser = await assignCurrentSpace(space, session?.user.id)
      console.log("updatedUser: ", updatedUser)
    }
    recordCurrentSpace()
  }, [space, session])
  return null
}

export default ReportCurrentSpace

import React from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"

const SpacePage = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  }
  if (!session?.user?.hasCompletedSignUp) {
    redirect("/welcome")
  }
  if (!session?.user?.currentSpace?.slug) {
    redirect("/spaces")
  }
  redirect(`/space/${session?.user?.currentSpace?.slug}/dashboard`)
}

export default SpacePage

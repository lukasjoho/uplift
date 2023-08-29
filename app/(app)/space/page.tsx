import React from "react"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"

const SpacePage = async () => {
  const session = await getServerSession(authOptions)
  // if (!session?.user?.hasCompletedSignUp) {
  //   redirect("/welcome")
  // }
  // if (!session?.user?.currentSpace?.slug) {
  //   redirect("/spaces")
  // }
  // redirect(`/space/${session?.user?.currentSpace?.slug}/dashboard`)
  return <div>space page</div>
}

export default SpacePage

import React from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"

const SpacePage = async () => {
  const session = await getServerSession(authOptions)
  const spaceSlug = session?.user?.currentSpace?.slug || "uplift"
  redirect(`/space/${spaceSlug}/dashboard`)
}

export default SpacePage

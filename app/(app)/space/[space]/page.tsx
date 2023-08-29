import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"

export default async function SpacePage({
  params,
}: {
  params: { space: string }
}) {
  const session = await getServerSession(authOptions)
  const hasAccess = session?.user.spaces.some(
    (space: any) => space.slug == params.space
  )
  if (hasAccess) {
    redirect(`/space/${params.space}/dashboard`)
  } else {
    return (
      <div>
        You do not have access to this space. <Button>View spaces</Button>
      </div>
    )
  }
}

export const handleAccess = async (spaceSlug: string) => {
  const session = await getServerSession(authOptions)
  const hasAccess = session?.user.spaces.some(
    (space: any) => space.slug == spaceSlug
  )
  if (!hasAccess) {
    redirect("/noaccess")
  }
}

import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"

export default async function SpacePage({
  params,
}: {
  params: { space: string }
}) {
  const session = await getServerSession(authOptions)
  redirect(`/space/${params.space}/dashboard`)
}

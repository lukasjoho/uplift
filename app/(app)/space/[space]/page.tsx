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
  return false
}

import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"

interface AppLayoutProps {
  children: React.ReactNode
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  }
  return (
    <>
      <div>{children}</div>
    </>
  )
}

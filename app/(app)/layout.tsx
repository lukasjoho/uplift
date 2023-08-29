import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"

interface AppLayoutProps {
  children: React.ReactNode
  req: any
}

export default async function AppLayout({ children, req }: AppLayoutProps) {
  // const headersList = headers()
  // const session = await getServerSession(authOptions)
  // if (!session) {
  //   redirect("/login")
  // }

  return (
    <>
      <div className="flex flex-col grow">{children}</div>
    </>
  )
}

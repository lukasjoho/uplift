import { headers } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"
import { LayoutDashboard } from "lucide-react"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { cn } from "@/lib/utils"

import Container from "../components/Container"

interface AppLayoutProps {
  children: React.ReactNode
  req: any
}

export default async function AppLayout({ children, req }: AppLayoutProps) {
  // const headersList = headers()
  // console.log("HEADERS: ", headersList)
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  }
  // @ts-ignore
  // if (session?.user?.hasCompletedSignUp === false) {
  //   redirect("/welcome")
  // }
  // console.log("REQ: ", req)
  // if (!session) {
  //   redirect("/login")
  // }
  // const user = await prisma.user.findFirst({
  //   where: {
  //     email: session?.user?.email || undefined,
  //     workspaces: {
  //       some: {
  //         name: "uplift",
  //       },
  //     },
  //   },
  // })
  // if (!user) {
  //   redirect("/welcome")
  // }

  return (
    <>
      <div className="w-full sticky z-40 top-[65px] border-b bg-background">
        <Container>
          <div className="flex gap-4 items-center h-10">
            <Link
              href={"/dashboard"}
              className={cn(
                "flex items-center text-lg font-semibold transition duration-150 text-muted-foreground hover:text-foreground sm:text-sm"
              )}
            >
              Dashboard
            </Link>
            <Link
              href={"/developers"}
              className={cn(
                "flex items-center text-lg font-semibold transition duration-150 text-muted-foreground hover:text-foreground sm:text-sm"
              )}
            >
              Developers
            </Link>
          </div>
        </Container>
      </div>
      <div>{children}</div>
    </>
  )
}

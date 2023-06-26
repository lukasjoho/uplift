import { FC } from "react"
import { headers } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"
import { LayoutDashboard } from "lucide-react"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { cn } from "@/lib/utils"

import Container from "../components/Container"
import ActiveLink from "./space/[space]/(developers)/components/ActiveLink"

interface AppLayoutProps {
  children: React.ReactNode
  req: any
}

export default async function AppLayout({ children, req }: AppLayoutProps) {
  // const headersList = headers()
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  }

  return (
    <>
      {/* @ts-ignore */}
      <SpaceHeader />
      <div>{children}</div>
    </>
  )
}

const SpaceHeader = async () => {
  return (
    <div className="w-full sticky z-40 top-[65px] border-b bg-background">
      <Container>
        <div className="flex gap-4 items-center h-10">
          <AuthLink label="Dashboard" href="/dashboard" />
          <AuthLink label="Developers" href="/experiment-api" />
        </div>
      </Container>
    </div>
  )
}

interface AuthLinkProps {
  href: string
  label: string
}

// @ts-ignore
const AuthLink: FC<AuthLinkProps> = async ({ href, label }) => {
  const session = await getServerSession(authOptions)
  return (
    <Link
      // @ts-ignore
      href={`/space/${session?.user?.currentSpace?.slug}${href}`}
      className={cn(
        "relative flex items-center text-lg font-semibold transition duration-150 text-muted-foreground hover:text-foreground sm:text-sm h-10 bg-red-500"
      )}
    >
      {label}
    </Link>
  )
}

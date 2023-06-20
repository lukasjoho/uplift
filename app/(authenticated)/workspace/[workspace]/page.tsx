import Link from "next/link"
import { AlertOctagon, AlertOctagonIcon } from "lucide-react"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Container from "@/app/components/Container"

export default async function WorkspacePage({
  params,
}: {
  params: { workspace: string }
}) {
  const session = await getServerSession(authOptions)
  const dbUser = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    include: {
      workspaces: true,
      latestWorkspace: true,
    },
  })
  let isAllowed = false
  // @ts-ignore
  session?.user?.workspaces.forEach((workspace: any) => {
    if (workspace.slug === params.workspace) {
      isAllowed = true
    }
  })
  if (!isAllowed) {
    return (
      <div className="pt-32">
        <Container small>
          <Alert className="bg-red-500/40 border-red-500 ">
            <AlertOctagon className="h-4 w-4" />

            <AlertTitle>Access Denied</AlertTitle>
            <AlertDescription>
              You do not have access to this workspace.
            </AlertDescription>
            <div className="mt-4">
              <Link href="/workspaces">
                <Button>View my workspaces</Button>
              </Link>
            </div>
          </Alert>
        </Container>
      </div>
    )
  }
  return (
    <div>
      My Workspace: {params.workspace}{" "}
      <div>{JSON.stringify(session, null, 2)}</div>
    </div>
  )
}

import Link from "next/link"
import { AlertOctagon, AlertOctagonIcon } from "lucide-react"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Container from "@/app/components/Container"

export default async function SpacePage({
  params,
}: {
  params: { space: string }
}) {
  // const session = await getServerSession(authOptions)
  // const dbUser = await prisma.user.findFirst({
  //   where: {
  //     email: session?.user?.email,
  //   },
  //   include: {
  //     spaces: true,
  //     currentSpace: true,
  //   },
  // })
  // let isAllowed = false
  // // @ts-ignore
  // session?.user?.spaces.forEach((space: any) => {
  //   if (space.slug === params.space) {
  //     isAllowed = true
  //   }
  // })
  // if (!isAllowed) {
  //   return (
  //     <div className="pt-32">
  //       <Container small>
  //         <Alert className="bg-red-500/40 border-red-500 ">
  //           <AlertOctagon className="h-4 w-4" />

  //           <AlertTitle>Access Denied</AlertTitle>
  //           <AlertDescription>
  //             You do not have access to this workspace.
  //           </AlertDescription>
  //           <div className="mt-4">
  //             <Link href="/workspaces">
  //               <Button>View my spaces</Button>
  //             </Link>
  //           </div>
  //         </Alert>
  //       </Container>
  //     </div>
  //   )
  // }
  return (
    <div>
      space
      {/* My Space: {params.space} <div>{JSON.stringify(session, null, 2)}</div> */}
    </div>
  )
}

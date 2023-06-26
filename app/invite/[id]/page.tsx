import React from "react"
import Link from "next/link"
import { AlertOctagon } from "lucide-react"

import { prisma } from "@/lib/prisma"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Container from "@/app/components/Container"

const InvitePage = async ({ params }: { params: { id: string } }) => {
  const invite = await prisma.invite.findFirst({ where: { id: params.id } })
  if (!invite) {
    return (
      <div className="pt-32">
        <Container small>
          <Alert className="bg-red-500/40 border-red-500 ">
            <AlertOctagon className="h-4 w-4" />

            <AlertTitle>Invite invalid</AlertTitle>
            <AlertDescription>
              The invite link is invalid or expired. Please ask your colleague
              to resend the invite or login yourself.
            </AlertDescription>
            <div className="mt-4">
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            </div>
          </Alert>
        </Container>
      </div>
    )
  }
  return <div>InvitePage {JSON.stringify(invite, null, 2)}</div>
}

export default InvitePage

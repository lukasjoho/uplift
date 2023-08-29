import React from "react"
import Link from "next/link"
import { AlertCircle, FileWarning, Terminal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button, buttonVariants } from "@/components/ui/button"
import Container from "@/app/components/Container"

const UnauthorizedPage = () => {
  return (
    <div className="pt-8 md:pt-16">
      <Container className="items-center">
        <AlertDestructive />
      </Container>
    </div>
  )
}

export default UnauthorizedPage

const AlertDestructive = () => {
  return (
    <Alert variant="destructive" className="w-auto">
      <AlertCircle className="h-4 w-4" />
      <div className="space-y-6">
        <div>
          <AlertTitle>No space access</AlertTitle>
          <AlertDescription>
            You do not have access to this workspace
          </AlertDescription>
        </div>
        <Link href="/spaces" className={cn(buttonVariants())}>
          View my spaces
        </Link>
      </div>
    </Alert>
  )
}

import React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

const WelcomeMessage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Icons.logoSingle className="w-32 h-32 absolute -translate-y-full" />
      <Title size="t0">Welcome to Uplift</Title>
      <Text className="text-muted-foreground">
        Make your beliefs explicit by testing and validating them through
        experimentation.
      </Text>
      <Link href="/spaces">
        <Button>Get Started</Button>
      </Link>
    </div>
  )
}

export default WelcomeMessage

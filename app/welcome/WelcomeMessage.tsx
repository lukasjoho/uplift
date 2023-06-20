import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Title from "@/components/uplift/title"

const WelcomeMessage = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <Icons.logo /> */}
      <Title size="t0">Welcome</Title>
    </div>
  )
}

export default WelcomeMessage

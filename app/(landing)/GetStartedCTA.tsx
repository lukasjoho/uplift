import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Title from "@/components/uplift/title"

import Container from "../components/Container"

const GetStartedCTA = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center gap-4">
          <Icons.logo />

          <Title size="t0" className="text-center mb-4">
            Unleash the power <br />
            of experimentation now.
          </Title>
          <Button>Get Started</Button>
        </div>
      </Container>
    </section>
  )
}

export default GetStartedCTA

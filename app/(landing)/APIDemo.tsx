import React from "react"

import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

import Container from "../components/Container"

const APIDemo = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-2">
          <div className="aspect-video w-full bg-muted rounded-xl"></div>

          <div>
            <Title size="t2">One API. For all your client applications</Title>
            <Text>
              Set an experiment's status to on, set the right date range and get
              your experiments exposed within a clean endpoint for your client
              applications to consume as feature flags.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default APIDemo

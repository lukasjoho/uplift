import React from "react"

import Container from "@/app/components/Container"

const Hypothesis = () => {
  return (
    <section id="hypothesis" className="py-16">
      <Container>
        <input
          type="text"
          placeholder="Enter hypothesis"
          className="bg-transparent outline-none text-8xl font-bold"
        />
      </Container>
    </section>
  )
}

export default Hypothesis

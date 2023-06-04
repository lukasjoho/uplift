import React from "react"

import Container from "../components/Container"
import ReleaseToggle from "./ReleaseToggle"

const ReleaseToggleBar = () => {
  return (
    <div>
      <Container>
        <div className="border-b w-full pb-4">
          <ReleaseToggle />
        </div>
      </Container>
    </div>
  )
}

export default ReleaseToggleBar

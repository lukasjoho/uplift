import React from "react"

import Container from "../../components/Container"
import FeaturedHeader from "./components/FeaturedHeader"
import ViewToggle from "./components/ViewToggle"

const DashboardPage = async () => {
  return (
    <div className="pt-4 md:pt-8">
      <Container>
        <div className="space-y-8">
          <FeaturedHeader />
          <ViewToggle />
        </div>
      </Container>
    </div>
  )
}

export default DashboardPage

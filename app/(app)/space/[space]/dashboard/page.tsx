import React from "react"

import Container from "@/app/components/Container"

import FeaturedHeader from "./components/FeaturedHeader"
import Timeline from "./components/Timeline"
import ViewToggle from "./components/ViewToggle"

const DashboardPage = async ({ params }: { params: { space: string } }) => {
  return (
    <div className="pt-4 md:pt-8 pb-32 md:pb-64">
      <Container>
        <div className="space-y-8">
          <FeaturedHeader />
          {/* @ts-ignore */}
          <Timeline />
          <ViewToggle />
        </div>
      </Container>
    </div>
  )
}

export default DashboardPage

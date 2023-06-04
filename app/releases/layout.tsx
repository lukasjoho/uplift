import React from "react"

import PageHeader from "@/components/uplift/PageHeader"

import Container from "../components/Container"
import ReleaseToggle from "./ReleaseToggle"
import ReleaseToggleBar from "./ReleaseToggleBar"

const ReleaseLayout = ({ children }: any) => {
  return (
    <div className="space-y-8">
      <div>
        <PageHeader
          title="Releases"
          subtitle="At Uplift, we strive to stay as close to our users as possible. Part of that is giving you insight into our roadmap and the changes we do to our product.
      Find our launches and upcoming releases below."
        />
        <ReleaseToggleBar />
      </div>
      {children}
    </div>
  )
}

export default ReleaseLayout

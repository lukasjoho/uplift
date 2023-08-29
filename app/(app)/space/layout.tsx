import React, { FC } from "react"

import Alert from "@/components/shared/Alert"
import DemoAlert from "@/components/shared/Alert"
import SpaceHeader from "@/app/components/SpaceHeader"

interface SpaceLayoutProps {
  children: React.ReactNode[]
}

const SpaceLayout: FC<SpaceLayoutProps> = ({ children }) => {
  return (
    <>
      {/* @ts-expect-error */}
      <SpaceHeader />
      <DemoAlert
        title="Heads up!"
        description=" You are in the Uplift demo space. Play around as you like. The data
    resets every 30 min."
        variant="info"
      />
      {children}
    </>
  )
}

export default SpaceLayout

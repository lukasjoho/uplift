import React, { FC } from "react"

import SpaceHeader from "@/app/components/SpaceHeader"

interface SpaceLayoutProps {
  children: React.ReactNode[]
}

const SpaceLayout: FC<SpaceLayoutProps> = ({ children }) => {
  return (
    <>
      {/* @ts-expect-error */}
      <SpaceHeader />
      {children}
    </>
  )
}

export default SpaceLayout

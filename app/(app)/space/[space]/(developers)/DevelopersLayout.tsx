import React, { FC } from "react"

import SubMenuLayout from "@/components/SubMenuLayout"

interface SubMenuLayoutProps {
  children: React.ReactNode
  pageTitle: string
}

const DevelopersLayout: FC<SubMenuLayoutProps> = ({ children, pageTitle }) => {
  return (
    <SubMenuLayout
      menuTitle="Developers"
      menuItems={[{ label: "Experiment API", href: "/api" }]}
      pageTitle={pageTitle}
    >
      {children}
    </SubMenuLayout>
  )
}

export default DevelopersLayout

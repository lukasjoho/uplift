import React, { FC } from "react"

import SubMenuLayout from "@/components/SubMenuLayout"

interface SubMenuLayoutProps {
  children: React.ReactNode
  pageTitle: string
}

const SettingsLayout: FC<SubMenuLayoutProps> = ({ children, pageTitle }) => {
  return (
    <SubMenuLayout
      menuTitle="Settings"
      menuItems={[{ label: "Users", href: "/users" }]}
      pageTitle={pageTitle}
    >
      {children}
    </SubMenuLayout>
  )
}

export default SettingsLayout

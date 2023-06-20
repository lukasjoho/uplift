import React, { FC } from "react"

import Title from "@/components/uplift/title"
import Container from "@/app/components/Container"
import { Sidebar } from "@/app/settings/components/sidebar"

interface SubMenuLayoutProps {
  children: React.ReactNode
  menuTitle: string
  pageTitle: string
  menuItems: any[]
}

const SubMenuLayout: FC<SubMenuLayoutProps> = ({
  children,
  menuTitle,
  menuItems,
  pageTitle,
}) => {
  return (
    <Container>
      <div className="flex grow">
        <div className="w-[240px] shrink-0 border-r">
          <Sidebar title={pageTitle} items={menuItems} />
        </div>
        <div className="overflow-hidden grow p-8 pr-0 space-y-8">
          <Title>{menuTitle}</Title>
          {children}
        </div>
      </div>
    </Container>
  )
}

export default SubMenuLayout

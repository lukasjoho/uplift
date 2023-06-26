import React, { FC } from "react"

import Title from "@/components/uplift/title"
import { Sidebar } from "@/app/(authenticated)/space/[space]/settings/components/sidebar"
import Container from "@/app/components/Container"

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
          <Sidebar title={menuTitle} items={menuItems} />
        </div>
        <div className="overflow-hidden grow p-8 pr-0 space-y-8">
          <Title>{pageTitle}</Title>
          {children}
        </div>
      </div>
    </Container>
  )
}

export default SubMenuLayout

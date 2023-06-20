import React, { FC } from "react"

import Title from "@/components/uplift/title"
import Container from "@/app/components/Container"
import { Sidebar } from "@/app/settings/components/sidebar"

interface SubMenuLayoutProps {
  children: React.ReactNode
  pageTitle: string
  subPageTitle: string
  menuItems: any[]
}

const DevelopersLayout: FC<SubMenuLayoutProps> = ({
  children,
  pageTitle,
  subPageTitle,
  menuItems,
}) => {
  return (
    <div>
      <Container>
        <div className="flex grow">
          <div className="w-[240px] shrink-0 border-r h-full ">
            <Sidebar title="Developers" items={menuItems} />
          </div>
          <div className="overflow-hidden grow p-8 pr-0">
            <Title>{subPageTitle}</Title>
            {children}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DevelopersLayout

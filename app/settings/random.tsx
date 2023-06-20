import React from "react"

import { Icons } from "@/components/icons"

import Container from "../components/Container"
import { Sidebar } from "./components/sidebar"

const items = [
  {
    label: "Users",
    href: "/settings/users",
    icon: <Icons.users className="mr-1 h-5 w-5" />,
  },
]

const SettingsLayout = ({ children }: any) => {
  return (
    <Container>
      <div className="flex grow h-full">
        <div className="w-[240px] shrink-0 border-r">
          <Sidebar title="Settings" items={items} />
        </div>
        <div className="overflow-hidden grow p-8 pr-0 min-w-[480px]">
          {children}
        </div>
      </div>
    </Container>
  )
}

export default SettingsLayout

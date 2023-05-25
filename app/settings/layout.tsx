import { Settings } from "http2"
import React, { FC } from "react"

import Title from "@/components/uplift/title"

import Container from "../components/Container"
import { Sidebar } from "./components/sidebar"

interface SettingsLayoutProps {
  title?: string
  titleChild?: React.ReactNode
  children: React.ReactNode
}

const SettingsLayout: FC<SettingsLayoutProps> = ({
  title,
  children,
  titleChild,
}) => {
  return (
    <div>
      <Container>
        <div className="flex grow ">
          <div className="w-[240px] shrink-0 border-r h-full ">
            <Sidebar />
          </div>
          <div className="overflow-hidden grow p-8 pr-0">{children}</div>
        </div>
      </Container>
    </div>
  )
}

export default SettingsLayout

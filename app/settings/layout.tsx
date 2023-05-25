import { Settings } from "http2"
import React, { FC } from "react"

import Title from "@/components/uplift/title"

import Container from "../components/Container"
import { Sidebar } from "./components/sidebar"

const SettingsLayout = ({ children }: any) => {
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

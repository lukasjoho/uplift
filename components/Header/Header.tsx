import React from "react"

import AvatarOrLogin from "@/app/components/AvatarOrLogin"

import { DesktopHeader } from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="md:hidden">
        {/* @ts-ignore */}
        <MobileHeader avatarOrLogin={<AvatarOrLogin />} />
      </div>
    </header>
  )
}

export default Header

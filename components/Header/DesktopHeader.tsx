import Link from "next/link"

import { siteConfig } from "@/config/site"
import AvatarOrLogin from "@/app/components/AvatarOrLogin"
import Container from "@/app/components/Container"

import { AppNav } from "../AppNav"
import { SiteNav } from "../SiteNav"
import { Icons } from "../icons"
import DropMenu from "../uplift/DropMenu"

export function DesktopHeader() {
  return (
    <Container>
      <div className="flex gap-8 h-16 items-center sm:justify-between ">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="flex grow justify-between">
          {/* @ts-ignore */}
          <AppNav items={siteConfig.appNav} />
          <SiteNav items={siteConfig.siteNav} />
        </nav>
        <div className="flex items-center gap-4">
          <DropMenu />
          {/* @ts-ignore */}
          <AvatarOrLogin />
        </div>
      </div>
    </Container>
  )
}

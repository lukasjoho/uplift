"use client"

import React, { FC, createContext, useContext } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { useToggle } from "@/lib/hooks"
import AvatarOrLogin from "@/app/components/AvatarOrLogin"
import Container from "@/app/components/Container"

import { Icons } from "../icons"
import { Separator } from "../ui/separator"

interface MobileHeaderProps {
  avatarOrLogin: JSX.Element
}

const MobileHeader: FC<MobileHeaderProps> = ({ avatarOrLogin }) => {
  const { status: isOpen, toggleStatus: toggleIsOpen } = useToggle()
  return (
    <Provider value={{ isOpen, toggleIsOpen }}>
      <Container>
        <div className="flex h-10 items-center justify-between ">
          <ToggleMenu />
          <Link href="/">
            <Icons.logoRaw className="h-6 w-6" />
          </Link>
          {avatarOrLogin}
        </div>
      </Container>
      <MobileMenu />
    </Provider>
  )
}

export default MobileHeader

const MenuContext = createContext({
  isOpen: false,
  toggleIsOpen: () => {},
})

const { Provider } = MenuContext

const ToggleMenu = () => {
  const { isOpen, toggleIsOpen } = useContext(MenuContext)
  const handleClick = () => {
    toggleIsOpen()
  }
  return (
    <div onClick={handleClick}>
      {!isOpen && <Menu />}
      {isOpen && <X />}
    </div>
  )
}

const MobileMenu = () => {
  const { isOpen } = useContext(MenuContext)
  return (
    <div className="absolute w-full mt-[1px]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden bg-background w-full border-b"
            initial={{
              height: 0,
            }}
            animate={{
              height: "auto",
            }}
            exit={{
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.74, 0, 0.19, 1.02],
            }}
            key="mobile-menu"
          >
            <Container>
              <nav>
                <ul>
                  <div className="py-4">
                    <MobileMenuItem label="Workspace" />
                  </div>
                  <Separator />
                  <div className="py-4">
                    <MobileMenuItem label="Releases" />
                    <MobileMenuItem label="Blog" />
                  </div>
                </ul>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const MobileMenuItem = ({ label }: any) => {
  return <li className="text-2xl py-2 font-bold">{label}</li>
}

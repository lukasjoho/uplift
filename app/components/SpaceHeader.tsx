import React from "react"
import Link from "next/link"
import { ListTodo } from "lucide-react"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import AppMenuItem from "./AppMenuItem"
import Container from "./Container"
import SpacesDropdown from "./SpacesDropdown"

const SpaceHeader = async () => {
  return (
    <div className="w-full sticky z-30 top-[57px] md:top-[65px] border-b bg-background">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center h-10">
            {/* @ts-expect-error */}
            <SpacesDropdown>Current space</SpacesDropdown>
            <AuthLink href="/dashboard">
              <AppMenuItem
                href="dashboard"
                label="Dashboard"
                mobileLabel="Dash"
              />
            </AuthLink>
            <AuthLink href="/experiment-api">
              <AppMenuItem
                href="experiment-api"
                label="Developers"
                mobileLabel="Dev"
              />
            </AuthLink>
          </div>
          <div className="flex items-center gap-2">
            <Modal>
              <ModalOpenButton>
                <Button size="xs" variant="outline">
                  <ListTodo className="w-4 h-4" />
                </Button>
              </ModalOpenButton>
              <ModalContents title="Open Items">
                <div>Hello</div>
              </ModalContents>
            </Modal>
            <Button size="xs" variant="outline">
              New
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SpaceHeader

interface AuthLinkProps {
  href: string
  children: React.ReactNode
}

// @ts-ignore
export const AuthLink: FC<AuthLinkProps> = async ({ children, href }) => {
  const session = await getServerSession(authOptions)
  return (
    <>
      <Link
        // @ts-ignore
        href={`/space/${session?.user?.currentSpace?.slug}${href}`}
      >
        {children}
      </Link>
    </>
  )
}

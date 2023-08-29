import React from "react"
import Link from "next/link"
import { ListTodo } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AuthLink } from "@/components/layout/AuthLink"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import AppMenuItem from "./AppMenuItem"
import Container from "./Container"
import SpaceDropdown from "./SpaceDropdown"

const SpaceHeader = async () => {
  return (
    <div className="w-full sticky z-30 top-[57px] md:top-[65px] border-b bg-background">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center h-10">
            {/* @ts-expect-error */}
            <SpaceDropdown />
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

import React from "react"
import Link from "next/link"
import { ListTodo } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"
import { AuthLink } from "@/components/layout/AuthLink"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import CreateExperimentForm from "../(app)/space/[space]/dashboard/components/CreateExperimentForm"
import AppMenuItem from "./AppMenuItem"
import Container from "./Container"
import SpaceDropdown from "./SpaceDropdown"

const SpaceHeader = async () => {
  return (
    <div className="w-full sticky z-30 top-[57px] md:top-[65px] border-b bg-background">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center h-10">
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
                  <Icons.pluscircle className="w-3 h-3" />
                  New
                </Button>
              </ModalOpenButton>
              <ModalContents>
                <CreateExperimentForm />
              </ModalContents>
            </Modal>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SpaceHeader

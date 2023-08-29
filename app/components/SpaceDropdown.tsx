import React from "react"
import Link from "next/link"
import { ChevronsUpDown, LayoutDashboard, PlusCircle } from "lucide-react"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import CreateSpaceForm from "../(app)/spaces/components/CreateSpaceForm"
import CreateSpaceModal from "../(app)/spaces/components/CreateSpaceModal"
import { AvatarDropdown } from "./AvatarDropdown"
import SpacesDropdownItem from "./SpacesDropdownItem"

const SpaceDropdown = async ({ children }: any) => {
  const session = await getServerSession(authOptions)
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    include: {
      spaces: true,
    },
  })

  return (
    <div>
      <Modal>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="flex gap-2 items-center group outline-none focus:outline-none"
              variant="outline"
              size="xs"
            >
              <div className="w-5 h-5 aspect-square rounded-md bg-muted shrink-0 grid place-items-center text-xs font-semibold">
                {session?.user.currentSpace.name[0]}
              </div>
              <span>{session?.user.currentSpace.name}</span>
              <ChevronsUpDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="text-foreground">
              Spaces
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {user?.spaces.map((space: any) => {
                return <SpacesDropdownItem space={space} user={session?.user} />
              })}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <ModalOpenButton>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex gap-2 items-center">
                  <div className="w-5 flex justify-center">
                    <PlusCircle className="h-4 w-4" />
                  </div>
                  <span>New Space</span>
                </div>
              </DropdownMenuItem>
            </ModalOpenButton>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModalContents title="Create Space" maxSize="sm">
          <CreateSpaceForm />
        </ModalContents>
      </Modal>
    </div>
  )
}

export default SpaceDropdown

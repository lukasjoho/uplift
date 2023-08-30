"use client"

import React from "react"
import { useParams } from "next/navigation"
import { ChevronsUpDown, LayoutDashboard, PlusCircle } from "lucide-react"
import { useSession } from "next-auth/react"

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
import { Skeleton } from "@/components/ui/skeleton"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import CreateSpaceForm from "../(app)/spaces/components/CreateSpaceForm"
import SpacesDropdownItem from "./SpacesDropdownItem"

const SpaceDropdown = () => {
  const { data: session, status } = useSession()
  const { space: activeSpaceSlug } = useParams()
  const activeSpace: any = session?.user.spaces.filter(
    (space: any) => space.slug === activeSpaceSlug
  )[0]
  return (
    <div>
      <Modal>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="flex gap-2 items-center justify-start group outline-none focus:outline-none"
              variant="outline"
              size="xs"
            >
              <div className="w-5 h-5 aspect-square rounded-md bg-muted shrink-0 grid place-items-center text-xs font-semibold overflow-hidden">
                {activeSpace?.name[0].toUpperCase()}
                <Skeleton className="w-full h-full" />
              </div>
              <span className="block text-ellipsis whitespace-nowrap w-12 overflow-hidden text-left">
                {activeSpace?.name}
                {status === "loading" && (
                  <Skeleton className="w-12 h-[20px] rounded-md" />
                )}
              </span>
              <ChevronsUpDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="text-foreground">
              Spaces
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {session?.user.spaces?.map((space: any) => {
                return <SpacesDropdownItem space={space} />
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

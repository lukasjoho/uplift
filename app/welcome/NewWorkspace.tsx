"use client"

import React from "react"

import { useWindowSize } from "@/lib/hooks"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import NewWorkspaceForm from "./NewWorkSpaceForm"

const NewWorkspace = () => {
  let size = useWindowSize()

  return (
    <Modal>
      <ModalOpenButton>
        <button className="text-muted-foreground hover:text-foreground">
          Create New Workspace
        </button>
      </ModalOpenButton>
      <ModalContents title="Create Workspace" size={size}>
        <NewWorkspaceForm />
      </ModalContents>
    </Modal>
  )
}

export default NewWorkspace

import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import CreateSpaceForm from "./CreateSpaceForm"

const CreateSpaceModal = ({ children }: any) => {
  return (
    <Modal>
      <ModalOpenButton>{children}</ModalOpenButton>
      <ModalContents title="Create Space" maxSize="sm">
        <CreateSpaceForm />
      </ModalContents>
    </Modal>
  )
}

export default CreateSpaceModal

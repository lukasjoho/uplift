import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import CreateSpaceForm from "./CreateSpaceForm"

const CreateSpaceModal = () => {
  return (
    <Modal>
      <ModalOpenButton>
        <Button variant="outline" className="w-full">
          <Icons.pluscircle className="w-4 h-4" />
          Create space
        </Button>
      </ModalOpenButton>
      <ModalContents title="Create Space" maxSize="sm">
        <CreateSpaceForm />
      </ModalContents>
    </Modal>
  )
}

export default CreateSpaceModal

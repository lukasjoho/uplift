"use client"

import React from "react"

import { useWindowSize } from "@/lib/hooks"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import CreateExperimentForm from "./CreateExperimentForm"

const NewExperimentButton = () => {
  let size = useWindowSize()

  return (
    <Modal>
      <ModalOpenButton>
        <Button variant="outline" size="sm">
          <Icons.pluscircle className="w-4 h-4" />
          New
        </Button>
      </ModalOpenButton>
      <ModalContents title="Create Experiment" size={size}>
        <CreateExperimentForm />
      </ModalContents>
    </Modal>
  )
}

export default NewExperimentButton

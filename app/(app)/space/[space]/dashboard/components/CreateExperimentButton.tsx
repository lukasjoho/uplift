"use client"

import React, { FC } from "react"

import { useWindowSize } from "@/lib/hooks"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"

import CreateExperimentForm from "./CreateExperimentForm"

interface CreateExperimentButtonProps {
  label?: string
}

const CreateExperimentButton: FC<CreateExperimentButtonProps> = ({ label }) => {
  let size = useWindowSize()

  return (
    <Modal>
      <ModalOpenButton>
        <Button variant="outline" size="sm">
          <Icons.pluscircle className="w-4 h-4" />
          {label ?? "New"}
        </Button>
      </ModalOpenButton>
      <ModalContents title="Create Experiment" size={size}>
        <>
          <CreateExperimentForm />
        </>
      </ModalContents>
    </Modal>
  )
}

export default CreateExperimentButton

import React, { FC } from "react"
import { TestTube2 } from "lucide-react"
import { getServerSession } from "next-auth"

import { authOptions, getAuthSession } from "@/lib/auth"
import { formatDate } from "@/lib/helpers"
import { prisma } from "@/lib/prisma"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from "@/components/uplift/GlobalModal/GlobalModal"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"
import { getExperiments } from "@/app/actions"

import CreateExperimentButton from "./CreateExperimentButton"
import CreateExperimentForm from "./CreateExperimentForm"

const TableView = async () => {
  const experiments = await getExperiments()
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className="text-sm">
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Decision</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>DRI</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {experiments.map((experiment: any) => {
            const {
              id,
              name,
              identifier,
              decision,
              country,
              isEnabled,
              startDate,
              endDate,
              dri,
            } = experiment
            return (
              <Modal>
                <ModalOpenButton>
                  <TableRow key={id}>
                    <TableCell>
                      <NameCell name={name} identifier={identifier} />
                    </TableCell>
                    <TableCell>
                      <DecisionCell decision={decision} />
                    </TableCell>
                    <TableCell>
                      <StatusCell isEnabled={isEnabled} />
                    </TableCell>
                    <TableCell>{country?.label}</TableCell>
                    <TableCell>{formatDate(startDate)}</TableCell>
                    <TableCell>{formatDate(endDate)}</TableCell>
                    <TableCell>{dri?.email}</TableCell>
                  </TableRow>
                </ModalOpenButton>
                <ModalContents title={experiment.name} maxSize="xl">
                  <CreateExperimentForm experiment={experiment} />
                </ModalContents>
              </Modal>
            )
          })}
        </TableBody>
      </Table>
      {experiments.length < 1 && (
        <div className="flex flex-col items-center w-full py-32">
          <CreateFirstExperimentCTA />
        </div>
      )}
    </div>
  )
}

export default TableView

export const CreateFirstExperimentCTA = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <TestTube2 />
      <Text className="text-muted-foreground">No experiments created.</Text>
      <CreateExperimentButton label="Create Experiment" />
    </div>
  )
}

interface NameCellProps {
  name: string
  identifier: string
}
const NameCell: FC<NameCellProps> = ({ name, identifier }) => {
  return (
    <div>
      <Title size="t6">{name}</Title>
      <Text>{identifier}</Text>
    </div>
  )
}

interface DecisionCellProps {
  decision: {
    id: string
    value: string
    label: string
  }
}
const DecisionCell: FC<DecisionCellProps> = ({ decision }) => {
  if (!decision) {
    return null
  }
  const { label } = decision
  let styling = ""
  switch (label) {
    case "Iterate":
      styling = "bg-yellow-500/20 text-yellow-500"
      break
    case "Close":
      styling = "bg-red-500/20 text-red-500"
      break
    case "Roll Out":
      styling = "bg-green-500/20 text-green-500"
      break
    default:
      styling = ""
  }
  return (
    <div>
      <Badge className={cn("", styling)}>{label}</Badge>
    </div>
  )
}

interface StatusCellProps {
  isEnabled: boolean
}
const StatusCell: FC<StatusCellProps> = ({ isEnabled }) => {
  return (
    <div className="flex gap-1 items-center">
      <div
        className={cn(
          "aspect-square rounded-full w-2",
          isEnabled ? "bg-green-500" : "bg-neutral-500"
        )}
      />
      <span
        className={cn(
          "text-sm",
          isEnabled ? "text-green-500" : "text-neutral-500"
        )}
      >
        {isEnabled ? "On" : "Off"}
      </span>
    </div>
  )
}

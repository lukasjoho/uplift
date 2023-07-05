import React, { FC } from "react"

import { formatDate } from "@/lib/helpers"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

const TableView = async () => {
  const res = await fetch(`http://localhost:3000/api/experiments`)
  const experiments = await res.json()
  return (
    <div>
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
              )
            })}
          </TableBody>
        </Table>
      </div>
      {/* <pre>{JSON.stringify(experiments, null, 2)}</pre> */}
    </div>
  )
}

export default TableView

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
  return (
    <div>
      <Badge>{label}</Badge>
    </div>
  )
}

interface StatusCellProps {
  isEnabled: boolean
}
const StatusCell: FC<StatusCellProps> = ({ isEnabled }) => {
  return <Switch />
}

import React from "react"
import { Loader } from "lucide-react"

import { formatDate } from "@/lib/helpers"
import { prisma } from "@/lib/prisma"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

async function getInvites() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/invite`, {
    cache: "no-cache",
  })
  const invites = await res.json()
  return invites
}

const InvitesTable = async () => {
  const invites = await getInvites()
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className="text-sm">
            <TableHead>Email</TableHead>
            <TableHead>Invited At</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invites.map((invite: any) => (
            <TableRow key={invite.id}>
              <TableCell className="font-medium flex gap-3">
                {invite.email}
              </TableCell>
              <TableCell>{formatDate(invite.createdAt)}</TableCell>
              <TableCell>
                <Badge className="bg-yellow-500 hover:bg-yellow-500">
                  Invited
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default InvitesTable

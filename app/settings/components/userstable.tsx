import Image from "next/image"

import { formatDate } from "@/lib/helpers"
import { prisma } from "@/lib/prisma"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export async function UsersTable() {
  let users = await prisma.user.findMany({
    include: {
      role: true,
    },
  })
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className="text-sm">
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium flex gap-3">
                <div className="rounded-full overflow-hidden w-6 aspect-square">
                  <Image
                    src={`${user.image}`}
                    alt=""
                    width="100"
                    height="100"
                  />
                </div>
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <RoleBadge role={user.role} />
              </TableCell>
              <TableCell>{formatDate(user.createdAt.toISOString())}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const RoleBadge = ({ role }: any) => {
  const { label, value } = role
  return (
    <Badge
      className={cn(
        "",
        value == "owner" &&
          "bg-gradient-to-b from-green-400 to-green-600 border-none"
      )}
      variant={value == "member" ? "outline" : undefined}
    >
      {label}
    </Badge>
  )
}

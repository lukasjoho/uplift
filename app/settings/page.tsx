import React, { Suspense } from "react"

import { prisma } from "@/lib/prisma"
import { Separator } from "@/components/ui/separator"
import Title from "@/components/uplift/title"

import Container from "../components/Container"
import { InviteForm } from "./components/InviteForm"
import { Sidebar } from "./components/sidebar"
import { UsersTable } from "./components/userstable"

const UsersPage = async () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <Title>Users</Title>
        <InviteForm />
      </div>
      <Suspense fallback={<p>Loading feed...</p>}>
        {/* @ts-ignore */}
        <UsersTable />
      </Suspense>
    </div>
  )
}

export default UsersPage

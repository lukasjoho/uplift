import React, { Suspense } from "react"

import { prisma } from "@/lib/prisma"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubMenuLayout from "@/components/SubMenuLayout"
import { Icons } from "@/components/icons"
import Title from "@/components/uplift/title"

import Container from "../../../../components/Container"
import { InviteForm } from "./components/InviteForm"
import InvitesTable from "./components/InvitesTable"
import SettingsLayout from "./components/SettingsLayout"
import { Sidebar } from "./components/sidebar"
import { UsersTable } from "./components/userstable"

export const revalidate = 0

const UsersPage = async () => {
  return (
    <SettingsLayout pageTitle="Users">
      <div className="flex flex-col gap-6">
        <Tabs defaultValue="members" className="w-full space-y-4">
          <div className="flex justify-between ">
            <TabsList>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="invites">Invites</TabsTrigger>
            </TabsList>
            <InviteForm />
          </div>

          <TabsContent value="members" className="mt-0">
            <Suspense fallback={<p>Loading members...</p>}>
              {/* @ts-ignore */}
              <UsersTable />
            </Suspense>
          </TabsContent>
          <TabsContent value="invites">
            <Suspense fallback={<p>Loading invites...</p>}>
              {/* @ts-ignore */}
              <InvitesTable />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </SettingsLayout>
  )
}

export default UsersPage

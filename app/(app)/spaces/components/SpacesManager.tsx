import React from "react"
import { getServerSession } from "next-auth"

import { authOptions, getAuthSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Text from "@/components/uplift/text"

import CreateSpaceModal from "./CreateSpaceModal"
import SpaceItem from "./SpaceItem"

const SpacesManager = async () => {
  const session = await getAuthSession()
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    include: {
      spaces: true,
    },
  })
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="text-center">
        <CardTitle className="font-bold text-4xl">Spaces</CardTitle>
        <Text className="text-muted-foreground">
          Create or join a space to manage experiments within your organization
          or team.
        </Text>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-4 mt-6 max-h-64 overflow-scroll">
            {user?.spaces.map((space) => {
              return <SpaceItem space={space} />
            })}
          </div>
          <div className="space-y-4">
            <Text className="text-sm text-muted-foreground text-center">
              or
            </Text>
            <CreateSpaceModal>
              <Button variant="outline" className="w-full">
                <Icons.pluscircle className="w-4 h-4" />
                Create space
              </Button>
            </CreateSpaceModal>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SpacesManager

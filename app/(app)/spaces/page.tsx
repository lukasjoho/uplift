import React, { FC } from "react"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Text from "@/components/uplift/text"

import SpaceItem from "./components/SpaceItem"
import SpacesManager from "./components/SpacesManager"

const SpacesPage = async () => {
  return (
    <div className="grow flex items-center justify-center">
      {/* @ts-expect-error */}
      <SpacesManager />
    </div>
  )
}

export default SpacesPage

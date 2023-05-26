import React from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Text from "@/components/uplift/text"

import Container from "../components/Container"
import FeaturedHeader from "./components/FeaturedHeader"
import ViewToggle from "./components/ViewToggle"

const DashboardPage = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login?callbackPath=dashboard")
  }
  return (
    <div className="pt-8">
      <Container>
        <div className="space-y-8">
          <FeaturedHeader />
          <ViewToggle />
        </div>
      </Container>
    </div>
  )
}

export default DashboardPage

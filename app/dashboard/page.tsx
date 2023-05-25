import React from "react"

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

const DashboardPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <Text className="text-2xl font-bold">3 Running</Text>
            <Text className="text-2xl font-bold">5 In Delivery</Text>
            <Text className="text-2xl font-bold">4 Done</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <Text className="text-2xl font-bold">3 Running</Text>
            <Text className="text-2xl font-bold">5 In Delivery</Text>
            <Text className="text-2xl font-bold">4 Done</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <Text className="text-2xl font-bold">3 Running</Text>
            <Text className="text-2xl font-bold">5 In Delivery</Text>
            <Text className="text-2xl font-bold">4 Done</Text>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

export default DashboardPage

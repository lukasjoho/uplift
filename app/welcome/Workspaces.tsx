import React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

import NewWorkspace from "./NewWorkspace"

const Workspaces = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Title size="t1">Spaces</Title>
      <Card>
        <CardHeader>
          <CardDescription className="text-base">
            You have access to the following spaces.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <div className="border rounded-lg px-3 py-3 flex justify-between items-center w-full">
              <Text className="text-xl font-semibold">Uplift</Text>
              <Button className="bg-gradient-to-br from-green-700 to-green-600 text-foreground">
                Enter
              </Button>
            </div>
            <Text className="text-muted-foreground text-sm">or</Text>

            <NewWorkspace />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Workspaces

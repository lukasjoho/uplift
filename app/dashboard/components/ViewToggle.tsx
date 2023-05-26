import React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Title from "@/components/uplift/title"

import GridView from "./GridView"
import TableView from "./TableView"

const ViewToggle = () => {
  return (
    <div>
      <Tabs defaultValue="quickview">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Title>Experiments</Title>
            <TabsList>
              <TabsTrigger value="quickview">Quick View</TabsTrigger>
              <TabsTrigger value="promode">Pro Mode</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="quickview" className="m-0">
            {/* @ts-ignore */}
            <GridView />
          </TabsContent>
          <TabsContent value="promode" className="m-0">
            {/* @ts-ignore */}
            <TableView />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default ViewToggle

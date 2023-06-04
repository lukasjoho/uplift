import React from "react"

import { getLaunches } from "@/lib/contentful"
import Container from "@/app/components/Container"

import LaunchItem from "./LaunchItem"

const LaunchedPage = async () => {
  const { data } = await getLaunches()
  const items = data.launchedReleaseCollection.items
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-8 md:gap-24">
          {items.map((item: any) => {
            return <LaunchItem key={item.sys.id} item={item} />
          })}
        </div>
      </Container>
    </div>
  )
}

export default LaunchedPage

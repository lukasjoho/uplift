import React from "react"
import Image from "next/image"

import Title from "@/components/uplift/title"

const GridView = async () => {
  const res = await fetch(`http://localhost:3000/api/experiments`)
  const experiments = await res.json()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experiments.map((experiment: any) => {
        return <GridItem experiment={experiment} />
      })}
    </div>
  )
}

export default GridView

const GridItem = ({ experiment }: any) => {
  const { name, id, cover } = experiment
  return (
    <div className="space-y-2">
      <div className="aspect-video relative rounded-lg overflow-hidden">
        <Image src={cover} alt="i" fill={true} style={{ objectFit: "cover" }} />
      </div>
      <Title size="t4">{name}</Title>
    </div>
  )
}

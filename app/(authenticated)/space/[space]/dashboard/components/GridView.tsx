import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
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

function getInitials(name: string) {
  const words = name.trim().split(" ")
  let initials = ""
  if (words.length === 1) {
    initials = words[0].substring(0, 2)
  } else if (words.length >= 2) {
    for (let i = 0; i < words.length; i++) {
      initials += words[i].charAt(0)
    }
  }

  return initials
}

const GridItem = ({ experiment }: any) => {
  const { name, id, cover } = experiment
  return (
    <div className="space-y-2 cursor-pointer">
      <div
        className={cn(
          "aspect-video relative rounded-lg overflow-hidden transition duration-150 opacity-90 hover:opacity-100 bg-muted border",
          !cover && "bg-muted flex items-center justify-center"
        )}
      >
        {!cover && (
          <Title size="t1" className="leading-relaxed">
            {getInitials(name)}
          </Title>
        )}
        {cover && (
          <Image
            src={cover}
            alt="i"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <Title size="t4">{name}</Title>
    </div>
  )
}

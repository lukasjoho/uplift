import React, { FC } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import Title from "@/components/uplift/title"
import { getExperiments } from "@/app/actions"

import { CreateFirstExperimentCTA } from "./TableView"

const GridView = async () => {
  const experiments = await getExperiments()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experiments.length < 1 && (
        <>
          <EmptyGridItem showCTA />
          <EmptyGridItem className="opacity-80" />
          <EmptyGridItem className="opacity-40" />
        </>
      )}
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
interface EmptyGridItemProps extends React.HTMLProps<HTMLDivElement> {
  showCTA?: boolean
}

const EmptyGridItem: FC<EmptyGridItemProps> = (props) => {
  const { showCTA } = props
  return (
    <div
      className={cn(
        "cursor-pointer aspect-video rounded-lg border border-dashed flex items-center justify-center",
        props.className
      )}
    >
      {showCTA && <CreateFirstExperimentCTA />}
    </div>
  )
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

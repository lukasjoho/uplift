import React, { FC } from "react"
import { FileBarChart2, FolderSymlink, View } from "lucide-react"

import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

import Container from "../components/Container"

const featuresList = [
  {
    icon: <FileBarChart2 size={32} />,
    title: "Shared Status Reports",
    description:
      "Share the currently running experiments with your product, sales or marketing team with the click of a button. Get everyone on board easily.",
  },
  {
    icon: <View size={32} />,
    title: "Mutiple Views",
    description:
      "A stakeholders only wants to sneak peek into the currently running experiments? Share a visual quickview that is easily understandable. Need to dive deeper into experiment details? Switch to pro-mode with one click.",
  },
  {
    icon: <FolderSymlink size={32} />,
    title: "Resources Panel",
    description:
      "Attach important documents like experiment strategy docs, retros or slack channels to your dashboard for quick access. Get everything under one roof.",
  },
]

const Features = () => {
  return (
    <section>
      <Container>
        <div className="space-y-12">
          <Title size="t2">Stay aligned across stakeholders.</Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuresList.map((feature, index) => (
              <FeatureItem feature={feature} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Features

type Feature = {
  icon?: JSX.Element
  title: string
  description: string
}
interface FeatureItemProps {
  feature: Feature
}

const FeatureItem: FC<FeatureItemProps> = ({ feature }) => {
  const { icon, title, description } = feature
  return (
    <div className="space-y-6">
      <div className="text-green-500">{icon}</div>
      <Text className="text-lg font-semibold">
        <span>{title}.&nbsp;</span>
        <span className="text-muted-foreground">{description}</span>
      </Text>
    </div>
  )
}

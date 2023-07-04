"use client"

import React, { FC, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Activity,
  DollarSign,
  FileBarChart2,
  FolderSymlink,
  Headphones,
  TerminalSquare,
  TerminalSquareIcon,
  View,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

import Container from "../../components/Container"
import Wheel from "./Wheel"

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
    <section className="overflow-hidden">
      <Container>
        <div className="grid grid-cols-6 gap-24">
          <div className="col-span-6 xl:col-span-3 flex items-center justify-center xl:justify-start">
            <Title size="t0" className="text-center xl:text-left">
              100% alignment <br />
              for all your <br />
              stakeholders.
            </Title>
          </div>
          <div className="col-span-6 lg:col-start-2 lg:col-span-4 xl:col-span-3">
            <Wheel />
          </div>
        </div>
        <div className="space-y-12 mt-24">
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

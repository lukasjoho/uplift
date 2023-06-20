"use client"

import React, { FC, useContext, useEffect, useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"
import Container from "@/app/components/Container"

import { WalkthroughContext } from "./WalkthroughBody"

type WalkthroughItem = {
  label: string
  title: JSX.Element
  description: string
  cta: string
  imageUrl: string
  color: string
  step: number
  solidColor: string
}

interface WalkthroughItemProps {
  item: WalkthroughItem
  orientation: "left" | "right"
  [x: string]: any
}

const WalkthroughItem: FC<WalkthroughItemProps> = ({
  item,
  orientation,
  ...props
}) => {
  const {
    label,
    title,
    description,
    cta,
    imageUrl,
    color,
    solidColor,
    step,
  }: WalkthroughItem = item
  const ref = useRef(null)
  const { activeStep, setActiveStep } = useContext(WalkthroughContext)
  const isInView = useInView(ref, { once: false, margin: "-250px 0px" })
  useEffect(() => {
    if (isInView) {
      setActiveStep(step)
    }
  }, [isInView])
  return (
    <section id={label} {...props} ref={ref}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className={cn(
              "space-y-8",
              orientation == "right" ? "order-last" : "order-first"
            )}
          >
            <div className="space-y-6 md:w-3/4">
              <div className="space-y-2">
                <Text
                  className={cn(
                    "font-bold text-xl bg-gradient-to-t bg-clip-text text-transparent",
                    color
                  )}
                >
                  {label}
                </Text>
                <Title size="t2">{title}</Title>
              </div>
              <div className="md:hidden">
                <ItemImage imageUrl={imageUrl} />
              </div>
              <Text>{description}</Text>
            </div>
            <Button>{cta}</Button>
          </div>
          <div className="hidden md:block">
            <ItemImage imageUrl={imageUrl} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WalkthroughItem

interface ItemImageProps {
  imageUrl: string
}
const ItemImage: FC<ItemImageProps> = ({ imageUrl }) => {
  return (
    <div className="aspect-video relative rounded-lg overflow-hidden border">
      <Image
        src={imageUrl}
        alt="i"
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  )
}

"use client"

import React from "react"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import { formatDate } from "@/lib/helpers"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

interface LaunchItem {
  title: string
  date: string
  image: {
    url: string
  }
  description: any
}

interface LaunchItemProps {
  item: LaunchItem
}

const LaunchItem = ({ item }: LaunchItemProps) => {
  const { title, date, image, description } = item
  return (
    <div className="grid grid-cols-12 gap-3 md:gap-4">
      <div className="col-span-12 md:col-span-5">
        <Title size="t2">{title}</Title>
        <Title size="t2" className="text-slate-500">
          {formatDate(date)}
        </Title>
      </div>
      <div className="col-span-12 md:col-span-7">
        <div className="flex flex-col gap-3 md:gap-6">
          <div className="overflow-hidden rounded-xl">
            <div className="aspect-[2/1] relative rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt="i"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>{documentToReactComponents(description.json, options)}</div>
        </div>
      </div>
    </div>
  )
}

export default LaunchItem

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => (
      <strong className="font-semibold">{text}</strong>
    ),
    [MARKS.CODE]: (text: any) => (
      <code className="whitespace-nowrap rounded-md bg-gray-300 p-1 text-sm font-semibold">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <Text className="mb-6">{children}</Text>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <Title size="t3" className="mb-1 md:mb-2">
        {children}
      </Title>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <Title size="t5" className="mb-1 md:mb-2">
        {children}
      </Title>
    ),
  },
}

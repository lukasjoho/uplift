import React from "react"
import Image from "next/image"
import Link from "next/link"

import { formatDate } from "@/lib/helpers"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

type Blogpost = {
  title: string
  slug: string
  date: string
  content: string
  cover: {
    url: string
  }
  author: {
    name: string
    image: {
      url: string
    }
  }
}

interface BlogpostCardProps {
  blogpost: Blogpost
  idx: any
}

const BlogpostCard = ({ blogpost, idx }: BlogpostCardProps) => {
  const { title, slug, date, content, cover, author } = blogpost
  return (
    <Link href={`/blog/${slug}`} key={idx}>
      <div className="space-y-3">
        <div className="aspect-video overflow-hidden rounded-lg relative">
          <Image
            src={cover.url}
            alt="i"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="space-y-1">
          <Title>{title}</Title>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="aspect-square w-4 overflow-hidden rounded-full relative">
                <Image
                  src={author.image.url}
                  alt="a"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Text>{author.name}</Text>
            </div>
            <Text className="text-xs">|</Text>
            <Text>{formatDate(date)}</Text>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogpostCard

import React from "react"

import { getBlogposts } from "@/lib/contentful"

export async function generateStaticParams() {
  const data = await getBlogposts()
  const blogposts = data.data.blogpostCollection.items
  return blogposts.map((blogpost: any) => ({
    slug: blogpost.slug,
  }))
}

const BlogpostPage = ({ params }: { params: { slug: string } }) => {
  return <div>{JSON.stringify(params, null, 2)}</div>
}

export default BlogpostPage

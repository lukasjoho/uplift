import React from "react"

import { getBlogposts } from "@/lib/contentful"
import Container from "@/app/components/Container"

import BlogpostCard from "./BlogpostCard"

const BlogpostsGrid = async () => {
  const data = await getBlogposts()
  const blogposts = data.data.blogpostCollection.items
  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {blogposts.map((blogpost: any, idx: any) => (
          <BlogpostCard blogpost={blogpost} idx={idx} key={idx} />
        ))}
      </div>
    </Container>
  )
}

export default BlogpostsGrid

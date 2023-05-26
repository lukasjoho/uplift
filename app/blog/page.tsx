import React from "react"

import BlogpostsGrid from "./components/BlogpostsGrid"

const BlogPage = async () => {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      {/* @ts-ignore */}
      <BlogpostsGrid />
    </div>
  )
}

export default BlogPage

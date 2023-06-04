import React from "react"

import PageHeader from "@/components/uplift/PageHeader"

import BlogpostsGrid from "./components/BlogpostsGrid"

const BlogPage = async () => {
  return (
    <div>
      <PageHeader
        title="Blog"
        subtitle="All things experimentation, AB testing and analytics."
      />
      {/* @ts-ignore */}
      <BlogpostsGrid />
    </div>
  )
}

export default BlogPage

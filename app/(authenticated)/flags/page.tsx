import React from "react"

import { flags } from "@/config/flags"

const PageFlags = () => {
  return (
    <div className="p-16">
      <pre>{JSON.stringify(flags, null, 2)}</pre>
    </div>
  )
}

export default PageFlags

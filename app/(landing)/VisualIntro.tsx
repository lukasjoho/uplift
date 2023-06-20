import React from "react"

import { Icons } from "@/components/icons"

const VisualIntro = () => {
  return (
    <div className="relative flex justify-center">
      <Icons.logoRaw className="h-64 w-64 md:h-96 md:w-96 absolute -translate-y-1/4" />
      <div className="z-10 border backdrop-blur-xl rounded-xl bg-background/70 py-6 px-8 w-3/4">
        <img src="image-table.svg" alt="" className="w-full" />
      </div>
    </div>
  )
}

export default VisualIntro

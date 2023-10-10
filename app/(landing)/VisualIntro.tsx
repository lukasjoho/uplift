import React from "react"
import Image from "next/image"

import { Icons } from "@/components/icons"

const VisualIntro = () => {
  return (
    <div className="relative flex justify-center">
      <div className="border relative aspect-[1792/820] overflow-hidden rounded-xl w-3/4 shadow-[0_0_40px_-10px_rgba(255,255,255,_0.15)]">
        <Image
          src={"/interface.jpg"}
          alt="i"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

export default VisualIntro

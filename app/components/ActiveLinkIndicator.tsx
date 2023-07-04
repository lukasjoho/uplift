"use client"

import React from "react"
import { motion } from "framer-motion"

const ActiveLinkIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-[-1px] h-[2px] bg-foreground w-full"
      layoutId="menuIndicator"
    />
  )
}

export default ActiveLinkIndicator

"use client"

import React, { useEffect } from "react"
import { motion } from "framer-motion"

import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

const RefineResult = ({ answer }: any) => {
  if (!answer) {
    return null
  }
  let metrics = answer.split("<br>")[0]
  let hypothesis = answer.split("<br>")[1]
  let json
  try {
    json = JSON.parse(metrics)
  } catch (error: any) {
    return (
      <div className="p-3 text-sm border border-red-500 bg-red-500/50 text-foreground rounded-md">
        {JSON.stringify(error.message)}
      </div>
    )
  }
  useEffect(() => {}, [answer])
  return (
    <div>
      <div className="p-3 text-sm border border-purple-300 bg-purple-700/10 text-foreground rounded-md">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <Text className="text-xs tracking-wider uppercase font-semibold text-muted-foreground">
              Evaluation
            </Text>
            <div className="flex gap-2">
              <CircleResult length={json?.change} label="Change" />
              <CircleResult length={json?.impact} label="Impact" />
              <CircleResult length={json?.who} label="Audience" />
            </div>
          </div>
          <div>
            <Text className="text-xs tracking-wider uppercase font-semibold text-muted-foreground">
              Proposal
            </Text>
            <Text>{hypothesis}</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefineResult

const CircleResult = ({ length, label }: any) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative flex justify-center items-center">
        <Circle length={length} />
        <div className="absolute">{length}</div>
      </div>
      <Text className="text-xs font-semibold">{label}</Text>
    </div>
  )
}

const Circle = ({ length }: any) => {
  useEffect(() => {}, [length])
  const draw = {
    hidden: { pathLength: 0.05, opacity: 1 },
    visible: (i: any) => {
      const delay = 0.1 * i
      return {
        pathLength: length / 100 + 0.01,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        },
      }
    },
  }
  return (
    <motion.svg
      viewBox="0 0 200 200"
      initial="hidden"
      animate="visible"
      className="w-12 aspect-square -rotate-90"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "rgb(22 163 74)" }} />
          <stop offset="100%" style={{ stopColor: "rgb(74 222 128)" }} />
        </linearGradient>
      </defs>
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        fill="transparent"
        stroke="rgb(82 82 82)"
        strokeWidth="16"
      />
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        fill="transparent"
        stroke="url(#gradient)"
        strokeWidth="20"
        variants={draw}
        strokeLinecap="round"
        custom={1}
      />
    </motion.svg>
  )
}

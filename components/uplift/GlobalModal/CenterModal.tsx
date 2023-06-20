"use client"

import { FC, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

import { useWindowSize } from "@/lib/hooks"
import { cn } from "@/lib/utils"

interface CenterModalProps {
  children: React.ReactNode
}

const CenterModal: FC<CenterModalProps> = ({ children }) => {
  const ref: any = useRef(null)
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  let size = useWindowSize()
  const [isOverflowing, setIsOverflowing] = useState(false)
  useEffect(() => {
    if (ref.current.clientHeight > size.height) {
      setIsOverflowing(true)
    } else {
      setIsOverflowing(false)
    }
  }, [size.height])

  return (
    <motion.div
      ref={ref}
      id="body"
      className={cn(
        "hidden md:block gap-4 relative rounded-lg min-h-[200px] max-h-[700px] overflow-scroll bg-background/80 backdrop-blur-2xl border p-6 pt-0 shadow-lg sm:rounded-lg w-full max-w-3xl mx-auto place-self-center",
        isOverflowing && "top-16"
      )}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onClick={(event) => {
        event.stopPropagation()
        event.preventDefault()
      }}
    >
      {/* <pre>Element Height: {JSON.stringify(ref?.current?.clientHeight)}</pre>
      <pre>Window Height: {JSON.stringify(size.height)}</pre>
      <pre>{JSON.stringify(isOverflowing)}</pre> */}
      {children}
    </motion.div>
  )
}

export default CenterModal

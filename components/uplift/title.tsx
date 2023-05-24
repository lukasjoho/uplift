import React, { FC } from "react"

interface TitleProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  size?: "t0" | "t1" | "t2" | "t3" | "t4" | "t5" | "t6"
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

type Sizes = {
  [key: string]: string
}

const sizeMap: Sizes = {
  t0: "text-4xl lg:text-6xl xl:text-7xl",
  t1: "text-3xl md:text-4xl",
  t2: "text-2xl md:text-3xl",
  t3: "text-xl md:text-2xl",
  t4: "text-lg md:text-xl",
  t5: "text-base md:text-lg",
  t6: "text-sm md:text-base",
}

const Title: FC<TitleProps> = ({ children, className, size = "t3", as }) => {
  let SizeComponent: keyof JSX.IntrinsicElements
  switch (as) {
    case "h1":
      SizeComponent = "h1"
      break
    case "h2":
      SizeComponent = "h2"
      break
    case "h3":
      SizeComponent = "h3"
      break
    case "h4":
      SizeComponent = "h4"
      break
    case "h5":
      SizeComponent = "h5"
      break
    case "h6":
      SizeComponent = "h6"
      break
    default:
      SizeComponent = "h1"
  }
  return (
    <SizeComponent className={`font-semibold ${sizeMap[size]} ${className}`}>
      {children}
    </SizeComponent>
  )
}

export default Title

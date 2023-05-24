import React, { FC } from "react"

interface TextProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

const Text: FC<TextProps> = ({ children, className }) => {
  return <p className={className}>{children}</p>
}

export default Text

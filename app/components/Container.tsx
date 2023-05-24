import React, { FC } from "react"

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[]
  small?: boolean
}

const Container: FC<ContainerProps> = ({ children, small = false }) => {
  let sizeClass = "max-w-[1800px]"
  if (small) {
    sizeClass = "max-w-[800px]"
  }

  return (
    <div className={`mx-auto w-full px-4 md:px-8 xl:px-16 ${sizeClass}`}>
      {children}
    </div>
  )
}

export default Container

import React, { FC } from "react"

import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  small?: boolean
}

const Container: FC<ContainerProps> = ({
  children,
  small = false,
  ...props
}) => {
  let sizeClass = "max-w-[1800px]"
  if (small) {
    sizeClass = "max-w-[800px]"
  }

  const classNames = props.className

  return (
    <div
      className={cn(
        `mx-auto w-full px-4 md:px-8 xl:px-16 grow flex flex-col ${sizeClass}`,
        classNames
      )}
    >
      {children}
    </div>
  )
}

export default Container

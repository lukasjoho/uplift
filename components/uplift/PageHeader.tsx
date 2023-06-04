import React, { FC } from "react"

import Container from "@/app/components/Container"

import Text from "./text"
import Title from "./title"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

const PageHeader: FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="pt-6 md:pt-12 pb-4 md:pb-8">
      <Container>
        <div className="flex flex-col items-center">
          <Title size="t1">{title}</Title>
          {subtitle && (
            <Text className="text-muted-foreground text-lg">{subtitle}</Text>
          )}
        </div>
      </Container>
    </div>
  )
}

export default PageHeader

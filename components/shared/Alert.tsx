"use client"

import React, { FC } from "react"
import { useParams } from "next/navigation"

import { useLocalStorage } from "@/lib/hooks"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Container from "@/app/components/Container"

import { Button } from "../ui/button"

interface DemoAlertProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  description: string
  variant: "default" | "info" | "destructive"
}

const DemoAlert: FC<DemoAlertProps> = ({ title, description, ...props }) => {
  const [isShow, setIsShow] = useLocalStorage("showDemoAlert", true)

  const { space } = useParams()
  if (space !== "uplift") {
    return null
  }

  const handleClick = () => {
    setIsShow(false)
  }
  if (!isShow) {
    return null
  }
  return (
    <Container className="pt-4 md:pt-8">
      <Alert
        variant="info"
        className={cn(
          "flex flex-col sm:flex-row justify-between gap-4",
          props.className
        )}
      >
        <div>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </div>
        <Button
          className="bg-blue-600 hover:bg-blue-600/90 text-foreground whitespace-nowrap"
          onClick={handleClick}
        >
          Yeah, I got it.
        </Button>
      </Alert>
    </Container>
  )
}

export default DemoAlert

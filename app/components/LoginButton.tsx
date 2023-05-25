"use client"

import React, { FC } from "react"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"

interface LoginButton {
  children: React.ReactNode
  [x: string]: any
}

const LoginButton: FC<LoginButton> = ({ children, ...props }) => {
  return (
    <Button onClick={() => console.log("clicked")} {...props}>
      {children}
    </Button>
  )
}

export default LoginButton

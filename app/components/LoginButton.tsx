"use client"

import React, { FC } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"

interface LoginButton {
  children: React.ReactNode
  [x: string]: any
}

const LoginButton: FC<LoginButton> = ({ children, ...props }) => {
  const params = useSearchParams()
  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: `${process.env.NEXT_PUBLIC_HOST_URL}/${params.get(
            "callbackPath"
          )}`,
        })
      }
      {...props}
    >
      {children}
    </Button>
  )
}

export default LoginButton

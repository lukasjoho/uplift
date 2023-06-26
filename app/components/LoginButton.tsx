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
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "asdasd"
  const router = useRouter()
  const callSignIn = async () => {
    // const res = await signIn("google", { callbackUrl: callbackUrl })
    const res = await signIn("google")

    // if (res?.error) {
    // } else {
    //   router.push("/dashboard")
    // }
  }
  return (
    <Button onClick={() => callSignIn()} {...props}>
      {children}
    </Button>
  )
}

export default LoginButton

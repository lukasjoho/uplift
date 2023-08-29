"use client"

import { FC } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

interface AuthLinkProps {
  href: string
  children: React.ReactNode
}

export const AuthLink: FC<AuthLinkProps> = ({ children, href }) => {
  const { space } = useParams()
  return (
    <>
      <Link
        // @ts-ignore
        href={`/space/${space}${href}`}
      >
        {children}
      </Link>
    </>
  )
}

import React from "react"
import Image from "next/image"
import { getServerSession } from "next-auth"
import { signIn } from "next-auth/react"

import { authOptions } from "@/lib/auth"
import { Button } from "@/components/ui/button"

import { AvatarDropdown } from "./AvatarDropdown"
import LoginButton from "./LoginButton"

const AvatarOrLogin = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    return (
      <LoginButton size="sm" className="text-sm">
        Login
      </LoginButton>
    )
  }
  if (session) {
    return (
      <div>
        <div className="rounded-full overflow-hidden w-6 aspect-square">
          <AvatarDropdown>
            <Image
              className="cursor-pointer"
              src={`${session.user?.image}`}
              alt=""
              width="100"
              height="100"
            />
          </AvatarDropdown>
        </div>
      </div>
    )
  }
}

export default AvatarOrLogin

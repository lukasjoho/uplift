import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"
import Container from "@/app/components/Container"
import LoginButton from "@/app/components/LoginButton"

const LoginBox = () => {
  return (
    <Container small>
      <div className="flex border bg-background shadow-xl rounded-xl">
        <div className="aspect-square bg-primary-background grid place-items-center w-1/2">
          <Icons.logoSingle className="w-1/2 h-auto" />
        </div>
        <div className="aspect-square grid place-items-center w-1/2">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-3">
              <Title size="t1" className="text-center">
                Sign In <br />
                to Uplift
              </Title>
            </div>

            <LoginButton>
              <Icons.google />
              Login with Google
            </LoginButton>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LoginBox

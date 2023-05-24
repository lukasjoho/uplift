import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"
import Container from "@/app/components/Container"

const LoginBox = () => {
  return (
    <Container small>
      <div className="flex border bg-background shadow-xl rounded-xl">
        <div className="aspect-square bg-primary-background grid place-items-center w-1/2">
          <img src="/uplift-icon.svg" alt="" />
        </div>
        <div className="aspect-square grid place-items-center w-1/2">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-3">
              <Title size="t1">Sign In</Title>
              <Text className="text-center">
                Login or register here, <br />
                by logging in with Google.
              </Text>
            </div>
            <Button>
              <Icons.google />
              Login with Google
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LoginBox

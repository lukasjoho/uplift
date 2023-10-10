import React from "react"
import Link from "next/link"
import { Info } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Text from "@/components/uplift/text"

import Container from "../components/Container"
import LoginButton from "../components/LoginButton"

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 md:gap-6 xl:gap-10">
        <div className="flex flex-col items-center gap-2 md:gap-4 xl:gap-8">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-9xl text-center">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent">
              Experiment
            </span>
            <br />
            relentlessly
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-center">
            Uplift is an experimentation platform for modern product and
            engineering teams streamlining the management and deployment of your
            experiments. Accelerate your growth by bringing experiment
            visibility, data focus and hypothesis-centricity to your team.
          </p>
        </div>
        <div className="flex gap-2">
          <LoginButton size="lg">Get Started</LoginButton>
          <Button size="lg" variant="outline">
            Request a demo
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Hero

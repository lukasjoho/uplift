import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import Container from "../components/Container"
import LoginButton from "../components/LoginButton"

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-8xl text-center">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent">
              Supercharge
            </span>{" "}
            <br />
            experimentation
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl text-center">
            Uplift is an experimentation platform streamlining the management
            and deployment of your experiments. Accelerate your growth by
            bringing experiment visibility, data focus and hypothesis-centricity
            to your team.
          </p>
        </div>
        <div className="flex gap-4">
          <LoginButton size="lg">Get Started</LoginButton>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Hero

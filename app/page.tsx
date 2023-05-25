import Link from "next/link"
import { getServerSession } from "next-auth"

import { siteConfig } from "@/config/site"
import { authOptions } from "@/lib/auth"
import { Button, buttonVariants } from "@/components/ui/button"

import LoginButton from "./components/LoginButton"

export default async function IndexPage() {
  const session = await getServerSession(authOptions)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent">
            Supercharge
          </span>{" "}
          <br className="hidden sm:inline" />
          experimentation.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Uplift is an experimentation platform streamlining the management and
          deployment of your experiments. Accelerate your growth by bringing
          experiment visibility, data focus and hypothesis-centricity to your
          team.
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
    </section>
  )
}

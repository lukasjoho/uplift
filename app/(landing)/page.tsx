import Link from "next/link"
import { getServerSession } from "next-auth"

import { siteConfig } from "@/config/site"
import { authOptions } from "@/lib/auth"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import LoginButton from "../components/LoginButton"
import Hero from "./Hero"
import VisualIntro from "./VisualIntro"

export default async function IndexPage() {
  const session = await getServerSession(authOptions)
  return (
    <div className="space-y-32 pt-8 md:pt-16">
      <Hero />
      <VisualIntro />
    </div>
  )
}

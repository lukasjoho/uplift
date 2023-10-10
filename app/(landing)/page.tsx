import Link from "next/link"
import { getServerSession } from "next-auth"

import { siteConfig } from "@/config/site"
import { authOptions } from "@/lib/auth"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import LoginButton from "../components/LoginButton"
import APIDemo from "./APIDemo"
import Features from "./Features/Features"
import GetStartedCTA from "./GetStartedCTA"
import Hero from "./Hero"
import Hypothesis from "./Hypothesis/Hypothesis"
import Testimonial from "./Testimonial"
import VisualIntro from "./VisualIntro"
import Walkthrough from "./Walkthrough"

export default function IndexPage() {
  return (
    <div className="space-y-32 md:space-y-48 pt-8 md:pt-16 pb-48">
      <Hero />
      <VisualIntro />
      {/* <Hypothesis /> */}
      <Walkthrough />
      <Features />
      <Testimonial />
      <GetStartedCTA />
    </div>
  )
}

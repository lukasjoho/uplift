import React from "react"
import Link from "next/link"

import Container from "@/app/components/Container"

import { Icons } from "../icons"
import Text from "./text"

const Footer = () => {
  return (
    <section className="border-t">
      <Container>
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 md:gap-12 md:grid-cols-2">
            <div className="col-span-1">
              <div className="space-y-4">
                <Icons.logoFull className="w-32" />
                <Text>
                  Empowering product teams to build better products through
                  relentless experimentation.
                </Text>
              </div>
            </div>
            <div className="col-span-1">
              <List title="Site">
                <ListItem href="/">Home</ListItem>
                <ListItem href="/releases/launched">Releases</ListItem>
                <ListItem href="/blog">Blog</ListItem>
                <ListItem href="/about">About</ListItem>
                <ListItem href="/feedback">Feedback</ListItem>
              </List>
            </div>
            <div className="col-span-1">
              <List title="Application">
                <ListItem href="/">Dashboard</ListItem>
                <ListItem href="/developers">Developers</ListItem>
              </List>
            </div>
            <div className="col-span-1">
              <List title="Legal">
                <ListItem href="/privacy">Privacy</ListItem>
                <ListItem href="/terms">Terms</ListItem>
              </List>
            </div>
          </div>
        </div>
        <div className="w-full border-t py-2 md:py-4 text-muted-foreground">
          © 2023 uplift.io
        </div>
      </Container>
    </section>
  )
}

export default Footer

const List = ({ title, children }: any) => {
  return (
    <div className="flex flex-col gap-2">
      <Text className="text-sm font-medium text-muted-foreground">{title}</Text>
      {children}
    </div>
  )
}

const ListItem = ({ href, children }: any) => {
  return (
    <Link href={href}>
      <li className="list-none pl-0">{children}</li>
    </Link>
  )
}

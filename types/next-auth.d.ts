import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      currentSpace: {
        id: string
        name: string
        slug: string
      }
      spaces: object[]
      image: string
      hasCompletedSignUp: boolean
    }
  }
}

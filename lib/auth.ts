import { Session } from "inspector"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { User } from "@prisma/client"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { prisma } from "./prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/feedback",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }: any) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.image
        session.user.hasCompletedSignUp = token.hasCompletedSignUp
        session.user.workspaces = token.workspaces
      }

      return session
    },
    async jwt({ token, user }: any) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
        include: {
          workspaces: true,
        },
      })
      console.log("jwt callback", { dbUser })
      if (!dbUser) {
        token.id = user!.id
        return token
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
        workspaces: dbUser.workspaces,
        hasCompletedSignUp: dbUser.hasCompletedSignUp,
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
}

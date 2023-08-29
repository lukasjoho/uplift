import NextAuth, { Account, DefaultSession, User } from "next-auth"
import { JWT } from "next-auth/jwt"

import { Space } from "./general"

declare module "next-auth/jwt" {
  interface JWT {
    spaces: Space[]
  }
}

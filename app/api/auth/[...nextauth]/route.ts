import { User } from "@prisma/client"
import bcrypt from "bcrypt"
import NextAuth, { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { prisma } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "name@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: {
        email: string
        password: string
        id: string
      }) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        if (!user) {
          throw new Error("Email")
        }
        const passwordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )
        if (!passwordValid) {
          throw new Error("Password")
        }
        return {
          id: user.id,
          email: user.email,
        }
      },
    }),
  ],

  callbacks: {
    session: ({ session, token }) => {
      console.log({ session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      }
      return session
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as User
        return {
          ...token,
          id: u.id,
        }
      }
      return token
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

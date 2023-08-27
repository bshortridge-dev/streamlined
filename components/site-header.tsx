import Image from "next/image"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

import SignInButton from "./sign-in-button"
import SignOutButton from "./sign-out-button"

// check to see if user is logged in
export async function SiteHeader() {
  const session = await getServerSession(authOptions)
  // if user is logged in, show sign out button

  return (
    <header className="sticky top-0 z-40 w-full mt-2 border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={175} height={175} />
        </Link>
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            {session ? <SignOutButton /> : <SignInButton />}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

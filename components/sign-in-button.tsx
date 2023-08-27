"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { buttonVariants } from "./ui/button"

const SignInButton = () => {
  const url = usePathname()
  if (url === "/signin") {
    // Add home component
  } else {
    // Add another component instead
    return (
      <div>
        <Link href="/signin" className={buttonVariants({ variant: "outline" })}>
          Sign In
        </Link>
      </div>
    )
  }
}
export default SignInButton

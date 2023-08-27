"use client"

import React from "react"
import { signOut } from "next-auth/react"

import { Button } from "./ui/button"

const SignOutButton = () => {
  return (
    <div>
      {" "}
      <Button
        variant="outline"
        onClick={() => {
          signOut({ callbackUrl: "/" })
        }}
      >
        Sign Out
      </Button>
    </div>
  )
}

export default SignOutButton

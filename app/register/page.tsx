/* eslint-disable react/no-unescaped-entities */

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { RegisterForm } from "@/components/forms/register"
import { RegisterSheet } from "@/components/register-sheet"

import { authOptions } from "../api/auth/[...nextauth]/route"

export const metadata: Metadata = {
  title: "Register",
  description: "Register for an account.",
}

export default async function RegistrationPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect("/dashboard")
  }
  return (
    <>
      <div className="lg:hidden">
        <RegisterSheet />
      </div>

      <div className="container relative  h-[90vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 ">
        <div className="relative hidden h-[92vh] flex-col overflow-hidden bg-muted text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-slate-900" />

          <div className="relative z-20 max-w-2xl px-6 top-10">
            <h2 className="pb-5 text-5xl font-bold leading-tight tracking-tighter">
              Getting Started is Easy:
              <hr />
            </h2>
            <ul>
              <li className="text-lg tracking-tight text-muted-foreground">
                <strong className="text-white/75">
                  {" "}
                  1. Create Your Account:
                </strong>
                <br />
                <span className="pl-4 text-md text-muted-foreground">
                  Sign up for your Streamlined account in a matter of moments.
                  We prioritize your data security, ensuring a safe and
                  worry-free experience.
                </span>
              </li>
              <li className="py-4 text-lg tracking-tight text-muted-foreground">
                <strong className="text-white/75">
                  {" "}
                  2. Design Your Signature:
                </strong>
                <br />
                <span className="pl-4 text-md text-muted-foreground">
                  Choose a template that resonates with you or start from
                  scratch. Customize fonts, colors, layouts, and more to match
                  your personal style or brand identity.
                </span>
              </li>
              <li className="text-lg tracking-tight text-muted-foreground">
                <strong className="text-white/75">
                  {" "}
                  3. Add Your Information:
                </strong>
                <br />
                <span className="pl-4 text-md text-muted-foreground">
                  Input your details, social media links, banners, and any other
                  elements you want to include. Witness your signature come to
                  life in real-time as you make changes.
                </span>
              </li>
              <li className="py-4 text-lg tracking-tight text-muted-foreground">
                <strong className="text-white/75"> 4. Preview and Test:</strong>
                <br />
                <span className="pl-4 text-md text-muted-foreground">
                  See exactly how your signature will appear to recipients. Test
                  its responsiveness across various devices and email platforms
                  to ensure a flawless presentation.
                </span>
              </li>
              <li className="text-lg tracking-tight text-muted-foreground">
                <strong className="text-white/75">
                  {" "}
                  5. Generate and Implement:
                </strong>
                <br />
                <span className="pl-4 text-md text-muted-foreground">
                  Once satisfied, generate the HTML code or easily install your
                  signature into popular email clients such as Gmail, Outlook,
                  and Apple Mail.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <RegisterForm />
            <p className="px-5 text-xs leading-tight tracking-tighter text-center text-muted-foreground">
              By clicking "Register with Email" or "Continue with Google", you
              agree to our
              <Link
                href="/terms"
                className="px-1 underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>
              and
              <Link
                href="/privacy"
                className="pl-1 underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

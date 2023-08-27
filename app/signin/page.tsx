/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Carousel from "@/components/carousel"
import { SignInForm } from "@/components/forms/signin"

import { authOptions } from "../api/auth/[...nextauth]/route"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account.",
}
const examples = ["/sig1.png", "/sig2.png", "/sig3.png", "/sig4.png"]
export default async function SignInPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect("/dashboard")
  }

  return (
    <>
      <div className="md:hidden"></div>
      <Link
        href="/register"
        className={cn(
          buttonVariants({ variant: "default" }),
          "absolute right-10 top-20 z-50 md:right-10 md:top-20"
        )}
      >
        Create an Account
      </Link>
      <div className="container relative  h-[90vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 ">
        <div className="relative hidden h-[92vh] flex-col justify-center overflow-hidden bg-muted text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-slate-900" />
          <div className="relative z-20 flex items-center text-lg font-medium"></div>
          <div className="relative z-20 max-w-3xl px-6 top-10">
            <div className="relative bottom-12 left-40 lg:w-3/4 ">
              <Carousel loop>
                {examples.map((src, i) => {
                  return (
                    // 👇 style each individual slide.
                    // relative - needed since we use the fill prop from next/image component
                    // h-64 - arbitrary height
                    // flex[0_0_100%]
                    //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                    //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                    <div className="relative h-64 flex-[0_0_100%]" key={i}>
                      {/* use object-cover + fill since we don't know the height and width of the parent */}
                      <Image
                        src={src}
                        fill
                        className="relative rounded-md shadow-lg opacity-90 shadow-slate-600"
                        alt="alt"
                      />
                    </div>
                  )
                })}
              </Carousel>
            </div>

            <h2 className="pb-5 text-4xl font-bold leading-tight tracking-tighter">
              Experience the Streamlined Advantage:
              <hr />
            </h2>
            <ul>
              <li className="text-lg tracking-tight text-muted-foreground">
                <span className="pl-4 text-md text-muted-foreground">
                  Streamlined takes your email communication to the next level.
                  Elevate your brand, save time, and make each email stand out.
                  Log in now and continue your journey with Streamlined!
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center lg:hidden">
              <div className="relative max-w-sm pb-5 overflow-hidden rounded-md">
                <Carousel loop>
                  {examples.map((src, i) => {
                    return (
                      // 👇 style each individual slide.
                      // relative - needed since we use the fill prop from next/image component
                      // h-64 - arbitrary height
                      // flex[0_0_100%]
                      //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                      //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                      <div className="relative h-64 flex-[0_0_100%]" key={i}>
                        {/* use object-cover + fill since we don't know the height and width of the parent */}
                        <Image
                          src={src}
                          fill
                          className="relative object-scale-down opacity-90"
                          alt="alt"
                        />
                      </div>
                    )
                  })}
                </Carousel>
              </div>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign In to your Account.
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password below to sign in.
            </p>
            <SignInForm />
            <p className="px-5 text-xs leading-tight tracking-tighter text-center text-muted-foreground">
              By clicking "Sign in with Email" or "Continue with Google", you
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

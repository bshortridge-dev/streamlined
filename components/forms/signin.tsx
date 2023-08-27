/* eslint-disable react/no-unescaped-entities */
"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInResponse, signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { ZodType, z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = {
  email: string
  password: string
}

export function SignInForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { toast } = useToast()
  const formSchema: ZodType<FormData> = z.object({
    email: z
      .string()
      .email("Email must be a valid email address")
      .min(5)
      .max(255),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(25),
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    const res: SignInResponse | any = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })
    console.log(res)

    if (res.error != null && res.error !== "CredentialsSignin") {
      toast({
        variant: "destructive",
        title: "Invalid Credentials",
        description: "The email or password you have entered is incorrect.",
      })
    } else {
      window.location.replace("/dashboard")
    }
  }
  setTimeout(() => {
    setIsLoading(false)
  }, 3000)

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="text-sm sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              {...register("email")}
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-sm sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              {...register("password", { required: true })}
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Link
              href="/forgot-password"
              className="pl-2 mt-1 mb-4 text-xs text-muted-foreground hover:text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="grid justify-center gap-1">
            <p className="text-xs">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="px-1 text-center hover:text-primary hover:underline hover:underline-offset-2"
              >
                Register here.
              </Link>
            </p>
          </div>

          <Button
            disabled={isLoading}
            onClick={() => {
              {
                errors.email &&
                  toast({
                    variant: "destructive",
                    title: "Invalid Email",
                    description: "Must enter a valid email address.",
                  })
              }
              {
                errors.password &&
                  toast({
                    variant: "destructive",
                    title: "Invalid Password",
                    description: "Password must be at least 8 characters.",
                  })
              }
            }}
          >
            Sign in with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-background text-muted-foreground">Or</span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        Continue with
        <Image
          src="google.svg"
          width={30}
          height={30}
          alt="Google Logo"
          className="px-2"
        />
        Google
      </Button>
    </div>
  )
}

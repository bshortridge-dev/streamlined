"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Router } from "next/router"
import { zodResolver } from "@hookform/resolvers/zod"
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
  passwordConfirm: string
}

export function RegisterForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { toast } = useToast()

  const formSchema: ZodType<FormData> = z
    .object({
      email: z
        .string()
        .email("Email must be a valid email address")
        .min(5)
        .max(255),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(25),
      passwordConfirm: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(25),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (res.ok) {
        window.location.replace("/signin")
      }
      if (res.status === 500) {
        toast({
          variant: "destructive",
          title: "Email already in use.",
          description: "Please try again using a different email.",
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

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
          </div>
          <div className="grid gap-1">
            <Label className="text-sm sr-only" htmlFor="passwordConfirm">
              Confirm Password
            </Label>
            <Input
              {...register("passwordConfirm", { required: true })}
              id="passwordConfirm"
              placeholder="confirm password"
              type="password"
              autoCapitalize="none"
              autoComplete="passwordConfirm"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid justify-center gap-1">
            <p className="text-xs">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="px-1 text-center hover:text-primary hover:underline hover:underline-offset-2"
              >
                Sign In
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
              {
                errors.passwordConfirm &&
                  toast({
                    variant: "destructive",
                    title: "Invalid Password",
                    description: "Passwords must match.",
                  })
              }
            }}
          >
            Register with Email
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
          className="px-2 "
        />
        Google
      </Button>
    </div>
  )
}

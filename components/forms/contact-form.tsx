/* eslint-disable react/no-unescaped-entities */
"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { MessageSquare } from "lucide-react"
import { useForm } from "react-hook-form"
import { ZodType, z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

import { Textarea } from "../ui/textarea"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = {
  name: string
  email: string
  message: string
}

export function ContactForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { toast } = useToast()
  const formSchema: ZodType<FormData> = z.object({
    name: z.string().min(3, "Name is required").max(25),
    email: z
      .string()
      .email("Email must be a valid email address")
      .min(5)
      .max(255),
    message: z
      .string()
      .min(8, "Message must be at least 8 characters long")
      .max(255),
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })
  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    console.log("It submitted!", data)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="fixed bottom-1 left-1 z-50 flex items-center justify-center">
      <div className="block">
        <Dialog>
          <HoverCard>
            <HoverCardContent className="text-sm font-medium">
              Contact support with any questions or concerns.
            </HoverCardContent>
            <HoverCardTrigger>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-lg text-muted-foreground shadow-lg hover:animate-pulse"
                >
                  <MessageSquare className="h-5" />
                </Button>
              </DialogTrigger>
            </HoverCardTrigger>
          </HoverCard>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold leading-tight tracking-tighter">
                Contact Support
              </DialogTitle>
              <DialogDescription>
                Feel free to reach out to support with any questions or concerns
                you may have.
                <br /> Feedback and suggestions are always welcome as well!
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    {...register("name", { required: true })}
                    id="name"
                    placeholder="Your Name"
                    className="col-span-3 text-muted-foreground"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    {...register("email", { required: true })}
                    id="email"
                    placeholder="you@email.com"
                    className="col-span-3  text-muted-foreground"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="message" className=" text-right">
                    Message
                  </Label>
                  <Textarea
                    {...register("message", { required: true })}
                    id="message"
                    placeholder="Your message here..."
                    className="col-span-3  text-muted-foreground"
                  />
                  <Button
                    disabled={isLoading}
                    className="col-span-4 justify-self-end"
                    onClick={() => {
                      {
                        errors.name &&
                          toast({
                            variant: "destructive",
                            title: "Invalid Name",
                            description:
                              "Name must be at least 3 characters long.",
                          })
                      }
                      {
                        errors.email &&
                          toast({
                            variant: "destructive",
                            title: "Invalid Email",
                            description: "Must enter a valid email address.",
                          })
                      }
                      {
                        errors.message &&
                          toast({
                            variant: "destructive",
                            title: "Invalid Message",
                            description:
                              "Message must be at least 8 characters long.",
                          })
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

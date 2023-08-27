"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ZodType, z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = {
  name: string
  email: string
  message: string
}

const Contact = () => {
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
    <div className="container my-5 flex max-w-3xl border-spacing-2 flex-col justify-center gap-4 rounded-md border border-solid bg-muted py-10">
      <div className="grid gap-4 py-4">
        <h1 className="justify-self-center text-4xl font-black leading-tight tracking-tighter">
          Contact Support
        </h1>
        <p className="pb-4 text-sm text-muted-foreground">
          Feel free to reach out to support with any questions or concerns you
          may have.
          <br /> Feedback and suggestions are always welcome as well!
        </p>
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
                        description: "Name must be at least 3 characters long.",
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
      </div>
    </div>
  )
}

export default Contact

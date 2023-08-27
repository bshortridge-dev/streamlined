/* eslint-disable react/no-unescaped-entities */
"use client"

import { ChevronsRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ScrollArea } from "./ui/scroll-area"

export function RegisterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          More Info
          <ChevronsRight className="h-4 translate-y-0.5 animate-pulse" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <ScrollArea className="left-4 top-3 h-screen w-full ">
          <div className="relative top-10 z-20 bg-background px-3">
            <h2 className="pb-5 text-2xl font-bold leading-tight tracking-tighter ">
              Getting Started is Easy:
              <hr />
            </h2>
            <ul>
              <li className="text-md tracking-tight ">
                <strong className=""> 1. Create Your Account:</strong>
                <br />
                <span className="pl-4 text-sm text-muted-foreground">
                  Sign up for your Streamlined account in a matter of moments.
                  We prioritize your data security, ensuring a safe and
                  worry-free experience.
                </span>
              </li>
              <li className="text-md py-4 tracking-tight">
                <strong className=""> 2. Design Your Signature:</strong>
                <br />
                <span className="pl-4 text-sm text-muted-foreground">
                  Choose a template that resonates with you or start from
                  scratch. Customize fonts, colors, layouts, and more to match
                  your personal style or brand identity.
                </span>
              </li>
              <li className="text-md tracking-tight ">
                <strong className=""> 3. Add Your Information:</strong>
                <br />
                <span className="pl-4 text-sm text-muted-foreground">
                  Input your details, social media links, banners, and any other
                  elements you want to include. Witness your signature come to
                  life in real-time as you make changes.
                </span>
              </li>
              <li className="text-md py-4 tracking-tight ">
                <strong className=""> 4. Preview and Test:</strong>
                <br />
                <span className="pl-4 text-sm text-muted-foreground">
                  See exactly how your signature will appear to recipients. Test
                  its responsiveness across various devices and email platforms
                  to ensure a flawless presentation.
                </span>
              </li>
              <li className="text-md tracking-tight">
                <strong className=""> 5. Generate and Implement:</strong>
                <br />
                <span className="pl-4 text-sm text-muted-foreground">
                  Once satisfied, generate the HTML code or easily install your
                  signature into popular email clients such as Gmail, Outlook,
                  and Apple Mail.
                </span>
              </li>
            </ul>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

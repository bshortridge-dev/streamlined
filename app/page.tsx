/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import Link from "next/link"
import { ArrowDownCircle } from "lucide-react"
import { getServerSession } from "next-auth"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { authOptions } from "./api/auth/[...nextauth]/route"

type typeSession = {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
    id?: string | null
  }
}

export default async function IndexPage() {
  const session: typeSession | null = await getServerSession(authOptions)
  return (
    <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex h-screen max-w-[980px] flex-col items-start justify-center gap-2 pl-10">
        <div className="flex p-4 -translate-y-10 bg-white rounded-lg dark:opacity-75">
          <Image
            src="/airplane1.png"
            width={600}
            height={400}
            alt="Paper Airplane"
          />
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to Streamlined. <br className="hidden sm:inline" />
          Email signature creation made easy.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Your email signature is more than just a sign-off - it's a chance to
          leave a lasting impression. With Streamlined, creating professional
          and eye-catching email signatures is a breeze. Say goodbye to the
          hassle of manually formatting and designing your signatures we've got
          you covered.
        </p>
        <div className="mt-2 flex max-w-[700px] gap-2">
          <Link
            href="/create"
            className={buttonVariants({ variant: "default" })}
          >
            Get Started.
          </Link>
          <div className="text-muted-foreground">
            <Link href="#why" className={buttonVariants({ variant: "link" })}>
              Learn More
              <ArrowDownCircle
                size={24}
                className="inline pl-1 animate-bounce"
              />
            </Link>
          </div>
        </div>
        <br id="why" />
      </div>

      {/** End Hero Section */}
      {/** Begin Call To Action Card Section */}

      <div className="flex flex-col items-start gap-4">
        <h2 className="text-5xl font-bold leading-tight tracking-tighter md:text-4xl ">
          Why Streamlined?
        </h2>

        <Card className="max-w-2xl bg-muted">
          <CardHeader>
            <CardTitle className="leading-tight tracking-tighter">
              🚀 Streamlined Creation:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Craft your personalized email signature in minutes, not hours. Our
              intuitive interface guides you through the process, making it
              simple to add your contact information, profile picture, company
              logo, and more.
            </p>
          </CardContent>
        </Card>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle className="leading-tight tracking-tighter">
              🎨 Customization Made Easy:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Express your unique style with a wide range of design options.
              Choose from various fonts, colors, layouts, and templates to
              perfectly match your brand or personality.
            </p>
          </CardContent>
        </Card>
        <Card className="max-w-2xl bg-muted">
          <CardHeader>
            <CardTitle className="leading-tight tracking-tighter">
              📧 Compatibility:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              No matter what email client you use, Streamlined has you covered.
              Our signatures are compatible with Gmail, Outlook, Apple Mail,
              Yahoo Mail, and more.
            </p>
          </CardContent>
        </Card>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle className="leading-tight tracking-tighter">
              🔒 Secure and Reliable:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your data is safe with us. We use industry-standard encryption to
              protect your information and never share it with third parties.
            </p>
          </CardContent>
        </Card>
        <Card className="max-w-2xl bg-muted">
          <CardHeader>
            <CardTitle className="leading-tight tracking-tighter">
              📈 Professional Impact:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Make every email count. A professionally designed signature builds
              credibility and showcases your professionalism, leaving a
              memorable impression on clients, colleagues, and partners.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

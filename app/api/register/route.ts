import { NextResponse } from "next/server"
import { hash } from "bcrypt"

import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const { email, password } = await req.json()
  const hashedPassword = await hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })
  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      password: user.password,
    },
  })
}

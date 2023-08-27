"use client"

import React from "react"
import Link from "next/link"
import { ArrowUpCircle } from "lucide-react"

const BackToTop = () => {
  return (
    <div className="fixed bottom-2 right-2 z-50 flex items-center justify-center">
      <Link href="#">
        <ArrowUpCircle className="h-8 w-8 rounded-lg shadow-lg hover:animate-bounce" />{" "}
      </Link>
    </div>
  )
}

export default BackToTop

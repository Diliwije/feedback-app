"use client";
import Link from "next/link";
import { Sparkle } from "lucide-react";

export default function Navbar() {
  return (
<nav className="border-b bg-background">
  <div className="container mx-auto flex h-16 items-center justify-between px-4">
    <div className="flex items-center gap-6">
      <Link href="/">
      <div className="flex items-center gap-2">
        <div className="h8 w-8 roundedlg bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <Sparkle className="h-4 w-4 text-white "/>
        </div>
        <span className="text-xl font-bold">Feedback Fusion</span>
      </div>
        </Link>
        <Link href="/roadmap" className="text-sm hover:text-primary flex"></Link>
      </div>
  </div>
</nav> 
 )

}

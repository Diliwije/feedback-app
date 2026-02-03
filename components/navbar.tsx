"use client";
import Link from "next/link";
import { Sparkle,Map, MessageSquare } from "lucide-react";
import ThemeToggle from "./theme-toogle";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
<nav className="border-b bg-background">
  <div className="container mx-auto flex h-16 items-center justify-between px-4">
    <div className="flex items-center gap-6 justify-between w-full">
      <div className="flex items-center gap-6">
      <Link href="/">
      <div className="flex items-center gap-2">
        <div className="h8 w-8 roundedlg bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <Sparkle className="h-4 w-4 text-white "/>
        </div >
        <span className="text-xl font-bold">Feedback Fusion</span>
      </div>
        </Link>
        
        <Link href="/roadmap" className="text-sm hover:text-primary flex items-center gap-1">
        <Map className="h-4 w-4" />
        Roadmap
        </Link>
        <Link href="/feedback" className="text-sm hover:text-primary flex items-center gap-1">
        <MessageSquare className="h-4 w-4" />
        FeedBack
        </Link>
        </div>
    
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <SignedOut >
            <SignInButton >
              <Button asChild>
                <Link href="/sign-in">Sign In</Link></Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
  </div>
</nav> 
 )

}

import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter=Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FeedBack Book",
  description: "Feedback App built with Next.js, Prisma, and Clerk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* <Navbar /> */}
        <Navbar />
        {/* <Main  /> */}
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        {/* <Footer /> */}
        <Footer />
        <Toaster/>
        
      </body>
    </html>
    </ClerkProvider>
  );
}

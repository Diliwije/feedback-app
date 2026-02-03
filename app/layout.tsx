import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeProvider from "@/components/theme-provider";
import { syncCurrentUser } from "@/lib/sync-user";

const inter=Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FeedBack Book",
  description: "Feedback App built with Next.js, Prisma, and Clerk",
};

export default  async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await syncCurrentUser();
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>  
        {/* <Navbar /> */}
        <Navbar />
        {/* <Main  /> */}
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        {/* <Footer /> */}
        <Footer />
        <Toaster/>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

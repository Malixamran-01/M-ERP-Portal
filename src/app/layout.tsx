import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { Toaster } from "react-hot-toast";
import { ourFileRouter } from "./api/uploadthing/core";

const Rethink = Rethink_Sans({ subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter', 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M-ERP",
  description: "Multiple Institution ERP System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${Rethink.className} ${geistMono.variable} bg-lamaLight min-h-screen flex flex-col`}>
         <Toaster
  position="top-center"
  reverseOrder={false}
/>
         <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)}
        />
        {children}
      </body>
    </html>
  );
}

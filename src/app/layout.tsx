import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider} from "@clerk/nextjs"
import {Provider} from "jotai";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PowerFeature",
  description: "A new feature-rich Next.js boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* header */}
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-300 to-white">
          <Provider>
        {children}
         </Provider>
        </main>
        {/* footer */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto text-center text-gray-600">
            <p className="text-gray-800 font-bold">Made with by PowerFeature</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}

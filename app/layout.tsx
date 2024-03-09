import type { Metadata } from "next";

import "./globals.css";
import Menubar from "@/components/Menubar";
import Footer from "@/components/Footer";


import { Abril_Fatface, Salsa } from 'next/font/google'
const abril = Abril_Fatface({ weight: "400", subsets: ["latin"] })
const salsa = Salsa({ weight: ["400"], subsets: ["latin"] })
const siteConfig = {
  name: "পার্থসারথি গায়েন",
  description: `রবীন্দ্র গবেষক ও গীতা আলোচক- কবি, উপনাসিক, প্রাবন্ধিক শ্রী পার্থসারথি গায়েন বাংলা সাহিত্যর অন্যতম উল্লেখযোগ্য নাম`
}
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: `রবীন্দ্র গবেষক ও গীতা আলোচক- কবি, উপনাসিক, প্রাবন্ধিক শ্রী পার্থসারথি গায়েন বাংলা সাহিত্যর অন্যতম উল্লেখযোগ্য নাম`,
  metadataBase: new URL('https://parthasarathigayen.in'),
  keywords: ["পার্থসারথি গায়েন", "parthasarathi gayen", "parthasarathigayen"],
  alternates: {
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full w-full relative">
        <div className="absolute top-0 left-0 h-[200px] w-full bg-gradient-to-b from-orange-400 blur-[100px] -z-10" />

        <Menubar font={salsa.className} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

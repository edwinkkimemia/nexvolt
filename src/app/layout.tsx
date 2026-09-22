import type { Metadata } from "next"
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import SiteChrome from "@/components/layout/SiteChrome"

const outfit = Outfit({ subsets: ["latin"], variable:"--font-display", display:"swap" })
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable:"--font-body", display:"swap" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable:"--font-mono", display:"swap" })

export const metadata: Metadata = {
  title: { default:"NexVolt Technologies — Powering Intelligent Living | Solar, Smart Home, Security Kenya", template:"%s | NexVolt Technologies"},
  description: "Integrated solar energy, smart-home automation, security, networking and intelligent power solutions for homes, businesses and institutions in Kenya. Tesla-grade engineering, Schneider reliability.",
  metadataBase: new URL("https://nexvolt.co.ke"),
  openGraph: { title:"NexVolt Technologies — Powering Intelligent Living", description:"Integrated solar, smart home, security & power ecosystem for Kenya", type:"website", images:["/logo.png"] },
  icons: {
    icon: [{ url:"/fav.jpg", type:"image/jpeg" }],
    shortcut: ["/fav.jpg"],
    apple: [{ url:"/logo.png", type:"image/png" }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} ${mono.variable}`}>
      <body className="font-[var(--font-body)] antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}

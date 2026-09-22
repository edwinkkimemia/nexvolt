"use client"
import { usePathname } from "next/navigation"
import Header from "@/components/layout/Header"
import TopBar from "@/components/layout/TopBar"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/layout/WhatsAppButton"
import CompareTray from "@/components/shop/CompareTray"
import PromoBar from "@/components/marketing/PromoBar"

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const isAdmin = path?.startsWith("/admin")

  if (isAdmin) return <main>{children}</main>

  return (
    <>
      <PromoBar />
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <CompareTray />
      <WhatsAppButton />
    </>
  )
}

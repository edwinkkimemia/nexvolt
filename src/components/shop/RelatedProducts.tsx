"use client"
import Link from "next/link"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/shop/ProductCard"

export default function RelatedProducts({
  categories = [],
  title = "Related Products",
  subtitle = "In stock @nexvolttechke — Add to Cart or Order via WhatsApp.",
  guideHref,
  guideLabel = "Read Guide",
}: {
  categories?: string[]
  title?: string
  subtitle?: string
  guideHref?: string
  guideLabel?: string
}) {
  const filtered = categories.length
    ? products.filter((p) => categories.includes(p.category))
    : [...products]
  const items = (filtered.length >= 4 ? filtered : [...filtered, ...products.filter((p) => !filtered.includes(p))]).slice(0, 4)
  const wa = encodeURIComponent("Jambo NexVolt — I want to order from your related products. Please confirm stock & delivery. @nexvolttechke")
  return (
    <div className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-[1280px] px-6 py-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-bold text-zinc-900 text-lg">{title}</h3>
            <p className="text-sm text-zinc-600 mt-1">{subtitle}</p>
          </div>
          <Link href="/shop" className="hidden sm:inline-flex h-9 px-5 rounded-full bg-zinc-900 text-white text-xs font-bold items-center shrink-0">VIEW SHOP →</Link>
        </div>
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/shop" className="h-9 px-5 rounded-full bg-zinc-900 text-white font-bold text-sm inline-flex items-center justify-center">Shop All →</Link>
          <a href={`https://wa.me/254700000000?text=${wa}`} target="_blank" className="h-9 px-5 rounded-full bg-[#25D366] text-white font-bold text-sm inline-flex items-center justify-center">Order via WhatsApp</a>
          {guideHref && (
            <Link href={guideHref} className="h-9 px-5 rounded-full border border-zinc-300 bg-white font-bold text-sm inline-flex items-center justify-center">{guideLabel}</Link>
          )}
        </div>
      </div>
    </div>
  )
}

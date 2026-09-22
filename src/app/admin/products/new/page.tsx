"use client"
import { useState } from "react"
import Link from "next/link"
import { brands, categories } from "@/lib/data"
import { slugify, formatKES } from "@/lib/utils"
import ImageUpload from "@/components/admin/ImageUpload"

const tagOptions = ["New", "Featured", "Best Seller", "Sale", "Limited Stock"] as const

export default function NewProduct() {
  const [name, setName] = useState("")
  const [brand, setBrand] = useState(brands[0].name)
  const [category, setCategory] = useState(categories[0].name)
  const [price, setPrice] = useState("")
  const [sale, setSale] = useState("")
  const [stock, setStock] = useState("10")
  const [warranty, setWarranty] = useState("")
  const [specs, setSpecs] = useState("")
  const [image, setImage] = useState("")
  const [tags, setTags] = useState<string[]>(["New"])
  const [error, setError] = useState("")
  const [saved, setSaved] = useState(false)

  const toggleTag = (t: string) => setTags((ts) => (ts.includes(t) ? ts.filter((x) => x !== t) : [...ts, t]))
  const priceMinor = Math.round((parseFloat(price) || 0) * 100)
  const saleMinor = sale ? Math.round(parseFloat(sale) * 100) : undefined

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (name.trim().length < 5) return setError("Product name needs 5+ characters.")
    if (!priceMinor || priceMinor <= 0) return setError("Enter a valid price in KES.")
    if (saleMinor !== undefined && saleMinor >= priceMinor) return setError("Sale price must be below the regular price.")
    const stockN = parseInt(stock)
    if (isNaN(stockN) || stockN < 0) return setError("Enter a valid stock quantity.")
    if (!specs.trim()) return setError("Add a short specification line (shown on cards).")
    const slug = `${slugify(name)}-${Date.now().toString(36)}`
    const product = {
      id: `n${Date.now()}`, slug, name: name.trim(), brand, category,
      price: priceMinor, ...(saleMinor ? { salePrice: saleMinor } : {}),
      rating: 5, stock: stockN,
      image: image.trim() || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
      specs: specs.trim(), tags,
      ...(warranty.trim() ? { warranty: warranty.trim() } : {}),
    }
    try {
      const prev = JSON.parse(localStorage.getItem("nv-admin-products") || "[]")
      localStorage.setItem("nv-admin-products", JSON.stringify([...prev, product]))
    } catch { return setError("Browser storage unavailable.") }
    // Production: POST to /api/admin/products → Prisma Product.create + Inventory + images
    setSaved(true)
  }

  if (saved) return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center max-w-[560px]">
      <div className="text-xs tracking-widest font-bold text-emerald-700">PRODUCT SAVED • ACTIVE</div>
      <div className="text-xl font-black mt-2">“{name}”</div>
      <p className="text-sm text-zinc-600 mt-2">{formatKES(saleMinor ?? priceMinor)} • {stock} in stock • visible now in the products list. With PostgreSQL live it writes to Product + Inventory instead.</p>
      <div className="mt-4 flex gap-2 justify-center">
        <Link href="/admin/products" className="h-10 px-6 rounded-full bg-zinc-900 text-white text-sm font-bold inline-flex items-center justify-center">All Products →</Link>
        <button onClick={() => { setName(""); setPrice(""); setSale(""); setSpecs(""); setImage(""); setWarranty(""); setTags(["New"]); setSaved(false) }} className="h-10 px-6 rounded-full bg-white border border-zinc-300 text-sm font-bold">Add Another</button>
      </div>
    </div>
  )

  return (
    <div className="space-y-4 max-w-[720px]">
      <div><Link href="/admin/products" className="text-xs font-bold text-sky-600">← All Products</Link><h2 className="font-display text-xl font-black mt-1">New Product</h2></div>
      <form onSubmit={save} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm space-y-4">
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">PRODUCT NAME *</label><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Deye 8kW Hybrid Inverter SUN-8K…" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">BRAND</label><select value={brand} onChange={(e) => setBrand(e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm bg-white">{brands.map((b) => <option key={b.slug}>{b.name}</option>)}</select></div>
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">CATEGORY</label><select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm bg-white">{categories.map((c) => <option key={c.slug}>{c.name}</option>)}</select></div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">PRICE KES *</label><input value={price} onChange={(e) => setPrice(e.target.value)} type="number" min="0" placeholder="129900" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">SALE KES</label><input value={sale} onChange={(e) => setSale(e.target.value)} type="number" min="0" placeholder="—" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">STOCK *</label><input value={stock} onChange={(e) => setStock(e.target.value)} type="number" min="0" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        </div>
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">SHORT SPEC * (card line)</label><input value={specs} onChange={(e) => setSpecs(e.target.value)} placeholder="8kW • MPPT • Wi-Fi • Hybrid" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div className="grid sm:grid-cols-2 gap-3">
          <ImageUpload label="PRODUCT IMAGE (upload or URL)" value={image} onChange={setImage} />
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">WARRANTY</label><input value={warranty} onChange={(e) => setWarranty(e.target.value)} placeholder="5 years" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        </div>
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">TAGS</label><div className="mt-1 flex flex-wrap gap-2">{tagOptions.map((t) => <button key={t} type="button" onClick={() => toggleTag(t)} className={`h-8 px-3 rounded-full text-xs font-bold border ${tags.includes(t) ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-600 border-zinc-300"}`}>{t}</button>)}</div></div>
        {error && <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
        <button className="h-11 px-7 rounded-full bg-zinc-900 text-white font-bold text-sm">Save Product</button>
      </form>
    </div>
  )
}

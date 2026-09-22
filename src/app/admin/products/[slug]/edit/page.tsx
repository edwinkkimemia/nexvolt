"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { brands, categories, products, type MockProduct } from "@/lib/data"
import { formatKES } from "@/lib/utils"
import ImageUpload from "@/components/admin/ImageUpload"

const tagOptions = ["New", "Featured", "Best Seller", "Sale", "Limited Stock"]

export default function EditProduct({ params }: { params: { slug: string } }) {
  const [loaded, setLoaded] = useState(false)
  const [missing, setMissing] = useState(false)
  const [form, setForm] = useState({ name: "", brand: brands[0].name, category: categories[0].name, price: "", sale: "", stock: "0", specs: "", image: "", warranty: "", tags: [] as string[] })
  const [gallery, setGallery] = useState<string[]>([])
  const [error, setError] = useState("")
  const [saved, setSaved] = useState(false)
  const set = (k: string, v: string | string[]) => { setForm((f) => ({ ...f, [k]: v })); setSaved(false) }

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("nv-admin-products") || "[]")
      const override = Array.isArray(stored) ? stored.find((d: MockProduct) => d.slug === params.slug) : null
      const base = products.find((p) => p.slug === params.slug)
      const p = override || base
      if (!p) return setMissing(true)
      setForm({
        name: p.name, brand: p.brand, category: p.category,
        price: String(p.price / 100), sale: p.salePrice ? String(p.salePrice / 100) : "",
        stock: String(p.stock), specs: p.specs || "", image: p.image || "",
        warranty: (p as { warranty?: string }).warranty || "", tags: [...(p.tags || [])],
      })
      const imgs = p.images && p.images.length ? p.images : [p.image]
      setGallery(imgs.slice(1))
    } catch { setMissing(true) }
    setLoaded(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTag = (t: string) => set("tags", form.tags.includes(t) ? form.tags.filter((x) => x !== t) : [...form.tags, t])

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (form.name.trim().length < 5) return setError("Product name needs 5+ characters.")
    const priceMinor = Math.round((parseFloat(form.price) || 0) * 100)
    if (!priceMinor || priceMinor <= 0) return setError("Enter a valid price in KES.")
    const saleMinor = form.sale ? Math.round(parseFloat(form.sale) * 100) : undefined
    if (saleMinor !== undefined && saleMinor >= priceMinor) return setError("Sale price must be below the regular price.")
    const stockN = parseInt(form.stock)
    if (isNaN(stockN) || stockN < 0) return setError("Enter a valid stock quantity.")
    const primary = form.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"
    const entry: MockProduct = {
      id: params.slug, slug: params.slug, name: form.name.trim(), brand: form.brand, category: form.category,
      price: priceMinor, ...(saleMinor ? { salePrice: saleMinor } : {}),
      rating: products.find((p) => p.slug === params.slug)?.rating ?? 5, stock: stockN,
      image: primary, images: [primary, ...gallery],
      specs: form.specs.trim(), tags: form.tags as MockProduct["tags"],
    }
    try {
      const prev = JSON.parse(localStorage.getItem("nv-admin-products") || "[]")
      const rest = Array.isArray(prev) ? prev.filter((d: MockProduct) => d.slug !== params.slug) : []
      localStorage.setItem("nv-admin-products", JSON.stringify([...rest, entry]))
    } catch { return setError("Browser storage unavailable.") }
    // Production: PUT /api/admin/products/[slug] → Prisma Product.update + Inventory + images
    setSaved(true)
  }

  if (!loaded) return <div className="text-sm text-zinc-500">Loading editor…</div>
  if (missing) return (<div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm">Product not found. <Link href="/admin/products" className="font-bold underline">Back to products →</Link></div>)

  return (
    <div className="space-y-4 max-w-[720px]">
      <div><Link href="/admin/products" className="text-xs font-bold text-sky-600">← All Products</Link><h2 className="font-display text-xl font-black mt-1">Edit Product</h2><p className="text-xs text-zinc-500 font-mono">/{params.slug} • {form.price ? formatKES(Math.round((parseFloat(form.price) || 0) * 100)) : ""}</p></div>
      <form onSubmit={save} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm space-y-4">
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">PRODUCT NAME *</label><input value={form.name} onChange={(e) => set("name", e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">BRAND</label><select value={form.brand} onChange={(e) => set("brand", e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm bg-white">{brands.map((b) => <option key={b.slug}>{b.name}</option>)}</select></div>
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">CATEGORY</label><select value={form.category} onChange={(e) => set("category", e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm bg-white">{categories.map((c) => <option key={c.slug}>{c.name}</option>)}</select></div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">PRICE KES *</label><input value={form.price} onChange={(e) => set("price", e.target.value)} type="number" min="0" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">SALE KES</label><input value={form.sale} onChange={(e) => set("sale", e.target.value)} type="number" min="0" placeholder="—" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">STOCK *</label><input value={form.stock} onChange={(e) => set("stock", e.target.value)} type="number" min="0" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        </div>
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">SHORT SPEC</label><input value={form.specs} onChange={(e) => set("specs", e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <ImageUpload label="PRODUCT IMAGE (upload or URL)" value={form.image} onChange={(image) => set("image", image)} />
        <div>
          <label className="text-[11px] font-bold tracking-widest text-zinc-500">GALLERY ({gallery.length + 1} PHOTOS — first is primary)</label>
          <div className="mt-1 flex flex-wrap gap-2">
            {gallery.map((src, i) => (
              <span key={src + i} className="relative h-16 w-16 rounded-xl overflow-hidden border border-zinc-200">
                <img src={src} alt={`gallery ${i + 2}`} className="h-full w-full object-cover" />
                <button type="button" onClick={() => setGallery((g) => g.filter((_, x) => x !== i))} aria-label="Remove photo" className="absolute top-0.5 right-0.5 h-5 w-5 rounded-full bg-zinc-900 text-white text-[10px] grid place-items-center">✕</button>
              </span>
            ))}
          </div>
          <div className="mt-2"><ImageUpload label="ADD GALLERY PHOTO" value="" onChange={(url) => { if (url) setGallery((g) => [...g, url]) }} /></div>
        </div>
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">WARRANTY</label><input value={form.warranty} onChange={(e) => set("warranty", e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">TAGS</label><div className="mt-1 flex flex-wrap gap-2">{tagOptions.map((t) => <button key={t} type="button" onClick={() => toggleTag(t)} className={`h-8 px-3 rounded-full text-xs font-bold border ${form.tags.includes(t) ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-600 border-zinc-300"}`}>{t}</button>)}</div></div>
        {error && <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
        <div className="flex items-center gap-2">
          <button className="h-11 px-7 rounded-full bg-zinc-900 text-white font-bold text-sm">Save Changes</button>
          <Link href={`/shop/${params.slug}`} className="h-11 px-6 rounded-full border border-zinc-300 text-sm font-bold inline-flex items-center justify-center">View in Shop →</Link>
          {saved && <span className="text-sm font-bold text-emerald-600">✓ Saved</span>}
        </div>
      </form>
    </div>
  )
}

"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { products, type MockProduct } from "@/lib/data"
import { formatKES } from "@/lib/utils"

export default function AdminProducts() {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("All")
  const [extra, setExtra] = useState<MockProduct[]>([])
  const [flags, setFlags] = useState<Record<string, { active: boolean; featured: boolean }>>({})
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("nv-admin-products") || "[]")
      if (Array.isArray(saved) && saved.length) setExtra(saved)
    } catch { /* storage unavailable */ }
  }, [])
  const over = new Map(extra.map((p) => [p.slug, p]))
  const all = [...extra.filter((p) => !products.some((b) => b.slug === p.slug)), ...products.map((p) => over.has(p.slug) ? { ...p, ...over.get(p.slug) } as MockProduct : p)]
  const cats = ["All", ...Array.from(new Set(all.map((p) => p.category)))]
  const list = all.filter((p) => (cat === "All" || p.category === cat) && (!q || `${p.name} ${p.brand}`.toLowerCase().includes(q.toLowerCase())))
  const flag = (id: string) => flags[id] || { active: true, featured: false }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-black">Products ({list.length})</h2>
        <div className="flex gap-2">
          <Link href="/admin/products/new" className="h-10 px-5 rounded-full bg-zinc-900 text-white text-sm font-bold inline-flex items-center justify-center whitespace-nowrap">+ New Product</Link>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, brand…" className="h-10 rounded-full bg-white border border-zinc-300 px-4 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="h-10 rounded-full bg-white border border-zinc-300 px-4 text-sm">{cats.map((c) => <option key={c}>{c}</option>)}</select>
        </div>
      </div>
      <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
        <div className="overflow-auto">
          <table className="w-full text-sm min-w-[720px]">
            <thead><tr className="bg-zinc-50 text-left text-[11px] tracking-widest text-zinc-500"><th className="p-3">PRODUCT</th><th className="p-3">PRICE (KES)</th><th className="p-3">STOCK</th><th className="p-3">ACTIVE</th><th className="p-3">FEATURED</th><th className="p-3">EDIT</th></tr></thead>
            <tbody>
              {list.map((p) => (
                <tr key={p.id} className="border-t border-zinc-100">
                  <td className="p-3"><div className="font-bold">{p.name}</div><div className="text-xs text-zinc-500">{p.brand} • {p.category}</div></td>
                  <td className="p-3 font-bold whitespace-nowrap">{formatKES(p.salePrice ?? p.price)}</td>
                  <td className="p-3"><span className={`text-xs font-black px-2 py-1 rounded-full ${p.stock < 10 ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>{p.stock}</span></td>
                  <td className="p-3"><button onClick={() => setFlags((f) => ({ ...f, [p.id]: { ...flag(p.id), active: !flag(p.id).active } }))} className={`h-7 px-3 rounded-full text-xs font-bold ${flag(p.id).active ? "bg-emerald-500 text-white" : "bg-zinc-100 text-zinc-500"}`}>{flag(p.id).active ? "ON" : "OFF"}</button></td>
                  <td className="p-3"><button onClick={() => setFlags((f) => ({ ...f, [p.id]: { ...flag(p.id), featured: !flag(p.id).featured } }))} className={`h-7 px-3 rounded-full text-xs font-bold ${flag(p.id).featured ? "bg-sky-500 text-white" : "bg-zinc-100 text-zinc-500"}`}>{flag(p.id).featured ? "★ YES" : "☆ NO"}</button></td>
                  <td className="p-3"><Link href={`/admin/products/${p.slug}/edit`} className="h-7 px-3 rounded-full bg-zinc-900 text-white text-xs font-bold inline-flex items-center justify-center whitespace-nowrap">✎ Edit</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-xs text-zinc-500">Connects to Prisma Product model — toggles map to isActive/isFeatured, stock to Inventory.quantity.</p>
    </div>
  )
}

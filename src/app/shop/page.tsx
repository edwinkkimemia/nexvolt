"use client"
import { products, categories } from "@/lib/data"
import { ProductCard } from "@/components/shop/ProductCard"
import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"

function ShopInner(){
  const params = useSearchParams()
  const initialCat = (()=>{
    const c = params.get("category")
    if(c && (c==="All" || categories.some(x=>x.name===c))) return c
    return "All"
  })()
  const [q,setQ]=useState("")
  const [cat,setCat]=useState(initialCat)
  const [brand,setBrand]=useState("All")
  const filtered = products.filter(p=> {
    if(cat!=="All" && p.category!==cat) return false
    if(q && !(`${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q.toLowerCase()))) return false
    return true
  })
  return (
    <div className="bg-white text-zinc-900">
      <div className="bg-white text-zinc-900 border-b border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6 py-8">
          <div className="text-[11px] tracking-[0.2em] font-bold text-sky-600">SHOP TECHNOLOGY • PRICE-BEAT GUARANTEE</div>
          <h1 className="font-display text-3xl font-bold mt-1">Professional equipment — ready to ship or install</h1>
          <p className="text-sm text-zinc-600 mt-2">🔥 12% off + free site survey (KES 15k value). 6 left at this price. <span className="text-emerald-700 font-semibold">Pay on delivery • Pay 3x • 2hr quote</span></p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search product, category, brand, SKU..." className="h-11 flex-1 rounded-full bg-zinc-50 border border-zinc-300 px-5 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900"/>
            <select value={cat} onChange={e=>setCat(e.target.value)} className="h-11 rounded-full bg-white border border-zinc-300 text-zinc-900 px-5 text-sm">
              <option>All</option>{categories.map(c=><option key={c.slug}>{c.name}</option>)}
            </select>
          </div>
          {cat!=="All" && (
            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="text-zinc-500">Filtered by:</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-3 py-1 text-xs font-bold">{cat}
                <button onClick={()=>setCat("All")} aria-label="Clear filter" className="hover:text-zinc-300">✕</button>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-6 grid lg:grid-cols-[240px_1fr] gap-6">
        <aside className="hidden lg:block space-y-4">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="text-xs font-bold tracking-widest">FILTERS</div>
            <div className="mt-3 space-y-3 text-sm">
              <div><div className="font-medium">Category</div><div className="mt-1 space-y-1 text-zinc-600 max-h-48 overflow-auto">{["All",...categories.map(c=>c.name)].map(c=><label key={c} className="flex gap-2 items-center cursor-pointer"><input type="radio" name="cat" checked={cat===c} onChange={()=>setCat(c)}/> {c}</label>)}</div></div>
              <div><div className="font-medium">Availability</div><label className="flex gap-2 mt-1"><input type="checkbox" defaultChecked/> In Stock</label></div>
              <div><div className="font-medium">Price (KES)</div><div className="mt-1 flex gap-2"><input placeholder="Min" className="w-full border rounded-lg px-2 py-1.5 text-sm"/><input placeholder="Max" className="w-full border rounded-lg px-2 py-1.5 text-sm"/></div></div>
              <div><div className="font-medium">Brand</div><div className="mt-1 space-y-1 text-zinc-600">{["Jinko","Deye","Huawei","Hikvision","Ubiquiti"].map(b=><label key={b} className="flex gap-2"><input type="checkbox"/> {b}</label>)}</div></div>
            </div>
          </div>
        </aside>
        <div>
          <div className="flex items-center justify-between text-sm text-zinc-500"><span>{filtered.length} products{cat!=="All" ? ` in ${cat}` : ""}</span><select className="border rounded-full px-3 py-1.5 text-sm"><option>Popular</option><option>Price Low-High</option><option>Newest</option></select></div>
          {filtered.length===0 ? (
            <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
              <div className="font-bold">No products in {cat} yet</div>
              <p className="text-sm text-zinc-500 mt-1">New stock lands weekly — WhatsApp @nexvolttechke to reserve.</p>
              <button onClick={()=>setCat("All")} className="mt-4 h-9 px-5 rounded-full bg-zinc-900 text-white text-sm font-bold">View All Products</button>
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(p=><ProductCard key={p.id} product={p}/>)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ShopPage(){
  return (
    <Suspense fallback={<div className="bg-white text-zinc-900 mx-auto max-w-[1280px] px-6 py-16 text-center text-sm text-zinc-500">Loading shop…</div>}>
      <ShopInner />
    </Suspense>
  )
}

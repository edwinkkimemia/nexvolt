"use client"
import { useState } from "react"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/shop/ProductCard"
export default function SearchPage(){
  const [q,setQ]=useState("")
  const res = q ? products.filter(p=> `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q.toLowerCase())) : []
  return (
    <div className="bg-white text-zinc-900 min-h-[60vh]">
      <div className="mx-auto max-w-[800px] px-6 py-10">
        <h1 className="text-2xl font-semibold">Search</h1>
        <input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Product name, category, brand, SKU..." className="mt-4 w-full h-12 rounded-full border border-zinc-300 px-5 text-sm outline-none focus:border-zinc-900"/>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">{["Solar 5kW","Hikvision","LiFePO4","Ubiquiti U6"].map(s=><button key={s} onClick={()=>setQ(s)} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5">{s}</button>)}<span className="text-zinc-500 ml-2">Popular searches</span></div>
        {q && <div className="mt-6"><div className="text-sm text-zinc-500">{res.length} results for &quot;{q}&quot;</div><div className="mt-4 grid grid-cols-2 gap-4">{res.map(p=><ProductCard key={p.id} product={p}/>)}</div></div>}
      </div>
    </div>
  )
}

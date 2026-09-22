"use client"
import Link from "next/link"
import { ShoppingCart, Scale, X, ChevronRight } from "lucide-react"
import { useCart } from "@/store/cart"
import { products } from "@/lib/data"
import { formatKES } from "@/lib/utils"

export default function ComparePage(){
  const compare = useCart(s=>s.compare)
  const toggleCompare = useCart(s=>s.toggleCompare)
  const clearCompare = useCart(s=>s.clearCompare)
  const add = useCart(s=>s.add)
  const items = compare.map(s=>products.find(p=>p.slug===s)).filter((p)=>p!==undefined)

  if(items.length===0) return (
    <div className="bg-white min-h-[55vh]">
      <div className="mx-auto max-w-[800px] px-6 py-16 text-center">
        <div className="mx-auto h-14 w-14 rounded-2xl bg-zinc-100 grid place-items-center"><Scale className="h-6 w-6 text-zinc-400"/></div>
        <h1 className="font-display text-2xl font-black mt-4 text-zinc-900">Compare Products</h1>
        <p className="text-sm text-zinc-600 mt-2">Tap the <Scale className="h-3.5 w-3.5 inline"/> icon on any product (up to 4) to compare specs side-by-side.</p>
        <Link href="/shop" className="mt-6 inline-flex h-11 px-7 rounded-full bg-zinc-900 text-white font-bold items-center justify-center">Browse Shop →</Link>
      </div>
    </div>
  )

  const rows: { label: string; render: (p: (typeof products)[number]) => React.ReactNode }[] = [
    { label:"Price", render:(p)=><div><div className="text-lg font-black">{formatKES(p.salePrice ?? p.price)}</div>{p.salePrice && <div className="text-xs text-zinc-400 line-through">{formatKES(p.price)}</div>}</div> },
    { label:"Rating", render:(p)=><div className="text-sm">{"★".repeat(Math.round(p.rating))} <span className="text-zinc-400">({p.rating})</span></div> },
    { label:"Availability", render:(p)=><span className={`text-[11px] font-bold px-2 py-1 rounded-full ${p.stock>10?'bg-emerald-50 text-emerald-700':'bg-amber-50 text-amber-700'}`}>{p.stock>0?(p.stock<10?'Limited Stock':'In Stock'):'Out of Stock'}</span> },
    { label:"Key Spec", render:(p)=><div className="text-sm text-zinc-600">{p.specs}</div> },
    { label:"Brand", render:(p)=><div className="text-sm font-semibold">{p.brand}</div> },
    { label:"Category", render:(p)=><div className="text-sm text-zinc-600">{p.category}</div> },
  ]

  return (
    <div className="bg-white">
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1280px] px-6 py-3 flex items-center gap-2 text-sm text-zinc-600">
          <Link href="/" className="hover:text-zinc-900">Home</Link><ChevronRight className="h-3 w-3"/><Link href="/shop" className="hover:text-zinc-900">Shop</Link><ChevronRight className="h-3 w-3"/><span className="text-zinc-900 font-semibold">Compare ({items.length})</span>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-2xl font-black text-zinc-900">Compare ({items.length}/4)</h1>
          <div className="flex gap-2">
            <Link href="/shop" className="h-9 px-4 rounded-full border border-zinc-300 text-sm font-bold inline-flex items-center justify-center">+ Add More</Link>
            <button onClick={clearCompare} className="h-9 px-4 rounded-full bg-zinc-100 text-sm font-bold hover:bg-zinc-200">Clear All</button>
          </div>
        </div>
        <div className="mt-6 overflow-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-zinc-50">
                <th className="p-4 text-left text-xs tracking-widest text-zinc-500 w-32">FEATURE</th>
                {items.map(p=>(
                  <th key={p!.slug} className="p-4 text-left align-top">
                    <div className="relative">
                      <button onClick={()=>toggleCompare(p!.slug)} aria-label="Remove" className="absolute right-0 top-0 h-7 w-7 rounded-full bg-white border border-zinc-200 grid place-items-center text-zinc-500 hover:bg-zinc-100"><X className="h-3.5 w-3.5"/></button>
                      <img src={p!.image} alt={p!.name} className="h-28 w-full object-contain bg-white rounded-xl border border-zinc-100"/>
                      <div className="mt-2 text-[11px] tracking-widest font-bold text-zinc-400">{p!.brand.toUpperCase()}</div>
                      <Link href={`/shop/${p!.slug}`} className="font-bold text-sm leading-5 hover:text-sky-600 line-clamp-2">{p!.name}</Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(r=>(
                <tr key={r.label} className="border-t border-zinc-100">
                  <td className="p-4 text-xs font-bold tracking-widest text-zinc-500">{r.label.toUpperCase()}</td>
                  {items.map(p=><td key={p!.slug} className="p-4 align-top">{r.render(p!)}</td>)}
                </tr>
              ))}
              <tr className="border-t border-zinc-100 bg-zinc-50/50">
                <td className="p-4 text-xs font-bold tracking-widest text-zinc-500">ACTIONS</td>
                {items.map(p=>{
                  const wa = encodeURIComponent(`Jambo NexVolt — comparing ${p!.name} at ${formatKES(p!.salePrice ?? p!.price)}. Advise?`)
                  return (
                    <td key={p!.slug} className="p-4">
                      <div className="flex flex-col gap-2">
                        <button onClick={()=>add(p!.slug)} className="h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 whitespace-nowrap"><ShoppingCart className="h-3.5 w-3.5"/>Add to Cart</button>
                        <a href={`https://wa.me/254700000000?text=${wa}`} target="_blank" className="h-9 px-4 rounded-full bg-[#25D366] text-white text-xs font-bold inline-flex items-center justify-center whitespace-nowrap">WhatsApp Us</a>
                      </div>
                    </td>
                  )
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

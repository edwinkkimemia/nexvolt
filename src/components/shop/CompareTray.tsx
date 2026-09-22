"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Scale, X } from "lucide-react"
import { useCart } from "@/store/cart"
import { products } from "@/lib/data"

export default function CompareTray(){
  const compare = useCart(s=>s.compare)
  const toggleCompare = useCart(s=>s.toggleCompare)
  const clearCompare = useCart(s=>s.clearCompare)
  const path = usePathname()
  if(path==="/compare" || compare.length===0) return null
  const items = compare.map(s=>products.find(p=>p.slug===s)).filter((p)=>p!==undefined)
  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-[calc(100vw-110px)]">
      <div className="rounded-2xl border border-zinc-200 bg-white shadow-xl p-3 flex items-center gap-3">
        <div className="flex -space-x-2">
          {items.map(p=>(
            <button key={p!.slug} onClick={()=>toggleCompare(p!.slug)} title={`Remove ${p!.name}`} className="relative h-10 w-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden shadow hover:scale-105 transition">
              <img src={p!.image} alt={p!.name} className="h-full w-full object-cover"/>
            </button>
          ))}
        </div>
        <div className="text-xs">
          <div className="font-bold text-zinc-900 whitespace-nowrap">Compare ({compare.length}/4)</div>
          <div className="text-zinc-500 whitespace-nowrap hidden sm:block">Tap a thumb to remove</div>
        </div>
        <Link href="/compare" className="h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold inline-flex items-center gap-1.5 whitespace-nowrap"><Scale className="h-3.5 w-3.5"/>Compare Now</Link>
        <button onClick={clearCompare} aria-label="Clear compare" className="h-8 w-8 rounded-full hover:bg-zinc-100 grid place-items-center text-zinc-500 shrink-0"><X className="h-4 w-4"/></button>
      </div>
    </div>
  )
}

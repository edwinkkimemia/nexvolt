"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { products } from "@/lib/data"
import { formatKES, productImages } from "@/lib/utils"
import { useCart } from "@/store/cart"
import { Heart, ShoppingCart, Truck, Shield, Wrench, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ProductCard } from "@/components/shop/ProductCard"

export default function ProductPage({ params }: { params:{slug:string}}){
  const p = products.find(x=>x.slug===params.slug) ?? products[0]
  const add = useCart(s=>s.add)
  const toggleWishlist = useCart(s=>s.toggleWishlist)
  const wished = useCart(s=>s.wishlist.includes(p.slug))
  const router = useRouter()
  const buyNow = () => { add(p.slug); router.push("/checkout") }
  const gallery = productImages(p)
  const [active, setActive] = useState(0)
  const current = gallery[Math.min(active, gallery.length - 1)]
  const related = products.filter(x=>x.category===p.category && x.slug!==p.slug).slice(0,4)
  const wa = encodeURIComponent(`Jambo NexVolt — I want to order ${p.name} (${p.brand}) at ${formatKES(p.salePrice ?? p.price)}. SKU: NV-${p.id.padStart(4,"0")} . Delivery to Nairobi?`)
  return (
    <div className="bg-white text-zinc-900">
      {/* Breadcrumb */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1280px] px-6 py-3 flex items-center gap-2 text-sm text-zinc-600 overflow-auto whitespace-nowrap">
          <Link href="/" className="hover:text-zinc-900">Home</Link> <ChevronRight className="h-3 w-3 text-zinc-400"/>
          <Link href="/shop" className="hover:text-zinc-900">Shop</Link> <ChevronRight className="h-3 w-3 text-zinc-400"/>
          <Link href="/shop" className="hover:text-zinc-900">{p.category}</Link> <ChevronRight className="h-3 w-3 text-zinc-400"/>
          <span className="text-zinc-900 font-semibold">{p.name.slice(0,38)}…</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-6 grid lg:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-square rounded-2xl border border-zinc-200 bg-zinc-50 p-6 grid place-items-center">
            <img key={current} src={current} alt={p.name} className="h-full w-full object-contain"/>
            {gallery.length > 1 && (
              <span className="absolute bottom-3 right-3 rounded-full bg-zinc-900 text-white text-[11px] font-bold px-2.5 py-1">{Math.min(active, gallery.length - 1) + 1} / {gallery.length}</span>
            )}
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {gallery.map((src, i)=>(
              <button key={src + i} onClick={()=>setActive(i)} className={`aspect-square rounded-xl border bg-zinc-50 p-1.5 transition ${i===Math.min(active, gallery.length-1) ? "border-zinc-900 ring-2 ring-zinc-900/15" : "border-zinc-200 hover:border-zinc-400"}`}>
                <img src={src} alt={`${p.name} view ${i + 1}`} className="h-full w-full object-contain"/>
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-sky-50 border border-sky-200 p-3 text-sm text-sky-800"><strong>Order via WhatsApp:</strong> Get instant stock & delivery quote from @nexvolttechke — reply in 5 mins.</div>
        </div>
        <div>
          <div className="text-xs tracking-widest font-bold text-zinc-500">{p.brand.toUpperCase()} • {p.category} • In Stock</div>
          <h1 className="font-display text-2xl font-bold mt-1 leading-tight">{p.name}</h1>
          <div className="text-sm text-zinc-500 mt-1">{p.specs} • SKU: NV-{p.id.padStart(4,"0")} • ⭐ {p.rating} (42 reviews)</div>
          <div className="mt-4 flex items-baseline flex-wrap gap-3">
            <span className="text-2xl font-black">{formatKES(p.salePrice ?? p.price)}</span>
            {p.salePrice && <span className="line-through text-zinc-400 text-sm">{formatKES(p.price)}</span>}
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold">In Stock • {p.stock} units</span>
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-bold">Save {formatKES((p.price - (p.salePrice ?? p.price)))} </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <button onClick={()=>add(p.slug)} className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white text-sm font-bold hover:bg-black gap-2"><ShoppingCart className="h-4 w-4"/>Add to Cart</button>
            <a href={`https://wa.me/254700000000?text=${wa}`} target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white text-sm font-bold hover:bg-[#20bd5a] gap-2"><svg viewBox="0 0 24 24" width="16" height="16" fill="white" aria-hidden="true" className="block shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>Order via WhatsApp</a>
            <button onClick={()=>toggleWishlist(p.slug)} aria-label="Wishlist" className={`h-11 w-11 rounded-full border grid place-items-center shrink-0 ${wished?'bg-rose-500 text-white border-rose-500':'border-zinc-200 hover:bg-zinc-50'}`}><Heart className="h-4 w-4"/></button>
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={buyNow} className="flex-1 h-11 rounded-full bg-sky-500 text-white font-bold text-sm hover:bg-sky-600">Buy Now — Pay on Delivery</button>
            <Link href="/quote" className="flex-1 h-11 rounded-full border border-zinc-300 bg-white grid place-items-center text-sm font-bold text-zinc-800 hover:bg-zinc-50">Request Installation</Link>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-xl border border-zinc-200 p-3 text-center bg-zinc-50"><Truck className="h-4 w-4 mx-auto text-zinc-700"/><div className="font-bold mt-1 text-zinc-900">Delivery</div><div className="text-zinc-500">Nairobi 24h • Nationwide 2-4d</div></div>
            <div className="rounded-xl border border-zinc-200 p-3 text-center bg-zinc-50"><Shield className="h-4 w-4 mx-auto text-zinc-700"/><div className="font-bold mt-1 text-zinc-900">Warranty</div><div className="text-zinc-500">Up to 25 years</div></div>
            <div className="rounded-xl border border-zinc-200 p-3 text-center bg-zinc-50"><Wrench className="h-4 w-4 mx-auto text-zinc-700"/><div className="font-bold mt-1 text-zinc-900">Installation</div><div className="text-zinc-500">Licensed team</div></div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <div className="text-sm font-bold text-zinc-900">Product Description</div>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{p.description ?? `${p.name} — genuine ${p.brand} stock with local warranty and professional installation by NexVolt engineers. ${p.specs}.`}</p>
          </div>
          <div className="mt-4 rounded-2xl border border-zinc-200 p-5">
            <div className="text-sm font-bold text-zinc-900">Specifications</div>
            <table className="mt-3 w-full text-sm">
              <tbody>
                {(p.specTable ?? [{ k: "Summary", v: p.specs }, { k: "Brand", v: p.brand }, { k: "Category", v: p.category }]).map((s) => (
                  <tr key={s.k} className="border-b last:border-0"><td className="py-2.5 text-zinc-500">{s.k}</td><td className="py-2.5 font-semibold text-right">{s.v}</td></tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 rounded-xl bg-zinc-50 border border-zinc-200 p-3 text-xs text-zinc-600">Need help choosing? <a href="https://wa.me/254700000000" target="_blank" className="text-sky-600 font-bold underline">Chat @nexvolttechke on WhatsApp</a> — reply in 5 mins.</div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1280px] px-6 py-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-zinc-900">Related Products</h2>
            <Link href="/shop" className="text-sm font-bold text-sky-600">View all →</Link>
          </div>
          <p className="text-sm text-zinc-600 mt-1">Customers who viewed {p.category} also bought:</p>
          <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {related.length? related.map(r=> <ProductCard key={r.id} product={r}/>) : products.slice(0,4).map(r=> <ProductCard key={r.id} product={r}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

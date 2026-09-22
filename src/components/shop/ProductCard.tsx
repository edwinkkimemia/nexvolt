"use client"
import Link from "next/link"
import { Heart, ShoppingCart, Scale, Eye } from "lucide-react"
import { formatKES, productImages } from "@/lib/utils"
import { useCart } from "@/store/cart"
import { Badge } from "@/components/ui/badge"

export function ProductCard({ product }: { product: any }) {
  const add = useCart(s=>s.add)
  const toggleWishlist = useCart(s=>s.toggleWishlist)
  const wish = useCart(s=>s.wishlist.includes(product.slug))
  const toggleCompare = useCart(s=>s.toggleCompare)
  const inCompare = useCart(s=>s.compare.includes(product.slug))
  const waText = encodeURIComponent(`Jambo NexVolt — I want to order ${product.name} (${product.brand}) - ${formatKES(product.salePrice ?? product.price)}. Please confirm stock & delivery.`)
  return (
    <div className="group relative rounded-2xl border border-zinc-200 bg-white p-3 flex flex-col hover:shadow-lg hover:border-zinc-300 transition">
      <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1">
        {product.tags?.slice(0,2).map((t:string)=><Badge key={t} variant={t==="Sale"?"sale": t==="New"?"new":"default"}>{t}</Badge>)}
      </div>
      <button onClick={()=>toggleWishlist(product.slug)} aria-label="Wishlist" className={`absolute right-3 top-3 z-10 h-8 w-8 rounded-full grid place-items-center border ${wish?'bg-rose-500 text-white border-rose-500':'bg-white border-zinc-200 text-zinc-500 hover:bg-zinc-50'}`}><Heart className="h-3.5 w-3.5" /></button>
      <Link href={`/shop/${product.slug}`} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-50 grid place-items-center p-4">
        <img src={productImages(product)[0]} alt={product.name} className="h-full w-full object-contain transition duration-500 group-hover:scale-105 group-hover:opacity-0"/>
        {productImages(product)[1] && (
          <img src={productImages(product)[1]} alt={`${product.name} — alternate view`} className="absolute inset-0 h-full w-full object-contain p-4 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105"/>
        )}
        {productImages(product).length > 1 && (
          <span className="absolute bottom-2 right-2 rounded-full bg-zinc-900/80 text-white text-[10px] font-bold px-2 py-0.5">+{productImages(product).length - 1} photos</span>
        )}
      </Link>
      <div className="pt-3 space-y-1 flex-1">
        <div className="text-[11px] tracking-widest font-bold text-zinc-400">{product.brand?.toUpperCase()}</div>
        <Link href={`/shop/${product.slug}`} className="line-clamp-2 text-[14px] font-semibold leading-5 text-zinc-900 hover:text-sky-600">{product.name}</Link>
        <div className="text-xs text-zinc-500">{product.specs}</div>
        <div className="flex items-center gap-1 text-amber-500 text-xs">{"★★★★★".slice(0, Math.round(product.rating))} <span className="text-zinc-400">({product.rating})</span> <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${product.stock>10?'bg-emerald-50 text-emerald-700':'bg-amber-50 text-amber-700'}`}>{product.stock>0? (product.stock<10?'Limited Stock • 6 left':'In Stock'):'Out of Stock'}</span></div>
      </div>
      <div className="pt-3 flex items-end justify-between gap-2">
        <div>
          <div className="text-[11px] text-zinc-400 line-through h-3">{product.salePrice ? formatKES(product.price) : ""}</div>
          <div className="text-[16px] font-black text-zinc-900">{formatKES(product.salePrice ?? product.price)}</div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <a href={`https://wa.me/254700000000?text=${waText}`} target="_blank" aria-label="Order via WhatsApp — @nexvolttechke" className="h-9 w-9 rounded-full bg-[#25D366] grid place-items-center hover:bg-[#20bd5a] shadow-sm shrink-0">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="white" aria-hidden="true" className="block shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>
          <Link href={`/shop/${product.slug}`} aria-label="Quick view" className="h-9 w-9 rounded-full bg-zinc-900 text-white grid place-items-center hover:bg-black shrink-0">
            <Eye className="h-4 w-4 shrink-0"/>
          </Link>
        </div>
      </div>
      <div className="mt-2 flex gap-1.5">
        <button onClick={()=>add(product.slug)} className="flex-1 min-w-0 h-8 rounded-full bg-zinc-900 text-white text-xs font-bold hover:bg-black flex items-center justify-center gap-1.5 whitespace-nowrap px-3"><ShoppingCart className="h-3.5 w-3.5 shrink-0"/><span className="truncate">Add to Cart</span></button>
        <button onClick={()=>toggleCompare(product.slug)} aria-label="Compare" title={inCompare?"Remove from compare":"Add to compare"} className={`h-8 w-8 rounded-full border grid place-items-center shrink-0 transition ${inCompare?'bg-sky-500 text-white border-sky-500':'border-zinc-200 text-zinc-500 hover:bg-zinc-50'}`}><Scale className="h-3.5 w-3.5"/></button>
      </div>
    </div>
  )
}

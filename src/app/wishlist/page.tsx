"use client"
import { useCart } from "@/store/cart"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/shop/ProductCard"
export default function WishlistPage(){
  const ids = useCart(s=>s.wishlist)
  const items = products.filter(p=>ids.includes(p.slug))
  return (
    <div className="bg-white text-zinc-900 min-h-[50vh]">
      <div className="mx-auto max-w-[1280px] px-6 py-8">
        <h1 className="text-2xl font-semibold">Wishlist ({items.length})</h1>
        {items.length===0 ? <p className="text-sm text-zinc-500 mt-4">No items yet. Browse shop and tap ♥</p> : <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div>}
      </div>
    </div>
  )
}

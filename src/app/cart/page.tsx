"use client"
import { useCart } from "@/store/cart"
import { formatKES } from "@/lib/utils"
import Link from "next/link"
export default function CartPage(){
  const { items, remove, total } = useCart()
  const count = useCart(s=>s.items.length)
  if(items.length===0) return <div className="bg-white text-zinc-900 min-h-[50vh] grid place-items-center py-16"><div className="text-center"><div className="text-2xl font-semibold">Your cart is empty</div><Link href="/shop" className="mt-4 inline-flex h-10 px-6 rounded-full bg-zinc-900 text-white items-center">Continue Shopping</Link></div></div>
  return (
    <div className="bg-white text-zinc-900">
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-[1fr_380px] gap-8">
        <div>
          <h1 className="text-2xl font-semibold">Cart ({count})</h1>
          <div className="mt-4 space-y-3">
            {items.map(i=>(
              <div key={i.product.slug} className="flex gap-4 rounded-2xl border border-zinc-200 p-4">
                <img src={i.product.image} alt={i.product.name} className="h-20 w-20 object-contain bg-zinc-50 rounded-xl"/>
                <div className="flex-1"><div className="font-medium">{i.product.name}</div><div className="text-xs text-zinc-500">{i.product.brand}</div><div className="font-bold mt-1">{formatKES(i.product.salePrice ?? i.product.price)} × {i.qty}</div></div>
                <button onClick={()=>remove(i.product.slug)} className="h-8 px-3 rounded-full border border-zinc-200 text-xs">Remove</button>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 h-fit sticky top-20">
          <div className="font-semibold">Order Summary</div>
          <div className="mt-3 space-y-2 text-sm"><div className="flex justify-between"><span>Subtotal</span><span>{formatKES(total())}</span></div><div className="flex justify-between"><span>Shipping</span><span className="text-emerald-600">Calculated at checkout</span></div><div className="flex justify-between font-bold text-base border-t pt-2"><span>Total</span><span>{formatKES(total())}</span></div></div>
          <input placeholder="Coupon code" className="mt-3 w-full h-10 rounded-full border border-zinc-200 px-4 text-sm"/>
          <Link href="/checkout" className="mt-4 h-11 rounded-full bg-zinc-900 text-white grid place-items-center font-bold">Proceed to Checkout</Link>
          <Link href="/shop" className="mt-2 h-10 rounded-full border border-zinc-200 grid place-items-center text-sm">Continue Shopping</Link>
        </div>
      </div>
    </div>
  )
}

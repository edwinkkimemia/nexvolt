"use client"
import { useCart } from "@/store/cart"
import { formatKES } from "@/lib/utils"
import { useState } from "react"
export default function CheckoutPage(){
  const total = useCart(s=>s.total())
  const [method,setMethod]=useState("mpesa")
  return (
    <div className="bg-white text-zinc-900">
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-[1fr_420px] gap-8">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">Checkout</h1>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <div className="text-sm font-semibold">Delivery Address</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <input placeholder="Full name" className="h-10 rounded-xl border px-3 text-sm"/><input placeholder="Phone" className="h-10 rounded-xl border px-3 text-sm"/>
              <input placeholder="Email" className="h-10 rounded-xl border px-3 text-sm col-span-2"/><input placeholder="County" className="h-10 rounded-xl border px-3 text-sm"/><input placeholder="City / Town" className="h-10 rounded-xl border px-3 text-sm"/>
              <textarea placeholder="Street, building, delivery notes" className="col-span-2 rounded-xl border p-3 text-sm h-20"/>
            </div>
            <label className="flex gap-2 mt-3 text-sm"><input type="checkbox"/> Add installation service</label>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <div className="text-sm font-semibold">Shipping Method</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <label className="rounded-xl border p-3 flex gap-2 items-center"><input type="radio" name="ship" defaultChecked/> Standard (2-4 days)</label>
              <label className="rounded-xl border p-3 flex gap-2 items-center"><input type="radio" name="ship"/> Express (24h Nairobi)</label>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <div className="text-sm font-semibold">Payment Method</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                {id:"mpesa", label:"M-Pesa"},
                {id:"pesapal", label:"Pesapal / Card"},
                {id:"flutterwave", label:"Flutterwave"},
                {id:"cod", label:"Pay on Delivery"},
              ].map(m=>(
                <button key={m.id} onClick={()=>setMethod(m.id)} className={`rounded-xl border p-3 text-sm text-left ${method===m.id?'border-zinc-900 bg-zinc-900 text-white':'border-zinc-200'}`}>{m.label}</button>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-3">Payments via env-configured providers. No credentials hard-coded. Structure ready for integration.</p>
            <textarea placeholder="Order notes" className="mt-3 w-full rounded-xl border p-3 text-sm h-16"/>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 h-fit sticky top-20">
          <div className="font-semibold">Order Summary</div>
          <div className="mt-3 space-y-2 text-sm"><div className="flex justify-between"><span>Subtotal</span><span>{formatKES(total)}</span></div><div className="flex justify-between"><span>Shipping</span><span>KES 0</span></div><div className="flex justify-between font-bold border-t pt-2"><span>Total (KES)</span><span>{formatKES(total)}</span></div></div>
          <button className="mt-4 w-full h-11 rounded-full bg-sky-500 text-white font-bold">Pay {formatKES(total)} • {method.toUpperCase()}</button>
          <div className="mt-2 text-center text-xs text-zinc-500">Guest checkout supported • Account checkout with profile</div>
        </div>
      </div>
    </div>
  )
}

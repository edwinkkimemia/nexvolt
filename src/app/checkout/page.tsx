"use client"
import { useCart } from "@/store/cart"
import { formatKES, generateRef } from "@/lib/utils"
import { useState } from "react"
import Link from "next/link"

export default function CheckoutPage(){
  const items = useCart(s=>s.items)
  const total = useCart(s=>s.total())
  const clear = useCart(s=>s.clear)
  const [method,setMethod]=useState("mpesa")
  const [form,setForm]=useState({ name:"", phone:"", email:"", county:"", city:"", notes:"" })
  const [install,setInstall]=useState(false)
  const [error,setError]=useState("")
  const [placing,setPlacing]=useState(false)
  const [orderRef,setOrderRef]=useState<string | null>(null)
  const set = (k:string,v:string)=>setForm(f=>({...f,[k]:v}))

  const place = ()=>{
    setError("")
    if(items.length===0) return setError("Your cart is empty.")
    if(form.name.trim().length<2) return setError("Enter your full name.")
    if(!/^(07|01)\d{8}$/.test(form.phone.replace(/\s/g,""))) return setError("Enter a valid M-Pesa phone (07… / 01…).")
    if(!/^\S+@\S+\.\S+$/.test(form.email)) return setError("Enter a valid email for the receipt.")
    if(!form.county.trim()) return setError("Enter your county.")
    setPlacing(true)
    // Order timeout: POST /api/orders → Prisma Order + OrderItems + Payment({provider: method})
    // Payment providers (M-Pesa/Pesapal/Flutterwave) fire from env keys server-side.
    setTimeout(()=>{
      setOrderRef(generateRef("NVO"))
      clear()
      setPlacing(false)
    }, 1200)
  }

  if(orderRef) return (
    <div className="bg-white">
      <div className="mx-auto max-w-[640px] px-6 py-16 text-center">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
          <div className="text-xs tracking-widest font-bold text-emerald-700">ORDER PLACED • {method.toUpperCase()}</div>
          <div className="text-2xl font-black mt-2">{orderRef}</div>
          <p className="text-sm text-zinc-600 mt-3">
            {method==="mpesa" ? "Check your phone for the M-Pesa STK push and enter PIN to complete payment." : method==="cod" ? "Pay cash or M-Pesa when your order arrives." : "Complete payment via the provider link sent to your email."}
            {install ? " Our engineers will call to schedule installation." : ""} Receipt sent to {form.email || "your email"}.
          </p>
          <div className="mt-5 flex gap-2 justify-center">
            <Link href="/account/orders" className="h-10 px-6 rounded-full bg-zinc-900 text-white text-sm font-bold inline-flex items-center justify-center">Track Order</Link>
            <Link href="/shop" className="h-10 px-6 rounded-full bg-white border border-zinc-300 text-sm font-bold inline-flex items-center justify-center">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-white text-zinc-900">
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-[1fr_420px] gap-8">
        <div className="space-y-6">
          <h1 className="font-display text-2xl font-black">Checkout</h1>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <div className="text-sm font-semibold">Delivery Address</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <input value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Full name *" className="h-10 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900"/>
              <input value={form.phone} onChange={e=>set("phone",e.target.value)} placeholder="M-Pesa phone *" className="h-10 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900"/>
              <input value={form.email} onChange={e=>set("email",e.target.value)} placeholder="Email *" className="h-10 rounded-xl border border-zinc-300 px-3 text-sm col-span-2 outline-none focus:border-zinc-900"/>
              <input value={form.county} onChange={e=>set("county",e.target.value)} placeholder="County *" className="h-10 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900"/>
              <input value={form.city} onChange={e=>set("city",e.target.value)} placeholder="City / Town" className="h-10 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900"/>
              <textarea placeholder="Street, building, delivery notes" className="col-span-2 rounded-xl border border-zinc-300 p-3 text-sm h-20 outline-none focus:border-zinc-900"/>
            </div>
            <label className="flex gap-2 mt-3 text-sm items-center"><input type="checkbox" checked={install} onChange={e=>setInstall(e.target.checked)} className="h-4 w-4"/> Add installation service (engineer survey FREE)</label>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <div className="text-sm font-semibold">Shipping Method</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <label className="rounded-xl border border-zinc-200 p-3 flex gap-2 items-center text-sm"><input type="radio" name="ship" defaultChecked/> Standard (2-4 days)</label>
              <label className="rounded-xl border border-zinc-200 p-3 flex gap-2 items-center text-sm"><input type="radio" name="ship"/> Express (24h Nairobi)</label>
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
            <textarea value={form.notes} onChange={e=>set("notes",e.target.value)} placeholder="Order notes" className="mt-3 w-full rounded-xl border border-zinc-300 p-3 text-sm h-16 outline-none focus:border-zinc-900"/>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 h-fit sticky top-20">
          <div className="font-semibold">Order Summary ({items.reduce((a,b)=>a+b.qty,0)} items)</div>
          <div className="mt-3 space-y-2 text-sm"><div className="flex justify-between"><span>Subtotal</span><span>{formatKES(total)}</span></div><div className="flex justify-between"><span>Shipping</span><span>KES 0</span></div>{install && <div className="flex justify-between text-emerald-700"><span>Installation survey</span><span>FREE</span></div>}<div className="flex justify-between font-bold border-t pt-2"><span>Total (KES)</span><span>{formatKES(total)}</span></div></div>
          {error && <div className="mt-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
          <button onClick={place} disabled={placing} className="mt-4 w-full h-11 rounded-full bg-sky-500 text-white font-bold disabled:opacity-50">{placing ? "Placing order…" : `Place Order • ${formatKES(total)}`}</button>
          <div className="mt-2 text-center text-xs text-zinc-500">Guest checkout supported • {method==="mpesa" ? "STK push to your phone" : "Pay via "+method.toUpperCase()}</div>
        </div>
      </div>
    </div>
  )
}

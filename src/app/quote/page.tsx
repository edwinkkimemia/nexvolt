"use client"
import { useState } from "react"
import { generateRef } from "@/lib/utils"
import Link from "next/link"

export default function QuotePage(){
  const [ref,setRef]=useState<string | null>(null)
  const submit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setRef(generateRef())
  }
  if(ref) return (
    <div className="mx-auto max-w-[640px] px-6 py-16 text-center">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
        <div className="text-sm tracking-widest font-bold text-emerald-700">ENQUIRY RECEIVED</div>
        <div className="text-2xl font-bold mt-2">{ref}</div>
        <p className="text-sm text-zinc-600 mt-3">We&apos;ve saved your enquiry, notified admin and sent confirmation. Engineer contacts you in 24h via @nexvolttechke.</p>
        <a href="/quote" onClick={()=>setRef(null)} className="mt-4 inline-flex h-10 px-6 rounded-full bg-zinc-900 text-white items-center">New enquiry</a>
      </div>
    </div>
  )
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400" alt="Request quote Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Quote</span></nav>
          <div className="text-[11px] tracking-[0.2em] font-bold text-sky-600">REQUEST A QUOTE • 2HR RESPONSE</div>
          <h1 className="font-display text-3xl font-black mt-1 text-zinc-900">Intelligent quotation — one form, any system</h1>
          <p className="text-sm text-zinc-600 mt-2">Solar, smart home, CCTV, networking — engineer prices in 2 hours. Free survey this week.</p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-[1fr_320px] gap-8">
        <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" alt="Engineer survey" className="h-40 w-full object-cover"/>
          <form onSubmit={submit} className="p-6">
            <div className="text-sm font-bold">Project type (choose one or Full Integrated)</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Solar","Smart Home","CCTV","Access Control","Networking","Backup Power","Gate Automation","Electric Fence","EV Charging","Full Integrated Solution"].map(t=>(
                <label key={t} className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm flex gap-1.5 items-center bg-zinc-50"><input type="checkbox" name="type" value={t}/> {t}</label>
              ))}
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <input name="name" required placeholder="Name *" className="h-11 rounded-xl border px-3 text-sm"/>
              <input name="company" placeholder="Company" className="h-11 rounded-xl border px-3 text-sm"/>
              <input name="phone" required placeholder="Phone * (07...)" className="h-11 rounded-xl border px-3 text-sm"/>
              <input name="email" required type="email" placeholder="Email *" className="h-11 rounded-xl border px-3 text-sm"/>
              <select name="county" className="h-11 rounded-xl border px-3 text-sm"><option>County</option><option>Nairobi</option><option>Kiambu</option><option>Mombasa</option></select>
              <input name="location" placeholder="Location / Estate" className="h-11 rounded-xl border px-3 text-sm"/>
              <select name="propertyType" className="h-11 rounded-xl border px-3 text-sm"><option>Property type</option><option>Home</option><option>Office</option><option>Shop</option><option>Factory</option></select>
              <select name="budget" className="h-11 rounded-xl border px-3 text-sm"><option>Budget range</option><option>Under 500k</option><option>500k-1M</option><option>1M-5M</option><option>5M+</option></select>
            </div>
            <textarea name="description" placeholder="Project description" className="mt-3 w-full rounded-xl border p-3 text-sm h-24"/>
            <input type="date" name="preferredDate" className="mt-3 h-11 rounded-xl border px-3 text-sm w-full"/>
            <div className="mt-3"><label className="text-sm font-medium">Attachment (site photos / BOQ)</label><input type="file" className="mt-1 block w-full text-sm"/></div>
            <button type="submit" className="mt-6 w-full h-11 rounded-full bg-sky-500 text-white font-bold">Submit Enquiry • Generate Reference Number</button>
            <p className="text-xs text-zinc-500 mt-2">NVQ reference • admin notify • email confirm • status: new → reviewing → quoted</p>
          </form>
        </div>
        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400" alt="Solar quote" className="h-28 w-full object-cover rounded-xl"/>
            <h3 className="font-bold mt-3">Why quote with NexVolt?</h3>
            <ul className="mt-2 text-sm text-zinc-600 space-y-1"><li>• 2hr response, 72hr install</li><li>• Price-beat 5% • 25yr warranty</li><li>• WhatsApp @nexvolttechke priority</li></ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="font-bold">Related Products</h3>
            <p className="text-sm text-zinc-600 mt-1">Most quoted with this form.</p>
            <div className="mt-3 space-y-2 text-sm">
              <Link href="/shop" className="block rounded-xl border p-3 hover:bg-zinc-50 font-semibold">5kW Hybrid + 5kWh — KES 699k</Link>
              <a href="https://wa.me/254700000000" target="_blank" className="block rounded-xl bg-[#25D366] text-white p-3 text-center font-bold">WhatsApp Quote</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

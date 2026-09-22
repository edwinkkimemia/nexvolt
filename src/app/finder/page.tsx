"use client"
import { useState } from "react"
import { products, type MockProduct } from "@/lib/data"
import { ProductCard } from "@/components/shop/ProductCard"
import { formatKES } from "@/lib/utils"
import { useCart } from "@/store/cart"

const propertyTypes = ["Home","Office","Shop","Apartment","Factory","Farm"]

export default function FinderPage(){
  const [type,setType]=useState("Home")
  const [power,setPower]=useState(5)
  const [budget,setBudget]=useState(500000)
  const [solar,setSolar]=useState(true)
  const add = useCart(s=>s.add)
  // simple recommendation logic
  const rec: MockProduct[] = []
  if(power<=3) rec.push(products[1], products[2])
  else if(power<=7) rec.push(products[0], products[1], products[2])
  else rec.push(products[0], products[1], products[2], products[6])
  const total = rec.reduce((a,b)=>a+(b.salePrice??b.price),0)

  return (
    <div className="bg-white text-zinc-900">
      <div className="bg-white text-zinc-900 border-b border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6 py-8">
          <div className="text-[11px] tracking-[0.2em] font-bold text-sky-400">SMART PRODUCT FINDER</div>
          <h1 className="text-3xl font-semibold mt-1">What are you looking to power?</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {propertyTypes.map(t=>(
              <button key={t} onClick={()=>setType(t)} className={`rounded-full px-4 py-2 text-sm font-bold border ${type===t?'bg-white text-black border-white':'bg-white/10 border-white/20 text-white'}`}>{t}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-[380px_1fr] gap-8">
        <div className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <div className="text-sm font-semibold">Tell us your needs</div>
            <label className="mt-4 block text-xs font-bold tracking-widest">EST. POWER REQUIREMENT: {power} kW</label>
            <input type="range" min={1} max={30} value={power} onChange={e=>setPower(parseInt(e.target.value))} className="w-full mt-2"/>
            <label className="mt-4 block text-xs font-bold tracking-widest">BACKUP DURATION</label>
            <select className="mt-2 w-full h-10 rounded-xl border px-3 text-sm"><option>4 hours</option><option>8 hours</option><option>12 hours</option><option>24 hours</option></select>
            <label className="mt-4 flex gap-2 text-sm"><input type="checkbox" checked={solar} onChange={e=>setSolar(e.target.checked)}/> Include solar panels</label>
            <label className="mt-4 block text-xs font-bold tracking-widest">BUDGET (KES)</label>
            <input type="range" min={100000} max={3000000} step={50000} value={budget} onChange={e=>setBudget(parseInt(e.target.value))} className="w-full mt-2"/>
            <div className="text-sm font-bold mt-1">{formatKES(budget*100)}</div>
          </div>
          <div className="rounded-2xl bg-zinc-900 text-white p-5">
            <div className="text-sm font-semibold">Recommended system size</div>
            <div className="text-2xl font-bold mt-1">{power} kW • {(power*1.4).toFixed(1)} kWp solar</div>
            <div className="text-xs text-zinc-600 mt-1">Est. daily yield ~ {(power*4.5).toFixed(1)} kWh</div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between"><h2 className="font-semibold">Recommended for {type} • {power}kW {solar?'with solar':''}</h2><span className="text-sm font-bold">{formatKES(total)}</span></div>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {rec.map(p=><ProductCard key={p.id} product={p}/>)}
          </div>
          <div className="mt-6 rounded-2xl border border-zinc-200 p-5 flex items-center justify-between bg-zinc-50">
            <div><div className="font-semibold">Complete system estimate</div><div className="text-sm text-zinc-500">Inverter + Battery + {solar?'Panels':''} + Accessories</div></div>
            <div className="text-right"><div className="text-xl font-bold">{formatKES(total)}</div><button onClick={()=>rec.forEach(r=>add(r.slug))} className="mt-2 h-9 px-5 rounded-full bg-sky-500 text-white text-sm font-bold">Add system to cart</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

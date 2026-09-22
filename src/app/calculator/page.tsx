"use client"
import { useState } from "react"
import { formatKES } from "@/lib/utils"

type Appliance = { name: string, watts: number, qty: number }
const defaults: Appliance[] = [
  { name:"TV (100W)", watts:100, qty:0},
  { name:"Fridge (150W)", watts:150, qty:0},
  { name:"Lights 10W", watts:10, qty:0},
  { name:"Wi-Fi Router (15W)", watts:15, qty:0},
  { name:"Laptop (65W)", watts:65, qty:0},
  { name:"Water Pump (750W)", watts:750, qty:0},
  { name:"Air Conditioner (1500W)", watts:1500, qty:0},
  { name:"CCTV (40W)", watts:40, qty:0},
  { name:"Server (300W)", watts:300, qty:0},
]

export default function CalculatorPage(){
  const [apps,setApps]=useState<Appliance[]>(defaults)
  const [hours,setHours]=useState(5)
  const [autonomy,setAutonomy]=useState(8)
  const update = (i:number, qty:number)=> setApps(a=>a.map((x,idx)=> idx===i? {...x, qty: Math.max(0,qty)}:x))
  const totalW = apps.reduce((a,b)=>a+b.watts*b.qty,0)
  const dailyKwh = totalW * hours /1000
  const inverterKw = Math.ceil(totalW*1.25/1000 * 10)/10 // 25% margin
  const batteryKwh = Math.ceil(dailyKwh * autonomy / hours *1.2 *10)/10 // autonomy logic
  const panelsKw = Math.ceil(dailyKwh /4.5 *1.15 *10)/10 // 4.5 peak sun hours
  const estCost = Math.round((inverterKw*180000 + batteryKwh*50000 + panelsKw*40000 + 50000)*100) // minor

  return (
    <div className="bg-white text-zinc-900">
      <div className="bg-white text-zinc-900 border-b border-zinc-200"><div className="mx-auto max-w-[1280px] px-6 py-8"><div className="text-[11px] tracking-[0.2em] font-bold text-sky-400">SOLAR SIZING CALCULATOR</div><h1 className="text-3xl font-semibold mt-1">Size your solar system accurately</h1><p className="text-sm text-zinc-600 mt-2">Add appliances → get daily consumption, inverter, battery & panel recommendation. Disclaimer: final sizing after technical assessment.</p></div></div>
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-[1fr_420px] gap-8">
        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="grid sm:grid-cols-2 gap-3">
            {apps.map((a,i)=>(
              <div key={a.name} className="rounded-xl border border-zinc-200 p-3 flex items-center justify-between">
                <div><div className="text-sm font-medium">{a.name}</div><div className="text-xs text-zinc-500">{a.watts}W each</div></div>
                <div className="flex items-center gap-2">
                  <button onClick={()=>update(i,a.qty-1)} className="h-8 w-8 rounded-full border grid place-items-center">−</button>
                  <span className="w-6 text-center font-bold">{a.qty}</span>
                  <button onClick={()=>update(i,a.qty+1)} className="h-8 w-8 rounded-full bg-zinc-900 text-white grid place-items-center">+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <label className="text-sm">Daily usage hours: <input type="range" min={1} max={12} value={hours} onChange={e=>setHours(parseInt(e.target.value))} className="w-full"/><span className="font-bold">{hours}h</span></label>
            <label className="text-sm">Backup autonomy (hrs): <input type="range" min={2} max={24} value={autonomy} onChange={e=>setAutonomy(parseInt(e.target.value))} className="w-full"/><span className="font-bold">{autonomy}h</span></label>
          </div>
          <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">Actual installation requirements may vary after technical assessment. This is an estimate only.</div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <div className="text-sm font-bold tracking-widest">ESTIMATE</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-zinc-50 border p-3"><div className="text-xs text-zinc-500">DAILY CONSUMPTION</div><div className="text-lg font-bold">{dailyKwh.toFixed(2)} kWh</div><div className="text-xs text-zinc-500">{totalW} W connected</div></div>
              <div className="rounded-xl bg-zinc-900 text-white p-3"><div className="text-xs text-zinc-600">EST. COST</div><div className="text-lg font-bold">{formatKES(estCost)}</div><div className="text-xs opacity-70">Incl. install</div></div>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between border-b py-2"><span>Recommended inverter</span><b>{inverterKw} kW Hybrid</b></div>
              <div className="flex justify-between border-b py-2"><span>Battery capacity</span><b>{batteryKwh} kWh (≈ {(batteryKwh/5).toFixed(1)}×5kWh)</b></div>
              <div className="flex justify-between py-2"><span>Solar panel capacity</span><b>{panelsKw} kWp</b></div>
            </div>
            <a href="/quote" className="mt-4 h-11 rounded-full bg-sky-500 text-white grid place-items-center font-bold">Request Quotation</a>
            <a href="/finder" className="mt-2 h-10 rounded-full border border-zinc-200 grid place-items-center text-sm font-medium">Use Smart Finder</a>
          </div>
        </div>
      </div>
    </div>
  )
}

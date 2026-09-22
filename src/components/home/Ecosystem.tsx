"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
const zones = [
  { id:"Solar", desc:"High-efficiency mono panels with hybrid inverter & net metering.", icon:"☀️" },
  { id:"Battery", desc:"LiFePO4 modular storage — 5-30kWh, 6000 cycles, BMS.", icon:"🔋" },
  { id:"Smart Lighting", desc:"Tunable scenes, presence & daylight harvesting.", icon:"💡" },
  { id:"Security", desc:"4K ColorVu, AI person/vehicle detection, instant alerts.", icon:"📹" },
  { id:"Access Control", desc:"Biometric, RFID & mobile credentials with logs.", icon:"🪪" },
  { id:"Networking", desc:"Wi-Fi 6 mesh, structured cabling, fiber backbone.", icon:"📶" },
  { id:"Climate", desc:"HVAC integration & smart thermostats per zone.", icon:"❄️" },
  { id:"Gate Automation", desc:"Sliding/gate motors, intercom & plate recognition.", icon:"🚧" },
  { id:"Energy Monitoring", desc:"Real-time kW/kWh, cost & carbon dashboard.", icon:"📊" },
]
export default function Ecosystem(){
  const [active,setActive]=useState("Solar")
  return (
    <section className="bg-zinc-50 border-y border-zinc-200 py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] tracking-[0.2em] font-bold text-sky-600">ONE CONNECTED ECOSYSTEM</div>
          <h2 className="mt-2 text-3xl lg:text-[36px] font-bold tracking-tight text-zinc-900">Tap a zone. See the intelligent building.</h2>
          <p className="mt-3 text-sm text-zinc-600">House / Commercial building with selectable technology zones — each highlights and explains.</p>
        </div>
        <div className="mt-8 grid lg:grid-cols-[1.35fr_0.85fr] gap-6">
          <div className="relative rounded-[20px] overflow-hidden border border-zinc-200 bg-white p-2 shadow-sm flex">
            <div className="relative rounded-2xl overflow-hidden bg-zinc-100 flex-1 min-h-[420px]">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900" alt="building" className="absolute inset-0 h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/>
              <svg viewBox="0 0 800 420" className="absolute inset-0 h-full w-full">
                <rect x="240" y="90" width="320" height="220" rx="14" fill="none" stroke={active==="Solar"?"#0EA5E9":"rgba(0,0,0,0.18)"} strokeWidth="2"/>
                <circle cx="400" cy="200" r="10" fill="#0EA5E9"/>
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-zinc-200 shadow-xl rounded-2xl px-5 py-4 text-center">
                <div className="text-[11px] tracking-widest text-zinc-500 font-bold">ACTIVE SYSTEM</div>
                <div className="text-lg font-bold flex items-center justify-center gap-2 text-zinc-900"><span>{zones.find(z=>z.id===active)?.icon}</span> {active}</div>
                <div className="text-xs text-zinc-600 mt-1 max-w-[260px]">{zones.find(z=>z.id===active)?.desc}</div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex gap-2 overflow-auto pb-1">
                {zones.map(z=>(
                  <button key={z.id} onClick={()=>setActive(z.id)} className={cn("shrink-0 rounded-full px-3 py-1.5 text-xs font-bold border whitespace-nowrap shadow", active===z.id?"bg-sky-500 text-white border-sky-500":"bg-white text-zinc-700 border-zinc-200")}>{z.icon} {z.id}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 content-start">
            {zones.map(z=>(
              <button key={z.id} onClick={()=>setActive(z.id)} className={cn("text-left rounded-2xl border p-4 transition shadow-sm", active===z.id?"bg-zinc-900 text-white border-zinc-900":"bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-900")}>
                <div className="text-xl">{z.icon}</div>
                <div className="mt-2 text-sm font-bold">{z.id}</div>
                <div className={cn("text-xs leading-5 line-clamp-2", active===z.id?"text-zinc-300":"text-zinc-600")}>{z.desc}</div>
              </button>
            ))}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 p-[1px]">
              <div className="rounded-2xl bg-white p-4 flex items-center justify-between">
                <div><div className="text-sm font-bold text-zinc-900">Configure your system</div><div className="text-xs text-zinc-600">Solar calculator & smart finder</div></div>
                <a href="/calculator" className="rounded-full bg-zinc-900 text-white px-4 py-2 text-xs font-bold">CALCULATE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

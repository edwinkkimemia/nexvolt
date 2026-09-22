"use client"
import Link from "next/link"
import { useCart } from "@/store/cart"
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const nav = [
  { label:"Solar", href:"/solutions/solar", mega:true },
  { label:"Smart Home", href:"/smart-home", mega:true },
  { label:"Security", href:"/solutions/security", mega:true },
  { label:"Networking", href:"/solutions/networking", mega:true },
  { label:"Power", href:"/solutions/power", mega:true },
  { label:"Shop", href:"/shop", mega:true },
  { label:"Projects", href:"/projects" },
  { label:"Insights", href:"/blog" },
]

const solarMega = [
  { title:"Solar Systems", links:[{label:"Residential Solar", href:"/solutions/solar"}, {label:"Commercial Solar", href:"/solutions/solar"}, {label:"Hybrid Systems", href:"/solutions/solar"}, {label:"Off-grid Solar", href:"/solutions/solar"}] },
  { title:"Shop Solar", links:[{label:"Solar Panels", href:"/shop?category=Solar%20Panels"}, {label:"Inverters", href:"/shop?category=Inverters"}, {label:"Lithium Batteries", href:"/shop?category=Lithium%20Batteries"}] },
  { title:"Start Here", links:[{label:"Solar Calculator", href:"/calculator"}, {label:"Smart Finder", href:"/finder"}, {label:"Get Free Quote", href:"/quote"}] },
]

const smartHomeMega = [
  { title:"Smart Home", links:[{label:"Explore by Room", href:"/smart-home"}, {label:"Automation Scenes", href:"/smart-home"}, {label:"Voice & App Control", href:"/smart-home"}, {label:"Book a Demo", href:"/quote"}] },
  { title:"Shop Devices", links:[{label:"Smart Switches", href:"/shop?category=Smart%20Switches"}, {label:"Smart Locks", href:"/shop"}, {label:"Sensors", href:"/shop"}] },
  { title:"Start Here", links:[{label:"Experience Demo", href:"/smart-home"}, {label:"Smart Finder", href:"/finder"}, {label:"Get Free Quote", href:"/quote"}] },
]

const networkingMega = [
  { title:"Networking", links:[{label:"Enterprise Wi-Fi", href:"/solutions/networking"}, {label:"Structured Cabling", href:"/solutions/networking"}, {label:"Fiber Networking", href:"/solutions/networking"}, {label:"Routers & Switches", href:"/solutions/networking"}] },
  { title:"Shop Network", links:[{label:"Wi-Fi Equipment", href:"/shop?category=Wi-Fi%20Equipment"}, {label:"Routers & Switches", href:"/shop"}, {label:"Cabling", href:"/shop"}] },
  { title:"Start Here", links:[{label:"Free Network Design", href:"/quote"}, {label:"Smart Finder", href:"/finder"}, {label:"Contact Sales", href:"/contact"}] },
]

const powerMega = [
  { title:"Power & Battery", links:[{label:"Lithium Batteries", href:"/solutions/power"}, {label:"Hybrid Inverters", href:"/solutions/power"}, {label:"UPS Systems", href:"/solutions/power"}, {label:"Backup Power", href:"/solutions/power"}] },
  { title:"Shop Power", links:[{label:"Lithium Batteries", href:"/shop?category=Lithium%20Batteries"}, {label:"Inverters", href:"/shop?category=Inverters"}, {label:"View All", href:"/shop"}] },
  { title:"Start Here", links:[{label:"Size My Backup", href:"/calculator"}, {label:"Smart Finder", href:"/finder"}, {label:"Get Free Quote", href:"/quote"}] },
]

const securityMega = [
  { title:"CCTV & AI", links:[{label:"CCTV & IP Cameras", href:"/solutions/security/cctv"}, {label:"AI Surveillance", href:"/solutions/security/ai-surveillance"}, {label:"NVRs & Storage", href:"/solutions/security/cctv"}] },
  { title:"Entry & Access", links:[{label:"Access Control & Gate", href:"/solutions/security/access-control"}, {label:"Video Doorbells", href:"/solutions/security/video-doorbells"}, {label:"Electric Fence", href:"/solutions/security/access-control"}] },
  { title:"Detection & Monitoring", links:[{label:"Intruder Alarms", href:"/solutions/security/intruder-alarms"}, {label:"Motion Detection", href:"/solutions/security/remote-monitoring"}, {label:"Remote Monitoring", href:"/solutions/security/remote-monitoring"}] },
  { title:"Security Shop", links:[{label:"CCTV Cameras", href:"/shop?category=CCTV%20Cameras"}, {label:"Shop All Security", href:"/shop"}, {label:"Free Security Audit", href:"/quote"}] },
]

const shopMega = [
  { title:"Solar & Power", links:[{label:"Solar Panels", href:"/shop?category=Solar%20Panels"}, {label:"Inverters", href:"/shop?category=Inverters"}, {label:"Lithium Batteries", href:"/shop?category=Lithium%20Batteries"}, {label:"UPS Systems", href:"/shop"}] },
  { title:"Smart Home", links:[{label:"Smart Switches", href:"/shop?category=Smart%20Switches"}, {label:"Smart Locks", href:"/shop"}, {label:"Smart Lighting", href:"/shop"}, {label:"Sensors", href:"/shop"}] },
  { title:"Security", links:[{label:"CCTV Cameras", href:"/shop?category=CCTV%20Cameras"}, {label:"NVRs & DVRs", href:"/shop?category=CCTV%20Cameras"}, {label:"Access Control", href:"/shop"}, {label:"Electric Fence", href:"/shop"}] },
  { title:"Networking", links:[{label:"Wi-Fi Equipment", href:"/shop?category=Wi-Fi%20Equipment"}, {label:"Routers", href:"/shop"}, {label:"Switches", href:"/shop"}, {label:"Cabling", href:"/shop"}] },
]

const megaMenus: Record<string, any> = { Solar: solarMega, "Smart Home": smartHomeMega, Security: securityMega, Networking: networkingMega, Power: powerMega, Shop: shopMega }

export default function Header(){
  const count = useCart(s=>s.items.reduce((a,b)=>a+b.qty,0))
  const wishlist = useCart(s=>s.wishlist.length)
  const [open, setOpen]=useState(false)
  const [mega, setMega]=useState<string | null>(null)
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 flex h-[80px] items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center shrink-0" aria-label="NexVolt Technologies — home">
            <img src="/logo.png" alt="NexVolt Technologies" className="h-16 w-auto"/>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(n=>(
              <div key={n.label} onMouseEnter={()=>n.mega && setMega(n.label)} onMouseLeave={()=>setMega(null)} className="relative">
                <Link href={n.href} className="flex items-center gap-1 px-3 py-2 text-[12.5px] tracking-wide font-semibold text-zinc-700 hover:text-zinc-900 transition">
                  {n.label} {n.mega && <ChevronDown className="h-3 w-3 opacity-60"/>}
                </Link>
                {mega===n.label && (()=>{
                  const menu = (megaMenus[n.label] || []) as any[]
                  const wide = menu.length >= 4
                  return (
                  <div className="absolute left-0 top-full pt-2">
                    <div className={`rounded-2xl p-6 grid gap-6 shadow-2xl border border-zinc-200 bg-white ${wide ? "w-[760px] grid-cols-4" : "w-[560px] grid-cols-3"}`}>
                      {menu.map((col:any)=>(
                        <div key={col.title}>
                          <div className="text-[11px] font-bold tracking-widest text-sky-600 mb-2">{col.title.toUpperCase()}</div>
                          <ul className="space-y-1.5">
                            {col.links.map((l:any)=>{
                              const label = typeof l==="string"? l : l.label
                              const href = typeof l==="string"? "/shop" : l.href
                              return <li key={label}><Link href={href} className="text-sm text-zinc-600 hover:text-zinc-900">{label}</Link></li>
                            })}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-full mt-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 p-[1px]">
                        <div className="rounded-xl bg-zinc-50 p-3 flex items-center justify-between">
                          <span className="text-sm font-medium text-zinc-800">Need a complete system? Get 12% off this week</span>
                          <Link href="/quote" className="text-xs font-bold tracking-widest bg-zinc-900 text-white px-4 py-2 rounded-full">REQUEST QUOTE</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })()}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden md:flex items-center gap-1">
            <Link href="/search" className="h-9 w-9 grid place-items-center rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700"><Search className="h-4 w-4"/></Link>
            <Link href="/account" className="h-9 w-9 grid place-items-center rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700"><User className="h-4 w-4"/></Link>
            <Link href="/wishlist" className="relative h-9 w-9 grid place-items-center rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700">
              <Heart className="h-4 w-4"/>{wishlist>0 && <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 grid place-items-center rounded-full bg-sky-500 text-white text-[10px] font-bold">{wishlist}</span>}
            </Link>
            <Link href="/cart" className="relative h-9 w-9 grid place-items-center rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700">
              <ShoppingCart className="h-4 w-4"/>{count>0 && <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 grid place-items-center rounded-full bg-zinc-900 text-white text-[10px] font-bold">{count}</span>}
            </Link>
          </div>
          <Link href="/quote" className="hidden sm:inline-flex h-9 px-5 items-center rounded-full bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold tracking-widest shadow-[0_0_20px_rgba(14,165,233,0.3)] ml-1">REQUEST QUOTE</Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden h-9 w-9 grid place-items-center rounded-full bg-zinc-900 text-white"><Menu className={cn("h-4 w-4", open && "hidden")}/><X className={cn("h-4 w-4", !open && "hidden")}/></button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-zinc-200 bg-white p-4 space-y-2">
          {nav.map(n=><Link key={n.label} href={n.href} className="block py-2 text-sm text-zinc-700 font-medium">{n.label}</Link>)}
          <div className="pt-2 border-t border-zinc-100 mt-2 space-y-2">
            <Link href="/contact" className="block py-1 text-sm text-zinc-500">Contact</Link>
            <Link href="/about" className="block py-1 text-sm text-zinc-500">About</Link>
          </div>
          <div className="flex gap-2 pt-2">
            <Link href="/cart" className="flex-1 h-10 grid place-items-center rounded-full bg-zinc-900 text-white text-sm font-bold">Cart ({count})</Link>
            <Link href="/quote" className="flex-1 h-10 grid place-items-center rounded-full bg-sky-500 text-white text-sm font-bold">Quote</Link>
          </div>
        </div>
      )}
    </header>
  )
}

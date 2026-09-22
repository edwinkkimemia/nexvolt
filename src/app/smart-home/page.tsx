"use client"
import { useState } from "react"
import Link from "next/link"

const rooms = {
  "Living Room": { items: ["Smart lighting","Smart curtains","TV automation","Air conditioning","Voice control","Motion sensors","Scene automation"], img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" },
  "Bedroom": { items: ["Dimmable lights","Smart blinds","Climate control","Wake-up scene","Wireless charger"], img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800" },
  "Kitchen": { items: ["Under-cabinet lights","Smart sockets","Appliance control","Leak sensor"], img:"https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800" },
  "Home Office": { items: ["Ergonomic lighting","Smart desk","Presence automation","Network priority"], img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" },
  "Outdoor": { items: ["Garden lights","Perimeter CCTV","Gate automation","Irrigation"], img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" },
  "Gate": { items: ["Vehicle detection","Intercom","Electric fence link"], img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" },
}
const scenes = [
  { name:"Good Morning", desc:"Curtains open, lights 30%, AC 24°C, news on TV", img:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600" },
  { name:"Movie Mode", desc:"Lights dim, curtains close, soundbar on", img:"https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600" },
  { name:"Away Mode", desc:"All off, alarm armed, cameras notify", img:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600" },
  { name:"Night Mode", desc:"Hallway 10%, doors locked, motion lights", img:"https://images.unsplash.com/photo-1493809842364-78817add58d1?w=600" },
  { name:"Vacation Mode", desc:"Random lights, CCTV cloud, gate alerts", img:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600" },
  { name:"Welcome Home", desc:"Gate opens, porch lights, AC on arrival", img:"https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600" },
]

export default function SmartHomePage(){
  const [room,setRoom]=useState<keyof typeof rooms>("Living Room")
  const [scene,setScene]=useState("Movie Mode")
  const current = rooms[room]
  const activeScene = scenes.find(s=>s.name===scene) || scenes[1]
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400" alt="Smart home" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-10">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><span className="text-zinc-900 font-semibold">Smart Home</span></nav>
          <div className="text-[11px] tracking-[0.2em] font-bold text-violet-600">SMART HOME EXPERIENCE • ONE APP</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-2 text-zinc-900">Explore by room. Automate by scene.</h1>
          <p className="text-sm text-zinc-600 mt-2 max-w-2xl">See every room come alive — tap a room, see its devices. Then trigger a scene. Real installs, real images.</p>
          <div className="mt-5 flex gap-3"><Link href="/quote" className="h-11 px-7 rounded-full bg-sky-500 text-white font-bold inline-flex items-center justify-center">Book Demo @ Showroom</Link><Link href="/shop" className="h-11 px-7 rounded-full bg-zinc-900 text-white font-bold inline-flex items-center justify-center">Shop Devices</Link></div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-[280px_1fr] gap-6">
        <div className="space-y-2">
          <div className="text-xs font-bold tracking-widest text-zinc-500 mb-2">ROOMS</div>
          {Object.keys(rooms).map(r=>{
            const isActive = room===r
            const img = rooms[r as keyof typeof rooms].img
            return (
              <button key={r} onClick={()=>setRoom(r as any)} className={`w-full text-left rounded-xl overflow-hidden border flex items-center gap-3 ${isActive?'bg-zinc-900 text-white border-zinc-900 shadow':'bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-900'}`}>
                <img src={img} alt={r} className="h-14 w-16 object-cover flex-shrink-0"/>
                <span className="font-semibold text-sm px-2 py-3 flex-1">{r}</span>
                {isActive && <span className="mr-3 h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/>}
              </button>
            )
          })}
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 mt-4">
            <div className="text-xs font-bold text-amber-800">TAP A ROOM → SEE DEVICES + IMAGE</div>
            <div className="text-xs text-amber-700 mt-1">Each room shows real devices for Kenyan homes.</div>
          </div>
        </div>
        <div>
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
            <div className="relative h-64 overflow-hidden">
              <img src={current.img} alt={room} className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
              <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 text-xs font-black tracking-widest text-zinc-900">{room.toUpperCase()}</div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-zinc-800">{current.items.length} devices</div>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold text-zinc-900">{room} — Smart Devices</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {current.items.map(d=>(
                  <div key={d} className="rounded-xl bg-zinc-50 border border-zinc-200 p-3 text-sm font-medium flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500 flex-shrink-0"/> {d}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <Link href="/quote" className="h-9 px-5 rounded-full bg-sky-500 text-white font-bold text-sm inline-flex items-center justify-center">Quote for {room}</Link>
                <Link href="/shop" className="h-9 px-5 rounded-full border border-zinc-300 bg-white font-bold text-sm inline-flex items-center justify-center">Shop {room}</Link>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-zinc-900">Preset automation — tap a scene, see it</h3>
            <p className="text-sm text-zinc-600 mt-1">Each scene has its own image and device choreography.</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {scenes.map(s=>{
                const isActive = scene===s.name
                return (
                  <button key={s.name} onClick={()=>setScene(s.name)} className={`rounded-2xl border overflow-hidden text-left transition ${isActive?'border-zinc-900 shadow-lg':'border-zinc-200 hover:shadow'}`}>
                    <div className="relative h-28 overflow-hidden">
                      <img src={s.img} alt={s.name} className="h-full w-full object-cover"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
                      <div className={`absolute top-2 left-2 rounded-full px-2 py-1 text-[10px] font-black tracking-widest ${isActive?'bg-zinc-900 text-white':'bg-white text-zinc-800'}`}>{s.name.toUpperCase()}</div>
                    </div>
                    <div className={`p-3 ${isActive?'bg-zinc-900 text-white':'bg-white'}`}>
                      <div className="font-bold text-sm">{s.name}</div><div className={`text-xs mt-1 ${isActive?'text-zinc-300':'text-zinc-600'}`}>{s.desc}</div>
                    </div>
                  </button>
                )
              })}
            </div>
            <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 flex items-center gap-4">
              <img src={activeScene.img} alt={activeScene.name} className="h-16 w-20 object-cover rounded-lg flex-shrink-0"/>
              <div><div className="font-bold text-sm">Active: {activeScene.name}</div><div className="text-sm text-zinc-600 mt-1">{activeScene.desc} — triggers across all rooms.</div></div>
              <Link href="/quote" className="ml-auto h-8 px-4 rounded-full bg-sky-500 text-white font-bold text-xs inline-flex items-center justify-center flex-shrink-0">Try This Scene</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1280px] px-6 py-6">
          <h3 className="font-bold text-zinc-900">Related Products — Smart Home</h3>
          <p className="text-sm text-zinc-600 mt-1">Switches, locks, sensors, curtains — all Tuya/Matter, @nexvolttechke stock</p>
          <div className="mt-4 flex gap-2"><Link href="/shop" className="h-9 px-5 rounded-full bg-zinc-900 text-white font-bold text-sm inline-flex items-center justify-center">Shop Smart Home →</Link><a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20smart%20home%20order" target="_blank" className="h-9 px-5 rounded-full bg-[#25D366] text-white font-bold text-sm inline-flex items-center justify-center">Order via WhatsApp</a></div>
        </div>
      </div>
    </div>
  )
}

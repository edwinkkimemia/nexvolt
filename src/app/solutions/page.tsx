import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata = { title:"Solutions — Solar, Smart Home, Security, Networking, EV Kenya | NexVolt", description:"All NexVolt solutions Kenya: solar, battery, smart home, CCTV, access, networking, BMS, EV, support. 9 systems, one ecosystem, 72hr install." }
const groups = [
  { title:"Solar Energy Systems", desc:"Cut KPLC 70% — residential to industrial. From 3kW to 500kW.", img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600", items:["Residential Solar","Commercial Solar","Hybrid & Off-grid","Solar Water Heating"], href:"/solutions/solar", badge:"SAVE KES 24k/mo" },
  { title:"Battery & Power", desc:"LiFePO4 5–30kWh, hybrid inverters, UPS — 10ms switchover.", img:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600", items:["Lithium Batteries","Hybrid Inverters","UPS Systems","Power Management"], href:"/solutions/power", badge:"4–48H BACKUP" },
  { title:"Smart Home Automation", desc:"Tuya, voice, app — lighting, curtains, climate, scenes.", img:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600", items:["Smart Lighting","Smart Switches","Smart Curtains","Voice Control"], href:"/smart-home", badge:"ONE APP" },
  { title:"Smart Security", desc:"4K ColorVu + AI — person/vehicle alerts in 0.8s, NVR, cloud.", img:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600", items:["CCTV IP Cameras","AI Surveillance","Intruder Alarms","Remote Monitoring"], href:"/solutions/security", badge:"AI 24/7" },
  { title:"Access & Perimeter", desc:"Biometric, RFID, intercom, gate & electric fence — logged.", img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600", items:["Biometric Access","Gate Automation","Electric Fencing","Time Attendance"], href:"/solutions/security/access-control", badge:"SECURE" },
  { title:"Networking", desc:"Ubiquiti Wi-Fi 6, fiber, structured cabling — 300+ clients.", img:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", items:["Enterprise Wi-Fi","Structured Cabling","Fiber Networking","Routers & Switches"], href:"/solutions/networking", badge:"ZERO DEAD ZONES" },
  { title:"Building Automation", desc:"HVAC, lighting, energy monitoring — remote management.", img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", items:["Smart BMS","HVAC Integration","Energy Monitoring","Remote Management"], href:"/solutions/building", badge:"40% OPEX CUT" },
  { title:"Commercial & Industrial", desc:"One stack for offices, hotels, factories, farms — 12 industries.", img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600", items:["Offices & Hotels","Factories & Farms","Hospitals & Schools","Real Estate"], href:"/solutions/business", badge:"ENTERPRISE" },
  { title:"EV Charging", desc:"7kW home & 22kW commercial, OCPP, solar-linked, Type 2.", img:"https://images.unsplash.com/photo-1593941707882-a56bbc7c2e1b?w=600", items:["Home Chargers","Commercial Stations","Solar EV","OCPP"], href:"/solutions/ev", badge:"FREE SOLAR DRIVE" },
  { title:"Maintenance & Support", desc:"Preventive, cleaning, SLA, 24/7 remote — Nairobi-wide.", img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600", items:["Preventive Care","Solar Maintenance","CCTV Health","24/7 Support"], href:"/solutions/support", badge:"SLA" },
]

export default function SolutionsPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400" alt="Integrated solutions Kenya" className="h-full w-full object-cover opacity-12"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Solutions</span></nav>
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-bold tracking-widest text-sky-700">9 INTEGRATED SYSTEMS • ONE ECOSYSTEM</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Every system. One intelligent platform.</h1>
          <p className="text-sm text-zinc-600 mt-3 max-w-2xl">Solar, storage, smart home, security, networking, building automation & EV — engineered together. <span className="font-bold text-zinc-900">Installed in 72 hours. Price-beat guarantee.</span></p>
          <div className="mt-5 flex gap-3"><Link href="/quote" className="h-10 px-6 rounded-full bg-sky-500 text-white font-bold inline-flex items-center">Get Free Quote →</Link><Link href="/calculator" className="h-10 px-5 rounded-full border border-zinc-300 bg-white text-zinc-800 font-bold inline-flex items-center">Size My System</Link></div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map(g=>(
          <div key={g.title} className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col">
            <div className="relative h-40 overflow-hidden">
              <img src={g.img} alt={g.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
              <span className="absolute top-3 left-3 bg-white text-zinc-900 text-[10px] font-black tracking-widest px-2 py-1 rounded-full">{g.badge}</span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-zinc-900">{g.title}</h3>
              <p className="text-sm text-zinc-600 mt-1 leading-5">{g.desc}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                {g.items.map(i=><li key={i} className="flex gap-2"><span className="text-sky-500 mt-0.5">•</span> {i}</li>)}
              </ul>
              <Link href={g.href} className="mt-4 inline-flex h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold items-center justify-center hover:bg-black">EXPLORE {g.title.split(" ")[0].toUpperCase()} →</Link>
            </div>
          </div>
        ))}
      </div>
      <RelatedProducts
        categories={[]}
        title="Related Products — All Systems Shop"
        subtitle="Best sellers across solar, security, smart home, networking — @nexvolttechke stock. Add to Cart or Order via WhatsApp."
        guideHref="/finder"
        guideLabel="Smart Finder"
      />
    </div>
  )
}

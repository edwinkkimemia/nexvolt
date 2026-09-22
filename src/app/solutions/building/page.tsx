import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Smart Building Management Kenya | BMS, HVAC, Energy Monitoring | NexVolt", description:"Building automation Kenya: smart BMS, HVAC integration, lighting automation by DALI/KNX, energy monitoring per circuit, remote management for offices, hotels, schools."}
export default function BuildingPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400" alt="Smart building" className="h-full w-full object-cover opacity-20"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><span className="text-zinc-900 font-semibold">Building Automation</span></nav>
          <div className="inline-flex rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-black tracking-widest text-sky-700">BMS • HVAC • LIGHTING • ENERGY</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Smart Building Management — Cut OPEX 40%</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">KNX/DALI lighting, HVAC integration (VRF, split), energy monitoring per floor/circuit, remote dashboard, occupancy sensors, centralized control for hotels, offices, schools, hospitals.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Get BMS Quote</Link>
            <Link href="/projects/karen-villa-smart" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">See Case Study</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" alt="Lighting automation" className="h-36 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Lighting Automation</h3><p className="text-sm text-zinc-600 mt-2">DALI dimming, daylight harvesting, presence — save 35% lighting bill. Scenes: Meeting, Away, Night.</p></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" alt="HVAC integration" className="h-36 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">HVAC Integration</h3><p className="text-sm text-zinc-600 mt-2">VRF/split via Modbus/BACnet — per-room temp, schedule, occupancy off. App + BMS.</p></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600" alt="Energy monitoring" className="h-36 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Energy Monitoring</h3><p className="text-sm text-zinc-600 mt-2">CT clamps per circuit → solar vs grid vs battery vs floor load, KES & kWh, anomaly alerts.</p></div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-8">
        <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-900 text-white grid md:grid-cols-[1.2fr_0.8fr]">
          <div className="p-6">
            <h2 className="font-bold">Commercial Building — What you get</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
              <ul className="space-y-2"><li>• Central dashboard — lights, AC, energy, CCTV in one</li><li>• Remote management — facility manager controls 10 sites</li><li>• Energy per tenant — sub-metering + billing</li></ul>
              <ul className="space-y-2"><li>• Payback ~2.5 years via energy + manpower saved</li><li>• Hotels: keycard → room auto on/off</li><li>• Schools/offices: schedule + occupancy = 30% saving</li></ul>
            </div>
            <Link href="/quote" className="mt-6 inline-flex items-center justify-center h-10 px-6 rounded-full bg-white text-zinc-900 font-bold">Request BMS Assessment</Link>
          </div>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600" alt="Building dashboard" className="h-full w-full object-cover min-h-[240px]"/>
        </div>
      </div>
      <RelatedProducts
        categories={[]}
        title="Related Products — BMS Shop"
        subtitle="Energy meters, controllers, gateways — best sellers @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/blog/building-automation-kenya-bms"
        guideLabel="Read BMS Guide"
      />
    </div>
  )
}

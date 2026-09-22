import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Intruder Alarm Systems Kenya — PIR, Siren, App Arm | NexVolt", description:"Intruder alarms Kenya: PIR, door contacts, glass-break, outdoor siren, app/RFID arm. Triggers CCTV. Homes, shops, warehouses. From KES 45k."}
export default function IntruderAlarmsPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400" alt="Intruder alarms Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><Link href="/solutions/security" className="hover:text-zinc-900">Security</Link><span>›</span><span className="text-zinc-900 font-semibold">Alarms</span></nav>
          <div className="inline-flex rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-black tracking-widest text-amber-700">PIR • SIREN • GSM • APP ARM</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Intruder Alarms — Screams Before They Steal.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">PIR motion, door/window contacts, glass-break, outdoor solar siren, GSM + app arm/disarm. <span className="font-bold text-zinc-900">Triggers CCTV to record + push. From KES 45k.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Shop Alarm Kits</Link>
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Free Alarm Design</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20alarm" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp @nexvolttechke</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600" alt="Home alarm kit" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Home Kit — 4 PIR + Siren</h3><p className="text-sm text-zinc-600 mt-2">Panel + 4 PIR + 2 door contacts + outdoor solar siren + app. Arm Away/Night.</p><div className="mt-2 font-black">KES 45k installed</div></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600" alt="Shop warehouse alarm" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Shop/Warehouse — 12 Zones</h3><p className="text-sm text-zinc-600 mt-2">12 wired + wireless zones, 2 sirens, GSM dials 5 numbers, guard integration.</p><div className="mt-2 font-black">KES 120k</div></div>
        </div>
        <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col">
          <h3 className="font-bold">Alarm → CCTV → Phone</h3><p className="text-sm text-zinc-400 mt-2">Alarm trip auto-starts <Link href="/solutions/security/cctv" className="text-sky-400 underline">CCTV recording</Link> + <Link href="/solutions/security/remote-monitoring" className="text-sky-400 underline">push with clip</Link>.</p>
          <Link href="/solutions/security/remote-monitoring" className="mt-4 inline-flex h-10 px-5 rounded-full bg-white text-zinc-900 font-bold items-center justify-center">Remote Monitoring →</Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-8">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold text-zinc-900">Intruder Alarms — FAQ</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-zinc-700">
            <div><strong>False alarms from pets?</strong> Pet-immune PIR to 25kg. AI CCTV double-confirms human.</div>
            <div><strong>Blackout?</strong> 12hr battery + solar siren. Panel SMS on power loss.</div>
            <div><strong> Loud?</strong> 110dB outdoor — heard 200m. Plus silent panic to guard.</div>
            <div><strong>Rentals?</strong> Wireless kit — moves, no chasing walls.</div>
          </div>
        </div>
      </div>

      <RelatedProducts
        categories={["CCTV Cameras"]}
        title="Related Products — Alarm Shop"
        subtitle="Panels, PIRs, sirens, GSM — @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/solutions/security"
        guideLabel="All Security"
      />
    </div>
  )
}

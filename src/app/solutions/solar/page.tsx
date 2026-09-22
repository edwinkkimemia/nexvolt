import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata = {
  title:"Solar Energy Systems Kenya — Residential, Commercial, Hybrid, Off-Grid | NexVolt",
  description:"Solar installation Kenya: 3kW-500kW residential, commercial, industrial, hybrid & off-grid. JA/Jinko 550W, Deye/Growatt/Victron, Huawei Luna. From KES 890k, payback 2.8yrs, net metering."
}
export default function SolarPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400" alt="Solar panels Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><span className="text-zinc-900 font-semibold">Solar</span></nav>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-black tracking-widest text-amber-700">STOP PAYING KPLC — OWN YOUR POWER • 500+ INSTALLED</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Solar That Pays for Itself in 2.8 Years. Guaranteed.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">Residential 3–10kW, Commercial 20–500kW, Industrial & off-grid. Hybrid inverters (Deye, Growatt, Victron) + JA/Jinko 550W + Huawei Luna LiFePO4. Net metering, KPLC bill → KES 0. <span className="font-bold text-zinc-900">Free site survey this week (KES 15k value).</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white text-sm font-bold hover:bg-sky-600">GET FREE QUOTE →</Link>
            <Link href="/calculator" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white text-sm font-bold">SIZE MY SYSTEM</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20solar%20quote" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white text-sm font-bold">WhatsApp @nexvolttechke</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-zinc-600">
            <span className="bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1.5">✓ 500+ installed</span>
            <span className="bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1.5">✓ 25yr panel warranty</span>
            <span className="bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1.5">✓ Financing 1.5%/mo</span>
            <span className="bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1.5">✓ EPRA licensed</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        {[
          {title:"Residential 5kW Hybrid", price:"From KES 890,000", img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600", bullets:["5kW Deye + 5kWh Luna + 8×550W","Powers fridge, TV, lights, WiFi 8hrs","Save KES 14k/mo • Payback 3.2yrs"]},
          {title:"Commercial 30kW", price:"From KES 4.2M", img:"https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600", bullets:["30kWp + 20kWh + Net metering","Cut diesel 70% • KPLC → KES 18k","ROI 3.1yrs • Monitoring per circuit"]},
          {title:"Off-Grid Farm 50kW", price:"Custom Quote", img:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600", bullets:["Water pumping + cold storage","Zero KPLC • 48hr autonomy","24/7 remote monitoring"]},
        ].map(c=>(
          <div key={c.title} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
            <img src={c.img} alt={c.title} className="h-40 w-full object-cover"/>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-zinc-900">{c.title}</h3><div className="text-sm text-sky-600 font-bold mt-1">{c.price}</div>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">{c.bullets.map(b=><li key={b} className="flex gap-2"><span className="text-sky-500">•</span>{b}</li>)}</ul>
              <Link href="/quote" className="mt-4 inline-flex items-center justify-center h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold">REQUEST THIS SYSTEM →</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-8 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm grid md:grid-cols-2">
          <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600" alt="Hybrid inverter battery" className="h-full w-full object-cover min-h-[240px]"/>
          <div className="p-6">
            <h2 className="font-bold text-lg text-zinc-900">How sizing works — Nairobi example</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li>• 1kWp → ~4.5kWh/day in Nairobi (5 sun-hours)</li>
              <li>• 5kW home (1.8kWh/day) → 3.3kWp (6×550W) + 5kWh Luna</li>
              <li>• Inverter 1.25× peak load • Battery DoD 80%</li>
              <li>• Net metering: sell excess, KPLC credits bill</li>
            </ul>
            <Link href="/calculator" className="mt-4 inline-flex h-9 px-5 rounded-full bg-sky-500 text-white text-xs font-bold items-center justify-center">Try Solar Calculator</Link>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold text-zinc-900">Solar Installation Kenya — FAQ (SEO)</h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-700">
            <div><strong>How much is 5kW in Kenya?</strong> KES 890k–1.1M installed (Deye + Luna + 550W + labour). Saves KES 14–24k/mo.</div>
            <div><strong>Hybrid vs off-grid?</strong> Hybrid keeps KPLC + net metering. Off-grid needs 2× battery — costlier. Most pick hybrid.</div>
            <div><strong>Which panels?</strong> JA/Jinko 550W mono, 21.5%, 25yr linear. Avoid no-name 300W.</div>
            <div><strong>Areas?</strong> Nairobi, Kiambu, Machakos, Mombasa, Nakuru — survey in 24h, install 72h.</div>
          </div>
        </div>
      </div>

      <RelatedProducts
        categories={["Solar Panels", "Inverters", "Lithium Batteries"]}
        title="Related Products — Solar Shop"
        subtitle="Panels, hybrids, Luna batteries — in stock @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/blog/solar-installation-kenya-cost-2026"
        guideLabel="Read Cost Guide"
      />
    </div>
  )
}

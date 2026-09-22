import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"EV Charging Kenya — 7kW Home & 22kW Commercial | Solar-Linked OCPP | NexVolt", description:"EV charging stations Kenya: 7kW wallbox Type2 home & 22kW commercial OCPP, solar integration, dynamic load balancing. Installed in 1 day, payback with solar."}
export default function EVPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1593941707882-a56bbc7c2e1b?w=1400" alt="EV charging Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><span className="text-zinc-900 font-semibold">EV Charging</span></nav>
          <div className="inline-flex rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-black tracking-widest text-emerald-700">SOLAR → EV = FREE DRIVING • KENYA</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">EV Chargers — 7kW Home & 22kW Commercial, Solar-Linked.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">OCPP 1.6J, Type 2, dynamic load balancing, solar excess charging, RFID + app. Wallbox & pedestal. <span className="font-bold text-zinc-900">Charge 30km/hr (7kW) to 120km/hr (22kW). Install in 1 day. From KES 95k.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white text-sm font-bold hover:bg-black">Shop EV Chargers →</Link>
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white text-sm font-bold hover:bg-sky-600">Get Install Quote</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20EV%20charger%20quote" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white text-sm font-bold">Order via WhatsApp</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-zinc-600">
            <span className="bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1.5">✓ Licensed EPRA</span><span className="bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1.5">✓ KPLC notification</span><span className="bg-zinc-100 border border-zinc-200 rounded-full px-3 py-1.5">✓ 2-yr warranty</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1593941707882-a56bbc7c2e1b?w=600" alt="Home EV charger" className="h-44 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold text-zinc-900">Home 7kW Wallbox</h3><p className="text-sm text-zinc-600 mt-2">Single-phase, Type 2, app + RFID, solar excess mode. Full charge overnight. KES 95k + install.</p><ul className="mt-3 text-sm text-zinc-600 space-y-1"><li>• 7kW → ~45km per hr</li><li>• OCPP, Wi-Fi, load balancing</li><li>• Works with any solar hybrid</li></ul></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1593941707882-a56bbc7c2e1b?w=600" alt="Commercial EV charger" className="h-44 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold text-zinc-900">Commercial 22kW Dual</h3><p className="text-sm text-zinc-600 mt-2">3-phase, 2 guns, billing, OCPP backend, RFID cards for staff/guests.</p><ul className="mt-3 text-sm text-zinc-600 space-y-1"><li>• 22kW → ~120km per hr</li><li>• Revenue split, M-Pesa</li><li>• Hotels, malls, offices</li></ul></div>
        </div>
        <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col">
          <h3 className="font-bold">Solar-Powered EV</h3><p className="text-sm text-zinc-400 mt-2">5kW solar + 7kW charger = 80km/day free. Pays back fuel KES 28k/mo.</p>
          <div className="mt-4 rounded-xl bg-white/10 border border-white/10 p-3 text-sm"><strong className="text-white">ROI:</strong> Fuel KES 25k/mo → solar cost KES 8k/mo = <span className="text-emerald-400">Save KES 17k/mo</span></div>
          <Link href="/calculator" className="mt-6 inline-flex items-center justify-center h-10 px-5 rounded-full bg-white text-zinc-900 text-sm font-bold">Calculate My Saving</Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-10">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-display text-xl font-bold text-zinc-900">EV Charging Kenya — FAQ (SEO)</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-zinc-700">
            <div><strong>Do I need 3-phase for 7kW?</strong> No — single-phase 32A is enough. We assess your board.</div>
            <div><strong>Can I charge with solar?</strong> Yes — hybrid inverter excess → charger auto-starts, zero grid.</div>
            <div><strong>Payment for commercial?</strong> RFID + OCPP + M-Pesa/Pesapal split per kWh.</div>
            <div><strong>Where in Kenya?</strong> Nairobi, Kiambu, Mombasa, Kisumu, Nakuru — 1-day install.</div>
          </div>
          <div className="mt-6 flex gap-3"><Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Book Site Survey — KES 0 This Week</Link><Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full border border-zinc-300 bg-white font-bold text-zinc-800">View Prices</Link></div>
        </div>
      </div>
      <RelatedProducts
        categories={["EV Chargers"]}
        title="Related Products — EV Shop"
        subtitle="7kW wallbox, 22kW dual, Type 2 cables — in stock @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/blog/ev-charging-kenya-home-install"
        guideLabel="Read EV Guide"
      />
    </div>
  )
}

import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Battery & Power Backup Kenya — Lithium 5-30kWh, Hybrid, UPS | NexVolt", description:"Lithium batteries Kenya: Huawei Luna, Deye 5-15kWh LiFePO4, hybrid inverters, UPS. 4-48hr backup, 10ms switchover, solar-ready, 6000 cycles."}
export default function PowerPage(){
  return (
    <div className="bg-white">
      <div className="bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><span className="text-zinc-900 font-semibold">Power & Battery</span></nav>
          <div className="inline-flex rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-black tracking-widest text-emerald-700">NEVER BLACKOUT • 10MS SWITCH</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Lithium Battery & Power Backup — 4 to 48 Hours, Silent.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">Huawei LUNA2000, Deye/Growatt hybrids, LiFePO4 5–30kWh modular, 6000 cycles, BMS, UPS for servers, solar→battery→grid auto in 10ms. <span className="font-bold text-zinc-900">From KES 245k. Payback with solar in 3 years.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Shop Batteries</Link>
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Get Backup Quote</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20battery%20backup%20quote" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp Us @nexvolttechke</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600" alt="Lithium battery" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Luna 5kWh Modular → 15kWh</h3><p className="text-sm text-zinc-600 mt-2">LiFePO4, 6000 cycles, wall-mount, app SOC. Stack to 30kWh. Powers 2BR overnight.</p><div className="mt-3 font-black text-lg">From KES 245k</div><Link href="/shop" className="mt-3 inline-flex h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold items-center justify-center">View in Shop →</Link></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600" alt="Hybrid inverter" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Deye 5kW Hybrid (MPPT Wi-Fi)</h3><p className="text-sm text-zinc-600 mt-2">Parallel up to 6, net metering, generator port, 2 MPPT. The workhorse.</p><div className="mt-3 font-black text-lg">KES 129.9k</div></div>
        </div>
        <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col">
          <h3 className="font-bold">UPS for Server & Clinic</h3><p className="text-sm text-zinc-400 mt-2">Online double-conversion, pure sine, zero transfer time for servers, lab, ICU.</p>
          <div className="mt-4 bg-white/10 border border-white/10 rounded-xl p-3 text-sm"><strong>Rule:</strong> Battery kWh = Load kW × Hours ÷ 0.85. <Link href="/calculator" className="text-sky-400 underline">Calculate</Link></div>
          <Link href="/quote" className="mt-6 inline-flex h-10 px-5 rounded-full bg-white text-zinc-900 font-bold items-center justify-center">Size My Backup</Link>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 pb-8 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold text-zinc-900">How to size correctly (SEO)</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>• List all loads (fridge 150W + lights 100W + WiFi 20W = 270W)</li>
            <li>• Backup 8h → 2.16kWh → need 5kWh (DoD 80% + margin)</li>
            <li>• Inverter 1.5× load → 270W → 1kW min, choose 3kW for growth</li>
            <li>• Solar: 3kW panels recharges 5kWh in 4 sun-hours</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="font-bold">Complete the hybrid set</h3>
          <p className="text-sm text-zinc-600 mt-1">Panels + inverter + Luna below — sized in the calculator.</p>
          <div className="mt-4 flex gap-2"><Link href="/calculator" className="flex-1 h-10 rounded-full bg-sky-500 text-white grid place-items-center font-bold">Size Mine</Link><Link href="/quote" className="flex-1 h-10 rounded-full border border-zinc-300 grid place-items-center font-bold">Get Quote</Link></div>
        </div>
      </div>
      <RelatedProducts
        categories={["Lithium Batteries", "Inverters", "Solar Panels"]}
        title="Related Products — Power & Battery Shop"
        subtitle="Luna batteries, hybrids, panels — in stock @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/calculator"
        guideLabel="Size My Backup"
      />
    </div>
  )
}

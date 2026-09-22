import Link from "next/link"
export const metadata={title:"Terms & Conditions — NexVolt Technologies"}
export default function Terms(){
  return (
    <div className="bg-white">
      <div className="bg-white border-b border-zinc-200"><div className="mx-auto max-w-[800px] px-6 py-8"><nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Terms</span></nav><h1 className="font-display text-3xl font-black">Terms & Conditions</h1><p className="text-sm text-zinc-500 mt-1">NexVolt Technologies • Kenya • @nexvolttechke</p></div></div>
      <div className="mx-auto max-w-[800px] px-6 py-8 prose prose-zinc max-w-none text-[15px] leading-7 text-zinc-700">
        <h2>1. Quotes & Orders</h2><p>Quotes (NVQ-2026-XXXX) valid 14 days. Prices in KES, incl. VAT, excl. county fees. 50% deposit, balance on commissioning. Price-beat by 5% requires written same-kit quote.</p>
        <h2>2. Installation</h2><p>Licensed EPRA engineers, KPLC net metering filing, 72-hour install after deposit. Site must provide access, water, power. Delays due to weather/KPLC not liable.</p>
        <h2>3. Warranty</h2><p>See <Link href="/warranty" className="text-sky-600 underline">Warranty Policy</Link>: panels 25yr, inverter 5yr, Luna 10yr, workmanship 2yr.</p>
        <h2>4. WhatsApp Orders</h2><p>Orders via WhatsApp @nexvolttechke are confirmed only after proforma + deposit. No COD for custom systems.</p>
      </div>
    </div>
  )
}

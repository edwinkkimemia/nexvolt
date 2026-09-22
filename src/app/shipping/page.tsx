import Link from "next/link"
export const metadata={title:"Shipping & Delivery — Nairobi 24h, Nationwide 2-4 Days | NexVolt"}
export default function Shipping(){
  return (
    <div className="bg-white">
      <div className="bg-white border-b border-zinc-200"><div className="mx-auto max-w-[800px] px-6 py-8"><nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Shipping</span></nav><h1 className="font-display text-3xl font-black">Shipping & Delivery</h1></div></div>
      <div className="mx-auto max-w-[800px] px-6 py-8 prose prose-zinc text-[15px] leading-7 text-zinc-700">
        <h2>Rates (KES)</h2><ul><li>Nairobi: FREE over 50k, else 1,500 (24h)</li><li>Kiambu/Machakos: 2,500 (24-48h)</li><li>Nationwide: 2,500–4,500 (2-4 days) via Fargo/G4S</li><li>Bulky (panels, batteries): dedicated pickup, quoted</li></ul>
        <h2>Install vs Ship</h2><p>Shop price is supply-only. Add installation: engineer survey free this week, install in 72h. Order via WhatsApp @nexvolttechke for combined quote.</p>
        <h2>Tracking</h2><p>SMS + WhatsApp tracking link. Pay on delivery available for Nairobi stock items (not custom).</p>
      </div>
    </div>
  )
}

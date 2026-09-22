import Link from "next/link"
export const metadata={title:"Returns & Refunds — 7-Day Return | NexVolt"}
export default function Returns(){
  return (
    <div className="bg-white">
      <div className="bg-white border-b border-zinc-200"><div className="mx-auto max-w-[800px] px-6 py-8"><nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Returns</span></nav><h1 className="font-display text-3xl font-black">Returns & Refunds</h1></div></div>
      <div className="mx-auto max-w-[800px] px-6 py-8 prose prose-zinc text-[15px] leading-7 text-zinc-700">
        <h2>7-Day Return</h2><p>Unopened, sealed in original box — 7 days, 10% restocking. Opened/electrical (panels, batteries, inverters) return only if warranty defect.</p>
        <h2>Process</h2><p>WhatsApp @nexvolttechke with order + photo. Pickup in Nairobi, ship back upcountry at customer cost. Refund 5 business days via M-Pesa/bank.</p>
        <h2>Not returnable</h2><p>Custom cut cable, configured NVRs, installed systems. Warranty claim instead — see <Link href="/warranty" className="text-sky-600 underline">Warranty</Link>.</p>
      </div>
    </div>
  )
}

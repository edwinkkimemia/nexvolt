import Link from "next/link"
export const metadata={title:"Warranty Policy — 25yr Panels, 10yr Luna, 2yr Workmanship | NexVolt"}
export default function Warranty(){
  return (
    <div className="bg-white">
      <div className="bg-white border-b border-zinc-200"><div className="mx-auto max-w-[800px] px-6 py-8"><nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Warranty</span></nav><h1 className="font-display text-3xl font-black">Warranty Policy</h1><p className="text-sm text-zinc-500 mt-1">Nairobi • @nexvolttechke • Last updated Sep 2026</p></div></div>
      <div className="mx-auto max-w-[800px] px-6 py-8 prose prose-zinc max-w-none text-[15px] leading-7 text-zinc-700">
        <h2>Coverage</h2>
        <table className="w-full text-sm border border-zinc-200"><thead><tr className="bg-zinc-50"><th className="p-2 text-left">Item</th><th className="p-2 text-left">Warranty</th></tr></thead><tbody>
          <tr><td className="p-2 border-t">JA/Jinko 550W panels</td><td className="p-2 border-t font-bold">25yr linear (80% at yr25), 12yr product</td></tr>
          <tr><td className="p-2 border-t">Deye/Growatt/Victron hybrid</td><td className="p-2 border-t font-bold">5yr (extendable to 10yr)</td></tr>
          <tr><td className="p-2 border-t">Huawei Luna LiFePO4</td><td className="p-2 border-t font-bold">10yr / 6000 cycles</td></tr>
          <tr><td className="p-2 border-t">Hikvision/Dahua CCTV</td><td className="p-2 border-t font-bold">2yr</td></tr>
          <tr><td className="p-2 border-t">Ubiquiti/TP-Link</td><td className="p-2 border-t font-bold">1–2yr</td></tr>
          <tr><td className="p-2 border-t">Workmanship (NexVolt)</td><td className="p-2 border-t font-bold">2yr</td></tr>
        </tbody></table>
        <h2 className="mt-6">Exclusions</h2><p>Lightning without proper earthing, misuse, unauthorized mods, dust/shade not cleaned. Maintenance plan keeps warranty valid.</p>
        <h2>Claim</h2><p>WhatsApp @nexvolttechke with NVQ + photo/video. On-site in 48h Nairobi, 72h upcountry.</p>
      </div>
    </div>
  )
}

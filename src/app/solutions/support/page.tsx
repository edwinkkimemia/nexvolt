import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Maintenance & Support Kenya — Solar, CCTV, Network SLA | NexVolt", description:"Maintenance Kenya: preventive solar cleaning, CCTV health checks, network uptime, smart home support, SLA, 24/7 remote monitoring."}
export default function SupportPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400" alt="Support" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><span className="text-zinc-900 font-semibold">Support</span></nav>
          <h1 className="font-display text-3xl lg:text-4xl font-black text-zinc-900">Maintenance & Support — SLA That Actually Answers</h1>
          <p className="text-sm text-zinc-600 mt-3 max-w-2xl">Preventive care for solar, batteries, CCTV, networks, smart home. <span className="font-bold text-zinc-900">Remote monitoring 24/7 • On-site in 24h • Nairobi, Kiambu, nationwide.</span></p>
          <div className="mt-6 flex gap-3"><Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Get SLA Quote</Link><Link href="/contact" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Report Issue</Link></div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600" alt="Solar maintenance" className="h-36 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Solar Maintenance</h3><p className="text-sm text-zinc-600 mt-2">Panel cleaning, MPPT check, battery health, yield vs expected — quarterly. Keep 25yr warranty.</p></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600" alt="CCTV maintenance" className="h-36 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">CCTV & Network</h3><p className="text-sm text-zinc-600 mt-2">NVR health, lens clean, Wi-Fi heatmap, switch PoE, backup — zero blind spots.</p></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600" alt="Smart home support" className="h-36 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Smart Home</h3><p className="text-sm text-zinc-600 mt-2">Scene repair, firmware, device replace, app retrain — scenes stay flawless.</p></div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 pb-8">
        <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col md:flex-row items-center gap-6">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300" alt="Support team" className="h-24 w-32 object-cover rounded-xl flex-shrink-0"/>
          <div><div className="font-bold">Packages from KES 4,500/mo home • KES 18k/mo enterprise</div><div className="text-sm text-zinc-400 mt-1">Includes remote 24/7 + 2 on-site/year + WhatsApp @nexvolttechke priority.</div></div>
          <Link href="/quote" className="ml-auto h-10 px-6 rounded-full bg-white text-zinc-900 font-bold inline-flex items-center justify-center flex-shrink-0">See SLA →</Link>
        </div>
      </div>
      <RelatedProducts
        categories={[]}
        title="Related Products — Spares & SLA"
        subtitle="Cleaning kits, HDDs, replacement sensors — maintain warranty @nexvolttechke."
      />
    </div>
  )
}

import Link from "next/link"
export const metadata={title:"About NexVolt Technologies — Licensed Engineers, 500+ Sites Kenya", description:"About NexVolt: Nairobi HQ, EPRA licensed, 500+ solar, smart home, CCTV installs. Engineering team, values, process."}
export default function AboutPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400" alt="Engineering team" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-10">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">About</span></nav>
          <h1 className="font-display text-4xl font-black text-zinc-900">We don’t sell panels. We engineer ecosystems.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">NexVolt Technologies — Nairobi HQ, EPRA licensed, 500+ installations, 98.7% uptime. From Karen villas to Westlands towers, farms to factories: one intelligent platform for energy, security, automation, networking.</p>
          <div className="mt-6 flex gap-3"><Link href="/projects" className="h-11 px-7 rounded-full bg-zinc-900 text-white font-bold inline-flex items-center justify-center">See Projects →</Link><Link href="/quote" className="h-11 px-7 rounded-full bg-sky-500 text-white font-bold inline-flex items-center justify-center">Work With Us</Link></div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" alt="NexVolt engineers" className="h-48 w-full object-cover"/>
            <div className="p-6 bg-zinc-50"><h2 className="font-bold text-lg">Our DNA</h2><p className="text-sm text-zinc-700 mt-2 leading-6">Tesla-grade experience, Schneider-grade reliability, Kenyan现场 engineering. No pushy sales — just load audit, single-line diagram, Fluke-tested cabling, and app training. We beat any Tier-1 quote by 5%.</p><ul className="mt-3 space-y-1.5 text-sm text-zinc-700"><li>✓ EPRA licensed • 2-yr workmanship warranty • 25-yr panel</li><li>✓ Tier-1 partners: Victron, Huawei, Deye, JA, Hikvision, Ubiquiti</li><li>✓ Follow @nexvolttechke for daily installs</li></ul></div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-2xl font-black">500+</div><div className="text-xs tracking-widest text-zinc-400">SITES</div></div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4 text-center"><div className="text-2xl font-black">4.9★</div><div className="text-xs tracking-widest text-zinc-500">127 REVIEWS</div></div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4 text-center"><div className="text-2xl font-black">24h</div><div className="text-xs tracking-widest text-zinc-500">SUPPORT SLA</div></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" alt="Installation" className="h-40 w-full object-cover"/>
            <div className="p-6">
              <h3 className="font-bold">How we work — 4 steps, 72 hours</h3>
              <ol className="mt-4 space-y-3 text-sm text-zinc-700 list-decimal list-inside">
                <li><strong>Survey (Day 0):</strong> Roof, DB, load, shade — FREE report (KES 15k value)</li>
                <li><strong>Design & paper:</strong> Net metering, county, safety, single-line diagram</li>
                <li><strong>Install (Day 1-2):</strong> Panels, inverter, battery, CCTV, Wi-Fi — licensed team</li>
                <li><strong>Commission:</strong> Apps, dashboard, scenes, training, 2-yr warranty</li>
              </ol>
              <div className="mt-6 flex gap-2"><Link href="/quote" className="flex-1 h-10 rounded-full bg-sky-500 text-white font-bold grid place-items-center">Request Quote</Link><a href="https://wa.me/254700000000" target="_blank" className="flex-1 h-10 rounded-full bg-[#25D366] text-white font-bold grid place-items-center">WhatsApp @nexvolttechke</a></div>
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300" alt="Office" className="h-16 w-20 object-cover rounded-lg"/>
            <div className="text-sm"><div className="font-bold">Nairobi HQ — Nationwide</div><div className="text-zinc-600">Karen, Westlands, Kiambu, Machakos • @nexvolttechke</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

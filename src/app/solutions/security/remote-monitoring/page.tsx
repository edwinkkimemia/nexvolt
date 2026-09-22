import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Remote Monitoring Kenya — Phone App, Cloud, Motion Alerts | NexVolt", description:"Remote monitoring Kenya: Hik-Connect/DMSS live + playback, motion zones, cloud backup, guard alerts. Watch home/shop from anywhere."}
export default function RemoteMonitoringPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400" alt="Remote monitoring Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><Link href="/solutions/security" className="hover:text-zinc-900">Security</Link><span>›</span><span className="text-zinc-900 font-semibold">Monitoring</span></nav>
          <div className="inline-flex rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-black tracking-widest text-emerald-700">APP • CLOUD • MOTION ZONES • GUARD</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Remote Monitoring — Watch Home/Shop From Anywhere.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">Hik-Connect/DMSS live + 7-day playback, smart motion zones, cloud backup, guard + owner push. <span className="font-bold text-zinc-900">Setup + training included. Works on Safaricom/Airtel 4G.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Shop Cloud + 4G</Link>
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Setup My App</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20monitoring" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp @nexvolttechke</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600" alt="Phone app setup" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">App Setup + Training</h3><p className="text-sm text-zinc-600 mt-2">Live, playback, clip download, 5 family/staff accounts, 2-tap playback training.</p><div className="mt-2 font-black">Included with install</div></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600" alt="Motion zones cloud" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Motion Zones + Cloud</h3><p className="text-sm text-zinc-600 mt-2">Gate-only zones (ignore road), cloud backup for evidence even if NVR stolen.</p><div className="mt-2 font-black">From KES 2k/mo</div></div>
        </div>
        <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col">
          <h3 className="font-bold">Needs cameras first</h3><p className="text-sm text-zinc-400 mt-2">Start with <Link href="/solutions/security/cctv" className="text-sky-400 underline">CCTV</Link> + <Link href="/solutions/security/ai-surveillance" className="text-sky-400 underline">AI</Link>, then add monitoring.</p>
          <Link href="/solutions/security/cctv" className="mt-4 inline-flex h-10 px-5 rounded-full bg-white text-zinc-900 font-bold items-center justify-center">CCTV Kits →</Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-8">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold text-zinc-900">Remote Monitoring — FAQ</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-zinc-700">
            <div><strong>Data usage?</strong> Live ~2GB/hr (4MP). Playback on Wi-Fi advised. 4G router with Faiba/Safaricom.</div>
            <div><strong>Many sites?</strong> Yes — one app, Nairobi home + Nakuru farm + shop. Guard gets limited view.</div>
            <div><strong>Without power?</strong> UPS keeps NVR + router 4hrs. Solar keeps 24/7.</div>
            <div><strong>Evidence?</strong> Clip + cloud link admissible. We help with OB/police.</div>
          </div>
        </div>
      </div>

      <RelatedProducts
        categories={["Wi-Fi Equipment", "CCTV Cameras"]}
        title="Related Products — Monitoring Shop"
        subtitle="4G routers, UPS, cloud plans — @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/solutions/security"
        guideLabel="All Security"
      />
    </div>
  )
}

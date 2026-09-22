import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"AI Surveillance Kenya — Person/Vehicle Detection, 0.8s Alerts | NexVolt", description:"AI CCTV Kenya: Hikvision AcuSense, Dahua WizSense person/vehicle filter, 0.8s push, siren + strobe. Cuts false alerts 95%. Nairobi install."}
export default function AISurveillancePage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=1400" alt="AI surveillance Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><Link href="/solutions/security" className="hover:text-zinc-900">Security</Link><span>›</span><span className="text-zinc-900 font-semibold">AI Surveillance</span></nav>
          <div className="inline-flex rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-black tracking-widest text-red-700">ACUSENSE • WIZSENSE • 0.8s PUSH</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">AI Surveillance — Humans Only. No Dog Alerts.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">Hikvision AcuSense / Dahua WizSense classifies person/vehicle, ignores dogs, leaves, shadows, rain. <span className="font-bold text-zinc-900">0.8s phone push + siren + strobe. Cuts false alerts 95%.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Shop AI Cameras</Link>
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Free AI Demo</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20AI%20surveillance" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp @nexvolttechke</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600" alt="AcuSense vs WizSense" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">AcuSense vs WizSense</h3><p className="text-sm text-zinc-600 mt-2">We demo both side-by-side. Hikvision leads low-light, Dahua leads price. Both do person/vehicle.</p></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600" alt="Smart search" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Smart Search — Find Human in Seconds</h3><p className="text-sm text-zinc-600 mt-2">Filter 7-day footage by person/vehicle only. No scrubbing hours of leaves.</p></div>
        </div>
        <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col">
          <h3 className="font-bold">Pair with alarms</h3><p className="text-sm text-zinc-400 mt-2">AI person → triggers <Link href="/solutions/security/intruder-alarms" className="text-sky-400 underline">intruder siren</Link> + <Link href="/solutions/security/remote-monitoring" className="text-sky-400 underline">remote push</Link>. Full loop.</p>
          <Link href="/solutions/security/cctv" className="mt-4 inline-flex h-10 px-5 rounded-full bg-white text-zinc-900 font-bold items-center justify-center">Start with CCTV →</Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-8">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold text-zinc-900">AI Surveillance — FAQ</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-zinc-700">
            <div><strong>Does AI need internet?</strong> No — detection runs on camera/NVR. Internet only for phone push.</div>
            <div><strong>Will it catch number plates?</strong> Yes with 4MP+ at gate + ANPR mode. We align angle on survey.</div>
            <div><strong>Upgrade old CCTV?</strong> Yes — swap 2 key cams to AI + AI NVR, keep rest.</div>
            <div><strong>Cost?</strong> AI adds ~KES 4k per cam vs basic. Worth it — guard cost drops.</div>
          </div>
        </div>
      </div>

      <RelatedProducts
        categories={["CCTV Cameras"]}
        title="Related Products — AI Shop"
        subtitle="AI domes, AI NVRs — @nexvolttechke stock. Add to Cart or Order via WhatsApp."
        guideHref="/solutions/security"
        guideLabel="All Security"
      />
    </div>
  )
}

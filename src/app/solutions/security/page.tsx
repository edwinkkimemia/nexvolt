import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Smart Security Kenya — CCTV, AI, Alarms, Doorbells, Monitoring | NexVolt", description:"Security systems Kenya: CCTV IP cameras, AI surveillance, video doorbells, intruder alarms, motion detection, remote monitoring. Hikvision/Dahua. From KES 89k."}
export default function SecurityPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=1400" alt="Smart security Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><span className="text-zinc-900 font-semibold">Security</span></nav>
          <div className="inline-flex rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-black tracking-widest text-red-700">CCTV • AI • ALARMS • DOORBELLS • MONITORING</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Smart Security — CCTV, AI, Alarms, Doorbells & 24/7 Monitoring.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">Hikvision/Dahua IP PoE 4MP–8MP ColorVu, AI person/vehicle, NVRs/DVRs, video doorbells, intruder alarms, motion detection, remote app + cloud. <span className="font-bold text-zinc-900">From 4-cam home KES 89k installed. 0.8s AI alerts.</span> Need gates & biometrics? See <Link href="/solutions/security/access-control" className="text-sky-600 font-bold underline">Access & Perimeter →</Link></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Shop Security From KES 11.9k</Link>
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Free Security Audit</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20security%20quote" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp @nexvolttechke</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8">
        <h2 className="font-bold text-lg text-zinc-900">All security solutions — one ecosystem</h2>
        <p className="text-sm text-zinc-600 mt-1">Every layer works together: cameras see, alarms scream, doorbells talk, app notifies.</p>
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm flex flex-col">
            <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600" alt="CCTV IP cameras" className="h-36 w-full object-cover"/>
            <div className="p-5 flex flex-col flex-1"><h3 className="font-bold">CCTV & IP Cameras</h3><p className="text-sm text-zinc-600 mt-2 flex-1">4MP ColorVu color at night, 8MP 4K, PoE one-cable, IP67. Home 4-cam KES 89k, Business 16-cam KES 320k.</p><Link href="/solutions/security/cctv" className="mt-4 inline-flex h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold items-center justify-center">EXPLORE CCTV →</Link></div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm flex flex-col">
            <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600" alt="AI surveillance" className="h-36 w-full object-cover"/>
            <div className="p-5 flex flex-col flex-1"><h3 className="font-bold">AI Surveillance</h3><p className="text-sm text-zinc-600 mt-2 flex-1">AcuSense/WizSense person/vehicle only — dogs, leaves ignored. 0.8s push + siren + strobe.</p><Link href="/solutions/security/ai-surveillance" className="mt-4 inline-flex h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold items-center justify-center">EXPLORE AI →</Link></div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm flex flex-col">
            <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600" alt="Video doorbells" className="h-36 w-full object-cover"/>
            <div className="p-5 flex flex-col flex-1"><h3 className="font-bold">Video Doorbells & Intercom</h3><p className="text-sm text-zinc-600 mt-2 flex-1">2MP doorbell + 7-inch indoor screen, open gate from phone anywhere. From KES 28k installed.</p><Link href="/solutions/security/video-doorbells" className="mt-4 inline-flex h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold items-center justify-center">EXPLORE DOORBELLS →</Link></div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm flex flex-col">
            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600" alt="Intruder alarms" className="h-36 w-full object-cover"/>
            <div className="p-5 flex flex-col flex-1"><h3 className="font-bold">Intruder Alarm Systems</h3><p className="text-sm text-zinc-600 mt-2 flex-1">PIR + door contacts + glass-break + outdoor siren. Armed via app/RFID. Triggers CCTV recording.</p><Link href="/solutions/security/intruder-alarms" className="mt-4 inline-flex h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold items-center justify-center">EXPLORE ALARMS →</Link></div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm flex flex-col">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600" alt="Motion detection remote monitoring" className="h-36 w-full object-cover"/>
            <div className="p-5 flex flex-col flex-1"><h3 className="font-bold">Motion Detection + Remote Monitoring</h3><p className="text-sm text-zinc-600 mt-2 flex-1">Smart motion zones, Hik-Connect/DMSS live + playback + cloud backup. Guard + owner notified.</p><Link href="/solutions/security/remote-monitoring" className="mt-4 inline-flex h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold items-center justify-center">EXPLORE MONITORING →</Link></div>
          </div>
          <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col">
            <h3 className="font-bold">Need Access, Gates & Fence?</h3><p className="text-sm text-zinc-400 mt-2">Biometric, RFID, gate motors, electric fence — logged + CCTV-linked. Covered on our Access page.</p>
            <Link href="/solutions/security/access-control" className="mt-4 inline-flex items-center justify-center h-10 px-5 rounded-full bg-white text-zinc-900 text-sm font-bold">Access & Perimeter →</Link>
            <div className="mt-3 text-xs text-zinc-500">Hikvision AcuSense vs Dahua WizSense — we demo both. <Link href="/blog/cctv-installation-kenya-ip-vs-analog" className="text-sky-400 underline">Read comparison</Link></div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-8 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold text-zinc-900">Security Systems Kenya — FAQ (SEO)</h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-700">
            <div><strong>IP vs Analog?</strong> IP PoE — one cable power+data, 4K, AI. Analog is blurry, no AI.</div>
            <div><strong>Do alarms work without internet?</strong> Yes — local siren + GSM. App needs internet for push.</div>
            <div><strong>Video doorbell with gate?</strong> Yes — press doorbell → see visitor → open sliding gate from phone.</div>
            <div><strong>Storage?</strong> NVR 1TB ≈ 7 days (4 cams 4MP). Cloud optional for offsite evidence.</div>
            <div><strong>Areas?</strong> Nairobi, Kiambu, Machakos, Nationwide — licensed engineers, 2yr workmanship.</div>
          </div>
          <div className="mt-4"><Link href="/quote" className="inline-flex h-10 px-6 rounded-full bg-sky-500 text-white font-bold items-center justify-center">Book Free Audit</Link></div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800" alt="Security kits pricing" className="h-40 w-full object-cover"/>
          <div className="p-5">
            <h3 className="font-bold">Kits & pricing — installed</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li>• Home 4-cam ColorVu + 1TB — <strong>KES 89k</strong></li>
              <li>• Business 16-cam AI + alarm — <strong>KES 320k</strong></li>
              <li>• Doorbell + intercom add-on — <strong>from KES 28k</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <RelatedProducts
        categories={["CCTV Cameras"]}
        title="Related Products — Security Shop"
        subtitle="4MP ColorVu, NVRs/DVRs, doorbells, alarms — in stock @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/blog/cctv-installation-kenya-ip-vs-analog"
        guideLabel="Read CCTV Guide"
      />
    </div>
  )
}

import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"CCTV & IP Cameras Kenya — 4MP ColorVu, 4K, PoE | NexVolt", description:"CCTV IP cameras Kenya: Hikvision/Dahua 4MP ColorVu color at night, 8MP 4K, PoE, IP67, NVR/DVR. Home 4-cam KES 89k installed. Nairobi, Kiambu, nationwide."}
export default function CCTVPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=1400" alt="CCTV IP cameras Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><Link href="/solutions/security" className="hover:text-zinc-900">Security</Link><span>›</span><span className="text-zinc-900 font-semibold">CCTV</span></nav>
          <div className="inline-flex rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-black tracking-widest text-red-700">HIKVISION • DAHUA • COLORVU • PoE</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">CCTV & IP Cameras — 4MP ColorVu Sees Color at Night.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">Hikvision/Dahua IP PoE, 4MP ColorVu + 8MP 4K, one-cable power+data, IP67 dust/rain, NVR/DVR 1TB+. <span className="font-bold text-zinc-900">Home 4-cam KES 89k installed. 7-day playback. Phone viewing anywhere.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Shop Cameras From KES 11.9k</Link>
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Free CCTV Audit</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20CCTV%20quote" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp @nexvolttechke</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600" alt="Home 4-cam kit" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Home 4-Cam ColorVu Kit</h3><p className="text-sm text-zinc-600 mt-2">4× 4MP ColorVu + 4-ch NVR 1TB + PoE switch + 100m Cat6 + install. Color night vision, phone app.</p><div className="mt-2 font-black">KES 89k installed</div></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600" alt="Business 16-cam" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Business 16-Cam 4K</h3><p className="text-sm text-zinc-600 mt-2">16× 6MP + 32-ch NVR 4TB + rack + backup UPS. Multi-site viewing for shops, schools, warehouses.</p><div className="mt-2 font-black">KES 320k</div></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600" alt="NVR DVR storage" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">NVRs, DVRs & Storage</h3><p className="text-sm text-zinc-600 mt-2">4/8/16/32-ch NVR, 1–8TB surveillance HDD, cloud backup. 1TB ≈ 7 days (4 cams 4MP).</p><div className="mt-2 font-black">From KES 18k</div></div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-8 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold text-zinc-900">CCTV Kenya — FAQ</h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-700">
            <div><strong>IP vs Analog?</strong> IP PoE — 4K, AI-ready, one cable. Analog is cheap but 2MP blurry, no AI.</div>
            <div><strong>ColorVu vs IR?</strong> ColorVu sees full color at night (white-light). IR is black-white. ColorVu wins for faces/plates.</div>
            <div><strong>How long stored?</strong> 1TB ≈ 7 days (4× 4MP). Add HDD or cloud for 30 days.</div>
            <div><strong>Next?</strong> Add <Link href="/solutions/security/ai-surveillance" className="text-sky-600 font-bold underline">AI Surveillance →</Link> to filter humans only.</div>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="font-bold">Why NexVolt CCTV?</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>• Certified Cat6 + Fluke test, IP67 sealing for Nairobi rain/dust</li>
            <li>• Hik-Connect/DMSS setup + training — playback in 2 taps</li>
            <li>• Links to <Link href="/solutions/security/intruder-alarms" className="text-sky-600 underline">alarms</Link> + <Link href="/solutions/security/remote-monitoring" className="text-sky-600 underline">remote monitoring</Link></li>
          </ul>
          <Link href="/quote" className="mt-4 inline-flex h-10 px-6 rounded-full bg-sky-500 text-white font-bold items-center justify-center">Book Free Audit</Link>
        </div>
      </div>

      <RelatedProducts
        categories={["CCTV Cameras"]}
        title="Related Products — CCTV Shop"
        subtitle="ColorVu domes/bullets, NVRs, HDDs, PoE — @nexvolttechke stock. Add to Cart or Order via WhatsApp."
        guideHref="/solutions/security"
        guideLabel="All Security"
      />
    </div>
  )
}

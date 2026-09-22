import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Smart Home Kenya — Lighting, Curtains, Locks, Voice | NexVolt", description:"Smart home Kenya: Tuya, Matter, voice Alexa/Google, app, scenes — smart lighting, curtains, locks, climate. One app for all rooms."}
export default function SmartHomeSolutions(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400" alt="Smart home" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><span className="text-zinc-900 font-semibold">Smart Home</span></nav>
          <div className="inline-flex rounded-full bg-violet-50 border border-violet-200 px-3 py-1 text-xs font-black tracking-widest text-violet-700">TUYA • MATTER • VOICE • APP</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Smart Home — One App, Every Room, Every Scene.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">Lighting, curtains, smart switches/sockets, locks, climate, sensors, scenes. Works with Alexa/Google, local control, no monthly fee. <span className="font-bold text-zinc-900">From KES 35k per room. Demo in our showroom.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/smart-home" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Experience Demo</Link>
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Shop Devices</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20smart%20home%20quote" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp @nexvolttechke</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        {[
          {t:"Living: Scene Master", d:"Curtains + lights + AC + TV — ‘Movie Mode’ one tap.", i:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600"},
          {t:"Security: Auto Arm", d:"Away mode → lights random, alarm armed, cameras notify.", i:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600"},
          {t:"Bedroom: Wake Gently", d:"6:30am curtains 30% + warm lights + AC off.", i:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600"},
        ].map(c=>(
          <div key={c.t} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
            <img src={c.i} alt={c.t} className="h-36 w-full object-cover"/><div className="p-5"><h3 className="font-bold text-sm">{c.t}</h3><p className="text-sm text-zinc-600 mt-1">{c.d}</p></div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-[1280px] px-6 pb-8">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold">Smart Home Kenya — FAQ</h2>
          <div className="mt-3 grid md:grid-cols-2 gap-4 text-sm text-zinc-700">
            <div><strong>Does it need internet?</strong> Local Zigbee/Wi-Fi mesh works offline. Cloud for remote.</div>
            <div><strong>Can I retrofit?</strong> Yes — replace switches/sockets, no rewiring.</div>
            <div><strong>Which brand?</strong> Tuya-compatible + Matter — choose later, one app.</div>
            <div><strong>Cost?</strong> 1BR smart ≈ KES 180k, 3BR ≈ KES 450k installed.</div>
          </div>
        </div>
      </div>
      <RelatedProducts
        categories={["Smart Switches"]}
        title="Related Products — Smart Home Shop"
        subtitle="Switches, curtains, locks, sensors — Tuya/Matter @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/smart-home"
        guideLabel="Try Room Demo"
      />
    </div>
  )
}

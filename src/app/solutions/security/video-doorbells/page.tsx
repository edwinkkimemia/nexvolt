import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Video Doorbells & Intercom Kenya — See & Open Gate by Phone | NexVolt", description:"Video doorbells Kenya: 2MP doorbell + 7-inch screen, open gate from phone, Hikvision intercom. From KES 28k installed. Nairobi."}
export default function VideoDoorbellsPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400" alt="Video doorbells Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><Link href="/solutions/security" className="hover:text-zinc-900">Security</Link><span>›</span><span className="text-zinc-900 font-semibold">Doorbells</span></nav>
          <div className="inline-flex rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-black tracking-widest text-sky-700">DOORBELL • INTERCOM • GATE OPEN</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Video Doorbells — See Visitor, Open Gate From Anywhere.</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">2MP doorbell + 7-inch indoor screen + phone app. Press → see + talk → open sliding gate. <span className="font-bold text-zinc-900">From KES 28k installed. Links to gate + CCTV.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Shop Doorbells</Link>
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Get Doorbell Quote</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20doorbell" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp @nexvolttechke</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600" alt="Villa doorbell kit" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Villa Kit — Doorbell + 7-inch Screen</h3><p className="text-sm text-zinc-600 mt-2">PoE doorbell, indoor monitor, phone app, gate relay. Answer from office.</p><div className="mt-2 font-black">KES 28k installed</div></div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600" alt="Apartment intercom" className="h-40 w-full object-cover"/>
          <div className="p-5"><h3 className="font-bold">Apartment Intercom — Multi-tenant</h3><p className="text-sm text-zinc-600 mt-2">Multi-button panel + per-flat screens, RFID fobs, management software.</p><div className="mt-2 font-black">Custom quote</div></div>
        </div>
        <div className="rounded-2xl bg-zinc-900 text-white p-6 flex flex-col">
          <h3 className="font-bold">Opens your gate too</h3><p className="text-sm text-zinc-400 mt-2">Doorbell relay → <Link href="/solutions/security/access-control" className="text-sky-400 underline">sliding gate motor</Link> + records on <Link href="/solutions/security/cctv" className="text-sky-400 underline">CCTV</Link>.</p>
          <Link href="/solutions/security/access-control" className="mt-4 inline-flex h-10 px-5 rounded-full bg-white text-zinc-900 font-bold items-center justify-center">Gate Automation →</Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-8">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold text-zinc-900">Video Doorbells — FAQ</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-zinc-700">
            <div><strong>Power?</strong> PoE or 12V + battery backup — works in blackout with UPS.</div>
            <div><strong>Without internet?</strong> Indoor screen works offline. Phone needs internet.</div>
            <div><strong>Rentals?</strong> Yes — battery Wi-Fi doorbell, no drilling, moves with you.</div>
            <div><strong>Gate link?</strong> Yes — any Italgate/relay gate. Tested on survey.</div>
          </div>
        </div>
      </div>

      <RelatedProducts
        categories={["CCTV Cameras"]}
        title="Related Products — Doorbell Shop"
        subtitle="Doorbells, screens, intercom panels — @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/solutions/security"
        guideLabel="All Security"
      />
    </div>
  )
}

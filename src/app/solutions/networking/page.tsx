import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Enterprise Wi-Fi & Structured Cabling Kenya | Ubiquiti, Fiber | NexVolt", description:"Networking Kenya: Ubiquiti UniFi Wi-Fi 6, structured cabling Cat6, fiber, cabinets, routers & switches. 300+ clients, zero dead zones. For hotels, schools, factories."}
export default function NetworkingPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400" alt="Enterprise Wi-Fi Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><span className="text-zinc-900 font-semibold">Networking</span></nav>
          <div className="inline-flex rounded-full bg-violet-50 border border-violet-200 px-3 py-1 text-xs font-black tracking-widest text-violet-700">ZERO DEAD ZONES • ENTERPRISE GRADE</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Enterprise Wi-Fi & Structured Cabling — Kenya</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">Ubiquiti UniFi 6 Pro, TP-Link Omada, Cat6/Cat6A, fiber backbone, 19-inch cabinets, PoE switches. <span className="font-bold text-zinc-900">From site survey in 24h. 1-yr support SLA. Hotels, schools, warehouses, apartments.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold hover:bg-sky-600">Get Free Network Design</Link>
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Shop Wi-Fi & Cabling</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20WiFi%20survey" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp Us</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-3 gap-5">
        {[
          {t:"Enterprise Wi-Fi 6", d:"UniFi U6-Pro, U6-LR — 4x4 MIMO, 300+ clients, seamless roaming.", img:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", href:"/shop"},
          {t:"Structured Cabling", d:"Cat6/6A, fiber, patch panels, testing & certification.", img:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", href:"/quote"},
          {t:"Routers, Switches, Cabinets", d:"PoE+, 10G, 19-inch floor/wall cabinets, UPS for network.", img:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", href:"/shop"},
        ].map(c=>(
          <div key={c.t} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
            <img src={c.img} alt={c.t} className="h-36 w-full object-cover"/>
            <div className="p-5"><h3 className="font-bold text-zinc-900">{c.t}</h3><p className="text-sm text-zinc-600 mt-2">{c.d}</p><Link href={c.href} className="mt-4 inline-flex h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold items-center justify-center">Learn more →</Link></div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-8 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold text-zinc-900">Why NexVolt networking?</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>• Heatmap survey — we simulate coverage before drilling.</li>
            <li>• Certified cabling — Fluke tested, 15-yr warranty.</li>
            <li>• Cloud controller — monitor APs, clients, bandwidth remotely.</li>
            <li>• Case: Sankara Hotel — 64 APs, 400 users, zero complaints.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="font-bold text-zinc-900">SEO: Networking Kenya — Pricing</h3>
          <table className="mt-3 w-full text-sm">
            <tbody>
              <tr className="border-b"><td className="py-2 text-zinc-500">Site survey</td><td className="py-2 font-bold">FREE this week (KES 10k value)</td></tr>
              <tr className="border-b"><td className="py-2 text-zinc-500">Wi-Fi per AP installed</td><td className="py-2 font-bold">From KES 28k (U6-Pro)</td></tr>
              <tr><td className="py-2 text-zinc-500">Cat6 point</td><td className="py-2 font-bold">From KES 6.5k certified</td></tr>
            </tbody>
          </table>
          <Link href="/quote" className="mt-4 inline-flex items-center justify-center h-10 px-6 rounded-full bg-sky-500 text-white font-bold">Request Quote</Link>
        </div>
      </div>
      <RelatedProducts
        categories={["Wi-Fi Equipment"]}
        title="Related Products — Networking Shop"
        subtitle="Ubiquiti U6-Pro, Cat6, fiber, PoE switches — in stock @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/blog/wifi-kenya-enterprise-ubiquiti"
        guideLabel="Read Wi-Fi Guide"
      />
    </div>
  )
}

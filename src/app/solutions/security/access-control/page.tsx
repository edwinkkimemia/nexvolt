import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Access Control & Gate Automation Kenya | Biometric, RFID, Electric Fence | NexVolt", description:"Access control Kenya: biometric fingerprint/face, RFID, intercom, time attendance, sliding gate motors, garage, electric fence with CCTV integration."}
export default function AccessControlPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400" alt="Access control Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><Link href="/solutions/security" className="hover:text-zinc-900">Security</Link><span>›</span><span className="text-zinc-900 font-semibold">Access & Gate</span></nav>
          <div className="inline-flex rounded-full bg-zinc-900 text-white px-3 py-1 text-xs font-black tracking-widest">BIOMETRIC • RFID • GATE • FENCE</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Access Control & Gate Automation — Kenya</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">ZKTeco biometric, Hikvision intercom, RFID cards, time attendance, sliding/swing gate motors (Italgate), garage, electric fence (JVA/Nemtek). Logs + mobile open + CCTV linked.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Secure My Gate — Free Audit</Link>
            <Link href="/shop" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-zinc-900 text-white font-bold">Shop Devices</Link>
            <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20gate%20automation" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp Quote</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {t:"Biometric Face/Fingerprint", d:"Fingerprint, face, palm — 3000 users, logs, anti-passback.", img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"},
          {t:"RFID & Intercom", d:"Cards, fobs, video intercom — open from phone anywhere.", img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"},
          {t:"Gate Automation", d:"Sliding 600-2000kg, swing, barrier, plate recognition.", img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"},
          {t:"Electric Fence & Perimeter", d:"8-strand, energizer, alarm → CCTV auto-records.", img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"},
        ].map(c=>(
          <div key={c.t} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
            <img src={c.img} alt={c.t} className="h-28 w-full object-cover"/>
            <div className="p-4"><h3 className="font-bold text-sm text-zinc-900">{c.t}</h3><p className="text-xs text-zinc-600 mt-1 leading-5">{c.d}</p></div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-10">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="font-bold text-zinc-900">Gate Automation Kenya — How it works (SEO)</h2>
          <ol className="mt-3 grid md:grid-cols-3 gap-4 text-sm text-zinc-700 list-decimal list-inside">
            <li>Site survey — gate weight, power, safety photocells</li>
            <li>Install motor + backup battery + access + intercom</li>
            <li>Test auto-close, obstacle reverse, app control</li>
          </ol>
          <div className="mt-4 text-sm text-zinc-600">Price: Sliding 600kg from KES 125k installed with battery backup. Electric fence from KES 1,800/m. <Link href="/quote" className="text-sky-600 font-bold underline">Get exact quote in 2hrs</Link></div>
        </div>
      </div>
      <RelatedProducts
        categories={["CCTV Cameras"]}
        title="Related Products — Access Shop"
        subtitle="Biometric readers, RFID kits, gate motors — in stock @nexvolttechke. Add to Cart or Order via WhatsApp."
        guideHref="/solutions/security"
        guideLabel="All Security"
      />
    </div>
  )
}

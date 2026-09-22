import Link from "next/link"
import ContactForm from "@/components/contact/ContactForm"
export const metadata = { title:"Contact NexVolt Kenya — Nairobi HQ, WhatsApp, Call | @nexvolttechke", description:"Contact NexVolt Technologies Nairobi: +254 700 000 000, WhatsApp @nexvolttechke, info@nexvolt.co.ke. Mon-Sat 8-6 EAT. Nationwide service." }

export default function ContactPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400" alt="NexVolt Nairobi office" className="h-full w-full object-cover opacity-12"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Contact</span></nav>
          <h1 className="font-display text-3xl font-black text-zinc-900">Contact NexVolt — Reply in 5 Minutes</h1>
          <p className="text-sm text-zinc-600 mt-2">Phone • WhatsApp @nexvolttechke • Email • Nairobi HQ • Nationwide. Mon–Sat 8am–6pm EAT.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="tel:+254700000000" className="h-10 px-5 rounded-full bg-zinc-900 text-white font-bold text-sm inline-flex items-center justify-center">Call 0700 000 000</a>
            <a href="https://wa.me/254700000000" target="_blank" className="h-10 px-5 rounded-full bg-[#25D366] text-white font-bold text-sm inline-flex items-center justify-center">WhatsApp Us</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" alt="Contact details" className="h-36 w-full object-cover"/>
            <div className="p-5"><div className="text-sm font-bold">Contact details (Nairobi HQ)</div><div className="mt-3 space-y-1 text-sm text-zinc-600"><div>📞 +254 700 000 000</div><div>💬 WhatsApp @nexvolttechke: +254 700 000 000</div><div>✉️ info@nexvolt.co.ke</div><div>🕒 Mon–Sat 8am–6pm EAT</div><div>📍 Nairobi, Kenya • Nairobi, Kiambu, Machakos, Nationwide</div></div></div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50"><div className="text-sm font-bold">Map — Nairobi HQ</div><div className="mt-3 h-48 rounded-xl bg-white border border-zinc-200 grid place-items-center text-xs text-zinc-500">Google Maps embed ready — configure API key via env • @nexvolttechke</div></div>
        </div>
        <ContactForm />
      </div>
      <div className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1280px] px-6 py-6">
          <h3 className="font-bold">Popular Right Now — Shop</h3>
          <p className="text-sm text-zinc-600 mt-1">Customers contacting us also order these @nexvolttechke.</p>
          <div className="mt-3 flex gap-2"><Link href="/shop" className="h-9 px-5 rounded-full bg-zinc-900 text-white text-sm font-bold inline-flex items-center justify-center">Shop →</Link><Link href="/quote" className="h-9 px-5 rounded-full bg-sky-500 text-white text-sm font-bold inline-flex items-center justify-center">Request Quote</Link></div>
        </div>
      </div>
    </div>
  )
}

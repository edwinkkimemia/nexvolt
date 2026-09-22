import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
export default function TopBar(){
  return (
    <div className="hidden lg:block bg-white border-b border-zinc-200 text-[12px] leading-none">
      <div className="mx-auto max-w-[1280px] px-6 h-9 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-zinc-600">
          <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-emerald-600"/> <a href="tel:+254700000000" className="hover:text-zinc-900 font-medium">+254 700 000 000</a></span>
          <span className="hidden xl:flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-sky-600"/> info@nexvolt.co.ke</span>
          <span className="hidden xl:flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-zinc-400"/> Nairobi • Nationwide</span>
          <span className="hidden 2xl:flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-zinc-400"/> Mon–Sat 8am–6pm EAT</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-emerald-700 font-bold tracking-wide">FREE SITE ASSESSMENT • FINANCING</span>
          <div className="hidden md:flex items-center gap-3 text-zinc-500">
            <Link href="/contact" className="hover:text-zinc-900">Contact</Link>
            <span className="text-zinc-300">•</span>
            <Link href="/about" className="hover:text-zinc-900">About</Link>
          </div>
          <Link href="/quote" className="hidden md:inline-flex h-6 px-3 items-center rounded-full bg-zinc-900 text-white font-bold tracking-widest text-[11px]">BOOK SURVEY</Link>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { blogPosts } from "@/lib/blogData"

export const metadata={title:"NexVolt Insights — Solar, Smart Home, Security Knowledge Centre Kenya", description:"20 SEO guides: solar installation Kenya, smart home, CCTV, batteries, networking — 500+ words, engineering by @nexvolttechke."}

export default function BlogPage(){
  const cats=["All","Solar Energy","Smart Homes","Security","Energy Storage","Technology","Installation Guides","Buying Guides","Product Comparisons","Networking","Power Backup"]
  return (
    <div className="bg-white">
      <div className="bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Insights</span></nav>
          <div className="text-[11px] tracking-[0.2em] font-bold text-sky-600">KNOWLEDGE CENTRE • @nexvolttechke</div>
          <h1 className="font-display text-3xl font-black mt-2 text-zinc-900">20 Engineering Guides — 500 Words, Zero Fluff.</h1>
          <p className="text-sm text-zinc-600 mt-2 max-w-2xl">Solar • Smart Home • CCTV • Batteries • Wi-Fi • EV — each guide is SEO-rich, Nairobi-priced, and tested on 500+ sites. Follow @nexvolttechke for drops.</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-6 grid lg:grid-cols-[1fr_320px] gap-8">
        <div>
          <div className="flex gap-2 overflow-auto pb-2 scrollbar-hide">
            {cats.map(c=><span key={c} className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold border whitespace-nowrap ${c==="All"?'bg-zinc-900 text-white border-zinc-900':'bg-white border-zinc-200 text-zinc-700'}`}>{c}</span>)}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {blogPosts.map(p=>(
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
                <img src={p.image} alt={p.title} className="h-44 w-full object-cover group-hover:scale-105 transition duration-500"/>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[11px] tracking-widest font-bold text-sky-600">{p.category.toUpperCase()} • {p.date}</div>
                  <h2 className="font-bold text-[16px] leading-5 mt-1 text-zinc-900 line-clamp-2">{p.title}</h2>
                  <p className="text-sm text-zinc-600 mt-2 line-clamp-2">{p.excerpt}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500"><span>{p.author}</span>•<span>5 min read</span>•<span className="text-sky-600 font-bold">Read →</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Sidebar */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="font-bold text-zinc-900">Follow @nexvolttechke</h3>
            <p className="text-sm text-zinc-600 mt-1">Tech drops, installs, pricing — X • LinkedIn • IG • YouTube</p>
            <div className="mt-3 flex gap-2 text-xs">
              <a href="https://instagram.com/nexvolttechke" target="_blank" aria-label="Instagram @nexvolttechke" className="flex-1 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white flex items-center justify-center gap-1 font-bold">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" stroke="none"/></svg>IG
              </a>
              <a href="https://x.com/nexvolttechke" target="_blank" aria-label="X @nexvolttechke" className="flex-1 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center gap-1 font-bold">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>X
              </a>
              <a href="https://youtube.com/@nexvolttechke" target="_blank" aria-label="YouTube @nexvolttechke" className="flex-1 h-8 rounded-full bg-red-600 text-white flex items-center justify-center gap-1 font-bold">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>YT
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="font-bold text-zinc-900">Popular • Related Products</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/shop" className="text-sky-600 hover:underline font-semibold">Jinko 550W — KES 16.9k</Link><div className="text-xs text-zinc-500">25yr warranty</div></li>
              <li><Link href="/shop" className="text-sky-600 hover:underline font-semibold">Deye 5kW Hybrid — KES 129.9k</Link></li>
              <li><Link href="/shop" className="text-sky-600 hover:underline font-semibold">Hikvision 4MP ColorVu — KES 11.9k</Link></li>
              <li><Link href="/shop" className="text-sky-600 hover:underline font-semibold">Ubiquiti U6 Pro — KES 28.5k</Link></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-900">Get Your Quote in 2 Hours</h3>
            <p className="text-sm text-amber-800 mt-1">Send KPLC bill on WhatsApp @nexvolttechke</p>
            <a href="https://wa.me/254700000000" target="_blank" className="mt-3 inline-flex h-9 px-4 rounded-full bg-[#25D366] text-white font-bold text-sm items-center justify-center">WhatsApp Us</a>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="font-bold text-zinc-900">Categories</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.map(p=>p.category))).map(c=>(
                <span key={c} className="text-xs bg-zinc-100 border border-zinc-200 rounded-full px-2.5 py-1">{c}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

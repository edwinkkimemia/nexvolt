import { blogPosts } from "@/lib/blogData"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/shop/ProductCard"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

function productCatsFor(post: { category: string; tags: string[]; slug: string }) {
  const hay = `${post.category} ${post.tags.join(" ")} ${post.slug}`.toLowerCase()
  const has = (...ks: string[]) => ks.some((k) => hay.includes(k))
  const cats: string[] = []
  const push = (...cs: string[]) => cs.forEach((c) => { if (!cats.includes(c)) cats.push(c) })
  if (has("cctv", "hikvision", "dahua", "camera", "surveillance", "alarm", "gate", "fence", "biometric", "access", "doorbell", "intercom", "nvr")) push("CCTV Cameras")
  if (has("wifi", "wi-fi", "ubiquiti", "network", "fiber", "fibre", "cabling", "omada")) push("Wi-Fi Equipment")
  if (has("ev-charg", "wallbox", "ocpp")) push("EV Chargers")
  if (has("lithium", "luna", "battery", "batteries", "storage", "backup", "ups")) push("Lithium Batteries", "Inverters")
  if (has("inverter", "deye", "growatt", "victron", "hybrid")) push("Inverters")
  if (has("solar", "panel", "jinko", "ja solar", "water heat")) push("Solar Panels", "Inverters")
  if (has("smart", "tuya", "lock", "matter", "alexa", "voice", "automation", "sensor", "scene", "blind")) push("Smart Switches")
  return cats
}

export async function generateStaticParams(){ return blogPosts.map(p=>({slug:p.slug})) }

export function generateMetadata({ params }:{params:{slug:string}}){
  const p = blogPosts.find(x=>x.slug===params.slug)
  if(!p) return {}
  return { title: p.seoTitle, description: p.seoDesc }
}

export default function BlogDetail({ params }:{params:{slug:string}}){
  const post = blogPosts.find(x=>x.slug===params.slug) ?? blogPosts[0]
  const sameCat = blogPosts.filter(x=>x.category===post.category && x.slug!==post.slug)
  const others = blogPosts.filter(x=>x.category!==post.category && x.slug!==post.slug)
  const related = [...sameCat, ...others].slice(0,3)
  const matchedCats = productCatsFor(post)
  const matched = products.filter(p => matchedCats.includes(p.category))
  const rest = products.filter(p => !matchedCats.includes(p.category))
  const relatedProducts = [...matched, ...rest].slice(0,2)
  return (
    <div className="bg-white">
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1280px] px-6 py-4 flex items-center gap-2 text-sm text-zinc-600">
          <Link href="/" className="hover:text-zinc-900">Home</Link> <ChevronRight className="h-3 w-3"/><Link href="/blog" className="hover:text-zinc-900">Insights</Link> <ChevronRight className="h-3 w-3"/><span className="text-zinc-900 font-semibold truncate">{post.title.slice(0,40)}…</span>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8 grid lg:grid-cols-[1fr_340px] gap-8">
        <article className="min-w-0">
          <div className="text-[11px] tracking-widest font-bold text-sky-600">{post.category.toUpperCase()} • {post.date} • 5 MIN READ</div>
          <h1 className="font-display text-2xl lg:text-3xl font-black mt-2 leading-tight text-zinc-900">{post.title}</h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-zinc-600"><span>{post.author}</span>•<span>@nexvolttechke</span>•<a href="https://wa.me/254700000000" target="_blank" className="text-[#25D366] font-bold">Share via WhatsApp</a></div>
          <img src={post.image} alt={post.title} className="mt-6 rounded-2xl w-full h-[380px] object-cover border border-zinc-200"/>
          <div className="prose prose-zinc max-w-none mt-6 text-[15px] leading-7 text-zinc-700" dangerouslySetInnerHTML={{__html: post.content}} />
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-zinc-900">Need this system? Get priced in 2 hours.</h3>
            <p className="text-sm text-zinc-700 mt-1">Send your KPLC bill + location on WhatsApp @nexvolttechke — engineer sizes system + price-beat guarantee.</p>
            <div className="mt-3 flex gap-2"><Link href="/quote" className="h-10 px-6 rounded-full bg-sky-500 text-white font-bold inline-flex items-center justify-center">Request Quote</Link><a href="https://wa.me/254700000000" target="_blank" className="h-10 px-6 rounded-full bg-[#25D366] text-white font-bold inline-flex items-center justify-center">WhatsApp Us</a></div>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-zinc-900">Related Articles</h3>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {related.map(r=>(
                <Link key={r.slug} href={`/blog/${r.slug}`} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
                  <img src={r.image} alt={r.title} className="h-28 w-full object-cover"/>
                  <div className="p-3"><div className="text-xs font-bold text-sky-600">{r.category.toUpperCase()}</div><div className="text-sm font-semibold line-clamp-2">{r.title}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 sticky top-24">
            <h3 className="font-bold">In this guide</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>• Why Kenya matters</li><li>• Technical checklist</li><li>• Costs & payback KES</li><li>• 72-hour install</li><li>• FAQ + next step</li>
            </ul>
            <div className="mt-5 rounded-xl bg-zinc-50 border border-zinc-200 p-3">
              <div className="text-sm font-bold">Follow @nexvolttechke</div><div className="text-xs text-zinc-600 mt-1">Daily installs, pricing drops & site tours</div>
              <div className="mt-2 flex gap-2">
                <a href="https://instagram.com/nexvolttechke" target="_blank" aria-label="Instagram @nexvolttechke" className="h-9 flex-1 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white flex items-center justify-center gap-1.5 text-xs font-bold">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" stroke="none"/></svg>IG
                </a>
                <a href="https://x.com/nexvolttechke" target="_blank" aria-label="X @nexvolttechke" className="h-9 flex-1 rounded-full bg-zinc-900 text-white flex items-center justify-center gap-1.5 text-xs font-bold">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>X
                </a>
                <a href="https://youtube.com/@nexvolttechke" target="_blank" aria-label="YouTube @nexvolttechke" className="h-9 flex-1 rounded-full bg-red-600 text-white flex items-center justify-center gap-1.5 text-xs font-bold">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>YT
                </a>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-sm">Related Products — for this guide</h4>
              <div className="mt-2 space-y-3">
                {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
                <a href="https://wa.me/254700000000" target="_blank" className="block rounded-xl bg-[#25D366] text-white p-3 text-center font-bold text-sm">Order via WhatsApp @nexvolttechke</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

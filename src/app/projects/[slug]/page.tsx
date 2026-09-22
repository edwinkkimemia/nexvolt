import { projectsMock } from "@/lib/data"
import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export async function generateStaticParams(){ return projectsMock.map(p=>({slug:p.slug})) }
const projectCats: Record<string, string[]> = {
  Residential: ["Solar Panels", "Lithium Batteries", "Inverters"],
  Commercial: ["CCTV Cameras", "Wi-Fi Equipment"],
  Industrial: ["Solar Panels", "Inverters", "Lithium Batteries"],
  "Smart Home": ["Smart Switches", "CCTV Cameras"],
  Security: ["CCTV Cameras"],
}
export default function ProjectDetail({ params }: { params:{slug:string}}){
  const p = projectsMock.find(x=>x.slug===params.slug) ?? projectsMock[0]
  const related = projectsMock.filter(x=>x.slug!==p.slug).slice(0,2)
  return (
    <div className="bg-white">
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1280px] px-6 py-3 flex items-center gap-2 text-sm text-zinc-600">
          <Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/projects" className="hover:text-zinc-900">Projects</Link><span>›</span><span className="text-zinc-900 font-semibold truncate">{p.title.slice(0,30)}…</span>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8">
        <div className="text-xs tracking-widest font-bold text-sky-600">{p.category} • {p.location}</div>
        <h1 className="font-display text-3xl font-black mt-2 text-zinc-900">{p.title}</h1>
        <p className="text-sm text-zinc-600 mt-2">{p.size} • Completed 2024 • Products: JA Solar, Deye, Hikvision • @nexvolttechke</p>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 pb-8 grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <img src={p.image} alt={p.title} className="rounded-2xl w-full h-[380px] object-cover border border-zinc-200"/>
          <div className="grid grid-cols-3 gap-2">
            <img src={p.image} alt="Before" className="rounded-xl h-24 w-full object-cover border border-zinc-200"/>
            <img src={p.image} alt="After" className="rounded-xl h-24 w-full object-cover border border-zinc-200"/>
            <img src={p.image} alt="Gallery" className="rounded-xl h-24 w-full object-cover border border-zinc-200"/>
          </div>
          <div className="text-xs text-zinc-500">Before / After / Gallery — swipe for full install photos</div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"><h3 className="font-bold">Project Story — Before → After</h3><p className="text-sm text-zinc-600 mt-2">Before: KPLC bills KES 45k/mo + blackouts + theft. After: 10kW solar + 10kWh Luna, 12 CCTV ColorVu, UniFi, gate automation — all monitored via app. Savings KES 38k/mo, uptime 99.9%.</p><ul className="mt-3 text-sm text-zinc-600 space-y-1"><li>• System size: {p.size}</li><li>• Savings: KES 38k/mo • Payback 3yrs</li><li>• Uptime: 99.9% • 2yr workmanship</li><li>• Products: JA 550W, Deye 5kW, Luna 10kWh, Hikvision</li></ul></div>
          <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold shadow-sm w-full">REPLICATE THIS PROJECT <span className="ml-1.5">→</span></Link>
          <a href="https://wa.me/254700000000?text=Jambo%20NexVolt%20—%20replicate%20project" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white text-sm font-bold w-full">Order via WhatsApp @nexvolttechke</a>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h4 className="font-bold text-sm">Related Products — Used Here</h4>
            <p className="text-xs text-zinc-600 mt-1">Shop exact kit from this install — Add to Cart or WhatsApp below.</p>
            <div className="mt-3 flex gap-2"><Link href="/shop" className="flex-1 h-9 rounded-full bg-zinc-900 text-white text-xs font-bold grid place-items-center">Shop Kit</Link><Link href="/projects" className="flex-1 h-9 rounded-full border border-zinc-300 bg-white text-xs font-bold grid place-items-center">All Projects</Link></div>
          </div>
          <div>
            <h4 className="font-bold text-sm">Related Projects</h4>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {related.map(r=>(
                <Link key={r.slug} href={`/projects/${r.slug}`} className="rounded-xl border border-zinc-200 overflow-hidden bg-white hover:shadow transition">
                  <img src={r.image} alt={r.title} className="h-20 w-full object-cover"/>
                  <div className="p-2 text-xs font-semibold line-clamp-2">{r.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts
        categories={projectCats[p.category] || []}
        title="Related Products — Used in This Project"
        subtitle={`${p.title} kit — in stock @nexvolttechke. Add to Cart or Order via WhatsApp.`}
        guideHref="/shop"
        guideLabel="Shop All"
      />
    </div>
  )
}

import { projectsMock } from "@/lib/data"
import Link from "next/link"
export const metadata = { title:"Projects Kenya — 500+ Solar, Smart Home, CCTV Installs | NexVolt", description:"NexVolt projects Kenya: Karen villa 10kW, Westlands tower 64 cams, Naivasha farm 30kW. Before/after, system size, products used." }
export default function ProjectsPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400" alt="Projects Kenya" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Projects</span></nav>
          <div className="text-[11px] tracking-[0.2em] font-bold text-sky-600">PROJECTS & INSTALLATIONS • 500+ SITES</div>
          <h1 className="font-display text-3xl font-black mt-1 text-zinc-900">Proof, not promises — Before/After</h1>
          <p className="text-sm text-zinc-600 mt-2 max-w-2xl">Karen villas, Westlands towers, farms. Each with system size, savings, products. Replicate any project.</p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-8">
        <div className="flex gap-2 text-xs overflow-auto"><span className="rounded-full bg-zinc-900 text-white px-3 py-1.5 whitespace-nowrap">All</span>{["Residential","Commercial","Industrial","Solar","Smart Home","Security"].map(c=><span key={c} className="rounded-full border border-zinc-200 px-3 py-1.5 whitespace-nowrap bg-white">{c}</span>)}</div>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {projectsMock.map((p)=>(
            <div key={p.slug} className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition">
              <img src={p.image} alt={p.title} className="h-48 w-full object-cover"/>
              <div className="p-4"><div className="text-xs tracking-widest font-bold text-sky-600">{p.category} • {p.location}</div><div className="font-bold mt-1 text-sm line-clamp-2">{p.title}</div><div className="text-xs text-zinc-500 mt-1">{p.size} • Before/After • JA Solar, Deye</div><Link href={`/projects/${p.slug}`} className="mt-3 inline-flex h-8 text-xs font-bold border border-zinc-200 rounded-full px-4 items-center justify-center hover:bg-zinc-50">VIEW PROJECT →</Link></div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1280px] px-6 py-6">
          <h3 className="font-bold">Related Products — Used in These Projects</h3>
          <p className="text-sm text-zinc-600 mt-1">Same JA 550W, Deye 5kW, Luna, ColorVu @nexvolttechke.</p>
          <div className="mt-3 flex gap-2"><Link href="/shop" className="h-9 px-5 rounded-full bg-zinc-900 text-white text-sm font-bold inline-flex items-center justify-center">Shop Project Kit →</Link><Link href="/quote" className="h-9 px-5 rounded-full bg-sky-500 text-white text-sm font-bold inline-flex items-center justify-center">Replicate a Project</Link></div>
        </div>
      </div>
    </div>
  )
}

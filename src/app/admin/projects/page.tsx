"use client"
import { useState } from "react"
import Link from "next/link"
import { projectsMock } from "@/lib/data"

export default function AdminProjects() {
  const [featured, setFeatured] = useState<string[]>([projectsMock[0].slug])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-black">Projects ({projectsMock.length})</h2>
        <span className="text-xs text-zinc-500">{featured.length} featured on homepage</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {projectsMock.map((p) => (
          <div key={p.slug} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
            <img src={p.image} alt={p.title} className="h-36 w-full object-cover" />
            <div className="p-4">
              <div className="text-[11px] tracking-widest text-sky-600 font-bold">{p.category.toUpperCase()} • {p.location}</div>
              <div className="font-bold text-sm mt-1 line-clamp-2">{p.title}</div>
              <div className="text-xs text-zinc-500 mt-1">{p.size}</div>
              <div className="mt-3 flex gap-2">
                <button onClick={() => setFeatured((f) => (f.includes(p.slug) ? f.filter((s) => s !== p.slug) : [...f, p.slug]))} className={`flex-1 h-8 rounded-full text-xs font-bold ${featured.includes(p.slug) ? "bg-amber-400 text-zinc-900" : "bg-zinc-100 text-zinc-600"}`}>{featured.includes(p.slug) ? "★ FEATURED" : "☆ Feature"}</button>
                <Link href={`/projects/${p.slug}`} className="flex-1 h-8 rounded-full border border-zinc-300 text-xs font-bold grid place-items-center">View Live →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-zinc-500">Featured flag maps to Project.isFeatured (homepage shows featured first). Images map to ProjectImage gallery.</p>
    </div>
  )
}

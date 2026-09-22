"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { blogPosts } from "@/lib/blogData"

export default function AdminBlog() {
  const [q, setQ] = useState("")
  const [posts, setPosts] = useState(blogPosts.map((p) => ({ ...p })))
  const [published, setPublished] = useState<string[]>(blogPosts.map((p) => p.slug))

  useEffect(() => {
    try {
      const drafts = JSON.parse(localStorage.getItem("nv-admin-draft-posts") || "[]")
      if (Array.isArray(drafts) && drafts.length) {
        const baseSlugs = new Set(blogPosts.map((p) => p.slug))
        const fresh = drafts.filter((d: { slug: string }) => d.slug && !baseSlugs.has(d.slug))
        const over = new Map(drafts.filter((d: { slug: string }) => d.slug && baseSlugs.has(d.slug)).map((d: { slug: string }) => [d.slug, d]))
        setPosts([...fresh, ...blogPosts.map((p) => (over.has(p.slug) ? { ...p, ...over.get(p.slug) } : { ...p }))])
        setPublished((s) => [...s, ...drafts.filter((d: { slug: string; published?: boolean }) => d.published).map((d: { slug: string }) => d.slug)])
      }
    } catch { /* storage unavailable */ }
  }, [])

  const list = posts.filter((p) => !q || `${p.title} ${p.category}`.toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-black">Blog Posts ({list.length})</h2>
        <div className="flex gap-2">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search posts…" className="h-10 rounded-full bg-white border border-zinc-300 px-4 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
          <Link href="/admin/blog/new" className="h-10 px-5 rounded-full bg-zinc-900 text-white text-sm font-bold inline-flex items-center justify-center whitespace-nowrap">+ New Post</Link>
        </div>
      </div>

      {list.map((p) => (
        <div key={p.slug} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm flex items-center gap-4">
          <img src={p.image} alt={p.title} className="h-14 w-20 object-cover rounded-xl shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[11px] tracking-widest text-sky-600 font-bold">{p.category.toUpperCase()} • {p.date}</div>
            <div className="font-bold text-sm truncate">{p.title}</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <Link href={`/admin/blog/${p.slug}/edit`} className="h-8 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold grid place-items-center">✎ Edit</Link>
            <button onClick={() => setPublished((s) => (s.includes(p.slug) ? s.filter((x) => x !== p.slug) : [...s, p.slug]))} className={`h-8 px-4 rounded-full text-xs font-bold ${published.includes(p.slug) ? "bg-emerald-500 text-white" : "bg-zinc-100 text-zinc-500"}`}>{published.includes(p.slug) ? "LIVE" : "DRAFT"}</button>
            <Link href={`/blog/${p.slug}`} className="h-8 px-4 rounded-full border border-zinc-300 text-xs font-bold grid place-items-center">View →</Link>
          </div>
        </div>
      ))}
      <p className="text-xs text-zinc-500">✎ Edit opens the dedicated editor (rich text + featured image upload) • toggle maps to isPublished. No inline editing.</p>
    </div>
  )
}

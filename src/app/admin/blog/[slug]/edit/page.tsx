"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { blogPosts } from "@/lib/blogData"
import RichEditor from "@/components/admin/RichEditor"
import ImageUpload from "@/components/admin/ImageUpload"

const cats = Array.from(new Set(blogPosts.map((p) => p.category)))

export default function EditBlogPost({ params }: { params: { slug: string } }) {
  const [loaded, setLoaded] = useState(false)
  const [missing, setMissing] = useState(false)
  const [draft, setDraft] = useState({ title: "", category: cats[0], excerpt: "", image: "", tags: "", content: "", published: true })
  const [error, setError] = useState("")
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("nv-admin-draft-posts") || "[]")
      const override = Array.isArray(stored) ? stored.find((d: { slug: string }) => d.slug === params.slug) : null
      const base = blogPosts.find((p) => p.slug === params.slug)
      const p = override || base
      if (!p) return setMissing(true)
      setDraft({
        title: p.title, category: p.category, excerpt: p.excerpt || "",
        image: p.image || "", tags: (p.tags || []).join(", "),
        content: p.content || "<p>Write the guide here…</p>",
        published: override ? !!override.published : true,
      })
    } catch { setMissing(true) }
    setLoaded(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (draft.title.trim().length < 5) return setError("Title needs 5+ characters.")
    const entry = {
      slug: params.slug, title: draft.title.trim(), excerpt: draft.excerpt.trim(),
      category: draft.category, tags: draft.tags.split(",").map((t) => t.trim()).filter(Boolean),
      author: "NexVolt Team", date: new Date().toISOString().slice(0, 10),
      image: draft.image || "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      content: draft.content,
      seoTitle: `${draft.title.trim()} | NexVolt`, seoDesc: draft.excerpt.trim().slice(0, 155),
      published: draft.published,
    }
    try {
      const prev = JSON.parse(localStorage.getItem("nv-admin-draft-posts") || "[]")
      const rest = Array.isArray(prev) ? prev.filter((d: { slug: string }) => d.slug !== params.slug) : []
      localStorage.setItem("nv-admin-draft-posts", JSON.stringify([...rest, entry]))
    } catch { return setError("Browser storage unavailable.") }
    // Production: PUT /api/admin/blog/[slug] → Prisma BlogPost.update
    setSaved(true)
  }

  if (!loaded) return <div className="text-sm text-zinc-500">Loading editor…</div>
  if (missing) return (<div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm">Post not found. <Link href="/admin/blog" className="font-bold underline">Back to posts →</Link></div>)

  return (
    <div className="space-y-4 max-w-[820px]">
      <div><Link href="/admin/blog" className="text-xs font-bold text-sky-600">← All Posts</Link><h2 className="font-display text-xl font-black mt-1">Edit Post</h2><p className="text-xs text-zinc-500 font-mono">/{params.slug}</p></div>
      <form onSubmit={save} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm space-y-4">
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">TITLE *</label><input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">CATEGORY</label><select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm bg-white">{cats.map((c) => <option key={c}>{c}</option>)}</select></div>
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">TAGS (comma separated)</label><input value={draft.tags} onChange={(e) => setDraft({ ...draft, tags: e.target.value })} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        </div>
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">EXCERPT</label><textarea value={draft.excerpt} onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })} className="mt-1 w-full rounded-xl border border-zinc-300 p-3 text-sm h-16 outline-none focus:border-zinc-900" /></div>
        <ImageUpload label="FEATURED IMAGE (upload or URL)" value={draft.image} onChange={(image) => { setDraft({ ...draft, image }); setSaved(false) }} />
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">CONTENT (rich text)</label><div className="mt-1"><RichEditor key={params.slug} value={draft.content} onChange={(content) => { setDraft((d) => ({ ...d, content })); setSaved(false) }} /></div></div>
        <label className="flex items-center gap-2 text-sm font-medium"><input type="checkbox" checked={draft.published} onChange={(e) => setDraft({ ...draft, published: e.target.checked })} className="h-4 w-4" /> Published (visible on site)</label>
        {error && <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
        <div className="flex items-center gap-2">
          <button className="h-11 px-7 rounded-full bg-zinc-900 text-white font-bold text-sm">Save Changes</button>
          <Link href={`/blog/${params.slug}`} className="h-11 px-6 rounded-full border border-zinc-300 text-sm font-bold inline-flex items-center justify-center">View Live →</Link>
          {saved && <span className="text-sm font-bold text-emerald-600">✓ Saved</span>}
        </div>
      </form>
    </div>
  )
}

"use client"
import { useState } from "react"
import Link from "next/link"
import { blogPosts } from "@/lib/blogData"
import { slugify } from "@/lib/utils"
import RichEditor from "@/components/admin/RichEditor"
import ImageUpload from "@/components/admin/ImageUpload"

const cats = Array.from(new Set(blogPosts.map((p) => p.category)))

export default function NewBlogPost() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState(cats[0])
  const [excerpt, setExcerpt] = useState("")
  const [cover, setCover] = useState("")
  const [tags, setTags] = useState("")
  const [content, setContent] = useState("<p>Write the guide here — use headings, lists and links from the toolbar.</p>")
  const [publish, setPublish] = useState(false)
  const [error, setError] = useState("")
  const [savedSlug, setSavedSlug] = useState<string | null>(null)

  const slug = slugify(title || "untitled")

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (title.trim().length < 10) return setError("Title needs 10+ characters for SEO.")
    if (excerpt.trim().length < 20) return setError("Excerpt needs 20+ characters.")
    const text = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
    if (text.split(" ").filter(Boolean).length < 50) return setError("Content is too thin — aim for 300+ words like other guides.")
    const draft = {
      slug: `${slug}-${Date.now().toString(36)}`,
      title: title.trim(),
      excerpt: excerpt.trim(),
      category,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      author: "NexVolt Team",
      date: new Date().toISOString().slice(0, 10),
      image: cover.trim() || "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      content,
      seoTitle: `${title.trim()} | NexVolt`,
      seoDesc: excerpt.trim().slice(0, 155),
      draft: true,
      published: publish,
    }
    try {
      const prev = JSON.parse(localStorage.getItem("nv-admin-draft-posts") || "[]")
      localStorage.setItem("nv-admin-draft-posts", JSON.stringify([...prev, draft]))
    } catch { return setError("Browser storage unavailable.") }
    // Production: POST to /api/admin/blog → Prisma BlogPost.create({ title, slug, content… })
    setSavedSlug(draft.slug)
  }

  if (savedSlug) return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center max-w-[560px]">
      <div className="text-xs tracking-widest font-bold text-emerald-700">POST SAVED {publish ? "• QUEUED TO PUBLISH" : "• DRAFT"}</div>
      <div className="text-xl font-black mt-2">“{title}”</div>
      <p className="text-sm text-zinc-600 mt-2">Slug: <span className="font-mono font-bold">{savedSlug}</span> — visible now in the posts list below. With PostgreSQL live it writes to BlogPost instead.</p>
      <div className="mt-4 flex gap-2 justify-center">
        <Link href="/admin/blog" className="h-10 px-6 rounded-full bg-zinc-900 text-white text-sm font-bold inline-flex items-center justify-center">All Posts →</Link>
        <button onClick={() => { setTitle(""); setExcerpt(""); setTags(""); setSavedSlug(null); setPublish(false) }} className="h-10 px-6 rounded-full bg-white border border-zinc-300 text-sm font-bold">Write Another</button>
      </div>
    </div>
  )

  return (
    <div className="space-y-4 max-w-[820px]">
      <div className="flex items-center justify-between">
        <div><Link href="/admin/blog" className="text-xs font-bold text-sky-600">← All Posts</Link><h2 className="font-display text-xl font-black mt-1">New Blog Post</h2></div>
        <span className="text-xs text-zinc-500 font-mono">/{slug}</span>
      </div>
      <form onSubmit={save} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm space-y-4">
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">TITLE * (10+ chars, SEO)</label><input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Solar Installation Kenya — Cost & Sizing 2026" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">CATEGORY</label><select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm bg-white">{cats.map((c) => <option key={c}>{c}</option>)}</select></div>
          <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">TAGS (comma separated)</label><input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="solar installation kenya, cost" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        </div>
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">EXCERPT * (20+ chars)</label><textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="One-line summary shown on cards and search…" className="mt-1 w-full rounded-xl border border-zinc-300 p-3 text-sm h-16 outline-none focus:border-zinc-900" /></div>
        <ImageUpload label="COVER IMAGE (upload or URL)" value={cover} onChange={setCover} />
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">CONTENT * (rich text, 50+ words min)</label><div className="mt-1"><RichEditor key="new-post" value={content} onChange={setContent} /></div></div>
        <label className="flex items-center gap-2 text-sm font-medium"><input type="checkbox" checked={publish} onChange={(e) => setPublish(e.target.checked)} className="h-4 w-4" /> Publish immediately (else saved as draft)</label>
        {error && <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
        <button className="h-11 px-7 rounded-full bg-zinc-900 text-white font-bold text-sm">Save Post</button>
      </form>
    </div>
  )
}

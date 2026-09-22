"use client"
import { useRef, useState } from "react"

export default function ImageUpload({ value, onChange, label = "IMAGE" }: { value: string; onChange: (url: string) => void; label?: string }) {
  const file = useRef<HTMLInputElement>(null)
  const [error, setError] = useState("")

  const pick = (f: File | undefined) => {
    setError("")
    if (!f) return
    if (!f.type.startsWith("image/")) return setError("Please choose an image file (JPG/PNG/WebP).")
    if (f.size > 2 * 1024 * 1024) return setError("Max 2MB — keeps browser storage fast. Compress first.")
    const r = new FileReader()
    r.onload = () => onChange(String(r.result))
    r.onerror = () => setError("Could not read file.")
    r.readAsDataURL(f)
  }

  return (
    <div>
      <label className="text-[11px] font-bold tracking-widest text-zinc-500">{label}</label>
      <div className="mt-1">
        {value
          ? <img src={value} alt="preview" className="h-32 w-full object-cover rounded-xl border border-zinc-200" />
          : <div className="h-28 rounded-xl border border-dashed border-zinc-300 grid place-items-center text-xs text-zinc-400">No image — upload or paste URL</div>}
        <div className="mt-2 flex gap-2">
          <button type="button" onClick={() => file.current?.click()} className="h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold whitespace-nowrap">Upload Image</button>
          <input ref={file} type="file" accept="image/*" className="hidden" onChange={(e) => pick(e.target.files?.[0])} />
          <input value={value.startsWith("data:") ? "" : value} onChange={(e) => onChange(e.target.value)} placeholder="…or paste image URL" className="flex-1 h-9 rounded-xl border border-zinc-300 px-3 text-xs outline-none focus:border-zinc-900" />
        </div>
        {error && <div className="mt-1 text-xs text-red-600">{error}</div>}
        <p className="mt-1 text-[11px] text-zinc-500">Uploads store locally for preview; production saves to object storage + ProductImage/BlogPost.coverImage.</p>
      </div>
    </div>
  )
}

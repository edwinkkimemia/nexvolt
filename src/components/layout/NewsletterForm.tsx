"use client"
import { useState } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<"idle" | "error" | "done">("idle")

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return setState("error")
    // POST /api/newsletter → Prisma Notification/subscriber + welcome email
    setState("done")
  }

  if (state === "done") return (
    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 font-semibold">
      ✓ Subscribed — tech drops &amp; system guides headed to {email}.
    </div>
  )

  return (
    <form onSubmit={subscribe} className="flex w-full md:w-auto gap-2">
      <input value={email} onChange={(e) => { setEmail(e.target.value); setState("idle") }} placeholder={state === "error" ? "Enter a valid email…" : "Email address"} className={`h-10 flex-1 md:w-72 rounded-full bg-white/5 border px-4 text-sm outline-none placeholder:text-zinc-500 text-white ${state === "error" ? "border-red-500" : "border-white/10 focus:border-sky-500/50"}`} />
      <button className="h-10 px-6 rounded-full bg-white text-black text-xs font-bold tracking-widest shrink-0">SUBSCRIBE</button>
    </form>
  )
}

"use client"
import { useState } from "react"
import { mockTickets } from "@/lib/mockAccount"

const pill: Record<string, string> = {
  Open: "bg-amber-50 text-amber-700",
  Answered: "bg-sky-50 text-sky-700",
  Closed: "bg-zinc-100 text-zinc-500",
}

export default function SupportPage() {
  const [tickets, setTickets] = useState(mockTickets)
  const [subject, setSubject] = useState("")
  const [desc, setDesc] = useState("")
  const [error, setError] = useState("")

  const open = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (subject.trim().length < 5) return setError("Give a short subject (5+ characters).")
    if (desc.trim().length < 10) return setError("Describe the issue (10+ characters).")
    setTickets((t) => [{ id: `T-${200 + t.length}`, subject: subject.trim(), date: "2026-09-22", status: "Open", messages: 1 }, ...t])
    setSubject("")
    setDesc("")
  }

  return (
    <div className="space-y-4 max-w-[640px]">
      <h2 className="font-display text-xl font-black">Support Tickets ({tickets.length})</h2>
      <form onSubmit={open} className="rounded-2xl border border-zinc-200 bg-white p-5">
        <h3 className="font-bold text-sm">Open a ticket</h3>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject — e.g. CCTV NVR offline" className="mt-3 w-full h-10 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" />
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Describe the issue, site location, best callback time…" className="mt-2 w-full rounded-xl border border-zinc-300 p-3 text-sm h-20 outline-none focus:border-zinc-900" />
        {error && <div className="mt-2 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
        <div className="mt-3 flex gap-2">
          <button className="h-10 px-6 rounded-full bg-zinc-900 text-white text-sm font-bold">Submit Ticket</button>
          <a href="https://wa.me/254700000000" target="_blank" className="h-10 px-6 rounded-full bg-[#25D366] text-white text-sm font-bold inline-flex items-center justify-center">Urgent? WhatsApp</a>
        </div>
      </form>
      {tickets.map((t) => (
        <div key={t.id} className="rounded-2xl border border-zinc-200 bg-white p-4 flex items-center justify-between gap-3">
          <div><div className="font-bold text-sm">{t.subject}</div><div className="text-xs text-zinc-500 mt-0.5">{t.id} • {t.date} • {t.messages} message(s)</div></div>
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${pill[t.status]}`}>{t.status.toUpperCase()}</span>
        </div>
      ))}
    </div>
  )
}

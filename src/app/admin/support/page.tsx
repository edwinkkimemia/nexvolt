"use client"
import { useState } from "react"
import { mockTickets } from "@/lib/mockAccount"

const next: Record<string, string> = { Open: "Answered", Answered: "Closed", Closed: "Open" }
const pill: Record<string, string> = {
  Open: "bg-amber-50 text-amber-700 border border-amber-200",
  Answered: "bg-sky-50 text-sky-700 border border-sky-200",
  Closed: "bg-zinc-100 text-zinc-500",
}

export default function AdminSupport() {
  const [list, setList] = useState(mockTickets)

  return (
    <div className="space-y-3 max-w-[680px]">
      <h2 className="font-display text-xl font-black">Support Tickets ({list.length})</h2>
      {list.map((t) => (
        <div key={t.id} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div><div className="font-bold text-sm">{t.subject}</div><div className="text-xs text-zinc-500 mt-0.5">{t.id} • {t.date} • {t.messages} message(s)</div></div>
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${pill[t.status]}`}>{t.status.toUpperCase()}</span>
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={() => setList((l) => l.map((x) => (x.id === t.id ? { ...x, status: next[x.status] as typeof x.status } : x)))} className="h-8 px-4 rounded-full bg-zinc-100 text-xs font-bold hover:bg-zinc-200">Move to {next[t.status].toUpperCase()}</button>
            <a href="https://wa.me/254700000000" target="_blank" className="h-8 px-4 rounded-full bg-[#25D366] text-white text-xs font-bold inline-flex items-center justify-center">Reply via WhatsApp</a>
          </div>
        </div>
      ))}
      <p className="text-xs text-zinc-500">Maps to SupportTicket model (status open → answered → closed, priority, user relation).</p>
    </div>
  )
}

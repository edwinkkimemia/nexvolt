"use client"
import { useState } from "react"
import { mockQuotes } from "@/lib/mockAccount"
import { formatKES } from "@/lib/utils"

const flow = ["New", "Reviewing", "Quoted", "Accepted"] as const
const pill: Record<string, string> = {
  New: "bg-zinc-100 text-zinc-600",
  Reviewing: "bg-amber-50 text-amber-700 border border-amber-200",
  Quoted: "bg-sky-50 text-sky-700 border border-sky-200",
  Accepted: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Rejected: "bg-red-50 text-red-600 border border-red-200",
}

export default function AdminQuotations() {
  const [list, setList] = useState(mockQuotes.map((q) => ({ ...q })))
  const advance = (ref: string) => setList((l) => l.map((q) => {
    if (q.ref !== ref) return q
    const i = flow.indexOf(q.status as (typeof flow)[number])
    return i >= 0 && i < flow.length - 1 ? { ...q, status: flow[i + 1] } : q
  }))

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-black">Quotations ({list.length})</h2>
      {list.map((q) => (
        <div key={q.ref} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div><span className="font-black">{q.ref}</span><span className="text-sm text-zinc-500 ml-2">{q.type} • {q.date}</span></div>
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${pill[q.status]}`}>{q.status.toUpperCase()}</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5">
            {flow.map((s, i) => {
              const reached = flow.indexOf(q.status as (typeof flow)[number]) >= i
              return <span key={s} className={`h-1.5 flex-1 rounded-full ${reached ? "bg-emerald-500" : "bg-zinc-100"}`} />
            })}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-black">{q.total ? formatKES(q.total) : <span className="text-sm text-zinc-500 font-medium">Awaiting pricing</span>}</span>
            <div className="flex gap-2">
              {q.status !== "Accepted" && <button onClick={() => advance(q.ref)} className="h-8 px-4 rounded-full bg-sky-500 text-white text-xs font-bold">Advance →</button>}
              <a href="https://wa.me/254700000000" target="_blank" className="h-8 px-4 rounded-full border border-zinc-300 text-xs font-bold inline-flex items-center justify-center">Message</a>
            </div>
          </div>
        </div>
      ))}
      <p className="text-xs text-zinc-500">Workflow maps to Quote.status (NEW → REVIEWING → QUOTED → ACCEPTED) + admin Notification on convert.</p>
    </div>
  )
}

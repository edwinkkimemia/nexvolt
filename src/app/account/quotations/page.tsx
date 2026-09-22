"use client"
import { useState } from "react"
import Link from "next/link"
import { mockQuotes } from "@/lib/mockAccount"
import { formatKES } from "@/lib/utils"

const pill: Record<string, string> = {
  New: "bg-zinc-100 text-zinc-600",
  Reviewing: "bg-amber-50 text-amber-700",
  Quoted: "bg-sky-50 text-sky-700",
  Accepted: "bg-emerald-50 text-emerald-700",
}

export default function QuotationsPage() {
  const [accepted, setAccepted] = useState<string[]>(mockQuotes.filter((q) => q.status === "Accepted").map((q) => q.ref))

  const accept = (ref: string) => {
    // PUT /api/quotes/[ref] → status ACCEPTED + convert to Order + notify engineer
    setAccepted((a) => (a.includes(ref) ? a : [...a, ref]))
  }

  return (
    <div className="space-y-3 max-w-[640px]">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-black">My Quotations ({mockQuotes.length})</h2>
        <Link href="/quote" className="h-9 px-4 rounded-full bg-sky-500 text-white text-xs font-bold inline-flex items-center justify-center">+ New Quote</Link>
      </div>
      {mockQuotes.map((q) => {
        const isAcc = accepted.includes(q.ref) || q.status === "Accepted"
        return (
          <div key={q.ref} className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div><div className="font-black">{q.ref}</div><div className="text-xs text-zinc-500 mt-0.5">{q.type} • {q.date}</div></div>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${pill[isAcc ? "Accepted" : q.status]}`}>{(isAcc ? "Accepted" : q.status).toUpperCase()}</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-black">{q.total ? formatKES(q.total) : <span className="text-sm font-medium text-zinc-500">Engineer pricing…</span>}</span>
              <div className="flex gap-2">
                {!isAcc && q.status === "Quoted" && <button onClick={() => accept(q.ref)} className="h-8 px-4 rounded-full bg-emerald-500 text-white text-xs font-bold">Accept Quote</button>}
                {isAcc && <Link href="/account/orders" className="h-8 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold inline-flex items-center justify-center">View Order →</Link>}
                <a href="https://wa.me/254700000000" target="_blank" className="h-8 px-4 rounded-full border border-zinc-200 text-xs font-bold inline-flex items-center justify-center">Discuss</a>
              </div>
            </div>
            {isAcc && q.status !== "Accepted" && <div className="mt-2 text-xs font-semibold text-emerald-700">✓ Accepted — engineer converts it to an order within 24h.</div>}
          </div>
        )
      })}
    </div>
  )
}

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
  return (
    <div className="space-y-3 max-w-[640px]">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-black">My Quotations ({mockQuotes.length})</h2>
        <Link href="/quote" className="h-9 px-4 rounded-full bg-sky-500 text-white text-xs font-bold inline-flex items-center justify-center">+ New Quote</Link>
      </div>
      {mockQuotes.map((q) => (
        <div key={q.ref} className="rounded-2xl border border-zinc-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <div><div className="font-black">{q.ref}</div><div className="text-xs text-zinc-500 mt-0.5">{q.type} • {q.date}</div></div>
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${pill[q.status]}`}>{q.status.toUpperCase()}</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-black">{q.total ? formatKES(q.total) : <span className="text-sm font-medium text-zinc-500">Engineer pricing…</span>}</span>
            <div className="flex gap-2">
              {q.status === "Quoted" && <button className="h-8 px-4 rounded-full bg-emerald-500 text-white text-xs font-bold">Accept Quote</button>}
              <a href="https://wa.me/254700000000" target="_blank" className="h-8 px-4 rounded-full border border-zinc-200 text-xs font-bold inline-flex items-center justify-center">Discuss</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

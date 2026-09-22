"use client"
import { useState } from "react"
import { adminCoupons } from "@/lib/mockAdmin"

export default function AdminCoupons() {
  const [list, setList] = useState(adminCoupons)
  const [code, setCode] = useState("")
  const [type, setType] = useState<"percent" | "fixed">("percent")
  const [value, setValue] = useState("10")
  const [error, setError] = useState("")

  const create = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const c = code.trim().toUpperCase().replace(/\s/g, "")
    if (c.length < 4) return setError("Code needs 4+ characters.")
    if (list.some((x) => x.code === c)) return setError("Code already exists.")
    const v = parseInt(value)
    if (!v || v <= 0) return setError("Enter a valid discount value.")
    setList((l) => [...l, { code: c, type, value: v, uses: 0, active: true }])
    setCode("")
    setValue("10")
  }

  return (
    <div className="space-y-4 max-w-[680px]">
      <h2 className="font-display text-xl font-black">Coupons & Discounts ({list.length})</h2>
      <form onSubmit={create} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm flex flex-wrap gap-2 items-end">
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">CODE</label><input value={code} onChange={(e) => setCode(e.target.value)} placeholder="DIWALI15" className="mt-1 h-10 w-36 rounded-xl bg-white border border-zinc-300 px-3 text-sm outline-none uppercase focus:border-zinc-900" /></div>
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">TYPE</label><select value={type} onChange={(e) => setType(e.target.value as "percent" | "fixed")} className="mt-1 h-10 rounded-xl bg-white border border-zinc-300 px-3 text-sm"><option value="percent">% Percent</option><option value="fixed">KES Fixed</option></select></div>
        <div><label className="text-[11px] font-bold tracking-widest text-zinc-500">VALUE</label><input value={value} onChange={(e) => setValue(e.target.value)} type="number" className="mt-1 h-10 w-24 rounded-xl bg-white border border-zinc-300 px-3 text-sm outline-none" /></div>
        <button className="h-10 px-5 rounded-full bg-sky-500 text-white text-sm font-bold">Create</button>
      </form>
      {error && <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
      {list.map((c) => (
        <div key={c.code} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm flex items-center justify-between gap-3">
          <div><span className="font-black tracking-widest">{c.code}</span><div className="text-xs text-zinc-500 mt-0.5">{c.type === "percent" ? `${c.value}% off` : `KES ${(c.value / 100).toLocaleString()} off`} • {c.uses} uses</div></div>
          <button onClick={() => setList((l) => l.map((x) => (x.code === c.code ? { ...x, active: !x.active } : x)))} className={`h-8 px-4 rounded-full text-xs font-bold ${c.active ? "bg-emerald-500 text-white" : "bg-zinc-100 text-zinc-500"}`}>{c.active ? "ACTIVE" : "PAUSED"}</button>
        </div>
      ))}
    </div>
  )
}

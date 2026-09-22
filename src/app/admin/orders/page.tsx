"use client"
import { useState } from "react"
import { adminOrders, type AdminOrder } from "@/lib/mockAdmin"
import { formatKES } from "@/lib/utils"

const statuses: AdminOrder["status"][] = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"]

export default function AdminOrders() {
  const [list, setList] = useState(adminOrders)
  const [filter, setFilter] = useState("All")
  const shown = list.filter((o) => filter === "All" || o.status === filter)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-black">Orders ({shown.length})</h2>
        <div className="flex gap-1.5 flex-wrap">
          {["All", ...statuses].map((s) => (
            <button key={s} onClick={() => setFilter(s)} className={`h-8 px-3 rounded-full text-xs font-bold border ${filter === s ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-600 border-zinc-200"}`}>{s}</button>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
        <div className="overflow-auto">
          <table className="w-full text-sm min-w-[760px]">
            <thead><tr className="bg-zinc-50 text-left text-[11px] tracking-widest text-zinc-500"><th className="p-3">ORDER</th><th className="p-3">CUSTOMER</th><th className="p-3">TOTAL</th><th className="p-3">PAYMENT</th><th className="p-3">STATUS</th></tr></thead>
            <tbody>
              {shown.map((o) => (
                <tr key={o.id} className="border-t border-zinc-100">
                  <td className="p-3"><div className="font-bold">{o.number}</div><div className="text-xs text-zinc-500">{o.date} • {o.items} item(s)</div></td>
                  <td className="p-3"><div className="font-medium">{o.customer}</div><div className="text-xs text-zinc-500">{o.county}</div></td>
                  <td className="p-3 font-bold whitespace-nowrap">{formatKES(o.total)}</td>
                  <td className="p-3 text-xs font-bold">{o.payment === "Paid" ? <span className="text-emerald-600">● PAID</span> : o.payment === "Failed" ? <span className="text-red-600">● FAILED</span> : <span className="text-amber-600">● PENDING</span>}</td>
                  <td className="p-3">
                    <select value={o.status} onChange={(e) => setList((l) => l.map((x) => (x.id === o.id ? { ...x, status: e.target.value as AdminOrder["status"] } : x)))} className="h-8 rounded-full px-2 text-xs font-bold bg-white border border-zinc-300 text-zinc-800">
                      {statuses.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-xs text-zinc-500">Status changes map to Order.status + Shipment/Payment records + customer Notification.</p>
    </div>
  )
}

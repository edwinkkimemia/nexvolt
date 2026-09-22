import Link from "next/link"
import { products } from "@/lib/data"
import { adminOrders, adminCustomers } from "@/lib/mockAdmin"
import { mockQuotes } from "@/lib/mockAccount"
import { formatKES } from "@/lib/utils"

export default function AdminDashboard() {
  const revenue = adminOrders.filter((o) => o.payment === "Paid").reduce((a, o) => a + o.total, 0)
  const pending = adminOrders.filter((o) => o.status === "Pending" || o.status === "Processing").length
  const lowStock = products.filter((p) => p.stock < 10)
  const quoted = mockQuotes.filter((q) => q.status === "Quoted" || q.status === "Accepted").length
  const conversion = Math.round((quoted / Math.max(mockQuotes.length, 1)) * 100)

  const stats = [
    { label: "REVENUE (PAID)", value: formatKES(revenue), sub: "▲ 12% vs Aug", hot: true },
    { label: "ORDERS", value: String(adminOrders.length), sub: `${pending} need action` },
    { label: "CUSTOMERS", value: String(adminCustomers.length), sub: "642 total incl. guests" },
    { label: "LOW STOCK", value: String(lowStock.length), sub: "reorder soon", warn: lowStock.length > 0 },
  ]

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-2xl p-5 border shadow-sm ${s.hot ? "bg-zinc-900 text-white border-zinc-900" : "bg-white border-zinc-200"}`}>
            <div className={`text-[11px] tracking-widest font-bold ${s.hot ? "text-zinc-400" : "text-zinc-500"}`}>{s.label}</div>
            <div className="text-2xl font-black mt-1 truncate">{s.value}</div>
            <div className={`text-xs mt-1 ${s.warn ? "text-amber-600 font-bold" : s.hot ? "text-emerald-400" : "text-zinc-500"}`}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between"><h2 className="font-bold">Recent Orders</h2><Link href="/admin/orders" className="text-xs font-bold text-sky-600">Manage →</Link></div>
          <div className="mt-3 space-y-2 text-sm">
            {adminOrders.slice(0, 4).map((o) => (
              <div key={o.id} className="flex items-center justify-between rounded-xl bg-zinc-50 border border-zinc-200 px-3 py-2.5">
                <div><div className="font-bold">{o.number}</div><div className="text-xs text-zinc-500">{o.customer} • {o.date}</div></div>
                <div className="text-right"><div className="font-bold">{formatKES(o.total)}</div><div className="text-[11px] text-zinc-500">{o.status} • {o.payment}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between"><h2 className="font-bold">Low Stock ({lowStock.length})</h2><Link href="/admin/products" className="text-xs font-bold text-sky-600">Inventory →</Link></div>
            <div className="mt-3 space-y-2 text-sm">
              {lowStock.map((p) => (
                <div key={p.id} className="flex items-center justify-between rounded-xl bg-zinc-50 border border-zinc-200 px-3 py-2.5">
                  <span className="font-medium truncate">{p.name}</span>
                  <span className="text-xs font-black text-amber-600 shrink-0 ml-2">{p.stock} LEFT</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold">Quotation Funnel</h2>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex-1 h-2 rounded-full bg-zinc-100 overflow-hidden"><div className="h-full bg-emerald-500" style={{ width: `${conversion}%` }} /></div>
              <span className="text-sm font-black">{conversion}%</span>
            </div>
            <p className="text-xs text-zinc-500 mt-2">{quoted} of {mockQuotes.length} enquiries quoted/accepted. <Link href="/admin/quotations" className="text-sky-600 font-bold">Follow up →</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

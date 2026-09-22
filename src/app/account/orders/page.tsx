import Link from "next/link"
import { mockOrders } from "@/lib/mockAccount"
import { formatKES } from "@/lib/utils"

const pill: Record<string, string> = {
  Processing: "bg-amber-50 text-amber-700",
  Shipped: "bg-sky-50 text-sky-700",
  Delivered: "bg-emerald-50 text-emerald-700",
  Pending: "bg-zinc-100 text-zinc-600",
}

export default function OrdersPage() {
  return (
    <div className="space-y-3 max-w-[680px]">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-black">Orders ({mockOrders.length})</h2>
        <Link href="/shop" className="h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold inline-flex items-center justify-center">Reorder → Shop</Link>
      </div>
      {mockOrders.map((o) => (
        <Link key={o.id} href={`/account/orders/${o.id}`} className="block rounded-2xl border border-zinc-200 bg-white p-4 hover:shadow transition">
          <div className="flex items-center justify-between">
            <div><div className="font-bold">{o.number}</div><div className="text-xs text-zinc-500 mt-0.5">{o.date} • {o.items.reduce((a, b) => a + b.qty, 0)} item(s)</div></div>
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${pill[o.status]}`}>{o.status.toUpperCase()}</span>
          </div>
          <div className="mt-2 text-sm text-zinc-600 line-clamp-1">{o.items.map((i) => `${i.qty}× ${i.name}`).join(" • ")}</div>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-black">{formatKES(o.total)}</span>
            <span className="text-xs font-bold text-sky-600">Track Order →</span>
          </div>
        </Link>
      ))}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">Invoices are attached to each delivered order. Need one resent? <a href="https://wa.me/254700000000" target="_blank" className="text-[#1d9e56] font-bold">WhatsApp @nexvolttechke</a></div>
    </div>
  )
}

import Link from "next/link"
import { adminCustomers } from "@/lib/mockAdmin"
import { formatKES } from "@/lib/utils"

export default function AdminCustomers() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-black">Customers ({adminCustomers.length})</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {adminCustomers.map((c) => (
          <div key={c.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-zinc-900 text-white grid place-items-center font-black">{c.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</div>
              <div><div className="font-bold">{c.name}</div><div className="text-xs text-zinc-500">{c.email} • {c.phone}</div></div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-2.5"><div className="text-lg font-black">{c.orders}</div><div className="text-[10px] tracking-widest text-zinc-500">ORDERS</div></div>
              <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-2.5"><div className="text-sm font-black truncate">{formatKES(c.spent)}</div><div className="text-[10px] tracking-widest text-zinc-500">SPENT</div></div>
              <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-2.5"><div className="text-sm font-bold">{c.county}</div><div className="text-[10px] tracking-widest text-zinc-500">SINCE {c.since.slice(0, 4)}</div></div>
            </div>
            <div className="mt-3 flex gap-2">
              <Link href="/admin/orders" className="flex-1 h-9 rounded-full bg-zinc-100 text-xs font-bold grid place-items-center hover:bg-zinc-200">Orders</Link>
              <a href={`https://wa.me/254700000000?text=Jambo ${encodeURIComponent(c.name)}`} target="_blank" className="flex-1 h-9 rounded-full bg-[#25D366] text-white text-xs font-bold grid place-items-center">WhatsApp</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

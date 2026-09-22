import Link from "next/link"
import { mockOrders, mockQuotes } from "@/lib/mockAccount"
import { formatKES } from "@/lib/utils"

export default function AccountOverview() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="font-bold text-zinc-900">Browsing as guest</div>
        <p className="text-sm text-zinc-600 mt-1">Log in to sync orders, quotes, wishlist and installation requests across devices.</p>
        <div className="mt-3 flex gap-2">
          <Link href="/account/login" className="h-10 px-6 rounded-full bg-zinc-900 text-white text-sm font-bold inline-flex items-center justify-center">Log In</Link>
          <Link href="/account/register" className="h-10 px-6 rounded-full bg-white border border-zinc-300 text-sm font-bold inline-flex items-center justify-center">Create Account</Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4"><div className="text-xs tracking-widest text-zinc-500 font-bold">ORDERS</div><div className="text-2xl font-black mt-1">{mockOrders.length}</div><Link href="/account/orders" className="text-xs font-bold text-sky-600">View orders →</Link></div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4"><div className="text-xs tracking-widest text-zinc-500 font-bold">QUOTATIONS</div><div className="text-2xl font-black mt-1">{mockQuotes.length}</div><Link href="/account/quotations" className="text-xs font-bold text-sky-600">View quotes →</Link></div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4"><div className="text-xs tracking-widest text-zinc-500 font-bold">SUPPORT</div><div className="text-2xl font-black mt-1">2</div><Link href="/account/support" className="text-xs font-bold text-sky-600">View tickets →</Link></div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="flex items-center justify-between"><h2 className="font-bold">Recent orders</h2><Link href="/account/orders" className="text-xs font-bold text-sky-600">Track all →</Link></div>
        <div className="mt-3 space-y-2">
          {mockOrders.slice(0, 2).map((o) => (
            <Link key={o.id} href={`/account/orders/${o.id}`} className="flex items-center justify-between rounded-xl border border-zinc-200 p-3 hover:bg-zinc-50">
              <div><div className="font-bold text-sm">{o.number}</div><div className="text-xs text-zinc-500">{o.date} • {o.items.length} item(s)</div></div>
              <div className="text-right"><div className="font-bold text-sm">{formatKES(o.total)}</div><span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">{o.status}</span></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

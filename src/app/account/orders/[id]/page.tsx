import Link from "next/link"
import { mockOrders } from "@/lib/mockAccount"
import { formatKES } from "@/lib/utils"
import { Check } from "lucide-react"
import InvoiceButton from "@/components/account/InvoiceButton"

export async function generateStaticParams() { return mockOrders.map((o) => ({ id: o.id })) }

export default function OrderTracking({ params }: { params: { id: string } }) {
  const o = mockOrders.find((x) => x.id === params.id) ?? mockOrders[0]
  return (
    <div className="max-w-[640px] space-y-4">
      <Link href="/account/orders" className="text-xs font-bold text-sky-600">← All Orders</Link>
      <div className="rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <div><h2 className="font-display text-xl font-black">{o.number}</h2><div className="text-xs text-zinc-500 mt-0.5">Placed {o.date} • {o.status}</div></div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700">{o.status.toUpperCase()}</span>
        </div>
        <div className="mt-4 space-y-2">
          {o.items.map((i, idx) => (
            <div key={idx} className="flex justify-between text-sm border-b border-zinc-100 py-2"><span>{i.qty}× {i.name}</span><span className="font-bold">{formatKES(i.price * i.qty)}</span></div>
          ))}
          <div className="flex justify-between font-black pt-1"><span>Total</span><span>{formatKES(o.total)}</span></div>
        </div>
        <div className="mt-3 flex gap-2">
          <InvoiceButton order={o} />
          <Link href="/shop" className="flex-1 h-10 rounded-full bg-zinc-900 text-white text-sm font-bold grid place-items-center">Reorder Items</Link>
        </div>
      </div>
      <div className="rounded-2xl border border-zinc-200 bg-white p-5">
        <h3 className="font-bold">Tracking</h3>
        <ol className="mt-4 space-y-0">
          {o.tracking.map((t, i) => (
            <li key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span className={`h-6 w-6 rounded-full grid place-items-center ${t.done ? "bg-emerald-500 text-white" : "bg-zinc-100 text-zinc-400"}`}>{t.done ? <Check className="h-3.5 w-3.5" /> : <span className="h-2 w-2 rounded-full bg-zinc-300" />}</span>
                {i < o.tracking.length - 1 && <span className={`w-0.5 flex-1 min-h-[20px] ${t.done ? "bg-emerald-200" : "bg-zinc-100"}`} />}
              </div>
              <div className="pb-5"><div className={`text-sm font-semibold ${t.done ? "text-zinc-900" : "text-zinc-400"}`}>{t.label}</div>{t.date && <div className="text-xs text-zinc-500">{t.date}</div>}</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

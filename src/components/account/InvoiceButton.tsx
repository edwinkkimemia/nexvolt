"use client"
import type { MockOrder } from "@/lib/mockAccount"

export default function InvoiceButton({ order }: { order: MockOrder }) {
  const invoice = () => {
    const rows = order.items.map((i) => `<tr><td style="padding:8px;border-bottom:1px solid #eee">${i.qty}× ${i.name}</td><td style="padding:8px;border-bottom:1px solid #eee;text-align:right">KES ${(i.price * i.qty / 100).toLocaleString()}</td></tr>`).join("")
    const w = window.open("", "_blank")
    if (!w) return
    w.document.write(`<html><head><title>Invoice ${order.number}</title></head><body style="font-family:sans-serif;max-width:640px;margin:40px auto;color:#111"><h1>NexVolt Technologies</h1><p>Nairobi, Kenya • info@nexvolt.co.ke • @nexvolttechke</p><h2>Invoice ${order.number}</h2><p>Date: ${order.date} • Status: ${order.status}</p><table style="width:100%;border-collapse:collapse">${rows}</table><h3>Total: KES ${(order.total / 100).toLocaleString()}</h3><script>window.onload=()=>window.print()<\/script></body></html>`)
    w.document.close()
  }
  return (
    <button onClick={invoice} className="flex-1 h-10 rounded-full border border-zinc-300 text-sm font-bold hover:bg-zinc-50">Download Invoice (PDF)</button>
  )
}

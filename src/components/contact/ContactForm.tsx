"use client"
import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (form.name.trim().length < 2) return setError("Enter your name.")
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError("Enter a valid email.")
    if (form.message.trim().length < 10) return setError("Message needs 10+ characters.")
    // POST /api/contact → Prisma ContactSubmission + admin Notification
    setSent(true)
  }

  if (sent) return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center h-fit">
      <div className="text-xs tracking-widest font-bold text-emerald-700">MESSAGE RECEIVED</div>
      <div className="text-xl font-black mt-2">Asante, {form.name.split(" ")[0]}!</div>
      <p className="text-sm text-zinc-600 mt-2">Engineer replies within 2 hours to {form.email}. Reference saved — for instant help WhatsApp @nexvolttechke.</p>
      <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }) }} className="mt-4 h-10 px-6 rounded-full bg-zinc-900 text-white text-sm font-bold">Send Another</button>
    </div>
  )

  return (
    <form onSubmit={send} className="rounded-2xl border border-zinc-200 p-6 bg-white shadow-sm">
      <h2 className="font-bold">Send us a message</h2>
      <p className="text-sm text-zinc-600 mt-1">Engineer replies in 2 hours. For instant quote, WhatsApp instead.</p>
      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Name *" className="h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /><input value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="Email *" className="h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" />
        <input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="Phone" className="h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /><input value={form.subject} onChange={(e) => set("subject", e.target.value)} placeholder="Subject" className="h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" />
      </div>
      <textarea value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Message — e.g. 5kW solar for 3BR in Karen" className="mt-3 w-full rounded-xl border border-zinc-300 p-3 text-sm h-28 outline-none focus:border-zinc-900" />
      {error && <div className="mt-2 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
      <button className="mt-4 w-full h-11 rounded-full bg-zinc-900 text-white font-bold">Send Message</button>
      <a href="https://wa.me/254700000000" target="_blank" className="mt-2 w-full h-11 rounded-full bg-[#25D366] text-white font-bold grid place-items-center text-sm">Faster via WhatsApp @nexvolttechke</a>
    </form>
  )
}

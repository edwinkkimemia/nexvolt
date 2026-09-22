"use client"
import { useState } from "react"

export default function ProfilePage() {
  const [form, setForm] = useState({ name: "Brian Kamau", phone: "0700 123 456", email: "brian@example.com", county: "Nairobi", company: "Kamau Homes" })
  const [saved, setSaved] = useState(false)
  const set = (k: string, v: string) => { setForm((f) => ({ ...f, [k]: v })); setSaved(false) }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 max-w-[560px]">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-zinc-900 text-white grid place-items-center font-black text-lg">BK</div>
        <div><h2 className="font-display text-xl font-black">Profile</h2><p className="text-xs text-zinc-500">Customer since Sep 2026 • @nexvolttechke</p></div>
      </div>
      <div className="mt-5 grid sm:grid-cols-2 gap-3">
        <div><label className="text-xs font-bold tracking-widest text-zinc-500">FULL NAME</label><input value={form.name} onChange={(e) => set("name", e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div><label className="text-xs font-bold tracking-widest text-zinc-500">COMPANY</label><input value={form.company} onChange={(e) => set("company", e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div><label className="text-xs font-bold tracking-widest text-zinc-500">PHONE</label><input value={form.phone} onChange={(e) => set("phone", e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div><label className="text-xs font-bold tracking-widest text-zinc-500">EMAIL</label><input value={form.email} className="mt-1 w-full h-11 rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-500" readOnly /></div>
        <div className="sm:col-span-2"><label className="text-xs font-bold tracking-widest text-zinc-500">COUNTY</label><select value={form.county} onChange={(e) => set("county", e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm bg-white"><option>Nairobi</option><option>Kiambu</option><option>Machakos</option><option>Mombasa</option><option>Nakuru</option></select></div>
      </div>
      {saved && <div className="mt-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm p-3">Profile saved. Changes sync to quotes & deliveries.</div>}
      <button onClick={() => setSaved(true)} className="mt-4 h-11 px-7 rounded-full bg-zinc-900 text-white font-bold text-sm">Save Changes</button>
    </div>
  )
}

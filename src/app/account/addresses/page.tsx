"use client"
import { useState } from "react"
import { mockAddresses, type MockAddress } from "@/lib/mockAccount"

export default function AddressesPage() {
  const [list, setList] = useState<MockAddress[]>(mockAddresses)
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ label: "Home", line1: "", city: "", county: "Nairobi", phone: "" })
  const [error, setError] = useState("")

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (form.line1.trim().length < 4) return setError("Enter street / building.")
    if (!form.city.trim()) return setError("Enter city / town.")
    if (!form.phone.trim()) return setError("Enter a delivery phone.")
    setList((l) => [...l, { id: `a${Date.now()}`, label: form.label, line1: form.line1, city: form.city, county: form.county, phone: form.phone, isDefault: l.length === 0 }])
    setForm({ label: "Home", line1: "", city: "", county: "Nairobi", phone: "" })
    setShow(false)
  }

  return (
    <div className="space-y-4 max-w-[640px]">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-black">Saved Addresses ({list.length})</h2>
        <button onClick={() => setShow(!show)} className="h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold">+ Add Address</button>
      </div>
      {show && (
        <form onSubmit={add} className="rounded-2xl border border-zinc-200 bg-white p-5 grid sm:grid-cols-2 gap-3">
          <div><label className="text-xs font-bold tracking-widest text-zinc-500">LABEL</label><select value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} className="mt-1 w-full h-10 rounded-xl border border-zinc-300 px-3 text-sm bg-white"><option>Home</option><option>Office</option><option>Site</option></select></div>
          <div><label className="text-xs font-bold tracking-widest text-zinc-500">PHONE</label><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="0712 345 678" className="mt-1 w-full h-10 rounded-xl border border-zinc-300 px-3 text-sm" /></div>
          <div className="sm:col-span-2"><label className="text-xs font-bold tracking-widest text-zinc-500">STREET / BUILDING *</label><input value={form.line1} onChange={(e) => setForm({ ...form, line1: e.target.value })} placeholder="Road, estate, house no." className="mt-1 w-full h-10 rounded-xl border border-zinc-300 px-3 text-sm" /></div>
          <div><label className="text-xs font-bold tracking-widest text-zinc-500">CITY *</label><input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Karen" className="mt-1 w-full h-10 rounded-xl border border-zinc-300 px-3 text-sm" /></div>
          <div><label className="text-xs font-bold tracking-widest text-zinc-500">COUNTY</label><select value={form.county} onChange={(e) => setForm({ ...form, county: e.target.value })} className="mt-1 w-full h-10 rounded-xl border border-zinc-300 px-3 text-sm bg-white"><option>Nairobi</option><option>Kiambu</option><option>Machakos</option><option>Mombasa</option></select></div>
          {error && <div className="sm:col-span-2 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
          <button className="sm:col-span-2 h-10 rounded-full bg-sky-500 text-white font-bold text-sm">Save Address</button>
        </form>
      )}
      {list.map((a) => (
        <div key={a.id} className="rounded-2xl border border-zinc-200 bg-white p-4 flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2"><span className="font-bold text-sm">{a.label}</span>{a.isDefault && <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">DEFAULT</span>}</div>
            <div className="text-sm text-zinc-600 mt-1">{a.line1}, {a.city}, {a.county}</div>
            <div className="text-xs text-zinc-500 mt-0.5">{a.phone}</div>
          </div>
          <div className="flex flex-col gap-1.5 shrink-0">
            {!a.isDefault && <button onClick={() => setList((l) => l.map((x) => ({ ...x, isDefault: x.id === a.id })))} className="h-8 px-3 rounded-full border border-zinc-200 text-xs font-bold hover:bg-zinc-50">Set Default</button>}
            <button onClick={() => setList((l) => l.filter((x) => x.id !== a.id))} className="h-8 px-3 rounded-full border border-red-200 text-red-600 text-xs font-bold hover:bg-red-50">Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

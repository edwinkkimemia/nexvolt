"use client"
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", county: "Nairobi", password: "", confirm: "" })
  const [error, setError] = useState("")
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (form.name.trim().length < 2) return setError("Enter your full name.")
    if (!/^(07|01)\d{8}$/.test(form.phone.replace(/\s/g, ""))) return setError("Enter a valid Kenyan phone (07… or 01…, 10 digits).")
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError("Enter a valid email address.")
    if (form.password.length < 8) return setError("Password must be at least 8 characters.")
    if (form.password !== form.confirm) return setError("Passwords do not match.")
    setLoading(true)
    try {
      const res = await fetch("/api/auth/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.name, phone: form.phone, email: form.email, county: form.county, password: form.password }) })
      const data = await res.json()
      if (!res.ok) return setError(data.error || "Registration failed.")
      setDone(true)
    } catch {
      setError("Network error. Try again or WhatsApp @nexvolttechke.")
    } finally {
      setLoading(false)
    }
  }

  if (done) return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center max-w-[520px]">
      <div className="text-sm tracking-widest font-bold text-emerald-700">ACCOUNT CREATED</div>
      <div className="text-xl font-black mt-2">Karibu, {form.name.split(" ")[0]}!</div>
      <p className="text-sm text-zinc-600 mt-2">Confirmation sent to {form.email}. Your orders, quotes and wishlist will now sync.</p>
      <div className="mt-4 flex gap-2 justify-center">
        <Link href="/account/orders" className="h-10 px-6 rounded-full bg-zinc-900 text-white text-sm font-bold inline-flex items-center justify-center">Go to Orders</Link>
        <Link href="/shop" className="h-10 px-6 rounded-full bg-white border border-zinc-300 text-sm font-bold inline-flex items-center justify-center">Shop Now</Link>
      </div>
    </div>
  )

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 max-w-[560px]">
      <h2 className="font-display text-xl font-black">Create account</h2>
      <p className="text-sm text-zinc-600 mt-1">Track orders, save quotes, reorder in one tap.</p>
      <form onSubmit={submit} className="mt-5 grid sm:grid-cols-2 gap-3">
        <div className="sm:col-span-1"><label className="text-xs font-bold tracking-widest text-zinc-500">FULL NAME *</label><input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Wanjiku" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div className="sm:col-span-1"><label className="text-xs font-bold tracking-widest text-zinc-500">PHONE *</label><input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="0712 345 678" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div className="sm:col-span-1"><label className="text-xs font-bold tracking-widest text-zinc-500">EMAIL *</label><input value={form.email} onChange={(e) => set("email", e.target.value)} type="email" placeholder="you@example.com" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div className="sm:col-span-1"><label className="text-xs font-bold tracking-widest text-zinc-500">COUNTY</label><select value={form.county} onChange={(e) => set("county", e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm bg-white"><option>Nairobi</option><option>Kiambu</option><option>Machakos</option><option>Mombasa</option><option>Nakuru</option><option>Kisumu</option></select></div>
        <div className="sm:col-span-1"><label className="text-xs font-bold tracking-widest text-zinc-500">PASSWORD *</label><input value={form.password} onChange={(e) => set("password", e.target.value)} type="password" placeholder="Min. 8 characters" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        <div className="sm:col-span-1"><label className="text-xs font-bold tracking-widest text-zinc-500">CONFIRM *</label><input value={form.confirm} onChange={(e) => set("confirm", e.target.value)} type="password" placeholder="Repeat password" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" /></div>
        {error && <div className="sm:col-span-2 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
        <button disabled={loading} className="sm:col-span-2 h-11 rounded-full bg-sky-500 text-white font-bold text-sm disabled:opacity-50">{loading ? "Creating…" : "Create Account"}</button>
      </form>
      <div className="mt-4 text-sm text-zinc-600 text-center">Have an account? <Link href="/account/login" className="text-sky-600 font-bold">Log in →</Link></div>
      <p className="mt-2 text-[11px] text-zinc-500 text-center">Passwords are hashed (bcrypt) and never stored in plain text. See Privacy Policy.</p>
    </div>
  )
}

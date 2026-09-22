"use client"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email address.")
    if (password.length < 8) return setError("Password must be at least 8 characters.")
    setLoading(true)
    try {
      const res = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) })
      const data = await res.json()
      if (!res.ok) setError(data.error || "Login failed. Check your credentials.")
    } catch {
      setError("Network error. Try again or WhatsApp @nexvolttechke.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 max-w-[520px]">
      <h2 className="font-display text-xl font-black">Welcome back</h2>
      <p className="text-sm text-zinc-600 mt-1">Log in to track orders, quotes and installations.</p>
      <form onSubmit={submit} className="mt-5 space-y-3">
        <div>
          <label className="text-xs font-bold tracking-widest text-zinc-500">EMAIL</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" className="mt-1 w-full h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900" />
        </div>
        <div>
          <label className="text-xs font-bold tracking-widest text-zinc-500">PASSWORD</label>
          <div className="mt-1 relative">
            <input value={password} onChange={(e) => setPassword(e.target.value)} type={show ? "text" : "password"} placeholder="••••••••" className="w-full h-11 rounded-xl border border-zinc-300 px-3 pr-16 text-sm outline-none focus:border-zinc-900" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-sky-600 px-2">{show ? "Hide" : "Show"}</button>
          </div>
        </div>
        {error && <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm p-3">{error}</div>}
        <button disabled={loading} className="w-full h-11 rounded-full bg-zinc-900 text-white font-bold text-sm disabled:opacity-50">{loading ? "Logging in…" : "Log In"}</button>
      </form>
      <div className="mt-4 text-sm text-zinc-600 text-center">New to NexVolt? <Link href="/account/register" className="text-sky-600 font-bold">Create account →</Link></div>
      <div className="mt-2 text-center"><a href="https://wa.me/254700000000" target="_blank" className="text-xs font-bold text-[#1d9e56]">Trouble logging in? WhatsApp us</a></div>
    </div>
  )
}

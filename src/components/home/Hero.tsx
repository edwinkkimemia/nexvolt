import Link from "next/link"
import { Shield, Zap, Wifi, Lock } from "lucide-react"

export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white"/>
        <div className="absolute inset-0 grid-overlay opacity-40"/>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-sky-100 blur-[80px] rounded-full opacity-60"/>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 pt-10 pb-8 lg:pt-14 lg:pb-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold tracking-wide text-amber-800">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"/> 🔥 THIS WEEK: 12% OFF + FREE SURVEY (KES 15k) • 3 SLOTS LEFT
          </div>
          <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-zinc-500">NEXVOLT TECHNOLOGIES • NAIROBI • LICENSED EPRA • 500+ SITES</div>
          <h1 className="mt-3 text-[34px] sm:text-[42px] lg:text-[50px] font-black tracking-tight leading-[0.9] text-zinc-900">
            Cut KPLC Bills by <span className="text-gradient">70%</span>.
            <span className="block">Blackouts Gone in <span className="underline decoration-amber-400 decoration-4 underline-offset-4">72 Hours</span>.</span>
          </h1>
          <p className="mt-4 max-w-[560px] text-[15px] leading-6 text-zinc-600">Hybrid solar + 10kWh lithium + AI security + Wi-Fi — from <span className="font-black text-zinc-900">KES 699k installed</span>. Price-beat by 5% • 0% financing 12 months • 25-yr warranty. <span className="font-semibold text-zinc-900">Quote in 2 hours. Install in 3 days.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quote" className="h-[46px] px-7 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-black tracking-wide shadow-[0_8px_20px_rgba(14,165,233,0.35)] inline-flex items-center">GET MY FREE QUOTE →</Link>
            <Link href="/shop" className="h-[46px] px-7 rounded-full bg-zinc-900 text-white hover:bg-black text-sm font-bold inline-flex items-center">Shop Technology</Link>
            <Link href="/calculator" className="h-[46px] px-6 rounded-full border border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-50 text-sm font-bold inline-flex items-center">Size My System</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 shadow-sm"><Zap className="h-3.5 w-3.5 text-sky-500"/> Solar + Storage</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 shadow-sm"><Shield className="h-3.5 w-3.5 text-emerald-500"/> AI Security</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 shadow-sm"><Wifi className="h-3.5 w-3.5 text-violet-500"/> Enterprise Wi-Fi</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-zinc-700 shadow-sm"><Lock className="h-3.5 w-3.5 text-cyan-500"/> Access Control</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-6 max-w-md border-t border-zinc-200 pt-6">
            <div><div className="text-2xl font-bold text-zinc-900">500+</div><div className="text-xs tracking-widest text-zinc-500 font-semibold">INSTALLATIONS</div></div>
            <div><div className="text-2xl font-bold text-zinc-900">98.7%</div><div className="text-xs tracking-widest text-zinc-500 font-semibold">UPTIME</div></div>
            <div><div className="text-2xl font-bold text-zinc-900">4.9★</div><div className="text-xs tracking-widest text-zinc-500 font-semibold">CLIENT RATING</div></div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[24px] border border-zinc-200 bg-white p-2 shadow-xl">
            <div className="rounded-[18px] overflow-hidden bg-zinc-50 relative border border-zinc-100">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900" alt="Modern home" className="h-[420px] w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 420" fill="none">
                <path d="M100 80 L 300 190 L 500 80" stroke="rgba(14,165,233,0.7)" strokeWidth="1.5" strokeDasharray="6 6"/>
                <path d="M100 330 L 300 190 L 500 330" stroke="rgba(16,185,129,0.6)" strokeWidth="1.5" strokeDasharray="6 6"/>
                <circle cx="300" cy="190" r="10" fill="#0EA5E9" stroke="white" strokeWidth="2"/>
                <circle cx="100" cy="80" r="7" fill="#10B981"/><circle cx="500" cy="80" r="7" fill="#F59E0B"/><circle cx="100" cy="330" r="7" fill="#8B5CF6"/><circle cx="500" cy="330" r="7" fill="#EC4899"/>
              </svg>
              <div className="absolute left-3 top-3 bg-white border border-zinc-200 shadow rounded-full px-3 py-1.5 text-xs font-bold tracking-widest text-zinc-800">ONE CONNECTED ECOSYSTEM</div>
              <div className="absolute bottom-3 left-3 right-3 grid grid-cols-2 gap-2">
                <div className="bg-white border border-zinc-200 shadow rounded-xl p-3">
                  <div className="text-[11px] tracking-widest text-sky-600 font-bold">LIVE ENERGY</div>
                  <div className="text-sm font-bold text-zinc-900">4.2 kW • 18.4 kWh today</div>
                  <div className="mt-2 h-1 rounded-full bg-zinc-100 overflow-hidden"><div className="h-full w-[68%] bg-emerald-500"/></div>
                </div>
                <div className="bg-white border border-zinc-200 shadow rounded-xl p-3">
                  <div className="text-[11px] tracking-widest text-violet-600 font-bold">SECURITY • 6 CAMS</div>
                  <div className="text-sm font-bold text-zinc-900">All Secure • AI Active</div>
                  <div className="mt-2 flex gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/><span className="h-1.5 w-1.5 rounded-full bg-zinc-300"/></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 p-2">
              {[
                {k:"Solar", v:"5.5 kW"},
                {k:"Battery", v:"10 kWh"},
                {k:"EV", v:"7 kW"},
                {k:"Wi-Fi", v:"Wi-Fi 6"},
              ].map(s=>(
                <div key={s.k} className="rounded-xl bg-zinc-50 border border-zinc-200 p-2.5 text-center">
                  <div className="text-[10px] tracking-widest text-zinc-500 font-bold">{s.k.toUpperCase()}</div>
                  <div className="text-sm font-bold text-zinc-900">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 hidden lg:flex items-center gap-3 bg-white border border-zinc-200 shadow-xl rounded-2xl px-4 py-3">
            <div className="h-10 w-10 rounded-full bg-emerald-500 grid place-items-center text-white">⚡</div>
            <div><div className="text-xs text-zinc-500">Monthly Savings</div><div className="text-sm font-bold text-zinc-900">KES 24,500</div></div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1280px] px-6 pb-6">
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest text-zinc-500 font-semibold">
          <span>TRUSTED TECHNOLOGY:</span>
          <span className="h-px flex-1 bg-zinc-200 hidden sm:block"/>
          <div className="flex flex-wrap gap-2">
            {["Victron","Huawei","Deye","JA Solar","Jinko","Hikvision","Ubiquiti","Growatt"].map(b=>(
              <span key={b} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 font-bold text-zinc-700">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

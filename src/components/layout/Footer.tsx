import Link from "next/link"
export default function Footer(){
  return (
    <footer className="bg-[#050507] border-t border-white/5 pt-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="mb-4">
              <div className="inline-block bg-white rounded-xl px-3 py-2">
                <img src="/logo.png" alt="NexVolt Technologies" className="h-16 w-auto"/>
              </div>
            </div>
            <p className="text-sm leading-6 text-zinc-400 max-w-sm">Integrated solar energy, smart-home automation, security, networking and intelligent power solutions for homes, businesses and institutions. <span className="text-white font-semibold">Powering Intelligent Living.</span></p>
            <div className="mt-4 space-y-1 text-sm text-zinc-500">
              <div>📞 <a href="tel:+254700000000" className="text-zinc-300 hover:text-white">+254 700 000 000</a> • WhatsApp same</div>
              <div>✉️ info@nexvolt.co.ke</div>
              <div>📍 Nairobi, Kenya — Nationwide service</div>
              <div>🕒 Mon–Sat 8am–6pm EAT</div>
            </div>
            <div className="mt-5 flex gap-2">
              <a href="https://x.com/nexvolttechke" target="_blank" rel="noopener" aria-label="X @nexvolttechke" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-white hover:text-black text-zinc-300 transition">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              <a href="https://linkedin.com/company/nexvolttechke" target="_blank" rel="noopener" aria-label="LinkedIn @nexvolttechke" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-[#0A66C2] hover:border-[#0A66C2] text-zinc-300 hover:text-white transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.6v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71H9.24V9h3.46v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25zM5.34 7.43a2.09 2.09 0 1 1 0-4.18 2.09 2.09 0 0 1 0 4.18zM7.14 20.45H3.54V9h3.6v11.45z"/></svg>
              </a>
              <a href="https://instagram.com/nexvolttechke" target="_blank" rel="noopener" aria-label="Instagram @nexvolttechke" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:border-transparent text-zinc-300 hover:text-white transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://youtube.com/@nexvolttechke" target="_blank" rel="noopener" aria-label="YouTube @nexvolttechke" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-red-600 hover:border-red-600 text-zinc-300 hover:text-white transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.36-.43-4.97a2.8 2.8 0 0 0-1.98-1.98C18.97 4.62 12 4.62 12 4.62s-6.97 0-8.6.43A2.8 2.8 0 0 0 1.43 7.03C1 8.64 1 12 1 12s0 3.36.43 4.97a2.8 2.8 0 0 0 1.98 1.98c1.63.43 8.6.43 8.6.43s6.97 0 8.6-.43a2.8 2.8 0 0 0 1.98-1.98C23 15.36 23 12 23 12zm-13.2 3V9l6.35 3-6.35 3z"/></svg>
              </a>
              <a href="https://facebook.com/nexvolttechke" target="_blank" rel="noopener" aria-label="Facebook @nexvolttechke" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-[#1877F2] hover:border-[#1877F2] text-zinc-300 hover:text-white transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7h2.3l.35-2.7h-2.65v-1.7c0-.78.22-1.31 1.33-1.31h1.42V5.1C15.3 5 13.94 5 12.8 5c-2.35 0-3.96 1.43-3.96 4.06v2.24H6.5V14h2.34v7h4.66z"/></svg>
              </a>
            </div>
            <div className="mt-2 text-xs text-zinc-500">@nexvolttechke • Follow for installs & tech drops</div>
          </div>
          {/* Solutions */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-white mb-4">SOLUTIONS</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions/solar" className="text-zinc-400 hover:text-white">Solar Systems</Link></li>
              <li><Link href="/solutions/power" className="text-zinc-400 hover:text-white">Battery Storage</Link></li>
              <li><Link href="/smart-home" className="text-zinc-400 hover:text-white">Smart Home</Link></li>
              <li><Link href="/solutions/security" className="text-zinc-400 hover:text-white">CCTV & AI Security</Link></li>
              <li><Link href="/solutions/security/access-control" className="text-zinc-400 hover:text-white">Access & Gate</Link></li>
              <li><Link href="/solutions/networking" className="text-zinc-400 hover:text-white">Networking</Link></li>
              <li><Link href="/solutions/ev" className="text-zinc-400 hover:text-white">EV Charging</Link></li>
              <li><Link href="/solutions/building" className="text-zinc-400 hover:text-white">Building Automation</Link></li>
            </ul>
          </div>
          {/* Shop */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-white mb-4">SHOP</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="text-zinc-400 hover:text-white">Solar Panels</Link></li>
              <li><Link href="/shop" className="text-zinc-400 hover:text-white">Inverters</Link></li>
              <li><Link href="/shop" className="text-zinc-400 hover:text-white">Lithium Batteries</Link></li>
              <li><Link href="/shop" className="text-zinc-400 hover:text-white">CCTV Cameras</Link></li>
              <li><Link href="/shop" className="text-zinc-400 hover:text-white">Smart Switches & Sockets</Link></li>
              <li><Link href="/shop" className="text-zinc-400 hover:text-white">Smart Locks</Link></li>
              <li><Link href="/shop" className="text-zinc-400 hover:text-white">Wi-Fi & Networking</Link></li>
              <li><Link href="/shop" className="text-sky-400 hover:text-sky-300 font-semibold">View all →</Link></li>
            </ul>
          </div>
          {/* Explore */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-white mb-4">EXPLORE</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projects" className="text-zinc-400 hover:text-white">Projects</Link></li>
              <li><Link href="/blog" className="text-zinc-400 hover:text-white">Insights & Blog</Link></li>
              <li><Link href="/calculator" className="text-zinc-400 hover:text-white">Solar Calculator</Link></li>
              <li><Link href="/finder" className="text-zinc-400 hover:text-white">Smart Product Finder</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-white">About NexVolt</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-white mb-4">SUPPORT</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quote" className="text-zinc-400 hover:text-white font-semibold">Request Quote</Link></li>
              <li><Link href="/solutions/support" className="text-zinc-400 hover:text-white">Installation Service</Link></li>
              <li><Link href="/warranty" className="text-zinc-400 hover:text-white">Warranty Policy</Link></li>
              <li><Link href="/shipping" className="text-zinc-400 hover:text-white">Shipping & Returns</Link></li>
              <li><Link href="/terms" className="text-zinc-400 hover:text-white">Terms</Link></li>
              <li><Link href="/privacy" className="text-zinc-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.03] p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="text-sm text-zinc-400">Subscribe to NexVolt Insights — technology drops & system guides.</div>
          <div className="flex w-full md:w-auto gap-2">
            <input placeholder="Email address" className="h-10 flex-1 md:w-72 rounded-full bg-white/5 border border-white/10 px-4 text-sm outline-none placeholder:text-zinc-500 focus:border-sky-500/50 text-white"/>
            <button className="h-10 px-6 rounded-full bg-white text-black text-xs font-bold tracking-widest">SUBSCRIBE</button>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/5 py-6 text-xs text-zinc-500">
          <span>© 2026 NexVolt Technologies — Nairobi, Kenya. All rights reserved.</span>
          <span>M-Pesa • Pesapal • Flutterwave • Cards • Bank Transfer • Lipa Later</span>
        </div>
      </div>
    </footer>
  )
}

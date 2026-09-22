import Hero from "@/components/home/Hero"
import Ecosystem from "@/components/home/Ecosystem"
import { ProductCard } from "@/components/shop/ProductCard"
import { products, projectsMock, testimonials, brands } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Check, Cpu, ShieldCheck, Zap, Sun, Battery, Lock, Wifi, Camera, Home, Building2, LineChart } from "lucide-react"

export default function HomePage(){
  return (
    <>
      <Hero />
      {/* HARD MARKETING - GUARANTEE STRIP */}
      <section className="bg-amber-50 border-y border-amber-200">
        <div className="mx-auto max-w-[1280px] px-6 py-3 flex flex-col lg:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3 font-bold">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-white px-3 py-1">⚡ PRICE-BEAT GUARANTEE</span>
            <span className="text-zinc-700">Found cheaper? We beat it by 5% — same Tier-1 kit</span>
            <span className="hidden lg:inline h-4 w-px bg-zinc-300"/>
            <span className="text-emerald-700">✓ 2-yr workmanship warranty ✓ 25-yr panel warranty ✓ Licensed engineers</span>
          </div>
          <Link href="/quote" className="shrink-0 rounded-full bg-zinc-900 text-white px-4 py-2 font-bold text-xs">LOCK 12% DISCOUNT →</Link>
        </div>
      </section>
      <Ecosystem />

      {/* Featured Solutions */}
      <section className="bg-zinc-50 py-12 lg:py-16 border-t border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex items-end justify-between gap-4">
            <div><div className="text-[11px] tracking-[0.2em] font-bold text-sky-600">FEATURED SOLUTIONS</div><h2 className="text-2xl lg:text-3xl font-bold mt-2 text-zinc-900">Engineered ecosystems, not isolated products</h2></div>
            <Link href="/solutions" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700">View all <ArrowRight className="h-4 w-4"/></Link>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title:"Solar & Storage", desc:"Residential → Industrial, off-grid & hybrid with net metering.", icon:<Sun className="h-5 w-5"/>, img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600", href:"/solutions/solar" },
              { title:"Smart Home", desc:"Lighting, curtains, climate, voice & scene automation.", icon:<Home className="h-5 w-5"/>, img:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600", href:"/smart-home" },
              { title:"Security & Access", desc:"AI CCTV, biometric, intercom & perimeter protection.", icon:<ShieldCheck className="h-5 w-5"/>, img:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600", href:"/solutions/security" },
              { title:"Networking & Power", desc:"Enterprise Wi-Fi, UPS, backup & EV charging.", icon:<Wifi className="h-5 w-5"/>, img:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", href:"/solutions/networking" },
            ].map(c=>(
              <div key={c.title} className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white hover:shadow-lg transition">
                <div className="h-36 overflow-hidden"><img src={c.img} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500"/></div>
                <div className="p-5">
                  <div className="h-8 w-8 rounded-lg bg-zinc-900 text-white grid place-items-center">{c.icon}</div>
                  <div className="mt-3 font-bold text-zinc-900">{c.title}</div>
                  <div className="text-sm text-zinc-600 mt-1 leading-5">{c.desc}</div>
                  <Link href={c.href} className="mt-3 inline-flex text-xs font-bold tracking-widest text-sky-600">EXPLORE →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - white commerce section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex items-end justify-between">
            <div><div className="text-[11px] tracking-[0.2em] font-bold text-zinc-500">FEATURED PRODUCTS • KES</div><h2 className="text-2xl font-semibold text-zinc-900 mt-1">Shop technology, ready to ship or install</h2></div>
            <Link href="/shop" className="hidden sm:inline-flex h-9 px-5 rounded-full bg-zinc-900 text-white text-xs font-bold items-center">VIEW SHOP</Link>
          </div>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.slice(0,4).map(p=><ProductCard key={p.id} product={p} />)}
          </div>
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.slice(4,8).map(p=><ProductCard key={p.id} product={p} />)}
          </div>
          {/* SHOP HARD SELL */}
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-200 p-4 flex flex-col lg:flex-row items-center justify-between gap-3">
            <div className="text-sm"><span className="font-bold text-zinc-900 bg-amber-400 px-2 py-1 rounded-full text-xs">THIS WEEK ONLY</span><span className="ml-2 font-semibold text-white">Free delivery in Nairobi on orders KES 50k+ • Pay 3x with Lipa Later</span><span className="text-zinc-400 ml-2">• 17 sold in last 24h</span></div>
            <Link href="/quote" className="shrink-0 h-9 px-5 rounded-full bg-sky-500 text-white text-xs font-bold inline-flex items-center">TALK TO ENGINEER — FREE</Link>
          </div>
        </div>
      </section>

      {/* HARD MARKETING - OFFER GRID */}
      <section className="bg-white border-y border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6 py-6 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-red-50 border border-red-200 p-5"><div className="text-xs font-bold tracking-widest text-red-600">🔥 HOT DEAL</div><div className="font-bold mt-1">5kW Hybrid + 5kWh Battery — KES 699k <span className="line-through text-zinc-400 text-xs">KES 790k</span></div><div className="text-xs text-zinc-600 mt-1">Save KES 91k • 6 left • Install in 72h</div><Link href="/quote" className="mt-3 inline-flex items-center justify-center h-8 px-5 rounded-full bg-red-600 text-white text-xs font-bold whitespace-nowrap">CLAIM DEAL</Link></div>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5"><div className="text-xs font-bold tracking-widest text-emerald-600">FINANCING</div><div className="font-bold mt-1">Pay from KES 19k/mo — 0% for 12 months</div><div className="text-xs text-zinc-600 mt-1">Approved in 15 mins • No collateral</div><Link href="/quote" className="mt-3 inline-flex items-center justify-center h-8 px-5 rounded-full bg-emerald-600 text-white text-xs font-bold whitespace-nowrap">CHECK ELIGIBILITY</Link></div>
          <div className="rounded-2xl bg-sky-50 border border-sky-200 p-5"><div className="text-xs font-bold tracking-widest text-sky-600">FREE SURVEY</div><div className="font-bold mt-1">Engineer site visit worth KES 15k — FREE this week</div><div className="text-xs text-zinc-600 mt-1">Nairobi, Kiambu, Machakos • 17 slots left</div><Link href="/quote" className="mt-3 inline-flex items-center justify-center h-8 px-5 rounded-full bg-sky-600 text-white text-xs font-bold whitespace-nowrap">BOOK NOW</Link></div>
        </div>
      </section>

      {/* Why NexVolt */}
      <section className="bg-white py-12 border-y border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[11px] tracking-[0.2em] font-bold text-emerald-600">WHY NEXVOLT</div>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-zinc-900">Intelligent • Reliable • Technical • Premium.</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">We don&apos;t sell panels. We engineer <span className="text-zinc-900 font-semibold">connected ecosystems</span> — energy, security, automation and monitoring in one control plane. From Karen villas to Westlands towers.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Licensed engineers", "Tier-1 technology partners", "Hybrid & off-grid expertise", "Remote monitoring & SLA", "Professional installation", "Financing & warranty"].map(i=>(
                <li key={i} className="flex gap-2 items-center text-sm text-zinc-700"><span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center"><Check className="h-3 w-3"/></span> {i}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 p-6 text-white shadow">
              <LineChart className="h-6 w-6"/><div className="mt-3 text-2xl font-bold">3.2 GWh</div><div className="text-xs tracking-widest opacity-90">ENERGY MANAGED</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <Zap className="h-6 w-6 text-amber-500"/><div className="mt-3 text-2xl font-bold text-zinc-900">24/7</div><div className="text-xs tracking-widest text-zinc-500">MONITORING</div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <Cpu className="h-6 w-6 text-violet-500"/><div className="mt-3 text-2xl font-bold text-zinc-900">120+</div><div className="text-xs tracking-widest text-zinc-500">SMART HOMES</div>
            </div>
            <div className="rounded-2xl bg-zinc-900 text-white p-6 shadow">
              <Building2 className="h-6 w-6"/><div className="mt-3 text-2xl font-bold">80+</div><div className="text-xs tracking-widest text-zinc-400">ENTERPRISE SITES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home + Solar + Security + Commercial dark sections */}
      <section className="bg-zinc-50 py-12 border-y border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6 grid lg:grid-cols-3 gap-4">
          {[
            { title:"Smart Home Showcase", desc:"Living, bedroom, kitchen, outdoor — scenes like Good Morning, Movie Mode, Away.", cta:"Explore Smart Home", href:"/smart-home" },
            { title:"Solar & Battery", desc:"5kW hybrid + 10kWh modular lithium. Save KES 24k/month, 4hr backup.", cta:"Size Your System", href:"/calculator" },
            { title:"Security Technology", desc:"4MP ColorVu, NVRs, biometrics, gate & electric fence — one app.", cta:"View Security", href:"/solutions/security" },
          ].map(s=>(
            <div key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col shadow-sm">
              <h3 className="font-bold text-lg text-zinc-900">{s.title}</h3>
              <p className="text-sm text-zinc-600 mt-2 flex-1">{s.desc}</p>
              <Link href={s.href} className="mt-4 inline-flex h-9 px-4 rounded-full bg-zinc-900 text-white text-xs font-bold items-center w-fit">{s.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Energy Monitoring preview */}
      <section className="bg-white border-y border-zinc-200 py-12">
        <div className="mx-auto max-w-[1280px] px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm">
            <div className="flex items-center justify-between"><div className="text-xs tracking-widest text-zinc-500 font-bold">ENERGY MONITORING DASHBOARD • LIVE</div><span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"/></div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white border border-zinc-200 p-4 shadow-sm"><div className="text-xs text-zinc-500">SOLAR NOW</div><div className="text-xl font-bold text-zinc-900">4.2 kW</div><div className="text-xs text-emerald-600">▲ 12% vs yesterday</div></div>
              <div className="rounded-xl bg-white border border-zinc-200 p-4 shadow-sm"><div className="text-xs text-zinc-500">BATTERY</div><div className="text-xl font-bold text-zinc-900">78%</div><div className="text-xs text-zinc-500">6.2 hrs backup</div></div>
              <div className="rounded-xl bg-white border border-zinc-200 p-4 shadow-sm"><div className="text-xs text-zinc-500">SAVED TODAY</div><div className="text-xl font-bold text-zinc-900">KES 1,240</div><div className="text-xs text-zinc-500">18.4 kWh</div></div>
            </div>
            <div className="mt-4 rounded-xl bg-white border border-zinc-200 p-3">
              <div className="flex items-center justify-between text-[11px] font-bold"><span className="tracking-widest text-zinc-500">OUTPUT • kW OVER 24H</span><span className="text-emerald-600">▲ 12% vs yesterday</span></div>
              <svg viewBox="0 0 560 160" className="mt-2 h-28 w-full" role="img" aria-label="Solar output over 24 hours, peaking at 5.2 kilowatts midday">
                <defs>
                  <linearGradient id="nvSolarFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.35"/>
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {[88.7, 49.3, 10].map((y, i)=>(
                  <g key={y}>
                    <line x1="30" y1={y} x2="550" y2={y} stroke="#E4E4E7" strokeWidth="1" strokeDasharray="4 4"/>
                    <text x="4" y={y + 3} fontSize="9" fill="#71717A">{[2, 4, 6][i]}kW</text>
                  </g>
                ))}
                <path d="M30,128 L51.7,128 L73.3,128 L95,128 L116.7,128 L138.3,128 L160,124.1 L181.7,112.3 L203.3,92.6 L225,72.9 L246.7,57.2 L268.3,43.4 L290,33.6 L311.7,25.7 L333.3,29.7 L355,39.5 L376.7,55.2 L398.3,74.9 L420,98.5 L441.7,120.1 L463.3,128 L485,128 L506.7,128 L528.3,128 L550,128 L550,128 L30,128 Z" fill="url(#nvSolarFill)"/>
                <path d="M30,128 L51.7,128 L73.3,128 L95,128 L116.7,128 L138.3,128 L160,124.1 L181.7,112.3 L203.3,92.6 L225,72.9 L246.7,57.2 L268.3,43.4 L290,33.6 L311.7,25.7 L333.3,29.7 L355,39.5 L376.7,55.2 L398.3,74.9 L420,98.5 L441.7,120.1 L463.3,128 L485,128 L506.7,128 L528.3,128 L550,128" fill="none" stroke="#0EA5E9" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
                <circle cx="311.7" cy="25.7" r="3.5" fill="#10B981" stroke="white" strokeWidth="1.5"/>
                <text x="311.7" y="16" fontSize="9" fontWeight="bold" fill="#059669" textAnchor="middle">PEAK 5.2 kW</text>
                <circle cx="257.5" cy="50.3" r="4" fill="#0EA5E9" stroke="white" strokeWidth="2"/>
                <text x="257.5" y="40" fontSize="9" fontWeight="bold" fill="#0284C7" textAnchor="middle">NOW 4.2 kW</text>
                <text x="30" y="144" fontSize="9" fill="#71717A" textAnchor="middle">12a</text>
                <text x="160" y="144" fontSize="9" fill="#71717A" textAnchor="middle">6a</text>
                <text x="290" y="144" fontSize="9" fill="#71717A" textAnchor="middle">12p</text>
                <text x="420" y="144" fontSize="9" fill="#71717A" textAnchor="middle">6p</text>
                <text x="545" y="144" fontSize="9" fill="#71717A" textAnchor="middle">11p</text>
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-zinc-900">Energy intelligence in your pocket</h2>
            <p className="text-sm text-zinc-600 mt-3">Monitor solar yield, battery, grid import & device consumption per circuit. Get anomaly alerts, carbon saved and bill forecasts.</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500"/> Remote building management</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500"/> M-Pesa / Pesapal billing integration</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-500"/> Weekly performance reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries + Commercial */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="text-[11px] tracking-[0.2em] font-bold text-zinc-500">COMMERCIAL & INDUSTRIAL • INDUSTRIES SERVED</div>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-2">Offices, hotels, hospitals, farms & real estate — one integrated stack</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {["Office buildings","Hotels","Hospitals","Schools","Warehouses","Factories","Retail stores","Apartments","Farms","Data centres","Government","Real estate"].map(i=>(
              <div key={i} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center text-sm font-medium text-zinc-700 hover:bg-white hover:shadow">{i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-zinc-50 py-12 border-t border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex items-end justify-between"><h2 className="text-2xl font-bold text-zinc-900">Projects & Installations</h2><Link href="/projects" className="text-sm font-semibold text-sky-600">View portfolio →</Link></div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {projectsMock.slice(0,3).map(p=>(
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition">
                <img src={p.image} alt={p.title} className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"/>
                <div className="p-4"><div className="text-xs tracking-widest text-sky-600 font-bold">{p.category.toUpperCase()} • {p.location}</div><div className="font-semibold mt-1 line-clamp-2 text-zinc-900 group-hover:text-sky-700">{p.title}</div><div className="text-xs text-zinc-500 mt-1">{p.size}</div><div className="mt-2 text-xs font-bold text-sky-600">VIEW PROJECT →</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials + Brands */}
      <section className="bg-white py-12 border-y border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map(t=>(
              <div key={t.name} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <div className="text-amber-500 text-sm">★★★★★</div>
                <p className="text-sm leading-6 mt-3 text-zinc-700">&ldquo;{t.content}&rdquo;</p>
                <div className="mt-4 text-sm font-bold text-zinc-900">{t.name}</div><div className="text-xs text-zinc-500">{t.role}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <div className="text-center text-[11px] tracking-[0.2em] font-bold text-zinc-500">TRUSTED TECHNOLOGY BRANDS</div>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {brands.map(b=><div key={b.name} className="rounded-xl border border-zinc-200 bg-zinc-50 h-12 grid place-items-center text-xs font-bold tracking-widest text-zinc-700">{b.name.toUpperCase()}</div>)}
            </div>
            <p className="text-center text-[11px] text-zinc-500 mt-3">Brand display only — authorization status configurable by administrator.</p>
          </div>
        </div>
      </section>

      {/* Latest insights + CTA */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex items-end justify-between"><h2 className="text-2xl font-semibold text-zinc-900">Latest Insights</h2><Link href="/blog" className="text-sm font-medium text-zinc-900 border border-zinc-200 rounded-full px-4 py-2">Knowledge Centre</Link></div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { cat:"Solar Energy", title:"Hybrid vs Off-grid: What Kenyan Homes Actually Need in 2026", slug:"hybrid-vs-offgrid-kenya", img:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600" },
              { cat:"Smart Homes", title:"Matter, Tuya & Local Control — Building a Reliable Smart Home", slug:"smart-home-kenya-matter-tuya", img:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600" },
              { cat:"Buying Guide", title:"Lithium Batteries: How to Size for 4-Hour Backup Correctly", slug:"lithium-batteries-kenya-guide", img:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600" },
            ].map(a=>(
              <Link key={a.title} href={`/blog/${a.slug}`} className="group rounded-2xl border border-zinc-200 overflow-hidden bg-white hover:shadow-md transition">
                <div className="h-40 overflow-hidden"><img src={a.img} alt={a.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500"/></div>
                <div className="p-4"><div className="text-[11px] tracking-widest font-bold text-sky-600">{a.cat.toUpperCase()}</div><div className="font-medium text-zinc-900 mt-1 group-hover:text-sky-700">{a.title}</div><div className="mt-2 text-xs font-bold text-sky-600">READ GUIDE →</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-14 border-t border-zinc-200">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-[24px] border border-zinc-200 bg-white shadow-sm p-[1px]">
            <div className="rounded-[24px] bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 p-[1px]">
              <div className="rounded-[24px] bg-white px-6 py-10 lg:px-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div><h2 className="font-display text-3xl font-bold text-zinc-900">NexVolt connects energy, security and intelligent technology into one ecosystem.</h2><p className="text-sm text-zinc-600 mt-2">Discover, configure, purchase and request installation — in one platform. <span className="text-zinc-900 font-bold">500+ sites. Zero pushy sales — just engineering.</span></p></div>
                  <div className="flex gap-3 shrink-0">
                    <Link href="/shop" className="h-11 px-6 rounded-full bg-white border border-zinc-200 text-zinc-900 text-sm font-bold inline-flex items-center">Shop Technology</Link>
                    <Link href="/quote" className="h-11 px-6 rounded-full bg-sky-500 text-white text-sm font-bold inline-flex items-center shadow-[0_0_24px_rgba(14,165,233,0.3)]">Request a Quote — 2hr Response</Link>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold">
                  <span className="rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1.5 text-zinc-700">✓ Licensed EPRA</span>
                  <span className="rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1.5 text-zinc-700">✓ 4.9★ Google (127 reviews)</span>
                  <span className="rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1.5 text-zinc-700">✓ Price-beat by 5%</span>
                  <span className="rounded-full bg-emerald-500 text-white px-3 py-1.5">⚡ 17 installs this month — 3 slots left</span>
                </div>
                <div className="mt-3 text-xs text-zinc-500">No hidden fees. Quote in 2 hours. Install in 72 hours. Pay on delivery available. Call <span className="text-zinc-900 font-bold">0700 000 000</span> now.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from "next/link"
import RelatedProducts from "@/components/shop/RelatedProducts"
export const metadata={title:"Commercial & Industrial Solutions Kenya — Solar + CCTV + Wi-Fi | NexVolt", description:"Commercial solar Kenya: offices, hotels, hospitals, schools, warehouses, farms — integrated solar, backup, CCTV, networking, access, BMS, energy monitoring."}
export default function BusinessPage(){
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400" alt="Commercial" className="h-full w-full object-cover opacity-15"/>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"/>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><Link href="/solutions" className="hover:text-zinc-900">Solutions</Link><span>›</span><span className="text-zinc-900 font-semibold">Business</span></nav>
          <div className="inline-flex rounded-full bg-zinc-900 text-white px-3 py-1 text-xs font-black tracking-widest">ENTERPRISE • 12 INDUSTRIES</div>
          <h1 className="font-display text-3xl lg:text-4xl font-black mt-3 text-zinc-900">Commercial & Industrial — One Stack for Every Site</h1>
          <p className="text-[15px] text-zinc-600 mt-3 max-w-2xl leading-6">Offices, hotels, hospitals, schools, warehouses, factories, retail, apartments, farms, data centres, government — <span className="font-bold text-zinc-900">solar + backup + CCTV + Wi-Fi + access + BMS + monitoring. Reduce OPEX 30–40%.</span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-sky-500 text-white font-bold">Get Enterprise Quote — 24h Design</Link>
            <a href="https://wa.me/254700000000?text=Enterprise%20quote%20request" target="_blank" className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-[#25D366] text-white font-bold">WhatsApp Enterprise Team</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {n:"Office Buildings", d:"Wi-Fi 500 users + access + solar", img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"},
            {n:"Hotels", d:"64 cams + BMS + keycard", img:"https://images.unsplash.com/photo-1566070777625-cd38da1a9672?w=400"},
            {n:"Hospitals", d:"UPS + CCTV + access", img:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400"},
            {n:"Schools", d:"Wi-Fi + CCTV + gate", img:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400"},
            {n:"Warehouses", d:"Solar 100kW + CCTV", img:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400"},
            {n:"Factories", d:"Solar + power quality", img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400"},
            {n:"Retail Stores", d:"CCTV + POS network", img:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400"},
            {n:"Apartments", d:"Gate + intercom + solar", img:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"},
            {n:"Farms", d:"Solar pumping + cold storage", img:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400"},
            {n:"Data Centres", d:"UPS + cooling + access", img:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400"},
            {n:"Government", d:"Secure networks", img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400"},
            {n:"Real Estate", d:"Master solar + BMS", img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"},
          ].map(i=>(
            <div key={i.n} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={i.img} alt={i.n} className="h-20 w-full object-cover"/>
              <div className="p-3"><div className="font-bold text-sm text-zinc-900">{i.n}</div><div className="text-xs text-zinc-600 mt-1">{i.d}</div></div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-5">
          {[
            {h:"Hotel Sankara", p:"64x 4MP ColorVu + 20kW hybrid + UniFi 40 APs — occupancy-linked BMS. Bill down 28%.", img:"https://images.unsplash.com/photo-1566070777625-cd38da1a9672?w=600"},
            {h:"Factory Thika — 100kW", p:"100kWp JA Solar + 50kWh Luna + hybrid — diesel down 70%, payback 3.1yrs.", img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"},
            {h:"School Karen", p:"CCTV 32 + Wi-Fi 500 users + gate + solar — managed remotely, 0 theft.", img:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600"},
          ].map(c=>(
            <div key={c.h} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
              <img src={c.img} alt={c.h} className="h-32 w-full object-cover"/>
              <div className="p-4"><h3 className="font-bold text-zinc-900 text-sm">{c.h}</h3><p className="text-sm text-zinc-600 mt-2">{c.p}</p></div>
            </div>
          ))}
        </div>
      </div>
      <RelatedProducts
        categories={[]}
        title="Related Products — Enterprise Shop"
        subtitle="100kW solar kits, Luna banks, NVRs, U6-Pro bulk — enterprise pricing @nexvolttechke."
        guideHref="/blog/commercial-solar-kenya-30kw"
        guideLabel="Read ROI Guide"
      />
    </div>
  )
}

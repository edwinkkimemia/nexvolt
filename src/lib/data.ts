export const brands = [
  { name: "Victron Energy", slug: "victron-energy" },
  { name: "Huawei", slug: "huawei" },
  { name: "Growatt", slug: "growatt" },
  { name: "Deye", slug: "deye" },
  { name: "Sungrow", slug: "sungrow" },
  { name: "JA Solar", slug: "ja-solar" },
  { name: "Jinko Solar", slug: "jinko-solar" },
  { name: "Canadian Solar", slug: "canadian-solar" },
  { name: "Hikvision", slug: "hikvision" },
  { name: "Dahua", slug: "dahua" },
  { name: "Ubiquiti", slug: "ubiquiti" },
  { name: "TP-Link", slug: "tp-link" },
]

export const categories = [
  { name: "Solar Panels", slug: "solar-panels", icon: "☀️" },
  { name: "Inverters", slug: "inverters", icon: "⚡" },
  { name: "Lithium Batteries", slug: "lithium-batteries", icon: "🔋" },
  { name: "Smart Switches", slug: "smart-switches", icon: "💡" },
  { name: "Smart Locks", slug: "smart-locks", icon: "🔒" },
  { name: "CCTV Cameras", slug: "cctv-cameras", icon: "📹" },
  { name: "Wi-Fi Equipment", slug: "wifi-equipment", icon: "📶" },
  { name: "EV Chargers", slug: "ev-chargers", icon: "🚗" },
]

export type MockProduct = {
  id: string; slug: string; name: string; brand: string; category: string;
  price: number; salePrice?: number; rating: number; stock: number; image: string;
  images?: string[];
  specs: string; description?: string; specTable?: { k: string; v: string }[];
  tags: ("New"|"Featured"|"Best Seller"|"Sale"|"Limited Stock")[];
}

export const products: MockProduct[] = [
  { id:"1", slug:"jinko-550w-mono", name:"Jinko Tiger Neo 550W Mono Solar Panel", brand:"Jinko Solar", category:"Solar Panels", price:1850000, salePrice:1690000, rating:4.8, stock:42, image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600", images:["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600","https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600"], specs:"550W • 21.5% Eff • 25yr Warranty",
    description:"Jinko Tiger Neo 550W uses N-type mono cells for higher yield in Nairobi heat and low light. Six of these (≈3.3kWp) power an average 3-bedroom home's daytime load and recharge a 5kWh battery in ~4 sun-hours. Tier-1 bankable panel with local warranty support.",
    specTable:[{k:"Rated Power",v:"550W"},{k:"Efficiency",v:"21.5%"},{k:"Cell Type",v:"N-type Mono"},{k:"Temp. Coefficient",v:"-0.29%/°C"},{k:"Connector",v:"MC4 IP68"},{k:"Warranty",v:"25yr linear • 12yr product"}], tags:["Featured","Best Seller"] },
  { id:"2", slug:"deye-5kw-hybrid", name:"Deye 5kW Hybrid Solar Inverter SUN-5K-SG04LP1", brand:"Deye", category:"Inverters", price:12990000, rating:4.9, stock:12, image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600", images:["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600","https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600","https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"], specs:"5kW • MPPT • Wi-Fi • Hybrid",
    description:"The Deye 5kW hybrid is Kenya's workhorse home inverter: solar + battery + grid + generator ports with 10ms auto-switchover, dual MPPT for split roofs, Wi-Fi monitoring and parallel stacking to 30kW. Net-metering ready for KPLC credit.",
    specTable:[{k:"Rated Output",v:"5kW pure sine"},{k:"MPPT",v:"2 trackers"},{k:"Max PV Input",v:"6,500W"},{k:"Battery",v:"48V LiFePO4/lead-acid"},{k:"Monitoring",v:"Wi-Fi + app"},{k:"Warranty",v:"5 years (extendable)"}], tags:["Featured","New"] },
  { id:"3", slug:"huawei-luna-5kwh", name:"Huawei LUNA2000 5kWh Lithium Battery Module", brand:"Huawei", category:"Lithium Batteries", price:24500000, rating:4.9, stock:8, image:"https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600", images:["https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600","https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600","https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"], specs:"5kWh • LiFePO4 • Modular 15kWh",
    description:"Huawei LUNA2000 5kWh LiFePO4 module with built-in BMS — stack two more for 15kWh without rewiring. One module runs lights, fridge, TV and Wi-Fi through the night; silent, wall-mounted, app SOC monitoring, 10-year warranty.",
    specTable:[{k:"Capacity",v:"5kWh usable"},{k:"Chemistry",v:"LiFePO4 + BMS"},{k:"Scalability",v:"Up to 15kWh (3 modules)"},{k:"DoD",v:"100% usable"},{k:"Rating",v:"IP66 indoor/outdoor"},{k:"Warranty",v:"10 years"}], tags:["Featured","Sale"] },
  { id:"4", slug:"hikvision-4mp-colorvu", name:"Hikvision 4MP ColorVu Dome Camera DS-2CD2347G2", brand:"Hikvision", category:"CCTV Cameras", price:1450000, salePrice:1190000, rating:4.7, stock:30, image:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600", images:["https://images.unsplash.com/photo-1558002038-1055907df827?w=600","https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600","https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"], specs:"4MP • ColorVu • IP67 • PoE",
    description:"Hikvision 4MP ColorVu dome sees full colour at night — faces and plates stay identifiable where IR cameras go black-white. PoE one-cable install, IP67 dust/rain proof for Nairobi weather, pairs with AcuSense NVRs for person/vehicle alerts.",
    specTable:[{k:"Resolution",v:"4MP (2688×1520)"},{k:"Night Vision",v:"ColorVu, full colour"},{k:"Lens",v:"2.8mm wide angle"},{k:"Protection",v:"IP67 • PoE"},{k:"Codec",v:"H.265+ (low storage)"},{k:"Warranty",v:"2 years"}], tags:["Best Seller"] },
  { id:"5", slug:"tuya-smart-switch-1g", name:"Tuya Smart Glass Switch 1-Gang - Black", brand:"Tuya", category:"Smart Switches", price:350000, rating:4.6, stock:120, image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", images:["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600","https://images.unsplash.com/photo-1558002038-1055907df827?w=600","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"], specs:"Wi-Fi • Touch • Voice • App",
    description:"Premium black glass touch switch that retrofits a standard back-box — no rewiring. App schedules, Alexa/Google voice, and scene linking (Movie Mode dims it automatically). Works offline on local Wi-Fi when internet drops.",
    specTable:[{k:"Gangs",v:"1-gang touch glass"},{k:"Load",v:"10A lighting"},{k:"Wireless",v:"2.4GHz Wi-Fi + app"},{k:"Voice",v:"Alexa • Google"},{k:"Wiring",v:"Neutral required"},{k:"Warranty",v:"1 year"}], tags:["New"] },
  { id:"6", slug:"ubiquiti-u6-pro", name:"Ubiquiti UniFi 6 Pro Access Point", brand:"Ubiquiti", category:"Wi-Fi Equipment", price:2850000, rating:4.8, stock:18, image:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", images:["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600","https://images.unsplash.com/photo-1497366216548-37526070297c?w=600","https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"], specs:"Wi-Fi 6 • 4x4 MIMO • 300+ clients",
    description:"Ubiquiti UniFi 6 Pro — the access point we deploy in hotels and schools: Wi-Fi 6 4x4 MU-MIMO, 300+ concurrent clients, seamless roaming between APs and cloud controller monitoring. Zero dead zones when heatmap-surveyed by our team.",
    specTable:[{k:"Standard",v:"Wi-Fi 6 (802.11ax)"},{k:"MIMO",v:"4x4 MU-MIMO"},{k:"Clients",v:"300+"},{k:"Power",v:"PoE+"},{k:"Management",v:"UniFi cloud controller"},{k:"Warranty",v:"1 year"}], tags:["Featured"] },
  { id:"7", slug:"growatt-3kw-offgrid", name:"Growatt 3kW Off-Grid Inverter SPF 3000TL", brand:"Growatt", category:"Inverters", price:8900000, rating:4.5, stock:6, image:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600", images:["https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600","https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600"], specs:"3kW • 24V • MPPT 80A",
    description:"Growatt 3kW off-grid inverter for farms and upcountry homes beyond KPLC reach: 24V system, 80A MPPT, pure sine output safe for pumps, fridges and electronics. The budget route to full energy independence.",
    specTable:[{k:"Rated Output",v:"3kW pure sine"},{k:"Battery",v:"24VDC"},{k:"MPPT",v:"80A built-in"},{k:"Output",v:"230VAC ±5%"},{k:"Use Case",v:"Off-grid homes & farms"},{k:"Warranty",v:"2 years"}], tags:["Limited Stock"] },
  { id:"8", slug:"ev-charger-7kw", name:"NexVolt Smart EV Charger 7kW Wallbox", brand:"NexVolt", category:"EV Chargers", price:9500000, rating:4.9, stock:15, image:"https://images.unsplash.com/photo-1593941707882-a56bbc7c2e1b?w=600", images:["https://images.unsplash.com/photo-1593941707882-a56bbc7c2e1b?w=600","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"], specs:"7kW • Type 2 • OCPP • Solar Link",
    description:"NexVolt 7kW wallbox charges ~45km of range per hour from single-phase power, with solar-excess mode that only charges from surplus PV. Type 2 connector, OCPP backend, RFID + app, dynamic load balancing so the house never trips.",
    specTable:[{k:"Power",v:"7kW (32A single-phase)"},{k:"Connector",v:"Type 2"},{k:"Backend",v:"OCPP 1.6J + app + RFID"},{k:"Solar Mode",v:"Excess-PV charging"},{k:"Protection",v:"IP54 • load balancing"},{k:"Warranty",v:"2 years + install"}], tags:["New","Featured"] },
]

export const projectsMock = [
  { slug:"karen-villa-smart", title:"Karen Luxury Villa – Full Smart & Solar Integration", location:"Karen, Nairobi", category:"Residential", size:"10kW Solar + 10kWh Storage", image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" },
  { slug:"westlands-tower-cctv", title:"Westlands Corporate Tower – AI Surveillance & Access", location:"Westlands, Nairobi", category:"Commercial", size:"64 Cameras + Biometric", image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" },
  { slug:"naivasha-farm-solar", title:"Naivasha Farm – Hybrid Solar & Water Pumping", location:"Naivasha", category:"Industrial", size:"30kW Hybrid System", image:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800" },
  { slug:"lavington-smart-apartments", title:"Lavington Apartments – Smart Access & Gate Automation", location:"Lavington, Nairobi", category:"Smart Home", size:"24 Units + Biometric + Gate", image:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800" },
  { slug:"diani-hotel-solar", title:"Diani Beach Hotel – 50kW Solar + Hot Water", location:"Diani, Kwale", category:"Commercial", size:"50kWp + 30kWh Storage", image:"https://images.unsplash.com/photo-1566070777625-cd38da1a9672?w=800" },
  { slug:"eldoret-factory-power", title:"Eldoret Food Factory – 100kW Hybrid & UPS", location:"Eldoret", category:"Industrial", size:"100kW Hybrid + UPS", image:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" },
]

export const testimonials = [
  { name:"James Mwangi", role:"Homeowner, Kileleshwa", content:"NexVolt transformed our home – solar, smart lighting and security all in one app. Professional team, flawless execution.", rating:5 },
  { name:"Sarah Ochieng", role:"Operations Manager, Sankara Hotel", content:"Enterprise networking and backup power solved our uptime issues. Their energy monitoring dashboard pays for itself.", rating:5 },
  { name:"Dr. Amina Patel", role:"Director, Aga Khan School", content:"From CCTV to access control, everything is integrated. Support is responsive and truly technical.", rating:5 },
]

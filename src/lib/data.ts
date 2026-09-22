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
  specs: string; tags: ("New"|"Featured"|"Best Seller"|"Sale"|"Limited Stock")[];
}

export const products: MockProduct[] = [
  { id:"1", slug:"jinko-550w-mono", name:"Jinko Tiger Neo 550W Mono Solar Panel", brand:"Jinko Solar", category:"Solar Panels", price:1850000, salePrice:1690000, rating:4.8, stock:42, image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600", images:["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600","https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600"], specs:"550W • 21.5% Eff • 25yr Warranty", tags:["Featured","Best Seller"] },
  { id:"2", slug:"deye-5kw-hybrid", name:"Deye 5kW Hybrid Solar Inverter SUN-5K-SG04LP1", brand:"Deye", category:"Inverters", price:12990000, rating:4.9, stock:12, image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600", images:["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600","https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600","https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"], specs:"5kW • MPPT • Wi-Fi • Hybrid", tags:["Featured","New"] },
  { id:"3", slug:"huawei-luna-5kwh", name:"Huawei LUNA2000 5kWh Lithium Battery Module", brand:"Huawei", category:"Lithium Batteries", price:24500000, rating:4.9, stock:8, image:"https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600", images:["https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600","https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600","https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"], specs:"5kWh • LiFePO4 • Modular 15kWh", tags:["Featured","Sale"] },
  { id:"4", slug:"hikvision-4mp-colorvu", name:"Hikvision 4MP ColorVu Dome Camera DS-2CD2347G2", brand:"Hikvision", category:"CCTV Cameras", price:1450000, salePrice:1190000, rating:4.7, stock:30, image:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600", images:["https://images.unsplash.com/photo-1558002038-1055907df827?w=600","https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600","https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"], specs:"4MP • ColorVu • IP67 • PoE", tags:["Best Seller"] },
  { id:"5", slug:"tuya-smart-switch-1g", name:"Tuya Smart Glass Switch 1-Gang - Black", brand:"Tuya", category:"Smart Switches", price:350000, rating:4.6, stock:120, image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", images:["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600","https://images.unsplash.com/photo-1558002038-1055907df827?w=600","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"], specs:"Wi-Fi • Touch • Voice • App", tags:["New"] },
  { id:"6", slug:"ubiquiti-u6-pro", name:"Ubiquiti UniFi 6 Pro Access Point", brand:"Ubiquiti", category:"Wi-Fi Equipment", price:2850000, rating:4.8, stock:18, image:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600", images:["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600","https://images.unsplash.com/photo-1497366216548-37526070297c?w=600","https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"], specs:"Wi-Fi 6 • 4x4 MIMO • 300+ clients", tags:["Featured"] },
  { id:"7", slug:"growatt-3kw-offgrid", name:"Growatt 3kW Off-Grid Inverter SPF 3000TL", brand:"Growatt", category:"Inverters", price:8900000, rating:4.5, stock:6, image:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600", images:["https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600","https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600"], specs:"3kW • 24V • MPPT 80A", tags:["Limited Stock"] },
  { id:"8", slug:"ev-charger-7kw", name:"NexVolt Smart EV Charger 7kW Wallbox", brand:"NexVolt", category:"EV Chargers", price:9500000, rating:4.9, stock:15, image:"https://images.unsplash.com/photo-1593941707882-a56bbc7c2e1b?w=600", images:["https://images.unsplash.com/photo-1593941707882-a56bbc7c2e1b?w=600","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"], specs:"7kW • Type 2 • OCPP • Solar Link", tags:["New","Featured"] },
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

export type MockOrder = {
  id: string; number: string; date: string; status: "Processing" | "Shipped" | "Delivered" | "Pending";
  items: { name: string; qty: number; price: number }[]; total: number;
  tracking: { label: string; done: boolean; date?: string }[];
}

export const mockOrders: MockOrder[] = [
  {
    id: "ord-1001", number: "NV-2026-1001", date: "2026-09-10", status: "Shipped",
    items: [{ name: "Jinko Tiger Neo 550W Mono Solar Panel", qty: 4, price: 1690000 }, { name: "Deye 5kW Hybrid Inverter", qty: 1, price: 12990000 }],
    total: 19750000,
    tracking: [
      { label: "Order confirmed", done: true, date: "Sep 10" },
      { label: "Packed at Nairobi warehouse", done: true, date: "Sep 11" },
      { label: "In transit — Nairobi to Kiambu", done: true, date: "Sep 12" },
      { label: "Out for delivery", done: false },
      { label: "Delivered + installation scheduled", done: false },
    ],
  },
  {
    id: "ord-998", number: "NV-2026-0998", date: "2026-08-28", status: "Delivered",
    items: [{ name: "Hikvision 4MP ColorVu Dome Camera", qty: 4, price: 1190000 }],
    total: 4760000,
    tracking: [
      { label: "Order confirmed", done: true, date: "Aug 28" },
      { label: "Installed by NexVolt team", done: true, date: "Aug 30" },
      { label: "Delivered", done: true, date: "Aug 30" },
    ],
  },
  {
    id: "ord-1003", number: "NV-2026-1003", date: "2026-09-18", status: "Processing",
    items: [{ name: "Ubiquiti UniFi 6 Pro Access Point", qty: 2, price: 2850000 }],
    total: 5700000,
    tracking: [
      { label: "Order confirmed", done: true, date: "Sep 18" },
      { label: "Packing", done: false },
      { label: "Shipped", done: false },
      { label: "Delivered", done: false },
    ],
  },
]

export type MockQuote = { ref: string; type: string; date: string; status: "New" | "Reviewing" | "Quoted" | "Accepted"; total?: number }
export const mockQuotes: MockQuote[] = [
  { ref: "NVQ-2026-4821", type: "Solar 5kW Hybrid", date: "2026-09-15", status: "Quoted", total: 69900000 },
  { ref: "NVQ-2026-4790", type: "Smart Home — 3BR", date: "2026-08-30", status: "Accepted", total: 45000000 },
  { ref: "NVQ-2026-4833", type: "CCTV 8-Cam", date: "2026-09-19", status: "Reviewing" },
]

export type MockTicket = { id: string; subject: string; date: string; status: "Open" | "Answered" | "Closed"; messages: number }
export const mockTickets: MockTicket[] = [
  { id: "T-201", subject: "Inverter Wi-Fi monitoring offline", date: "2026-09-12", status: "Answered", messages: 3 },
  { id: "T-198", subject: "CCTV playback not loading on phone", date: "2026-09-05", status: "Closed", messages: 5 },
]

export type MockAddress = { id: string; label: string; line1: string; city: string; county: string; phone: string; isDefault: boolean }
export const mockAddresses: MockAddress[] = [
  { id: "a1", label: "Home", line1: "Mumwe Road, House 12", city: "Karen", county: "Nairobi", phone: "0700 123 456", isDefault: true },
  { id: "a2", label: "Site — Kiambu", line1: "Plot 44, Ruiru Bypass", city: "Ruiru", county: "Kiambu", phone: "0700 123 456", isDefault: false },
]

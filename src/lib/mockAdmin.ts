export type AdminOrder = {
  id: string; number: string; date: string; customer: string; county: string;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  payment: "Paid" | "Pending" | "Failed"; total: number; items: number;
}

export const adminOrders: AdminOrder[] = [
  { id: "o1", number: "NV-2026-1003", date: "Sep 18", customer: "Brian Kamau", county: "Nairobi", status: "Processing", payment: "Paid", total: 5700000, items: 2 },
  { id: "o2", number: "NV-2026-1001", date: "Sep 10", customer: "Sarah Ochieng", county: "Kiambu", status: "Shipped", payment: "Paid", total: 19750000, items: 5 },
  { id: "o3", number: "NV-2026-0998", date: "Aug 28", customer: "Dr. Amina Patel", county: "Nairobi", status: "Delivered", payment: "Paid", total: 4760000, items: 4 },
  { id: "o4", number: "NV-2026-1004", date: "Sep 19", customer: "James Mwangi", county: "Machakos", status: "Pending", payment: "Pending", total: 12990000, items: 1 },
  { id: "o5", number: "NV-2026-0995", date: "Aug 20", customer: "Grace Njeri", county: "Nakuru", status: "Delivered", payment: "Paid", total: 350000, items: 3 },
  { id: "o6", number: "NV-2026-0991", date: "Aug 15", customer: "Peter Odhiambo", county: "Kisumu", status: "Cancelled", payment: "Failed", total: 2850000, items: 1 },
]

export type AdminCustomer = { id: string; name: string; phone: string; email: string; county: string; orders: number; spent: number; since: string }
export const adminCustomers: AdminCustomer[] = [
  { id: "c1", name: "Brian Kamau", phone: "0700 123 456", email: "brian@example.com", county: "Nairobi", orders: 3, spent: 25450000, since: "2026-06-02" },
  { id: "c2", name: "Sarah Ochieng", phone: "0711 987 654", email: "sarah@example.com", county: "Kiambu", orders: 2, spent: 24500000, since: "2026-05-19" },
  { id: "c3", name: "Dr. Amina Patel", phone: "0722 456 789", email: "amina@example.com", county: "Nairobi", orders: 4, spent: 31200000, since: "2026-03-11" },
  { id: "c4", name: "James Mwangi", phone: "0733 222 111", email: "james@example.com", county: "Machakos", orders: 1, spent: 12990000, since: "2026-09-19" },
  { id: "c5", name: "Grace Njeri", phone: "0701 555 333", email: "grace@example.com", county: "Nakuru", orders: 2, spent: 1800000, since: "2026-07-04" },
]

export type AdminCoupon = { code: string; type: "percent" | "fixed"; value: number; uses: number; active: boolean }
export const adminCoupons: AdminCoupon[] = [
  { code: "SOLAR12", type: "percent", value: 12, uses: 34, active: true },
  { code: "FREESURVEY", type: "fixed", value: 1500000, uses: 51, active: true },
  { code: "WELCOME5", type: "percent", value: 5, uses: 89, active: false },
]

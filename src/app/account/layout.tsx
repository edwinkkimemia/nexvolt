import Link from "next/link"

const links = [
  { label: "Overview", href: "/account" },
  { label: "Profile", href: "/account/profile" },
  { label: "Addresses", href: "/account/addresses" },
  { label: "Orders", href: "/account/orders" },
  { label: "Quotations", href: "/account/quotations" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Compare", href: "/compare" },
  { label: "Support Tickets", href: "/account/support" },
]

export const metadata = { title: "My Account — NexVolt Technologies" }

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <div className="bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-[1100px] px-6 py-6">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-2"><Link href="/" className="hover:text-zinc-900">Home</Link><span>›</span><span className="text-zinc-900 font-semibold">Account</span></nav>
          <h1 className="font-display text-2xl font-black text-zinc-900">My Account</h1>
        </div>
      </div>
      <div className="mx-auto max-w-[1100px] px-6 py-8 grid lg:grid-cols-[230px_1fr] gap-6 items-start">
        <aside className="rounded-2xl border border-zinc-200 p-3 bg-white lg:sticky lg:top-24">
          <nav className="grid grid-cols-2 lg:grid-cols-1 gap-1 text-sm">
            {links.map((l) => (
              <Link key={l.href + l.label} href={l.href} className="rounded-lg px-3 py-2.5 text-zinc-700 font-medium hover:bg-zinc-50 hover:text-zinc-900">{l.label}</Link>
            ))}
          </nav>
          <div className="mt-3 rounded-xl bg-zinc-50 border border-zinc-200 p-3 text-xs text-zinc-600">
            Need help? <a href="https://wa.me/254700000000" target="_blank" className="text-[#1d9e56] font-bold">WhatsApp @nexvolttechke</a>
          </div>
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  )
}

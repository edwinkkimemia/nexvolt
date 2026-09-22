import Link from "next/link"

// NOTE: Protect this route in production with NextAuth middleware (role ADMIN/MANAGER).
// See prisma Role/Permission models + RBAC plan in README.
const links = [
  { label: "Dashboard", href: "/admin" },
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Customers", href: "/admin/customers" },
  { label: "Quotations", href: "/admin/quotations" },
  { label: "Coupons", href: "/admin/coupons" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Blog Posts", href: "/admin/blog" },
  { label: "Support", href: "/admin/support" },
]

export const metadata = { title: "Admin Dashboard — NexVolt", robots: "noindex, nofollow" }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="NexVolt" className="h-9 w-auto" />
            <span className="font-bold tracking-widest text-xs text-zinc-500">ADMIN CONSOLE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">RBAC: ADMIN</span>
            <Link href="/" className="text-xs font-bold text-zinc-600 hover:text-zinc-900 border border-zinc-300 bg-white rounded-full px-3 py-1.5">View Site →</Link>
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-[220px_1fr] gap-5 items-start">
          <aside className="rounded-2xl border border-zinc-200 bg-white p-3 lg:sticky lg:top-24 shadow-sm">
            <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-1 text-sm">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2.5 text-zinc-700 font-medium hover:bg-zinc-100">{l.label}</Link>
              ))}
            </nav>
          </aside>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

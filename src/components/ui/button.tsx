import { cn } from "@/lib/utils"
import Link from "next/link"
export function Button({children, variant="primary", size="md", className, href, ...props}: {children:any, variant?: "primary"|"ghost"|"outline"|"white", size?: "sm"|"md"|"lg", className?:string, href?:string} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base="inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 disabled:opacity-50"
  const variants:Record<string,string>={
    primary:"bg-sky-500 hover:bg-sky-400 text-white shadow-[0_0_24px_rgba(14,165,233,0.35)] hover:shadow-[0_0_32px_rgba(14,165,233,0.5)]",
    white:"bg-white text-zinc-900 hover:bg-zinc-100",
    outline:"border border-white/15 bg-transparent hover:bg-white/10 text-white",
    ghost:"bg-transparent hover:bg-white/10 text-white"
  }
  const sizes:Record<string,string>={ sm:"h-8 px-3 text-xs rounded-full", md:"h-11 px-6 text-sm rounded-full", lg:"h-12 px-8 text-[13px] rounded-full" }
  const cls=cn(base, variants[variant], sizes[size], className)
  if(href) return <Link href={href} className={cls}>{children}</Link>
  return <button className={cls} {...props}>{children}</button>
}

import { cn } from "@/lib/utils"
export function Badge({children, variant="default", className}:{children:any, variant?:string, className?:string}) {
  const map:Record<string,string>={
    default:"bg-sky-500 text-white",
    sale:"bg-emerald-500 text-white",
    new:"bg-white text-zinc-900",
    muted:"bg-white/10 text-zinc-300 border border-white/10",
  }
  return <span className={cn("inline-flex items-center px-2 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full", map[variant]||map.default, className)}>{children}</span>
}

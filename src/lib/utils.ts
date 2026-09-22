import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }

export function formatKES(minor: number) {
  return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(minor / 100)
}

export function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export function generateRef(prefix = "NVQ") {
  const d = new Date()
  const y = d.getFullYear()
  const n = Math.floor(Math.random()*90000+10000)
  return `${prefix}-${y}-${n}`
}

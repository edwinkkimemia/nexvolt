"use client"
import { create } from "zustand"
import { products, type MockProduct } from "@/lib/data"

type CartItem = { product: MockProduct; qty: number }
type CartState = {
  items: CartItem[]
  wishlist: string[]
  compare: string[]
  add: (slug: string, qty?: number) => void
  remove: (slug: string) => void
  toggleWishlist: (slug: string) => void
  toggleCompare: (slug: string) => void
  clearCompare: () => void
  count: () => number
  total: () => number
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  wishlist: [],
  compare: [],
  add: (slug, qty=1) => {
    const p = products.find(x=>x.slug===slug)
    if(!p) return
    const items=[...get().items]
    const idx=items.findIndex(i=>i.product.slug===slug)
    if(idx>=0) items[idx]={...items[idx], qty: items[idx].qty+qty}
    else items.push({ product:p, qty })
    set({items})
  },
  remove: (slug)=> set({ items: get().items.filter(i=>i.product.slug!==slug) }),
  toggleWishlist: (slug)=> {
    const w=get().wishlist
    set({ wishlist: w.includes(slug) ? w.filter(s=>s!==slug) : [...w, slug] })
  },
  toggleCompare: (slug)=> {
    const c=get().compare
    if(c.includes(slug)) set({ compare: c.filter(s=>s!==slug) })
    else if(c.length<4) set({ compare: [...c, slug] })
  },
  clearCompare: ()=> set({ compare: [] }),
  count: ()=> get().items.reduce((a,b)=>a+b.qty,0),
  total: ()=> get().items.reduce((a,b)=>a+b.qty*(b.product.salePrice ?? b.product.price),0),
}))

import { NextResponse } from "next/server"
export async function GET(req: Request){
  const { searchParams } = new URL(req.url)
  const q = searchParams.get("q") || ""
  // const products = await prisma.product.findMany({ where:{ name:{ contains:q, mode:"insensitive"}}, include:{ brand:true, images:true }})
  return NextResponse.json({ products: [], q, pagination:{ page:1, perPage:12, total:0 } })
}

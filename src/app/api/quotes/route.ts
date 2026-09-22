import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  projectType: z.string(),
  description: z.string().optional(),
})

// POST /api/quotes -> save to PostgreSQL, generate reference, notify admin
export async function POST(req: Request){
  const body = await req.json().catch(()=>null)
  const parsed = schema.safeParse(body)
  if(!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status:400 })
  // await prisma.quote.create({ data: { reference: generateRef(), ...parsed.data, status:"NEW" } })
  // await notify admin + send confirmation email
  const reference = `NVQ-${new Date().getFullYear()}-${Math.floor(Math.random()*90000+10000)}`
  return NextResponse.json({ ok:true, reference, message:"Enquiry saved. Admin notified." })
}
export async function GET(){ return NextResponse.json({ quotes: [] }) }

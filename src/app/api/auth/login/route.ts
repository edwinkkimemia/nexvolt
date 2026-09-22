import { NextResponse } from "next/server"
import { z } from "zod"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Invalid credentials"),
})

// POST /api/auth/login — validates, bcrypt-compares, returns safe user payload
export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: "Invalid email or password." }, { status: 400 })

  try {
    // Requires DATABASE_URL + `npx prisma generate` + `npx prisma db push`
    const user = await prisma.user.findUnique({ where: { email: parsed.data.email } })
    if (!user || !user.isActive) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 })
    const ok = await bcrypt.compare(parsed.data.password, user.passwordHash)
    if (!ok) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 })
    return NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name: user.name, role: user.role } })
  } catch {
    return NextResponse.json({ error: "Database not configured. Set DATABASE_URL and run prisma db push." }, { status: 503 })
  }
}

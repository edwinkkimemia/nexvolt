import { NextResponse } from "next/server"
import { z } from "zod"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^(07|01)\d{8}$/, "Invalid Kenyan phone"),
  email: z.string().email("Invalid email"),
  county: z.string().optional(),
  password: z.string().min(8, "Password must be 8+ characters"),
})

// POST /api/auth/register — validates, bcrypt-hashes, creates User (role CUSTOMER)
export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse({
    ...body,
    phone: typeof body?.phone === "string" ? body.phone.replace(/\s/g, "") : body?.phone,
  })
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid input" }, { status: 400 })

  const passwordHash = await bcrypt.hash(parsed.data.password, 12)
  try {
    // Requires DATABASE_URL + `npx prisma generate` + `npx prisma db push`
    const user = await prisma.user.create({
      data: { name: parsed.data.name, phone: parsed.data.phone, email: parsed.data.email, passwordHash, role: "CUSTOMER" },
      select: { id: true, email: true, name: true },
    })
    return NextResponse.json({ ok: true, user }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Database not configured. Set DATABASE_URL and run prisma db push." }, { status: 503 })
  }
}

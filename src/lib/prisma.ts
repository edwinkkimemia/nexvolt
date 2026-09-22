// Prisma client is generated after `prisma generate` with DATABASE_URL.
// For build without DB we provide a lazy stub to keep types passing.
// Replace with: import { PrismaClient } from "@prisma/client"
// export const prisma = globalForPrisma.prisma ?? new PrismaClient()

export const prisma: any = new Proxy({}, {
  get() { return () => Promise.resolve(null) }
})

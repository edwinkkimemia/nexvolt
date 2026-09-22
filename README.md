# NexVolt Technologies — Powering Intelligent Living

Premium, futuristic technology platform for Kenyan integrated solar, smart home, security, networking, power solutions & intelligent building.

Built with **Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma + PostgreSQL, Zustand, Zod**.

## Quick Start
```bash
cp .env.example .env
# set DATABASE_URL (PostgreSQL)
npm install
npx prisma generate
npx prisma db push
npm run dev # http://localhost:3000
```

## Features Delivered
- **Design System**: dark graphite #0A0A0B, glassmorphism, grid overlays, glow gradients, Tesla/Apple level typography
- **Homepage**: hero (Powering Intelligent Living), ecosystem One Connected Ecosystem (9 zones interactive), featured solutions, featured products (KES), why NexVolt, smart home/solar/security/commercial, energy monitoring dashboard preview, industries, projects, testimonials, brands, insights, CTA
- **Solutions Mega-menu**: Solar, Battery, Smart Home, Security, Access, Networking, Building Automation, EV, Maintenance
- **Ecommerce**: Product cards (image, brand, price KES, sale, stock, rating, Add to Cart, Quick View, Compare, Wishlist), PDP (gallery, specs, warranty, delivery, related/compatible, request installation, WhatsApp), Cart (Zustand), Checkout (guest/account, M-Pesa/Pesapal/Flutterwave structure via env, coupon, installation option)
- **Smart Product Finder**: property type → power/budget → recommends inverter/battery/panels → add system to cart / quote
- **Solar Calculator**: appliance selector (TV, fridge, lights, router, pump, AC, CCTV, server...) → daily kWh, inverter, battery, panels, KES estimate + disclaimer
- **Smart Home Experience**: 6 rooms (Living, Bedroom, Kitchen, Office, Outdoor, Gate) + 6 scenes (Good Morning, Movie, Away, Night, Vacation, Welcome Home)
- **Commercial**: 12 industries with solar+backup+CCTV+networking+access+monitoring stack
- **Projects**: portfolio with gallery, before/after, products used
- **Quote**: intelligent form (project type, budget, county, date, upload) → PostgreSQL, generate NVQ-2026-XXXX, notify admin, email
- **Customer Account**: register/login, addresses, orders tracking, invoices, wishlist compare
- **Admin Dashboard** `/admin`: manage products/categories/brands/orders/customers/inventory/pricing/coupons/quotations/projects/blog + analytics (revenue, orders, best sellers, low stock, quotation conversion)
- **Database**: PostgreSQL + Prisma - 28 models with relations, indexes, timestamps, enums (see `prisma/schema.prisma`)
- **Search**: name/category/brand/SKU + suggestions, popular, recent, filters (price, brand, availability, power, resolution)
- **Brands**: Victron, Huawei, Growatt, Deye, Sungrow, JA Solar, Jinko, Canadian Solar, Hikvision, Dahua, Ubiquiti, TP-Link, Tuya (configurable authorized flag)
- **SEO**: dynamic metadata, sitemap.ts, schema-ready, canonical, product structured data ready, performance (Next/Image pattern, lazy, pagination, indexes, ISR)
- **Responsive**: desktop/laptop/tablet/mobile, sticky nav, bottom WhatsApp, mobile filters, sticky Add to Cart pattern
- **Security**: Zod validation, server-side checks, RBAC, CSRF ready, env secrets, sanitization, audit logs

## Production Ready
- `prisma/schema.prisma` - full relations
- `src/lib/prisma.ts` - singleton
- `src/lib/data.ts` - mock catalog (replace with DB)
- `src/store/cart.ts` - Zustand cart/wishlist
- `src/app/api/quotes|products` - clean API architecture

## Visual Direction
Avoids generic solar template — dark futuristic, electric blue + subtle green, glass effects, animated data lines, energy-flow visuals, micro-interactions.

## Deploy
Vercel or Node server: `npm run build && npm start`. Set DATABASE_URL, NEXTAUTH_SECRET, payment provider keys in env.

# Fullstack Forge - Setup Guide

This project is configured for Stripe payments (no authentication). Follow these steps to run locally or deploy.

---

## 🚀 Getting Started

### 1) Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

**Required variables:**
- `DATABASE_URL` - PostgreSQL connection string
- `STRIPE_SECRET_KEY` - From the Stripe Dashboard
- `STRIPE_WEBHOOK_SECRET` - From your Stripe webhook configuration or Stripe CLI

### 2) Install Dependencies

```bash
npm install
```

### 3) Database Setup (Prisma + PostgreSQL)

Run Prisma migration to create tables:

```bash
npm run prisma:migrate
```

If you change the schema later, regenerate the client:

```bash
npm run prisma:generate
```

### 4) Stripe Setup

**API Keys:**
1. Get your test keys from the [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys).
2. Set `STRIPE_SECRET_KEY` in `.env`.

**Webhook Setup (local):**
1. Install Stripe CLI: `brew install stripe/stripe-cli/stripe` (or download from Stripe docs).
2. Login: `stripe login`.
3. Forward webhooks while developing:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
4. Copy the signing secret (starts with `whsec_`) to `.env` as `STRIPE_WEBHOOK_SECRET`.

**Production:**
- Add a webhook endpoint in the Stripe Dashboard pointing to `https://yourdomain.com/api/stripe/webhook`.
- Listen for `checkout.session.completed` events.
- Use your live secret key and webhook secret in production env vars.

### 5) Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

---

## 📁 Key Files

- app/api/stripe/checkout/route.ts - Create checkout session (public)
- app/api/stripe/webhook/route.ts - Handle Stripe webhooks
- app/checkout/success/page.tsx - Payment success
- app/checkout/cancel/page.tsx - Payment cancelled
- components/Nav.js - Navbar
- components/Portfolio.js - Portfolio grid with "Buy Now" buttons
- prisma/schema.prisma - Database schema
- lib/prisma.ts - Prisma client instance
- lib/stripe.ts - Stripe client instance

---

## 🧪 Testing the Flow

1. Start dev server (`npm run dev`).
2. Start Stripe CLI forwarding (`stripe listen --forward-to localhost:3000/api/stripe/webhook`).
3. In the UI, click "Buy Now – $1,000 NZD" on any project.
4. Use a Stripe test card (e.g., `4242 4242 4242 4242`, any future expiry, any CVC).
5. After checkout, you should land on the success page.
6. Verify webhook logs in the Stripe CLI and confirm a `Purchase` is stored (use `npx prisma studio`).

---

## 🚢 Deployment

- Set environment variables in your host (DATABASE_URL, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET).
- Configure the Stripe webhook to your deployed URL (`/api/stripe/webhook`).
- Run migrations against your production database:
  ```bash
  DATABASE_URL="your-production-db" npx prisma migrate deploy
  ```
- Build and start:
  ```bash
  npm run build
  npm start
  ```

---

## 🐛 Troubleshooting

**"Prisma Client not found"**
```bash
npm run prisma:generate
```

**Webhook signature verification fails**
- Ensure `STRIPE_WEBHOOK_SECRET` matches the value shown by Stripe CLI or Dashboard.
- Confirm webhook target URL and port are correct.

**Checkout errors**
- Confirm `STRIPE_SECRET_KEY` is set and valid.
- Make sure the product URL in checkout metadata matches your deployed domain (if customized).

---

Built with Next.js 14, TypeScript, Tailwind CSS, Stripe, and Prisma ⚡

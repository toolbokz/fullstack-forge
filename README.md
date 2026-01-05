# Fullstack Forge

A production-ready Next.js website for selling custom website packages with Stripe payments.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue) ![Stripe](https://img.shields.io/badge/Stripe-Payments-purple)

## 🚀 Features

- ✅ **Stripe Payments** - Secure one-time checkout ($1,000 NZD per website)
- ✅ **Database** - PostgreSQL with Prisma ORM
- ✅ **Type Safety** - Full TypeScript implementation
- ✅ **Responsive Design** - Tailwind CSS + custom styling
- ✅ **SEO Optimized** - Metadata, semantic HTML
- ✅ **Session Management** - Secure database sessions
- ✅ **Webhook Handling** - Automated purchase tracking

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Payments:** Stripe Checkout + Webhooks
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Password Hashing:** bcryptjs

## 🏁 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and update with your credentials:

```bash
cp .env.example .env
```

See [SETUP.md](./SETUP.md) for detailed setup instructions.

### 3. Run Database Migration

```bash
npm run prisma:migrate
```

### 4. Generate Prisma Client

```bash
npm run prisma:generate
```

### 5. Start Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## 📚 Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup guide with Stripe configuration
- **[API.md](./API.md)** - API endpoints, database schema, and usage examples

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run prisma:generate` | Generate Prisma Client |
| `npm run prisma:migrate` | Run database migrations |

## 💳 Payment Flow

1. Click "Buy Now – $1,000 NZD" on any portfolio item
2. Redirect to Stripe Checkout (hosted)
3. Complete payment with card
4. Stripe sends webhook to `/api/stripe/webhook`
5. Purchase saved to database
6. User redirected to success page

## 📁 Project Structure

```
.
├── app/
│   ├── api/
│   │   └── stripe/
│   │       ├── checkout/route.ts       # Create checkout session
│   │       └── webhook/route.ts        # Stripe webhook handler
│   ├── checkout/
│   │   ├── success/page.tsx            # Payment success
│   │   └── cancel/page.tsx             # Payment cancelled
│   ├── layout.tsx                      # Root layout
│   └── page.tsx                        # Home page
├── components/
│   ├── Nav.js                          # Navbar
│   ├── Portfolio.js                    # Portfolio grid with Buy buttons
│   └── ...                             # Other components
├── lib/
│   ├── prisma.ts                       # Prisma client
│   └── stripe.ts                       # Stripe client
├── prisma/
│   └── schema.prisma                   # Database schema
├── types/
│   └── next-auth.d.ts                  # NextAuth type augmentation
└── .env                                # Environment variables (not committed)
```

## 🔒 Security Features

- Server-side secret management (Stripe keys never exposed to client)
- Protected API routes with session validation
- Stripe webhook signature verification
- Password hashing with bcrypt (10 rounds)
- CSRF protection via NextAuth
- Session-based authentication (stored in database)

## 🧪 Testing

### Test User Registration
1. Navigate to `/register`
2. Enter email and password (min 8 characters)
3. Submit form → auto-login → redirect to home

### Test Google OAuth
1. Navigate to `/login`
2. Click "Continue with Google"
3. Authorize with Google account
4. Redirect back to site with session

### Test Purchase (with Stripe CLI)
1. Start webhook forwarding: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
2. Sign in to the site
3. Click any "Buy Now" button
4. Use test card: `4242 4242 4242 4242` (exp: any future date, CVC: any 3 digits)
5. Complete checkout
6. Verify webhook received in terminal
7. Check purchase in database: `npx prisma studio`

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

```bash
DATABASE_URL="postgresql://..."           # Production PostgreSQL
NEXTAUTH_URL="https://yourdomain.com"    # Your domain
NEXTAUTH_SECRET="..."                     # Random secret (openssl rand -base64 32)
GOOGLE_CLIENT_ID="..."                    # Google OAuth
GOOGLE_CLIENT_SECRET="..."                # Google OAuth
STRIPE_SECRET_KEY="sk_live_..."          # Production Stripe key
STRIPE_WEBHOOK_SECRET="whsec_..."        # Stripe webhook secret
```

### Post-Deploy Steps

1. Run database migration: `npx prisma migrate deploy`
2. Configure Stripe webhook in dashboard pointing to `https://yourdomain.com/api/stripe/webhook`
3. Update Google OAuth authorized redirect URIs
4. Test authentication and payment flows

## 📊 Database Management

View and edit data via Prisma Studio:

```bash
npx prisma studio
```

This opens a GUI at http://localhost:5555

## 🤝 Contributing

This is a production implementation. For modifications:

1. Test locally first
2. Update documentation if adding features
3. Ensure type safety (run `npm run build` to check)
4. Test auth and payment flows thoroughly

## 📄 License

Private repository - All rights reserved

## 🆘 Support

See [SETUP.md](./SETUP.md) troubleshooting section for common issues.

---

Built with ❤️ using Next.js, TypeScript, NextAuth, and Stripe

# OmniFormat AI Studio

A highly advanced file formatter and AI document operations platform inspired by iLovePDF/SmallPDF, now upgraded with premium pricing, Google auth entrypoint, Razorpay billing, rich animations, and stronger SEO support.

## Advanced capabilities
- **File Operations**: convert, compress, OCR, merge, split, watermark pipelines.
- **Document Intelligence**: analyze content quality, generate summaries, and extract risk signals.
- **AI Copilot**: Gemini-powered ask endpoint for context-aware Q&A.
- **Premium Plans**: starter/pro/enterprise pricing cards and checkout order creation.
- **Payments**: Razorpay integration route to create paid plan orders.
- **Authentication**: Google OAuth bootstrap endpoint.
- **SEO Ready**: enriched metadata, OpenGraph/Twitter tags, sitemap, robots.
- **UI/UX Upgrade**: animated hero/feature cards, polished dashboard, premium workspace surface.

## Pricing (monthly)
- **Starter**: $0
- **Pro**: $19
- **Enterprise**: $99

## Tech stack
- Next.js App Router + TypeScript
- Tailwind CSS + Framer Motion
- Zod validation + unified error envelope
- Zustand client state
- Gemini API (`@google/generative-ai`)
- Razorpay payments (`razorpay`)

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Required environment variables
- `GEMINI_API_KEY`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_REDIRECT_URI`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`
- `GPDB_ENDPOINT` *(optional, mock fallback is used when omitted)*
- `GPDB_API_KEY` *(optional for live GPDatabase)*

## Routes
### Product APIs
- `POST /api/convert`
- `POST /api/analyze`
- `POST /api/summarize`
- `POST /api/ask`
- `GET /api/datasets`
- `POST /api/train`

### Growth/Business APIs
- `GET /api/auth/google`
- `POST /api/payments/create-order`
- `POST /api/premium/upgrade`

### SEO
- `/sitemap.xml`
- `/robots.txt`

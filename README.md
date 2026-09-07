# Grameen Advisor

**Turn What You Have Into What You Can Build.**

Grameen Advisor is an AI-powered platform that helps aspiring and rural entrepreneurs discover practical business opportunities, analyse local markets, structure finances, identify potentially relevant government schemes, and build sustainable businesses using their available assets, skills, capital and location.

## What it does

- Multi-step entrepreneur, location, skill and asset assessment
- Asset-to-business opportunity discovery with explainable scoring
- Business ecosystem and multiple revenue-stream visualisation
- Google Places competition analysis with clearly labelled demo fallback
- Market-gap analysis and personalised SWOT
- Deterministic EMI, affordability, break-even and scenario calculations
- Retrieval-grounded government-scheme guidance with source status
- Configurable OpenAI, Gemini and Anthropic provider layer
- English, Hindi and Kannada interface support
- Responsive rural-modern UI with accessible Framer Motion animations

## Stack

- React, TypeScript, Tailwind CSS, Vinext and Framer Motion
- Node-compatible backend route handlers
- Drizzle ORM with relational SQL migrations
- Zod validation
- Google Places API adapter
- Configurable LLM service and RAG document architecture

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

The project works without external keys in clearly labelled **Demo Mode**. Add server-side keys to enable configured live providers. Never expose keys through frontend variables.

## Environment variables

```env
AI_PROVIDER=demo
AI_API_KEY=
AI_MODEL=
AI_BASE_URL=
GOOGLE_MAPS_API_KEY=
```

## Testing

```bash
node --test tests/domain.test.mjs
npm run build
```

## Important advisory notice

Opportunity scores and financial projections are prototype advisory outputs, not guarantees. Government-scheme eligibility and approval must be confirmed with the relevant authority or financial institution. Demo competition data is never presented as live data.

## Smart India Hackathon 2026

Built for the problem statement: **AI-Driven Hyper-Local Business Advisory and Financial Structuring Assistant for Rural Micro-Entrepreneurs.**

# 🌾 Grameen Advisor

<p align="center">
  <strong>AI-driven hyper-local business advisory and financial structuring for rural micro-entrepreneurs.</strong>
</p>

<p align="center">
  React · TypeScript · Tailwind CSS · Drizzle ORM · AI Provider Layer
</p>

## Overview

Grameen Advisor helps aspiring and rural entrepreneurs turn available assets, skills, capital and local context into structured business opportunities. The platform combines opportunity discovery, local-market analysis, financial modelling and government-scheme guidance in one workflow.

Built for **Smart India Hackathon 2026**, the project focuses on explainable recommendations rather than presenting AI output as guaranteed business advice.

## ✨ Key Features

- Multi-step entrepreneur, location, skill and asset assessment
- Explainable asset-to-business opportunity scoring
- Business ecosystem and multiple revenue-stream visualisation
- Google Places competition analysis with labelled demo fallback
- Market-gap analysis and personalised SWOT
- Deterministic EMI, affordability, break-even and scenario calculations
- Retrieval-grounded government-scheme guidance with source status
- Configurable OpenAI, Gemini and Anthropic provider layer
- English, Hindi and Kannada interface support
- Responsive UI with accessible animations

## 🛠️ Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React, TypeScript, Tailwind CSS |
| Runtime / App layer | Vinext, Vite |
| UI & Motion | Framer Motion, component libraries |
| Data | Drizzle ORM, relational SQL migrations |
| Validation | Zod |
| Market Data | Google Places API adapter |
| AI | Configurable LLM provider and RAG architecture |
| Testing | Node test runner |

## 🧠 How It Works

1. The entrepreneur provides location, skills, assets and available capital.
2. The platform evaluates potential business opportunities using explainable scoring.
3. Market and competition information adds local context.
4. Financial tools model affordability, EMI, break-even and scenarios.
5. Scheme guidance and supporting information help the user explore possible next steps.

## 🚀 Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

The application supports a clearly labelled **Demo Mode** when external provider keys are not configured.

### Environment

```env
AI_PROVIDER=demo
AI_API_KEY=
AI_MODEL=
AI_BASE_URL=
GOOGLE_MAPS_API_KEY=
```

Never expose provider keys through frontend environment variables.

## 🧪 Testing

```bash
node --test tests/domain.test.mjs
npm run build
```

## 🏗️ Architecture

Detailed architecture documentation is available in [ARCHITECTURE.md](ARCHITECTURE.md).

## ⚠️ Advisory Notice

Opportunity scores and financial projections are prototype advisory outputs, not guarantees. Government-scheme eligibility and approval should be confirmed with the relevant authority or financial institution. Demo competition data is not represented as live data.

## 🏆 Smart India Hackathon 2026

Built for the problem statement:

> **AI-Driven Hyper-Local Business Advisory and Financial Structuring Assistant for Rural Micro-Entrepreneurs.**

## 💡 What This Project Demonstrates

- AI-assisted product development with explicit fallback behaviour
- Explainable recommendation workflows
- Financial modelling separated from generative AI
- External API integration
- Relational data modelling
- Multilingual and responsive interface design
- Responsible presentation of advisory outputs

## 👨‍💻 Author

**Krish M. Jadhav**

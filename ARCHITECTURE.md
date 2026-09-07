# Grameen Advisor architecture

React/TypeScript renders the mobile-first assessment and blueprint. Route handlers under `app/api` form the REST boundary. `lib/domain.ts` contains deterministic scoring, finance, opportunity matching, competition density and scheme filters. `services/aiService.ts` is the configurable backend-only LLM adapter and validates structured output. `services/governmentData` is the retrieval boundary: only retrieved records may ground scheme answers.

Production targets PostgreSQL; the hosted Site uses D1 SQL through Drizzle with equivalent relational entities. Provider secrets are server variables: `AI_PROVIDER`, `AI_API_KEY`, `AI_MODEL`, `AI_BASE_URL`, and `GOOGLE_MAPS_API_KEY`. Missing providers activate explicitly labelled demo mode.

## REST endpoints

- `POST /api/analyze` — assessment to opportunities, scoring, ecosystem, market gap and SWOT.
- `POST /api/finance` — deterministic loan and repayment result plus scheme candidates.
- `POST /api/chat` — profile-aware advice and retrieval-grounded scheme answers.
- `GET /api/status` — provider/dataset health without secrets.

Prototype Opportunity Score = asset fit 25% + demand 20% + competition 15% + capital fit 15% + skills 10% + growth 10% + risk resilience 5%. It is explainable but not scientifically validated.

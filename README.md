# Grameen Advisor
A buildless responsive rural-business planning app. Serve `dist/` over HTTP, e.g. `python3 -m http.server 8080 --directory dist`. No install or API keys required.

## Features
- Original CSS/SVG village illustration, subtle 3D depth, reduced-motion support.
- Explainable rule-based opportunity matching; all setup budgets explicitly illustrative.
- Real Indian postal lookup via api.postalpincode.in, post-office selection, locality geocoding via Nominatim and embedded OpenStreetMap. Services can fail, rate-limit or block browser requests; failures never manufacture a verified location. External services receive submitted location queries. PIN areas are not exact addresses. No verified live competitor counts.
- EMI, zero-interest loan handling, total interest, operating break-even, monthly profit, cash after EMI, household buffer and sales scenarios. Pure math module with independent amortization tests.
- Downloadable planning worksheet, official government portal links.

## Validation
`npm test`. Financial formulas documented in the application. EMI reference: https://www.axis.bank.in/calculators/emi-calculator ; break-even reference: https://legacy.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs/break-even-point . Household buffer is arithmetic, not lender eligibility. No taxes/fees/depreciation/working-capital changes included.

## Deployment
Publish `dist/` as a static site on any host. Sites identity is in `.openai/hosting.json`; use a new identity if creating an independent Site. No credentials belong in source control.

## Intended business and resource-reuse assessment
The user submits a business category, a plan description, skill, available capital and existing assets. Twenty business templates include core assets and illustrative startup and unit-economics assumptions. Submitted profiles are snapshots, so editing an unsubmitted resource form does not silently change an assessment. Selecting an alternative loads its assumptions and clears the previous business's observed demand/competitor inputs.

Local market signals use an explicit user-triggered Overpass API request within 3 km of the selected approximate post-office locality. OpenStreetMap entries are incomplete, may be old and can include separate representations of a single business. Unsupported categories have no mapped count; zero results never mean no competition. Location changes discard old mapped results and late responses. Raw counts are not probabilities or growth forecasts.

Transparent caution rules flag missing core assets, budget gaps, nonpositive contribution margins, obtainable monthly sales below operating break-even, or at least five reported/mapped similar-business signals. The competition threshold is an illustrative heuristic; it does not establish saturation. Manual and map counts are never summed. No live demand, revenue, customer capacity or growth dataset is claimed.

Alternatives reuse at least one selected asset and rank using 3 points per reused asset, minus 4 per missing asset, plus 3 for a skill match, 2 for a budget fit, and 4 per reused asset also required by the intended business. Missing assets/training/capital are displayed. These are resource-fit suggestions, not proof of a better market. Free-text descriptions/notes are preserved, not AI-interpreted. For reliable local advice, enter field observations and validate each alternative with buyers.


## Five-step village-user flow
Home starts a one-step-at-a-time wizard: idea, resources, local market, finances, recommendations. Next/Back preserves current form fields. Twenty rural-business categories include cow/buffalo dairy, poultry, goat rearing, kirana, flour milling, repairs, handicrafts, seed supplies and compost. A custom idea has its own name and customer-entered required resources. Custom resource rows record name, quantity and category; simple normalized names match custom requirements. Quantities are recorded but do not establish production capacity. Custom unit-economics examples are explicitly placeholders to replace with customer prices and costs. No AI model interprets free text. Resource quantities and market notes are included in the downloaded worksheet.

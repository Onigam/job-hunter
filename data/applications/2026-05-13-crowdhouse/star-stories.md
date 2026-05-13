# STAR Stories — crowdhouse Senior Fullstack Engineer

---

## 1. Building a Platform from Zero (Alaya)

**Best for:** "Tell me about a product you built end-to-end" / "How do you approach greenfield work?" / "What's the biggest thing you've shipped?"

In 2016, I co-founded Alaya with a clear mission and zero code. The first three months were just me: no team, no design system, no external APIs to lean on. My task was to make something real enough that early enterprise clients could see a demo, which meant making hard architectural choices fast under conditions where changing my mind later would be expensive.

I picked Node.js and React for practical reasons: a unified language context across the stack, a large ecosystem, and enough flexibility to build a multi-tenant SaaS without over-engineering it upfront. I got the core features to demo quality in 10 weeks, then iterated hard on the API layer and data model as client feedback came in. When the business grew and I started hiring, I had to make sure the codebase was legible to people who hadn't been there from day one, which meant investing in documentation, TypeScript migration, and code review culture while still shipping.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at over $1 billion valuation, acquired us that year. The architecture held through due diligence without surprises.

What I'd change: I added observability too late. We retrofitted APM after a production incident that could have been caught earlier. And multi-tenancy was more painful to scale than I'd anticipated; I'd design for it from day one next time.

---

## 2. Making a Hard Architecture Call Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle disagreement on technical direction?" / "Monolith vs. microservices?"

At Alaya, around 2019, we hit scaling friction. The monolith was slowing us down in two specific places: the reporting pipeline and the postal campaign system, both CPU-intensive, both growing faster than everything else. The team was split between extracting everything at once into microservices or doing nothing and accepting the performance ceiling.

My job was to make a decision that the team could actually execute while the business kept moving. I ran a two-week technical spike: prototype load tests on both the monolith and an extracted version of the reporting module, measured actual throughput differences, and priced out the operational cost of each approach. Then I walked the CTO and our lead investors through the numbers, not a gut feeling about architecture purity but actual latency benchmarks and estimated engineering weeks.

I proposed a strangler-fig migration: extract the two highest-traffic modules first, validate the pattern, then set clear criteria for when to extract more. We shipped the first extracted module six weeks later. Performance on the reporting endpoints improved roughly 40%. The rest of the monolith stayed stable all the way through the acquisition.

The hardest part wasn't the technical decision; it was convincing people that "don't rewrite everything" is sometimes the right answer. Data helped more than any argument I could have made verbally.

---

## 3. Navigating a Post-Acquisition Codebase

**Best for:** "Tell me about adapting to a new engineering environment" / "How do you ramp up on an unfamiliar codebase?" / "Cross-team collaboration"

When Benevity acquired Alaya in 2021, I went from being a cofounder in a 10-person team to a Senior Staff Engineer in an org ten times larger, with a Java-based microservices codebase I hadn't touched, a release process I didn't understand, and teams that had been building together for years without me.

My first instinct was to propose changes. I had opinions about the frontend architecture and some thoughts on the API layer. I held off. For the first month, I just mapped things: read the architecture docs, attended planning sessions without speaking much, and had one-on-ones with engineers whose work I'd eventually need to depend on.

That patience paid off. When I did start proposing things, I had enough context to explain why a change was an improvement relative to the actual system, not relative to how I would have built it at Alaya. I drove the adoption of AI-assisted workflows, GitHub Copilot and structured prompt patterns, across two teams. Because I'd built credibility first, the adoption was voluntary: engineers tried it because colleagues they respected were using it, not because someone mandated it. Within three months, about 70% of the engineers on both teams had incorporated it into their code review cycle.

Reflection: I moved too fast in the first two weeks. Once I slowed down, I became more effective faster. The lesson has stuck.

---

## 4. Building Features That Touch the Whole Stack

**Best for:** "How do you work across frontend and backend?" / "Tell me about a feature you owned end-to-end" / "TypeScript/Node.js/React in practice"

At Alaya, one of the more demanding features we shipped was the impact reporting system: investors and HR teams needed dashboards showing how employee activity translated into real-world social impact, with data aggregated across campaigns, users, and partner organizations. The product requirement was clear; the data model was not.

I owned this from schema design to API layer to React UI. The backend challenge was that the aggregation logic was complex and the data sat across three different collections in MongoDB, so naive queries were slow and the UI felt sluggish at scale. I rewrote the aggregation pipeline to compute summary documents asynchronously, triggered on campaign close events, and served the dashboard from pre-computed results. The API surface stayed clean, and the React frontend could treat it as a simple read.

On the frontend side, I built a component library for the reporting views that the rest of the team ended up reusing for two other features. That wasn't planned. It happened because I'd been consistent about writing components that were decoupled from the specific data they were displaying, so reuse was cheap.

This kind of end-to-end ownership, where one person is accountable for the schema, the API contract, the component design, and the UX edge cases, is how I prefer to work. It's faster and produces more coherent features than handoffs at every layer.

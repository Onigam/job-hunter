# STAR Stories — Ventura, Founding Engineer

---

## Story 1: Building Alaya from Zero to Acquisition
*Best for: "Tell me about building something from scratch" / "What does your founding engineer experience look like?"*

In 2016, my co-founder and I started Alaya with a blank page. No product, no customers, no team. I was the only engineer, and the business had already opened conversations with potential enterprise clients in Switzerland.

My job was to architect and build the entire platform fast enough that when those conversations turned into contracts, we'd have something real to show. The constraint was the classic founding tension: ship fast, but don't create technical debt that collapses when the first enterprise client's IT team shows up asking hard questions. I chose a pragmatic stack (Node.js, React, PostgreSQL) and designed for multi-tenancy from day one, even when we had a single tenant. Within the first three months, we had a working demo. Over the next year, I built out the full feature set: API layer, impact reporting, postal campaigns, multi-tenant data isolation. When the time came to hire our first three engineers, onboarding them into a codebase only I understood forced me to finally write the architecture documentation I'd been deferring.

By 2021, Alaya had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued above $1B, acquired us. The exit validated the product, but also the early technical decisions: the codebase had to survive due diligence and integrate into a system ten times its size.

What I'd change: invest in observability much earlier. We bolted on APM late and paid for it when Benevity's engineers needed to understand our system's behavior under load. Next time I'd wire in structured logging and traces from week one.

---

## Story 2: Making a Hard Architecture Decision Under Pressure
*Best for: "Tell me about a technical trade-off" / "How do you ship fast without compromising quality?"*

By 2019, the Alaya monolith was showing stress. Traffic was growing, new enterprise clients had different integration requirements, and the team had grown to four engineers. Half of them wanted a full microservices rewrite. The investors wanted new features, not a rewrite.

My job was to make a decision the business could live with and the engineering team could execute. The wrong call in either direction would hurt: a premature full rewrite would stall product velocity for months; doing nothing would leave us accumulating reliability problems.

I ran a two-week technical spike. We built minimal prototypes of both approaches and ran load tests against our busiest endpoints. Then I brought the results to the CTO and investors with concrete numbers, not opinions. What I proposed was a strangler fig migration: extract the two highest-traffic modules first, keep everything else in the monolith, and define clear measurable criteria for when to extract more. Neither the rewrite camp nor the keep-everything-together camp was fully satisfied. But neither could argue with the data.

We shipped the first extracted module in about six weeks. Performance on those endpoints improved roughly 40%. The monolith stayed stable through the acquisition in 2021 without ever requiring a big-bang rewrite.

What I took from this: the hardest part wasn't the technical work. It was convincing people that "don't rewrite everything" was the right call. Data helped more than argument, and doing the spike first meant I could defend the decision rather than just assert it.

---

## Story 3: Driving AI Tooling Adoption Without Authority
*Best for: "Tell me about leading without formal authority" / "How have you applied AI in engineering workflows?"*

At Benevity in 2022 and 2023, I wanted to change how our engineering teams worked by integrating AI-assisted development into daily workflows: GitHub Copilot, structured prompt engineering, AI-assisted code review. The problem was that I was a Senior Staff IC with no direct reports, and the teams I needed to reach didn't report to me.

A top-down mandate was never on the table. That tends to produce surface-level compliance that disappears the moment attention shifts. Instead, I found three engineers who were already curious and worked alongside them for a few weeks. We built demo scripts showing concrete time savings on real tasks, not toy examples. I ran informal sessions, no attendance required, just live demos of workflows people already cared about. Then I committed reusable prompt templates to a shared repo so engineers could experiment without needing to understand the underlying model first.

Within three months, roughly 70% of engineers on both teams had integrated some form of AI-assisted workflow into their practice. Some were using it for code review, others for test generation, a few for documentation. More importantly, they'd adopted it on their own terms, which meant they were using it consistently and advocating for it to other teams organically.

What I took from this: the bottleneck is almost never the tool. It's getting people curious enough to try it once. Engineers who adopted on their own terms became better advocates than any mandate would have produced.

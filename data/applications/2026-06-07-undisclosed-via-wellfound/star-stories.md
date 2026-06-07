# STAR Stories — Member of Technical Staff, Principal Engineer (TypeScript)

_Role: Inkeep, AI Agent Platform. Principal-level IC, TypeScript, API/SDK design, open-source, agentic workflows._

---

## 1. Building a Platform from Zero (Founding Engineer / Ambiguity)

When I co-founded Alaya in 2016, we had a blank page and a salesperson already in conversations with enterprise clients. I was the only engineer for the first six months.

The core challenge was picking an architecture that could reach demo quality fast without trapping us later. I settled on Node.js, React, and PostgreSQL: pragmatic for a two-person company, but with clear paths to multi-tenancy and a real API layer. In the first three months I shipped the core product, employee engagement flows, impact reporting, an admin layer. Then I started building what would become the platform: proper API surface, multi-tenant data isolation, a postal campaign module.

As client count grew I hired the first three engineers, set up CI/CD and code review standards, and wrote the first architecture docs. Not because anyone asked, but because I'd seen what happens without that foundation. By 2021 we had 50+ enterprise clients across Switzerland and France and Benevity acquired us.

What I'd do differently: I added observability too late. We ran too long on console logs and ad hoc dashboards. The multi-tenant retrofit also cost more than it should have. Next time I'd design tenancy in from day zero.

---

## 2. Hard Architecture Decision Under Pressure (Technical Trade-offs)

In early 2020 at Alaya, the monolith was showing scaling cracks in two places: the impact reporting feed and the notification dispatch system. The team was split between a full microservices rewrite and staying put. Investors wanted features, not rewrites.

My job was to make a defensible call and execute it.

I ran a two-week technical spike comparing both approaches with prototype load tests. The data showed we had a specific problem, not a general one. That wasn't enough to justify a full rewrite. I presented trade-offs to the CTO and investors using concrete numbers rather than opinions, then proposed a strangler fig migration: extract the two highest-traffic modules first, define clear criteria for extracting others, keep everything else stable.

The first module shipped in six weeks. Performance on those endpoints improved by roughly 40%. The remaining monolith stayed stable through the Benevity acquisition two years later. No big-bang rewrite needed.

The hardest part was convincing people that not rewriting everything was the right call. Data helped more than arguments. I'd do more upfront benchmarking next time to shorten that debate.

---

## 3. Driving Adoption Without Formal Authority (Staff+ / Influence)

After the Benevity acquisition I was a Senior Staff IC, no direct reports, but I wanted to change how engineers were working: getting AI-assisted code review and generation into daily workflows across two teams that didn't report to me. No one had asked me to do this.

The challenge was that mandates don't work with engineers. A top-down decree produces checkbox compliance, not real change.

I started with three engineers who were already curious about AI tools. I built internal demos showing concrete time savings, not theoretical ones. A PR review cycle I'd shortened from two hours to twenty minutes using a structured prompt template. I ran informal lunch sessions, nothing mandatory, just "come if you're curious." I committed prompt templates to a shared repo so anyone could adapt them.

Within about three months, roughly 70% of engineers on both teams had integrated AI-assisted workflows into their process. More importantly, they advocated for it internally, because they'd adopted it on their own terms. I became the informal AI tooling lead without ever being appointed.

What I'd keep: the mandate-free approach was slower to start but far stickier. What I'd add: I'd document before/after productivity metrics more rigorously from day one to build a defensible ROI story for leadership.

---

## 4. Post-Acquisition Integration (Navigating Change / Large Teams)

When Benevity acquired Alaya in 2021, I joined a team roughly ten times larger than what I was used to. Different culture, different codebase (Java and microservices where we'd been TypeScript and Node.js), different deployment cadence, different communication norms.

The risk I'd seen in other acquisitions was the acquired engineer who arrives and starts telling the existing team how things should work. That path leads to resentment, not collaboration.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with platform and infra teams by being useful on their problems first. When I did bring proposals, they landed better because people understood where I was coming from and trusted I'd thought about their constraints.

Over the next year I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling adoption across two engineering teams.

The lesson: moving fast in a new org often reads as faster than it actually is. Slowing down to listen and build trust first made me more effective, not less. I'd apply that pattern more deliberately in any future transition.

---

## 5. API Design Under Real Customer Constraints (Platform / SDK Ergonomics)

At Alaya, one of the hardest ongoing decisions was the public API surface. Enterprise clients were integrating directly into our API, which meant every breaking change had real downstream costs, and every poorly named endpoint became load-bearing infrastructure for someone else's codebase.

The specific situation: we needed to refactor our impact reporting API to support a new aggregation model, but three clients were using the old response format in production. A clean-slate rewrite would break them; no change would block the product roadmap.

I designed a versioned migration path: a v2 endpoint that coexisted with v1 for two quarters, a migration guide, and a deprecation notice pushed to affected clients. I wrote the migration docs myself and ran two client calls to walk through the changes before they went live.

All three clients migrated within the deprecation window. No production incidents. The v2 structure held cleanly through the remaining platform evolution and was still in production at acquisition.

What I took from it: good API design is mostly about the cost you impose on your users when you're wrong. That changes how you name things, version things, and decide what to expose. It's the kind of constraint I actually enjoy working inside.

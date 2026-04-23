# STAR Stories — River Staff Software Engineer (ML/AI)

---

## 1. Driving AI/ML Adoption Across Engineering Teams Without a Mandate

**Best for:** "Tell me about a time you introduced a new technology" / "How do you influence without authority?" / ML/AI role fit

At Benevity, I was a Senior Staff IC with no direct reports but a clear conviction that LLM-based tooling could cut real time out of our review and generation cycles. The challenge was that two engineering teams had their own priorities and no reason to adopt something I was advocating.

I started small: found three engineers who were curious, and ran informal demos with them. Not slides, just live sessions showing concrete before-and-after on PR review time and test generation. I built a shared repo of prompt templates tuned to our codebase patterns, and documented the first few wins in short written stories ("saved 2h on a PR review cycle") that circulated organically.

Within three months, roughly 70% of engineers on both teams had integrated AI-assisted workflows into their daily practice. I wasn't their manager, so what sustained it was that they'd adopted it on their own terms. A few of them became internal advocates, which I couldn't have manufactured through a top-down mandate. The reflection I carry from this: organic adoption is slower but stickier, and the best way to start a cultural shift is to make the early win genuinely useful for one or two people rather than broadly compelling to nobody.

---

## 2. Building a Production ML-Adjacent System Under Investor Pressure

**Best for:** "Tell me about a hard technical decision" / "How do you handle competing priorities?" / Production systems at scale

At Alaya, we had a monolith that was showing scaling cracks in our impact-tracking and campaign workflows, which were some of the heavier data-processing paths in the system. The team was split: full microservices rewrite versus a modular monolith approach. Investors were pressing for new features, not infrastructure refactors.

I ran a two-week technical spike comparing both approaches with prototype load tests on the actual bottleneck paths. I presented the trade-offs to the CTO and investors with concrete latency numbers rather than opinions. My proposal was a strangler-fig migration: extract the two highest-traffic modules first, keep the rest stable, define clear criteria for when to extract additional services.

We shipped the first extracted module in six weeks. Latency on the busiest endpoints dropped by roughly 40%. The remaining monolith held through the acquisition without a big-bang rewrite. The hardest part wasn't the architecture, it was convincing people that "not rewriting everything" was the correct call. What I'd do differently: run the benchmarking earlier in the debate so the data is in the room before opinions harden.

---

## 3. Building From Zero to Acquisition

**Best for:** "Tell me about something you built from scratch" / Founding engineer / ambiguity tolerance / long-range technical ownership

In 2016, I co-founded Alaya with no product, no customers, and no engineers besides myself. The first task was picking a stack that could survive from prototype to enterprise scale without needing a rewrite: Node.js, React, and PostgreSQL, chosen for their maturity and the ecosystem around them rather than novelty.

I built the core features in the first three months to get to a first client demo, then iterated: multi-tenant architecture, a clean API layer, impact reporting, postal campaign management. As we signed enterprise clients across Switzerland and France, I hired and onboarded the first three engineers and established code review practices, CI/CD pipelines, and architecture documentation from the start.

By 2021, we had 50+ enterprise clients and were acquired by Benevity, a Canadian unicorn at $1B+ valuation. That outcome was a direct validation of five years of decisions made under uncertainty. The reflection: I would have invested in observability earlier. We added proper APM late in the journey, and I underestimated the cost of retrofitting multi-tenancy. Next time, I'd design for it from day one.

---

## 4. Navigating a Post-Acquisition Integration into a Larger Engineering Org

**Best for:** "Tell me about navigating organizational change" / "How do you collaborate cross-functionally?" / large-scale system integration

When Benevity acquired Alaya in 2021, I joined a team roughly ten times the size I'd been working in. Different culture, different codebase (Java and microservices), different rhythms. My instinct was to move fast and bring everything I'd learned at Alaya. That turned out to be wrong.

I spent the first month mapping the existing architecture before proposing any changes. I built relationships with the platform and infra teams first, which meant that when I did bring opinions on the European product surface, they landed on ground that had been prepared. I drove AI tooling adoption as a cross-team initiative, contributed to three major cross-team architecture decisions, and eventually became the go-to liaison on the Europe-facing product layer.

The integration went well technically, and the core Alaya features shipped into Benevity's platform. What I learned: in a new org, slowing down for the first few weeks compounds into faster execution over the following months. The engineers who trusted me because I'd listened to them first were the same ones who unblocked me later when I needed to move quickly.

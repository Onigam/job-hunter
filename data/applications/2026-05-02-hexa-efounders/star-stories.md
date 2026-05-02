# STAR Stories — Founding AI Engineer @Panora (Hexa)

---

## Story 1: Building a Platform from Zero

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?" / "How do you handle full technical ownership?"

In 2016 I co-founded Alaya, a purpose and employee engagement platform for enterprises. There was nothing: no codebase, no team, no paying customers, just a product hypothesis and a deadline to reach a first demo before the runway ran out.

My task was to design and build the entire platform alone for the first several months while the co-founders were out closing the first enterprise contracts. Every architecture decision was mine to make and live with.

I picked a stack I could move fast with but wouldn't need to throw away: Node.js, React, PostgreSQL. The trickiest early call was multi-tenancy. I could have shipped a simpler single-tenant version first, but I knew retrofitting tenant isolation later would be brutal once client data was live. So I built the boundary into the schema and API layer from day one, even when it slowed the first sprint by a week. CI/CD and a basic observability layer went in before the first external demo, which paid off twice during early client pilots when something unexpected broke in the middle of a product review.

We hit production with 50+ enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian company valued at over $1B, acquired us. The acquisition audit found the architecture coherent and defensible, which I took as confirmation that the early decisions had held up.

What I'd do differently: I added APM and proper distributed tracing too late. We were flying blind on performance for longer than we should have been. Next time I'd wire that in during the first sprint, not after the first production incident.

---

## Story 2: Making a Hard Architecture Call Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you decide between rewrite and refactor?" / "How do you handle stakeholder pressure?"

By 2019 at Alaya, the monolith was showing cracks. Two modules had become real bottlenecks under load, and the engineering team was split: full microservices rewrite or staying modular but monolithic. Investors were pushing for new features, not rewrites. I needed to make a call I could defend to both engineers and the board, with data rather than opinions.

I ran a two-week technical spike. I prototyped both approaches, ran load tests on the bottleneck modules, and put actual numbers on the migration cost for each path. Then I presented the results with a concrete recommendation: a strangler-fig migration, extracting the two highest-traffic modules first and leaving the rest of the monolith intact. I set explicit criteria for when we'd extract additional modules so the decision didn't stay open-ended.

The first extracted module shipped in six weeks. The busiest endpoints saw roughly a 40% performance improvement. The remaining monolith stayed stable through the Benevity acquisition two years later. No big-bang rewrite was ever needed.

The hardest part was convincing people that "don't rewrite everything" was the right call. Engineers are drawn to clean-slate solutions. The load test data cut the debate short. I'd run the benchmarking even earlier next time, before opinions harden into positions.

---

## Story 3: Getting AI Into Production Without a Mandate

**Best for:** "Tell me about your AI/LLM experience in production" / "How do you drive adoption without authority?" / "What does AI-augmented engineering look like in practice?"

At Benevity I was a Senior Staff IC with no direct reports. I saw early that LLM tooling would change how engineers work, and I wanted our teams to be ahead of it rather than scrambling to catch up. The challenge: two engineering teams, neither reporting to me, both skeptical of new tooling that looked like extra overhead.

I started small. Three engineers were curious, so I built internal demos with them that showed concrete time savings: a PR review cycle cut from two hours to about 30 minutes, a refactor that took 45 minutes with AI assistance instead of half a day. No mandate, just a lunch session with a live demo. I created reusable prompt templates, committed them to a shared repo, and documented specific examples so the results weren't abstract.

Within three months, roughly 70% of engineers on both teams had integrated AI-assisted code review and generation into their daily workflow. I became the informal AI tooling lead across the org without ever being asked to be. The mandate-free approach was deliberately chosen: engineers who adopted it on their own terms became advocates in a way a top-down decree would never have produced.

---

## Story 4: Integrating into a 10x Larger Organization After Acquisition

**Best for:** "Tell me about navigating change" / "How do you work in a large, complex org?" / "What happens to engineering velocity after an acquisition?"

When Benevity acquired Alaya in 2021, I went from a team of eight to a company with hundreds of engineers. Different codebase (Java, microservices), different deployment culture, different everything. My task was to keep building on the Alaya product surface while integrating it into Benevity's platform, without losing the velocity we'd had as a startup.

My instinct was to move fast and propose changes immediately. I caught myself early. I spent the first month just mapping the architecture, the team boundaries, and the informal influence networks before touching anything. I introduced myself to the platform and infra teams before I had anything to ask of them, treating every early interaction as a relationship I was building rather than a transaction to complete. When I started driving AI tooling adoption later that year, those relationships were what made it possible.

Over the following two years I contributed to three major cross-team architecture decisions and became the person teams came to on AI workflow questions. None of that would have happened if I'd arrived with a "here's how we did it at Alaya" posture.

The reflection: I initially underestimated how much organizational trust is a prerequisite for technical influence in a large org. At Alaya I had both by default because I'd built the thing. At Benevity I had to earn the trust before the influence would follow, and that required patience I didn't initially have.

---

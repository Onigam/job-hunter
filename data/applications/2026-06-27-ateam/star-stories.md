# STAR Stories — A.Team / Senior Independent AI Engineer & Architect

Prepared for: behavioral and technical interviews for an AI Engineering / Architecture role at A.Team.

---

## Story 1: Driving AI Tooling into Production Without a Mandate

**Best for:** "Tell me about a production AI system you've shipped" / "How do you drive technical change?" / Leadership without authority questions.

At Benevity, I was a Senior Staff IC with no direct reports but a clear belief that AI tooling was going to change how engineers worked. The challenge was that neither team I worked with had asked for help on this, and I had no authority to impose it.

I started small: three engineers who were already curious, showed them a working demo of AI-assisted code review with concrete time savings, and committed the reusable prompt templates to a shared repository so the next person didn't have to start from scratch. From there I ran informal lunch sessions, no mandate, just live examples. I documented the results explicitly — one early win was saving roughly two hours on a full PR review cycle, which is the kind of thing engineers remember.

Within three months, about 70% of engineers across both teams had integrated AI tooling into their daily workflow. I became the informal AI lead across the org, which hadn't been a job title when I started.

What I'd do differently: I'd have instrumented the adoption earlier so I had usage data rather than self-reported numbers. The story was convincing, but quantified proof would have accelerated the second phase of adoption across the wider org.

---

## Story 2: Architecture Decision Under Pressure — Strangler Fig vs. Full Rewrite

**Best for:** "Tell me about a hard technical trade-off" / "How do you handle technical debt?" / "Convince me you think in systems, not just features."

At Alaya, the monolith we'd shipped in year one was showing scaling cracks by year three. The team was split between a full microservices rewrite and a modular monolith approach. Investors were pushing for feature velocity, not engineering rewrites. I needed to make a defensible call that wouldn't blow up in our faces six months later.

I ran a two-week technical spike. I built prototype load tests for both approaches and presented the results to the CTO and investors with actual numbers, not instincts. My proposal was a strangler fig migration: extract the two highest-traffic modules first, define clear criteria for when to pull out additional modules, and keep the rest of the monolith stable.

The first extracted module shipped in six weeks. Latency on the busiest endpoints dropped by about 40%. The remaining monolith stayed stable all the way through the Benevity acquisition two years later. We never needed the big-bang rewrite.

The hardest part was persuading people that not rewriting everything was the right call. Data helped more than any argument I could have made. I'd start the benchmarking earlier next time to cut the debate shorter.

---

## Story 3: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "Founding engineer" framing / "How do you operate under ambiguity?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had a blank page, no customers, no existing codebase. The business was signing its first enterprise clients before we had a demo.

I chose a stack that could scale without over-engineering (Node.js, React, PostgreSQL), shipped core features in the first three months to get to something we could show, then iterated from there: multi-tenant architecture, an API layer, impact reporting, postal campaigns. I hired the first three engineers, set up CI/CD, introduced code review practices, and wrote the architecture documentation that made onboarding feasible.

The platform reached production with 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at a $1B+ valuation, acquired us in 2021. That acquisition was a direct validation of the technical decisions made from day one.

What I'd change: I would have invested in observability much earlier. We added proper APM late, and it cost us debugging time we couldn't afford. I also underestimated the retrofitting cost of multi-tenancy and would design for it from day zero next time.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about working in a large, complex engineering org" / "How do you build credibility with a new team?" / Enterprise context questions.

When Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of anything I'd worked in. Different culture, a Java microservices codebase instead of our Node.js stack, a sprint cadence I wasn't used to, and stakeholders who had no particular reason to trust the engineering decisions I'd made at a startup they'd just bought.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with platform and infrastructure teams before pushing technical opinions. When I did push, it was on AI-augmented development practices — an area where I had something concrete to offer rather than opinions about code they'd written for years before I arrived. I became the cross-team architecture liaison for the Europe-facing product surface and drove three major cross-team architecture decisions in my first year.

The lesson I took from this is that the instinct to fix things fast is a liability when you're new. Slowing down and listening made me more effective than I would have been moving at Alaya speed. The engineers I needed to work with weren't blocking me; I was just ahead of the relationship.

---

# STAR Stories — Clarity AI Senior MLE Staff Engineer

---

## 1. Building a platform from zero to production (Alaya, 2016)

**Best for:** "Tell me about a time you built infrastructure from scratch" / "How do you approach greenfield platform work?"

When I co-founded Alaya in 2016, there was nothing. No platform, no customers, no team. My job was to design and build the entire technical foundation while the business was simultaneously signing its first enterprise clients, which meant I had to make architectural bets without knowing exactly what load or feature surface we'd land on.

I chose a pragmatic stack (Node.js, React, PostgreSQL) that could scale without over-engineering the early version. Within three months I had a working demo; within a year we had multi-tenancy, an API layer, impact reporting modules, and postal campaign tooling. I also hired and onboarded the first three engineers, set up CI/CD and code review practices, and documented architectural decisions as we made them so the team could move quickly without revisiting the same debates.

The platform reached production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity acquired Alaya at a $1B+ valuation, which I'd take as a reasonable validation of the technical choices we made from day one.

If I did it again, I'd invest in observability earlier. We added APM late and paid for it in slow debugging cycles. I'd also design for multi-tenancy from day zero rather than retrofitting it; that migration cost us about six weeks we didn't have.

---

## 2. Driving AI tooling adoption without a mandate (Benevity, 2022-2023)

**Best for:** "How do you lead without authority?" / "Tell me about introducing a new practice to an engineering org"

At Benevity I was a Senior Staff IC, no direct reports, but I saw that our engineering teams were spending significant time on repetitive review and generation tasks that LLM-assisted tooling could compress significantly. The challenge was that nobody had asked me to fix this, and the teams didn't report to me.

Rather than asking for a mandate, I started with three engineers who were already curious about the tooling. I built internal demos that showed concrete time savings on real code from our codebase, not toy examples. I ran informal lunch sessions, no requirement to attend, just demos and Q&A. I also committed a set of reusable prompt templates to a shared repo so the pattern could spread without me being in the room. When one engineer documented saving two hours on a PR review cycle, I made sure that story got told in the right places.

Within three months, roughly 70% of engineers across two teams were using AI-assisted code review and generation in their regular workflow. I became the informal AI tooling lead for the org without ever having a title that said so.

What I'd do differently: I underestimated how much the early adopters would do the selling for me once they had results to point to. I'd find and invest in those three people even faster.

---

## 3. Making a hard architecture call under delivery pressure (Alaya, 2019)

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs. feature pressure?"

By 2019, Alaya's monolith was showing real cracks. The team was split between a full microservices rewrite and a modular monolith approach. Investors were pushing for new product features, not infrastructure work, and both camps had reasonable arguments. Someone had to make a call.

I ran a two-week technical spike comparing both approaches with prototype load tests rather than debating hypotheticals. Then I presented the trade-offs to the CTO and investors with concrete numbers: latency under simulated load, estimated migration effort in engineer-weeks, and projected risk of delivery slippage for each path. No opinions, just data.

The recommendation was a strangler fig migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when to extract additional modules. That framing let us ship the first extracted service in six weeks without touching the rest of the system.

Performance on the busiest endpoints improved by roughly 40%. The monolith stayed stable and manageable all the way through the Benevity acquisition. No big-bang rewrite was ever needed.

The hardest part was convincing people that "not rewriting everything" was the right call. Data helped more than any argument would have. I'd front-load the benchmarking even more aggressively next time to close that debate faster.

---

## 4. Integrating into a 10x larger engineering org post-acquisition (Benevity, 2021)

**Best for:** "Tell me about navigating ambiguity" / "How do you work across teams?" / "Tell me about a significant transition"

When Benevity acquired Alaya in 2021, I went from a tight five-person engineering team to an org ten times that size, different culture, different stack (Java and microservices instead of Node.js), and different processes everywhere. My job was to integrate Alaya's product capabilities into Benevity's platform while keeping delivery moving.

My first month I didn't propose anything. I spent it mapping the existing architecture, understanding which teams owned which surfaces, and building relationships with the platform and infrastructure engineers before I had opinions about their work. It felt slow, but it was the right call.

Once I understood the system and had some trust built, I drove adoption of AI-augmented workflows across the engineering org (which eventually became the story in story #2 above), and became a cross-team architecture liaison for the Europe-facing product surface. Over the next year I contributed to three major cross-team architecture decisions.

The reflection is simple: I moved too fast in the first few weeks, trying to improve things before I understood them well enough. The teams picked up on it. Slowing down to listen made me more effective than any technical contribution I could have made in month one.

---

## 5. Designing observability for AI-assisted workflows (Benevity, 2023-2024)

**Best for:** "How do you approach monitoring AI systems?" / "Tell me about a time you built observability for a non-deterministic system"

After driving AI tooling adoption at Benevity, I ran into a harder problem: understanding whether the systems were actually working. Traditional metrics (latency, error rate) weren't enough when the outputs were natural language. You could have 99.9% uptime on an LLM-backed feature while it was producing subtly wrong answers on a consistent basis.

I designed a lightweight observability layer that tracked three things: output quality signals from downstream user behavior (edits, rejections, re-queries), prompt version metadata so we could correlate behavior changes with prompt changes, and cost-per-output-token over time to catch drift before it became a budget problem. None of this was a commercial tool at the time, so I built it as a thin wrapper that sat between our application code and the LLM APIs.

The system caught two incidents that would otherwise have been invisible: a prompt regression that increased rejection rates by ~30% over two weeks, and a cost spike caused by context window mismanagement in a new feature that was pushed to staging. In both cases we had the signal before any user escalation.

The learning: non-deterministic systems need behavioral monitoring, not just infrastructure monitoring. The infrastructure can be healthy while the model outputs are quietly degrading. I'd now treat that as a day-one requirement rather than something you add after the first near-miss.

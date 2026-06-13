# STAR Stories — Nexthink / Principal Staff Software Engineer

---

## Story 1: Building a Platform from Zero to Acquisition
*Best for: "Tell me about a system you designed at scale" / "Describe founding-level ownership"*

In 2016, I co-founded Alaya with a blank page and a commitment to build an enterprise platform for employee purpose and impact. We had no product, no customers, and no runway for over-engineering. My job was to make sound architectural bets early, because the wrong ones would cost us 18 months to fix later.

I started with a pragmatic stack: Node.js, React, PostgreSQL. The goal in the first three months was a working demo with real data, not a perfect architecture. Once the first enterprise clients signed on, I retrofitted multi-tenancy, introduced a proper API layer, and built out impact reporting and postal campaign modules. As we grew, I hired and onboarded the first three engineers, set up CI/CD and code review culture, and wrote the architecture docs that let new hires ramp without me sitting next to them for a week.

By 2021 the platform had 50+ enterprise clients across Switzerland and France. Benevity acquired us, which validated not just the product decisions but the technical ones. A $1B+ Canadian unicorn chose to buy rather than rebuild.

Looking back, I'd have invested in observability much earlier. We added proper APM late, which meant we were often flying blind during incidents. I'd also have designed for multi-tenancy from day one instead of retrofitting it after clients were live.

---

## Story 2: Making a Hard Architecture Decision Under Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle competing priorities?"*

At Alaya, around 2019, our monolith was starting to buckle. Certain endpoints were slow, deployments were getting riskier, and the team was split on what to do. Half wanted a full microservices rewrite. Half thought that was a distraction. Investors were pushing for new features, not platform overhauls, and we had about six months of runway left to show growth.

My job was to make a call that was defensible both technically and to the business. I ran a two-week spike comparing the two paths, including prototype load tests on the most trafficked modules. I presented the trade-offs to the founding team and investors with concrete metrics rather than opinions: the full rewrite would take 4-6 months with no feature output, the modular extraction approach could ship the first isolated service in 6 weeks while everything else stayed stable.

We went with the strangler fig approach. I extracted the two highest-traffic modules first, defined measurable criteria for when to extract others, and kept the monolith intact for the rest. The first extracted module shipped in six weeks. Performance on those endpoints improved by roughly 40%. The remaining monolith held through the acquisition without incident.

The hardest part wasn't the architecture, it was convincing people that not rewriting everything was the right call. Data helped more than arguments. If I did it again, I'd run the benchmarks earlier so the debate was shorter.

---

## Story 3: Leading Without Formal Authority
*Best for: "How do you influence across teams?" / "Tell me about driving adoption of a technical practice"*

At Benevity after the acquisition, I was a Senior Staff IC with no direct reports, but I needed to change how two engineering teams worked. The goal was to get them using AI-assisted development tools: Copilot, prompt engineering workflows, AI-assisted code review. Nobody was asking for it, and nobody was blocking it either. It was just inertia.

I didn't try to mandate anything. Instead I found three engineers who were already curious about the tools and built demos with them that showed concrete time savings: an automated PR review flow that shaved a couple of hours off a typical review cycle. I ran informal lunch-and-learn sessions, no required attendance, just "here's what this looks like in practice." I committed reusable prompt templates to a shared repo so there was something tangible to build on.

Within three months, roughly 70% of engineers on both teams were using AI-assisted review and generation as part of their normal workflow. I became the informal AI tooling lead across the org, without having been given that title or having asked for it.

The thing I'd do differently is document the results more systematically from the start. The stories I shared were anecdotal, which worked, but a small structured log of time saved across the team would have made the case for a larger rollout much easier to advance with management.

---

## Story 4: Navigating Post-Acquisition Integration
*Best for: "Tell me about adapting to a large organization" / "Cross-functional collaboration at scale"*

When Benevity acquired Alaya in 2021, I went from a 15-person startup to a company with dozens of engineers, different processes, a Java microservices codebase, and a culture I didn't know yet. My instinct was to move fast and start proposing things. That was a mistake I caught early.

I spent the first month just mapping: understanding the existing architecture, the team structures, where the political gravity was in technical decisions. I built relationships with the platform and infrastructure teams before I offered any opinions. Once I had that context, I could propose things that actually fit the environment rather than things that worked at Alaya.

Over the first year I contributed to three major cross-team architecture decisions, became the architecture liaison for Benevity's Europe-facing product surface, and eventually drove the AI tooling adoption initiative that reached both engineering teams. None of that would have been possible if I'd walked in with a blueprint on day one.

The lesson was straightforward: influence in a new organization comes from credibility earned, not from experience brought. The experience matters, but it only lands if you've first demonstrated that you understand the context you're trying to improve.

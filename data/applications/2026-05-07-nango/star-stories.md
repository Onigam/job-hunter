# STAR Stories — Nango, Staff Backend Engineer

---

## Story 1: Building a Platform from Zero to Production
*Best for: "Tell me about building something from scratch" / "How do you approach greenfield architecture?"*

In 2016, I co-founded Alaya, a purpose and engagement platform for enterprises. On day one there was no codebase, no customers, and no team, just a product idea that had to be operational within three months to land the first paying client.

My task was to architect and ship the entire platform on my own, fast enough to stay ahead of the business, but without cutting corners that would become technical debt we'd be paying off for years.

I chose a stack I could move quickly in and that wouldn't require replacing as we scaled: Node.js, PostgreSQL, and React. I built the core product in the first three months, then systematically layered in the things that make a platform enterprise-ready rather than just a prototype: multi-tenancy, an API layer, impact reporting, and postal campaign integrations. As the first clients came in, I hired the first three engineers, set up CI/CD, established code review practices, and started writing architecture documentation so the system wasn't just in my head anymore.

We reached production with 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us in 2021. That acquisition was, in some ways, the clearest validation of the technical decisions made in year one.

Looking back, I'd invest in observability much earlier. We added proper APM late, which made some production incidents harder than they needed to be. I'd also design for multi-tenancy from day zero; retrofitting it onto an existing data model cost us real engineering time.

---

## Story 2: Making a Hard Architecture Call Under Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle scaling challenges?"*

At Alaya, around year three, the monolith was starting to show cracks under load. Two competing camps had formed internally: one pushing for a full microservices rewrite, the other wanting to keep the monolith and just add better caching. Investors were watching the delivery roadmap closely, which meant any "rewrite" decision was politically charged, not just technical.

I was responsible for making the call and defending it, both to the team and to the business.

I ran a two-week technical spike, building lightweight prototypes of the two approaches with realistic load tests. I presented the results to the CTO and key stakeholders as concrete trade-offs with numbers, not opinions. The outcome was a strangler fig migration: we'd extract the two highest-traffic modules into separate services first, validate the approach, and define clear criteria before extracting anything else. No big-bang rewrite.

We shipped the first extracted module in six weeks. Performance improved roughly 40% on the busiest endpoints. The remaining monolith stayed stable through the acquisition two years later. The "don't rewrite everything" decision held up, which matters more than being right in the moment.

The hardest part wasn't the technical work; it was convincing people that restraint was the right call. The load test data cut the debate short. I'd do that benchmarking earlier next time, before opinions harden.

---

## Story 3: Integrating into a 10x Larger Organization After Acquisition
*Best for: "Tell me about navigating a major change" / "Working across teams you don't control"*

When Benevity acquired Alaya in 2021, I joined a company roughly ten times our size. Different culture, a Java-based microservices platform I'd never touched, and engineering processes that had been shaped by years of decisions I wasn't part of. I had strong opinions about how to build software, and none of them applied automatically in the new environment.

My job, formally, was to integrate Alaya's features into Benevity's platform while continuing to ship new functionality. Informally, it was to do that without breaking things, making enemies, or losing the speed we'd built.

I spent the first month deliberately not proposing changes. I mapped the existing architecture, read the internal docs, and had conversations with people on the platform and infra teams before I had any opinions about what they should do differently. Once I had relationships and context, I started driving things: cross-team architecture proposals, AI tooling adoption that I seeded with a small group of early adopters before any broader rollout, and a shared library of prompt templates committed to a team repo.

Over three years, I contributed to three major cross-team architecture decisions, led a Europe-facing product surface, and became the go-to person for AI tooling adoption across two engineering teams. About 70% of engineers on those teams were using AI-assisted code review within three months, which happened because they wanted to, not because anyone told them to.

I moved too fast in the first two months trying to fix things I thought were broken. Slowing down and listening first actually made me more effective. Engineers who already knew the system caught assumptions I would have gotten wrong.

---

## Story 4: Driving Adoption Without a Mandate
*Best for: "How do you influence without authority?" / Staff+ and principal engineer roles*

At Benevity, I was a Senior Staff IC with no direct reports. I needed two engineering teams that didn't report to me to change how they worked, specifically to adopt AI-assisted development practices that I believed would save them significant time. Asking the engineering managers to mandate it would have been the wrong move and probably wouldn't have worked anyway.

My task was to create genuine adoption, not compliance.

I started with three engineers who were already curious about AI tooling. With that small group, I ran demos showing concrete time savings on real tasks they recognized: PR review cycles, documentation generation, test scaffolding. From there I built reusable prompt templates and committed them to a shared repo so the tools were available without anyone needing to ask me for help. I ran informal lunch-and-learn sessions, no mandatory attendance, just "here's what this saved me this week." I documented the results in a way that felt authentic rather than promotional.

Within three months, roughly 70% of engineers on both teams were regularly using AI-assisted workflows. More importantly, some of them started advocating for it internally without any prompting from me, which spread it in ways I couldn't have done directly.

The mandate-free approach was slower at the start but stickier in the long run. Engineers who adopted on their own terms became advocates. If I'd pushed it top-down, I'd have gotten surface compliance and quiet resistance.

---

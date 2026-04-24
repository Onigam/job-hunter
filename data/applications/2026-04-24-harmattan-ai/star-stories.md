# STAR Stories — Harmattan AI / Chief Engineer

Stories selected for a Chief Engineer interview: founding-level architecture, hard technical decisions under pressure, technical leadership without formal authority, and navigating large-org complexity.

---

## Story 1: Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "What does it look like when you own a platform end to end?"*

In early 2016, my co-founder and I started Alaya with no product, no customers, and no team beyond the two of us. My job was to design and build the entire platform before we'd signed a single client, which meant making architectural decisions in a vacuum without knowing what would actually matter twelve months out.

I chose a pragmatic stack — Node.js, React, PostgreSQL — deliberately avoiding anything too clever that a future hire would need weeks to decode. The first three months were heads-down feature work to reach a functional demo. After that, the real engineering began: multi-tenancy, API versioning, impact reporting, postal campaign infrastructure, and all the things enterprise clients ask for that you didn't anticipate. I hired the first three engineers, established code review norms and CI/CD pipelines, and kept the architecture stable enough to absorb new requirements without constant rewriting.

By 2021 the platform was serving 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at a $1B+ valuation, acquired the company. That acquisition was a direct validation of the foundational architectural and product decisions made in those early months.

In retrospect, I'd have invested in observability from day one and designed multi-tenancy into the schema upfront instead of retrofitting it eighteen months in. Both gaps cost us engineering time later. But the core bets held.

---

## Story 2: Hard Architecture Decision Under Investor Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt when the business wants features?"*

Around 2019, our Alaya monolith was showing real scaling cracks. Traffic on a handful of high-load endpoints was spiking past what our infrastructure absorbed comfortably, and the team was split: some wanted a full microservices rewrite, others thought we were overcomplicating it. Investors were pressing for roadmap features, not internal refactors.

I proposed neither a rewrite nor doing nothing. I ran a two-week technical spike comparing both approaches with prototype load tests under realistic traffic patterns, then presented the results to our CTO and investors with specific numbers rather than architectural opinions. The recommendation was a strangler-fig migration: extract the two highest-traffic modules first, validate the approach with production data, and define clear criteria for deciding what to extract next.

The first extracted module shipped in six weeks. Performance on those endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the Benevity acquisition. No big-bang rewrite was ever needed.

The thing I'd do differently: front-load the benchmarking. Half the internal debate dissolved once we had actual load-test numbers. We could have had those in week one instead of week three. Data cuts arguments faster than reasoning does.

---

## Story 3: Leading Without Formal Authority
*Best for: "How do you drive change when you don't have direct reports?" / Staff+ and principal engineer scenarios*

In 2022 at Benevity, I was a Senior Staff IC with no direct reports. I wanted to drive adoption of AI-assisted development tools — GitHub Copilot, structured prompt engineering patterns for code review, test scaffolding — across two engineering teams that didn't report to me, with no executive mandate behind me.

I started with three engineers who were already curious about the tooling and ran informal demo sessions with them, no pressure to adopt. I'd show a concrete example: a PR review that normally took 30 minutes done in 8 with structured AI assistance, or a unit test scaffold that used to take an afternoon done in under an hour. I documented those outcomes in short internal write-ups and committed reusable prompt templates to a shared repo so the benefit was tangible and reproducible, not just a demo.

Within three months, around 70% of engineers on both teams were regularly using AI-assisted workflows. More importantly, the engineers who adopted it voluntarily became internal advocates. That spread was more durable than any top-down mandate would have been, because they owned it.

If I were doing it again, I'd instrument the adoption metrics from week one rather than relying on anecdotes. The stories were persuasive but harder to quantify when reporting up the chain.

---

## Story 4: Joining a Large Org After an Acquisition
*Best for: "Tell me about navigating change" / "How do you integrate into an existing team?" / "How do you build influence in a new environment?"*

When Benevity acquired Alaya in 2021, I went from a 15-person startup to a company ten times that size. Different codebase — mostly Java microservices where I'd been building Node.js and React. Different culture, different release processes, and a decade's worth of accumulated architectural decisions I knew nothing about.

My first instinct was to push for changes quickly, and that was the wrong instinct. I spent the first month mapping the existing architecture and building relationships with platform and infrastructure teams before offering any technical opinions. That forced patience paid off: when I did start proposing changes, I had enough context to avoid the obvious mistakes of someone who'd been there two weeks.

Over the following year I became the cross-team architecture liaison for the Europe-facing product surface, contributed to three major architecture decisions affecting multiple teams, and drove AI tooling adoption across the org. The integration was considered successful on both the technical and cultural sides.

The reflection is simple: I moved too fast early on, and it cost me credibility with a few people before I'd earned the right to have opinions about their codebase. Slowing down and listening first is a better strategy in any large org. The teams that let me earn trust before I pushed on anything became the most productive working relationships I had there.

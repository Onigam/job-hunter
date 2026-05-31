# STAR Stories — Inkeep, Staff Engineer AI Agents (TypeScript)

## Story 1: Building Alaya from Zero to Acquisition
*Use for: "Tell me about a platform you built from scratch" / "How do you handle ambiguity at the start of a project?"*

In 2016, when I co-founded Alaya, we had nothing: a domain name and an idea about connecting employees to social causes. My task was to architect and build the entire platform alone, while the business was already signing its first enterprise clients. That meant making architectural choices under real pressure, without the luxury of getting them wrong early.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Nothing clever, nothing that would need a specialist to maintain. In the first three months I shipped a working product for the first demo, then expanded iteratively: multi-tenant architecture, a REST API layer, impact reporting, postal campaigns. As we grew, I hired the first three engineers, set up CI/CD, introduced code review culture, and wrote architecture documentation before it became an afterthought.

By 2021 the platform served 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at over $1B valuation, acquired us, which was in some ways a validation of every early technical decision, especially the ones where we'd deliberately chosen boring over clever.

Looking back, I'd have invested in observability earlier. We added proper APM late, which cost us debugging time we didn't have. And I underestimated the cost of retrofitting multi-tenancy: I'd design for it from day zero if I were doing it again.

---

## Story 2: Architecture Decision Under Pressure
*Use for: "Tell me about a technical trade-off you navigated" / "How do you handle disagreement on architecture?"*

Around 2019 at Alaya, the monolith was starting to crack under load. The team was split: full microservices rewrite versus staying with a modular monolith. Investors were pushing for new features, not rewrites. My job was to make a defensible call and get everyone aligned.

I ran a two-week technical spike comparing both approaches with prototype load tests, then brought concrete metrics to the CTO and investors, not opinions or slide decks. The case I made was for a strangler-fig migration: extract the two highest-traffic modules first, keep the rest stable, and define clear criteria for when to extract others. No big-bang rewrite, no feature freeze.

We shipped the first extracted module in six weeks. Performance improved about 40% on the busiest endpoints. The remaining monolith stayed stable all the way through the acquisition, which meant we never had to pause product work for the migration.

What I'd do differently is front-load the benchmarking. The hardest part wasn't the technical work, it was convincing people that not rewriting everything was the right call. Data helped, but getting the data into people's hands earlier would have shortened the decision cycle by a couple of weeks.

---

## Story 3: Driving AI Tooling Adoption Without Authority
*Use for: "How do you influence without formal authority?" / "Tell me about introducing a new practice to an engineering team"*

At Benevity, I was a Senior Staff IC with no direct reports, but I needed to change how two engineering teams worked. The goal was to get them using AI-assisted development tools, things like GitHub Copilot and shared prompt templates, which I believed would meaningfully cut review cycles and improve code quality.

I started small. I found three engineers who were curious and ran informal demos showing concrete time savings on real tasks, nothing hypothetical. I built internal tooling examples, committed reusable prompt templates to a shared repository, and ran optional lunch-and-learn sessions. No mandate, just showing what worked.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation as part of their regular workflow. That number was sticky because they'd adopted it on their own terms. Several became internal advocates, which I couldn't have manufactured with a top-down decree.

The lesson: the mandate-free approach was slower but more durable. Engineers trust demos over presentations. They want to see something save them time before they'll change their habits, and that lesson has shaped how I approach every technical proposal since.

---

## Story 4: Post-Acquisition Integration
*Use for: "Tell me about navigating a major organizational change" / "How do you adapt to a much larger team?"*

After the Benevity acquisition in 2021, I joined a team ten times larger than Alaya, different culture, different codebase (Java and microservices), different processes. My task was to integrate Alaya's capabilities into Benevity's platform while keeping product velocity and without losing what had made us move fast.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with platform and infra teams before pushing technical opinions, which felt slow but turned out to be the right call. Once I had those relationships, I was able to drive adoption of AI-augmented workflows across the engineering org and become a cross-team architecture liaison for the Europe-facing product surface.

Within a year, I'd contributed to three major cross-team architecture decisions and become the informal AI tooling lead across two teams. The Alaya features I was responsible for migrated into Benevity's platform without a significant incident.

The reflection is that I initially moved too fast trying to fix things that weren't broken in the new org. Slowing down and listening first made me more effective. In a large organization, credibility is a prerequisite for influence, and credibility takes time.

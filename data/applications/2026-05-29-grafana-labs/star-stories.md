# STAR Stories — Grafana Labs Staff Software Engineer, Databases (Managed Services)

Tailored for: staff-level infrastructure ownership, distributed systems, operational reliability, technical leadership without authority.

---

## Story 1: Building Production Infrastructure from Zero

**Best for:** "Tell me about a time you owned a production system end to end" / "How do you approach infrastructure design from scratch?"

In 2016 I co-founded Alaya, a purpose and engagement platform for enterprise companies. There was no codebase, no infrastructure, no team. My task was to design and build the entire platform while the business was simultaneously signing its first enterprise clients, meaning whatever I built would be under production SLAs almost immediately.

I chose a stack that could reach production quickly without over-engineering: Node.js, React, PostgreSQL with a multi-tenant schema design. The first three months were mostly solo, so every decision had to be defensible at scale. I set up CI/CD early, defined environment parity between staging and production, and modeled the data layer to support multi-tenancy from day one rather than retrofitting it later. As we grew, I hired the first three engineers, established code review culture, and wrote the architecture documentation that let new people ramp without losing me to constant onboarding.

By 2021 we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at over $1B valuation, acquired us. The acquisition itself was a validation of the technical architecture holding up under five years of production load.

In hindsight I would have invested in observability earlier. We added proper APM eighteen months into production. Until then, when something behaved unexpectedly in production, the diagnostic cycle was slow and painful. It's the lesson I carry into every new infrastructure project: instrument everything before you need it, not after.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Describe a time you drove technical direction"

By 2019, Alaya's monolith was starting to show scaling cracks. Two modules were handling most of the traffic and making the whole system brittle when they degraded. The team was split: full microservices rewrite versus a modular monolith approach. Investors were pushing for new features, not rewrites. There was no obviously right answer, and the pressure to just pick something was real.

My task was to make a decision that could survive scrutiny from both engineers and investors, and that we could actually ship within a reasonable window.

I ran a two-week technical spike comparing both approaches with real load tests on representative traffic patterns. Then I put together a presentation for the CTO and investors that showed concrete trade-offs: migration risk, time-to-first-value, and performance projections. I didn't frame it as "monolith vs microservices" as a philosophy debate. I framed it as "where does the risk actually live." The proposal I landed on was a strangler fig migration: extract the two highest-traffic modules first, leave the rest of the monolith stable, and define explicit criteria for when a new module justified extraction.

The first extracted module shipped in six weeks. We saw about a 40% improvement on the busiest endpoints. The remaining monolith held through the acquisition two years later without the big-bang rewrite anyone had been dreading.

The hardest part wasn't the technical decision, it was convincing people that "not rewriting everything" was the right call. The spike data made the difference. I'd front-load that benchmarking even more aggressively next time to cut the debate shorter.

---

## Story 3: Navigating a Complex Post-Acquisition Integration

**Best for:** "Tell me about working with large, distributed teams" / "Describe a time you worked across organizational boundaries" / "How do you operate in a complex technical environment you didn't build?"

When Benevity acquired Alaya in 2021, I went from a team of about twelve engineers to an organization ten times that size. Different tech stack (Java microservices), different processes, different cultural norms. I was now a Senior Staff IC with no direct reports, embedded in a platform that I hadn't designed and didn't yet fully understand.

My first task was to integrate Alaya's core features into Benevity's platform architecture without either losing the product capability we'd built or breaking what Benevity already had in production.

I spent the first month doing nothing but mapping the existing architecture before proposing anything. I read through their design docs, followed incident postmortems, sat in on architecture reviews as an observer. I wanted to understand the system's failure modes before I touched it. Once I had that picture, I built relationships with the platform and infra teams before pushing any technical opinions. Influence in a large organization depends entirely on trust, and trust takes longer to build than you want it to.

From there I drove the Alaya feature migration in phases, acting as the architecture liaison between the Europe-facing product team and Benevity's platform engineers. I also introduced AI-assisted development practices that eventually spread across two engineering teams, but only because I started with a small group of early adopters and let the results speak rather than mandating adoption.

The integration was successful. Alaya features landed in production, the teams collaborated well, and I contributed to three significant cross-team architecture decisions over the following year. I initially moved too fast trying to improve things that didn't need improving. Slowing down and listening first made me substantially more effective in the long run.

---

## Story 4: Leading Technical Change Without Formal Authority

**Best for:** "How do you influence without authority?" / "Tell me about a time you drove adoption of something new" / "Describe your operating model as a Staff engineer"

At Benevity I was a Senior Staff IC with no direct reports but a mandate to improve how engineering teams worked. In late 2022 I decided to drive AI-assisted development practices across two teams that didn't report to me. The context was that GitHub Copilot had matured enough to be genuinely useful, but most engineers were skeptical or hadn't tried it seriously.

I knew that top-down adoption mandates tend to produce checkbox compliance, not real behavior change. So I started differently. I found three engineers who were already curious, the kind of people who go spelunking in new tools on their own time, and worked with them intensively for two weeks. We built internal demos showing concrete time savings: a PR review cycle that normally took two hours running in forty-five minutes with AI assistance.

Once I had real examples I could show, I ran informal lunch-and-learn sessions, no mandate, no metrics attached to attendance. I created reusable prompt templates and committed them to a shared repo so there was zero setup friction for anyone who wanted to try. I wrote up a few short case studies ("saved two hours on this migration refactor") and posted them in the engineering Slack channel.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation in their regular workflow. More importantly, several of them had extended the prompt library on their own. They'd made it theirs. Becoming the informal AI tooling lead wasn't the goal I'd started with, it was what happened when the approach worked. The lesson is that mandate-free adoption is slower but far stickier, because the engineers who adopt voluntarily become advocates in ways you can't manufacture.

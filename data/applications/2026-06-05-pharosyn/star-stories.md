# STAR Stories — Pharosyn / Founding AI Engineer

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, no team. I was the only technical person for the first six months.

My job was to architect and ship a production-grade multi-tenant platform while my co-founder was closing the first enterprise contracts. The clock was ticking from day one.

I chose a pragmatic stack, Node.js, React, PostgreSQL, that could evolve without over-engineering. I shipped the first working demo in three months, then iterated fast: multi-tenant data isolation, an API layer for partner integrations, an impact reporting module, postal campaign orchestration. When the first outside engineers joined, I set up CI/CD pipelines, code review norms, and lightweight architecture docs before onboarding them.

We reached 50+ enterprise clients across Switzerland and France. Benevity acquired us in 2021, a Canadian company valued at over $1B. That outcome was a direct validation of the early technical decisions, the stack choice, the modular architecture, the decision not to over-engineer.

What I'd do differently: I'd have added proper APM from week one. We retrofitted observability late, and it cost us several painful debugging sessions that a trace would have solved in minutes.

---

## 2. Building LLM Workflows Without a Mandate

**Best for:** "How have you worked with AI at scale?" / "Tell me about driving change without authority"

At Benevity after the acquisition, I was a Senior Staff IC with no direct reports but a clear conviction that AI-assisted development was going to change how we shipped. The challenge was getting two engineering teams to actually change their habits.

I needed to shift how roughly 20 engineers worked without having any authority over them and without a top-down decree from management.

I started with three engineers who were already curious. I built internal tooling demos showing concrete time savings on tasks they hated: PR description drafts, test coverage generation, code review summaries. Then I ran informal lunch sessions, no slides, just live demos with their own codebase. I built a shared repo of prompt templates and committed it like any other engineering artifact. When an engineer saved two hours on a review cycle, I wrote it up as an internal case study.

Within three months, ~70% of engineers on both teams were using AI-assisted workflows regularly. I became the de facto AI tooling lead across the org, and the prompt template repo got adopted as a standard tool.

The mandate-free approach was slower but far stickier. Engineers who adopted it on their own terms became internal advocates, which I couldn't have manufactured with a top-down instruction.

---

## 3. Choosing the Right Architecture Under Investor Pressure

**Best for:** "Tell me about a hard technical trade-off" / "How do you make decisions under uncertainty?"

At Alaya, around year three, the monolith was showing scaling cracks. Two engineers wanted a full microservices rewrite. Investors were asking for new features every quarter, not rewrites. The debate was getting circular and expensive.

My task was to make a defensible technical decision that could satisfy both the engineering team's scaling concerns and the business's delivery pressure.

I ran a two-week spike comparing a full microservices migration against a modular monolith approach, with prototype load tests on our two busiest endpoints. I presented the results to the CTO and the investors with concrete numbers rather than architectural opinions. Then I proposed a strangler fig migration: extract the two highest-traffic modules first, keep everything else stable, and define clear criteria for when additional extraction made sense.

We shipped the first extracted module in six weeks. Performance on those endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the acquisition with no further rewrites needed.

The hardest part was convincing people that "not rewriting everything" was actually the right engineering call. Data cut the debate short. I'd invest in the benchmarking earlier next time to avoid the two weeks of back-and-forth before the spike even started.

---

## 4. Navigating a 10x Team After Acquisition

**Best for:** "Tell me about adapting to a new environment" / "How do you stay effective when things change around you?"

When Benevity acquired Alaya in 2021, I went overnight from a startup of 15 people to an organization of 150+ engineers. Different culture, different codebase (Java microservices vs. our Node.js stack), different decision-making processes.

My task was to integrate Alaya's capabilities into Benevity's platform while keeping product velocity up, without the authority or institutional knowledge I'd had at Alaya.

I spent the first month reading code and asking questions before proposing anything. I mapped Benevity's architecture, built relationships with the platform and infra teams, and explicitly avoided pushing technical opinions until I understood what was already there and why. Once I had credibility, I became the cross-team architecture liaison for the Europe-facing product surface and drove three major cross-team architecture decisions over the following year.

The Alaya integration completed on schedule. More importantly, I didn't break trust by coming in as the "acquiree who knows better."

I initially moved too fast trying to fix things that weren't broken. Slowing down was uncomfortable for someone used to a startup pace, but it made me significantly more effective by month three than I would have been if I'd pushed harder in month one.

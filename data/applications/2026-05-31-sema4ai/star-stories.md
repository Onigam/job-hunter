# STAR Stories — Staff Engineer, AI Evals @ Sema4.ai

---

## 1. Building informal eval infrastructure without a mandate
*Best for: "Tell me about building an evaluation system" / "How do you define quality for AI systems?" / "Influence without authority"*

When I joined Benevity after the Alaya acquisition, the engineering org was starting to adopt LLM-assisted workflows, but nobody owned the question of whether those workflows were actually good. There were no benchmarks, no systematic way to evaluate whether a prompt change improved or degraded output quality, and no shared criteria for what "good" even meant. My task was to change that, but I had no direct reports and no formal mandate to do so.

I started small, just three engineers who were curious and willing. I built internal demos showing concrete time savings from the new tooling, but I also wrote the first evaluation criteria for our shared prompt library: what a good completion looks like, what failure modes to watch for, how to run a quick sanity benchmark when changing a model. I committed these to a shared repo, documented a few real examples of evaluation catches that saved us bad deployments, and ran informal lunch sessions, no slides, just live examples.

Within three months, ~70% of engineers on both teams were using the shared evals and prompt library. When we changed models mid-product, we had criteria ready rather than relying on intuition. I became the informal AI tooling lead without anyone officially assigning that role.

What I'd do differently: I should have instrumented the eval runs from day one to produce aggregate quality trends. Individual engineers ran evals ad hoc but we didn't have a dashboard. That gap made it hard to detect slow quality drift versus a single regression.

---

## 2. Making a hard technical decision about measurement under pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle ambiguity about ground truth?" / "Technical decision under uncertainty"*

At Alaya, we hit a moment where the platform's monolithic architecture was showing scaling cracks. But the deeper problem was that we had no clear way to measure whether a proposed change had actually helped: we had basic uptime metrics but nothing about latency distribution, no per-endpoint profiling, and no load testing that reflected real enterprise client behavior. The team was debating a full microservices rewrite versus a modular monolith approach, and investors were pushing for features, not infrastructure. I had to make a defensible call with incomplete information.

I ran a two-week technical spike with prototype load tests against patterns derived from our actual usage data. The goal wasn't to prove one architecture right but to establish measurement criteria: what would "better" look like, and how would we know? That framing shifted the debate. Instead of architecture aesthetics, we were now talking about specific thresholds: p95 latency on the top three API paths, throughput under concurrent load matching our largest client.

I proposed a strangler fig migration, extracting the two highest-traffic modules first while keeping the rest stable. We shipped the first extracted module in six weeks. Performance improved roughly 40% on the busiest endpoints, measured against the baselines we'd set during the spike. The remaining monolith stayed stable through the acquisition.

The reflection here is about measurement design as much as architecture: the debate got productive the moment we agreed on what we were measuring. I'd go to that step first now rather than let the architecture debate run for weeks.

---

## 3. Alaya from zero to acquisition
*Best for: "Tell me about building something from scratch" / "How do you operate in an early-stage environment?" / "Founding engineer" roles*

In 2016, I co-founded Alaya, a purpose and employee engagement platform. We had nothing: no product, no customers, no team. My job was to build the entire technical foundation while the business was signing its first enterprise clients.

I chose a pragmatic stack, Node.js, React, PostgreSQL, that could scale without over-engineering and that I could ship fast. The first working version took about three months. From there, the product expanded iteratively: multi-tenant architecture, an API layer for client integrations, impact reporting, postal campaign tools. I hired and onboarded the first three engineers, set up CI/CD, established code review norms, and wrote the architecture docs that would outlast me.

By the time Benevity acquired us in 2021, we had 50+ enterprise clients across Switzerland and France. The acquisition was a direct validation of the technical decisions from day one, particularly the multi-tenant model and the API-first approach, both of which made integration into Benevity's platform tractable rather than a rewrite.

What I'd do differently: I underestimated the cost of retrofitting observability. We added proper APM late, which meant debugging production issues early on was harder than it needed to be. I'd treat observability as infrastructure from day zero now, the same way I'd treat multi-tenancy.

---

## 4. Navigating a large org after being a founder
*Best for: "Tell me about working in a bigger company" / "Cross-functional collaboration" / "Adapting to a new environment"*

When Benevity acquired Alaya in 2021, I went from a team of five to an engineering org ten times larger. Different culture, different codebase (Java-heavy microservices), different processes, and no obvious place where I fit in structurally. My task was to integrate Alaya's capabilities into Benevity's platform while staying useful rather than becoming a disruption.

I spent the first month mapping the existing architecture before proposing anything. I read documentation, attended cross-team syncs as a listener, and asked a lot of questions that weren't challenges. I built relationships with platform and infra teams before pushing any technical opinions. That patience paid off: when I eventually proposed changes, I had enough context to anchor them in existing constraints rather than fighting them.

Over the following year I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling adoption across two teams. The informal eval infrastructure I built came out of that same pattern, identifying a gap, building something small, demonstrating value before asking for scope.

The lesson I took from this: the instinct to fix things immediately after arriving from a smaller company is almost always wrong. The things that look broken from the outside often have history behind them. Slowing down and listening first made me more effective than I would have been otherwise.
